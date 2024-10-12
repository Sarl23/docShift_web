import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Download, Star } from "lucide-react"

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                            Your App, Your Way
                        </h1>
                        <p className="text-xl text-gray-600 mb-6">
                            Simplify your life with our innovative mobile app. Get started today!
                        </p>
                        <Button size="lg" className="mr-4">
                            Download Now <Download className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="lg">
                            Learn More <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="/placeholder.svg?height=600&width=300"
                            alt="App Preview"
                            className="rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Easy to Use", description: "Intuitive interface for all users" },
                            { title: "Secure", description: "Your data is protected with top-notch security" },
                            { title: "Fast", description: "Lightning-fast performance for smooth experience" },
                        ].map((feature, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{feature.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {[
                            { step: 1, title: "Download", description: "Get the app from your app store" },
                            { step: 2, title: "Sign Up", description: "Create your account in seconds" },
                            { step: 3, title: "Enjoy", description: "Start using all the amazing features" },
                        ].map((step, index) => (
                            <div key={index} className="text-center mb-8 md:mb-0">
                                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "John Doe", comment: "This app has changed my life! So easy to use and powerful." },
                            { name: "Jane Smith", comment: "I can't imagine my day without this app. Highly recommended!" },
                            { name: "Mike Johnson", comment: "The best app I've used in years. Kudos to the development team!" },
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

            {/* CTA Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Download our app now and experience the difference!
                    </p>
                    <Button size="lg">
                        Download Now <Download className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h3 className="text-xl font-semibold mb-4">About Us</h3>
                            <p>We're dedicated to making your life easier through innovative mobile solutions.</p>
                        </div>
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h3 className="text-xl font-semibold mb-4">Contact</h3>
                            <p>Email: support@yourapp.com</p>
                            <p>Phone: (123) 456-7890</p>
                        </div>
                        <div className="w-full md:w-1/3">
                            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-blue-400">Twitter</a>
                                <a href="#" className="hover:text-blue-400">Facebook</a>
                                <a href="#" className="hover:text-blue-400">Instagram</a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                        <p>&copy; 2024 Your App Name. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )

}
export default HomePage;