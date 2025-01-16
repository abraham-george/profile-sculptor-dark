import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Clock, ExternalLink } from "lucide-react";

export const NextStepsSection = () => {
  // Mock data - replace with real data later
  const courses = [
    { 
      id: 1, 
      title: "React Fundamentals", 
      instructor: "John Doe", 
      duration: "2h 30m",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
    },
    { 
      id: 2, 
      title: "Advanced TypeScript", 
      instructor: "Jane Smith", 
      duration: "3h 45m",
      thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
    },
    { 
      id: 3, 
      title: "Web Development", 
      instructor: "Mike Johnson", 
      duration: "4h 15m",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
    },
    { 
      id: 4, 
      title: "UI/UX Design", 
      instructor: "Sarah Wilson", 
      duration: "2h 15m",
      thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
    },
  ];

  const events = [
    { id: 1, title: "Tech Conference 2024", date: "Mar 15", attendees: "500+" },
    { id: 2, title: "Developer Meetup", date: "Mar 20", attendees: "200+" },
    { id: 3, title: "Networking Event", date: "Mar 25", attendees: "300+" },
    { id: 4, title: "Workshop", date: "Mar 30", attendees: "150+" },
  ];

  const jobs = [
    { id: 1, title: "Senior Developer", company: "Tech Corp", location: "Remote" },
    { id: 2, title: "UX Designer", company: "Design Inc", location: "New York" },
    { id: 3, title: "Product Manager", company: "Product Co", location: "San Francisco" },
    { id: 4, title: "Data Scientist", company: "Data Corp", location: "Boston" },
  ];

  return (
    <div className="mt-12 space-y-8">
      <Separator className="mb-8" />
      <h2 className="text-2xl font-semibold mb-6">Next Steps</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-medium mb-4">LinkedIn Learning</h3>
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {courses.map((course) => (
                <CarouselItem key={course.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="p-0 overflow-hidden bg-linkedin-card hover:bg-linkedin-card/80 transition-colors">
                    <div className="relative">
                      <img 
                        src={course.thumbnail} 
                        alt={course.title} 
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {course.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-white">{course.title}</h4>
                      <p className="text-sm text-linkedin-text">{course.instructor}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <Separator className="my-8" />

        <div>
          <h3 className="text-xl font-medium mb-4">LinkedIn Events</h3>
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {events.map((event) => (
                <CarouselItem key={event.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="p-4 bg-linkedin-card hover:bg-linkedin-card/80 transition-colors">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">{event.title}</h4>
                      <p className="text-sm text-linkedin-text">{event.date}</p>
                      <p className="text-sm text-linkedin-text">{event.attendees} attendees</p>
                      <Button 
                        variant="outline" 
                        className="w-full mt-2 bg-transparent border-linkedin-blue text-linkedin-blue hover:bg-linkedin-blue hover:text-white"
                      >
                        View
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <Separator className="my-8" />

        <div>
          <h3 className="text-xl font-medium mb-4">LinkedIn Jobs</h3>
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {jobs.map((job) => (
                <CarouselItem key={job.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="p-4 bg-linkedin-card hover:bg-linkedin-card/80 transition-colors">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">{job.title}</h4>
                      <p className="text-sm text-linkedin-text">{job.company}</p>
                      <p className="text-sm text-linkedin-text">{job.location}</p>
                      <Button 
                        className="w-full mt-2 bg-linkedin-blue text-white hover:bg-linkedin-blue/90"
                      >
                        Apply
                      </Button>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};