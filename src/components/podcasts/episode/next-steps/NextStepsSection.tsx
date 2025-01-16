import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

export const NextStepsSection = () => {
  // Mock data - replace with real data later
  const courses = [
    { id: 1, title: "React Fundamentals", instructor: "John Doe", duration: "2h 30m" },
    { id: 2, title: "Advanced TypeScript", instructor: "Jane Smith", duration: "3h 45m" },
    { id: 3, title: "Web Development", instructor: "Mike Johnson", duration: "4h 15m" },
    { id: 4, title: "UI/UX Design", instructor: "Sarah Wilson", duration: "2h 15m" },
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
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-medium mb-4">LinkedIn Learning</h3>
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {courses.map((course) => (
                <CarouselItem key={course.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="p-4 h-full">
                    <h4 className="font-semibold">{course.title}</h4>
                    <p className="text-sm text-gray-500">{course.instructor}</p>
                    <p className="text-sm text-gray-500">{course.duration}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <Separator className="my-6" />

        <div>
          <h3 className="text-xl font-medium mb-4">LinkedIn Events</h3>
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {events.map((event) => (
                <CarouselItem key={event.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="p-4 h-full">
                    <h4 className="font-semibold">{event.title}</h4>
                    <p className="text-sm text-gray-500">{event.date}</p>
                    <p className="text-sm text-gray-500">{event.attendees} attendees</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <Separator className="my-6" />

        <div>
          <h3 className="text-xl font-medium mb-4">LinkedIn Jobs</h3>
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {jobs.map((job) => (
                <CarouselItem key={job.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="p-4 h-full">
                    <h4 className="font-semibold">{job.title}</h4>
                    <p className="text-sm text-gray-500">{job.company}</p>
                    <p className="text-sm text-gray-500">{job.location}</p>
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