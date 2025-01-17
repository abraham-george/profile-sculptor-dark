import { Separator } from "@/components/ui/separator";
import { CarouselItem } from "@/components/ui/carousel";
import { CarouselSection } from "../../episode/next-steps/components/CarouselSection";
import { CourseCard } from "../../episode/next-steps/components/CourseCard";
import { EventCard } from "../../episode/next-steps/components/EventCard";
import { JobCard } from "../../episode/next-steps/components/JobCard";

export const SharedNextStepsSection = () => {
  const courses = [
    { 
      id: 1, 
      title: "Strategic Leadership in Consulting", 
      instructor: "Prof. Sarah Johnson", 
      duration: "6h 30m",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    { 
      id: 2, 
      title: "Digital Transformation Strategy", 
      instructor: "Dr. Michael Chen", 
      duration: "4h 45m",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    { 
      id: 3, 
      title: "ESG Consulting Masterclass", 
      instructor: "Emma Rodriguez", 
      duration: "5h 15m",
      thumbnail: "https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  const events = [
    { 
      id: 1, 
      title: "Global Consulting Summit 2024", 
      date: "Mar 25", 
      attendees: "1000+",
      thumbnail: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    { 
      id: 2, 
      title: "Future of Strategy Forum", 
      date: "Apr 15", 
      attendees: "500+",
      thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    { 
      id: 3, 
      title: "Digital Consulting Workshop", 
      date: "May 5", 
      attendees: "300+",
      thumbnail: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  const jobs = [
    { 
      id: 1, 
      title: "Senior Strategy Consultant", 
      company: "McKinsey & Company", 
      location: "New York",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    { 
      id: 2, 
      title: "Digital Transformation Lead", 
      company: "BCG", 
      location: "London",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    { 
      id: 3, 
      title: "ESG Advisory Partner", 
      company: "Bain & Company", 
      location: "Singapore",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="mt-12 space-y-8">
      <Separator className="mb-8" />
      <h2 className="text-2xl font-semibold mb-6">Next Steps</h2>

      <div className="space-y-8">
        <CarouselSection title="Recommended Courses">
          {courses.map((course) => (
            <CarouselItem key={course.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
              <CourseCard {...course} />
            </CarouselItem>
          ))}
        </CarouselSection>

        <Separator className="my-8" />

        <CarouselSection title="Upcoming Events">
          {events.map((event) => (
            <CarouselItem key={event.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
              <EventCard {...event} />
            </CarouselItem>
          ))}
        </CarouselSection>

        <Separator className="my-8" />

        <CarouselSection title="Featured Jobs">
          {jobs.map((job) => (
            <CarouselItem key={job.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
              <JobCard {...job} />
            </CarouselItem>
          ))}
        </CarouselSection>
      </div>
    </div>
  );
};