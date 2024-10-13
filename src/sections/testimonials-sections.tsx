import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSections = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "John Doe",
              comment:
                "This app has changed my life! So easy to use and powerful.",
            },
            {
              name: "Jane Smith",
              comment:
                "I can't imagine my day without this app. Highly recommended!",
            },
            {
              name: "Mike Johnson",
              comment:
                "The best app I've used in years. Kudos to the development team!",
            },
          ].map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="text-yellow-400 mr-2" />
                  <Star className="text-yellow-400 mr-2" />
                  <Star className="text-yellow-400 mr-2" />
                  <Star className="text-yellow-400 mr-2" />
                  <Star className="text-yellow-400" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{testimonial.comment}</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSections;
