import { Separator } from "@/components/ui/separator";
import { CarouselItem } from "@/components/ui/carousel";
import { CarouselSection } from "./components/CarouselSection";
import { CourseCard } from "./components/CourseCard";
import { EventCard } from "./components/EventCard";
import { JobCard } from "./components/JobCard";

export const NextStepsSection = () => {
  const courses = [
    { 
      id: 1, 
      title: "Strategic Management Essentials", 
      instructor: "Harvard Business School", 
      duration: "6h 30m",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978" 
    },
    { 
      id: 2, 
      title: "Digital Transformation Leadership", 
      instructor: "MIT Sloan", 
      duration: "4h 45m",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
    },
    { 
      id: 3, 
      title: "Advanced P&L Management", 
      instructor: "Wharton School", 
      duration: "5h 15m",
      thumbnail: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9" 
    },
    { 
      id: 4, 
      title: "Change Management in Practice", 
      instructor: "INSEAD", 
      duration: "3h 45m",
      thumbnail: "https://images.unsplash.com/photo-1552581234-26160f608093" 
    },
  ];

  const events = [
    { 
      id: 1, 
      title: "Management Consulting Summit 2024", 
      date: "Apr 15", 
      attendees: "1000+",
      thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
    },
    { 
      id: 2, 
      title: "Leadership Innovation Forum", 
      date: "Apr 20", 
      attendees: "500+",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    { 
      id: 3, 
      title: "Digital Strategy Conference", 
      date: "Apr 25", 
      attendees: "750+",
      thumbnail: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa"
    },
    { 
      id: 4, 
      title: "P&L Optimization Workshop", 
      date: "Apr 30", 
      attendees: "250+",
      thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2"
    },
  ];

  const jobs = [
    { 
      id: 1, 
      title: "Senior Management Consultant", 
      company: "McKinsey & Company", 
      location: "New York",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
    },
    { 
      id: 2, 
      title: "Digital Transformation Lead", 
      company: "BCG", 
      location: "London",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c"
    },
    { 
      id: 3, 
      title: "Strategy Director", 
      company: "Bain & Company", 
      location: "Singapore",
      logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    },
    { 
      id: 4, 
      title: "Change Management Lead", 
      company: "Deloitte", 
      location: "San Francisco",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9"
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