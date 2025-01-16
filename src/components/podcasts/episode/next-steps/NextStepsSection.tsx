import { Separator } from "@/components/ui/separator";
import { CarouselItem } from "@/components/ui/carousel";
import { CarouselSection } from "./components/CarouselSection";
import { CourseCard } from "./components/CourseCard";
import { EventCard } from "./components/EventCard";
import { JobCard } from "./components/JobCard";

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
    { 
      id: 1, 
      title: "Tech Conference 2024", 
      date: "Mar 15", 
      attendees: "500+",
      thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    { 
      id: 2, 
      title: "Developer Meetup", 
      date: "Mar 20", 
      attendees: "200+",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    { 
      id: 3, 
      title: "Networking Event", 
      date: "Mar 25", 
      attendees: "300+",
      thumbnail: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    { 
      id: 4, 
      title: "Workshop", 
      date: "Mar 30", 
      attendees: "150+",
      thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
  ];

  const jobs = [
    { 
      id: 1, 
      title: "Senior Developer", 
      company: "Tech Corp", 
      location: "Remote",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    { 
      id: 2, 
      title: "UX Designer", 
      company: "Design Inc", 
      location: "New York",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    { 
      id: 3, 
      title: "Product Manager", 
      company: "Product Co", 
      location: "San Francisco",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    { 
      id: 4, 
      title: "Data Scientist", 
      company: "Data Corp", 
      location: "Boston",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
  ];

  return (
    <div className="mt-12 space-y-8">
      <Separator className="mb-8" />
      <h2 className="text-2xl font-semibold mb-6">Next Steps</h2>

      <div className="space-y-8">
        <CarouselSection title="Learning">
          {courses.map((course) => (
            <CarouselItem key={course.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
              <CourseCard {...course} />
            </CarouselItem>
          ))}
        </CarouselSection>

        <Separator className="my-8" />

        <CarouselSection title="Events">
          {events.map((event) => (
            <CarouselItem key={event.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
              <EventCard {...event} />
            </CarouselItem>
          ))}
        </CarouselSection>

        <Separator className="my-8" />

        <CarouselSection title="Jobs">
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