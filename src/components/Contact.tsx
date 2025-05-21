import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, User, MessageSquare, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // EmailJS credentials are now loaded from environment variables (see .env file)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          toast({
            title: "Message sent!",
            description:
              "Thank you for your message. I'll get back to you soon.",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setIsSubmitting(false);
          toast({
            title: "Error",
            description:
              "There was a problem sending your message. Please try again later.",
            variant: "destructive",
          });
        }
      );
  };

  return (
    <section id="contact" className="bg-background transition-colors">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div
            className="text-center mb-16 animate-fade-in opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="heading-lg inline-flex items-center">
              Get In Touch
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Whether you have a question or just want to say hi, I'll try my
              best to get back to you!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center mt-4 gap-2 sm:gap-6 text-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-engineering-accent" />
                <a href={`tel:${import.meta.env.VITE_PHONE_NUMBER}`} className="hover:text-engineering-accent transition-colors">
                  {import.meta.env.VITE_PHONE_NUMBER}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-engineering-accent" />
                <a href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS_HELLO}`} className="hover:text-engineering-accent transition-colors">
                  {import.meta.env.VITE_EMAIL_ADDRESS_HELLO}
                </a>
              </div>
            </div>
          </div>

          <Card
            className="border-none shadow-xl animate-fade-in opacity-0 bg-white dark:bg-gray-50 transition-colors"
            style={{ animationDelay: "0.4s" }}
          >
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-engineering-accent" />
                      <label htmlFor="name" className="text-sm font-medium dark:text-gray-800">
                        Your Name
                      </label>
                    </div>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="dark:text-gray-800 dark:bg-white dark:border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-engineering-accent" />
                      <label htmlFor="email" className="text-sm font-medium dark:text-gray-800">
                        Your Email
                      </label>
                    </div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="dark:text-gray-800 dark:bg-white dark:border-gray-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-engineering-accent" />
                    <label htmlFor="message" className="text-sm font-medium dark:text-gray-800">
                      Your Message
                    </label>
                  </div>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Hello! I'd like to talk about..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="dark:text-gray-800 dark:bg-white dark:border-gray-300"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-engineering-accent hover:bg-engineering-accent/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
