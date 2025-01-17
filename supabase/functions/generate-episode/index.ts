import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
const supabaseUrl = Deno.env.get('SUPABASE_URL');
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

const supabase = createClient(supabaseUrl!, supabaseServiceKey!);

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { skills, sources, additionalContent, style } = await req.json();

    // Generate episode content using OpenAI
    const prompt = `Generate a podcast episode about ${skills.join(', ')}. 
    Include information from these sources: ${sources.join(', ')}. 
    Additional topics to cover: ${additionalContent.join(', ')}.
    Use a ${style.tone} tone and make it ${style.length} minutes long.
    The episode should be ${style.frequency} and include ${style.music} music.`;

    console.log('Generating episode with prompt:', prompt);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a podcast content generator. Generate engaging podcast content in JSON format with a name, description, and estimated duration.'
          },
          { role: 'user', content: prompt }
        ],
      }),
    });

    const data = await response.json();
    const content = JSON.parse(data.choices[0].message.content);

    return new Response(
      JSON.stringify(content),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error generating episode:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate episode' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});