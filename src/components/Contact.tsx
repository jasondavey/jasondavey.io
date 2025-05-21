import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  User,
  MessageSquare,
  Phone,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [validation, setValidation] = useState({
    name: { valid: false, message: "" },
    email: { valid: false, message: "" },
    message: { valid: false, message: "" },
    formValid: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validationRules = {
    name: { minLength: 2, maxLength: 50 },
    email: { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    message: { minLength: 50, maxLength: 250 },
  };

  const validateField = (name: string, value: string) => {
    let isValid = false;
    let message = "";

    switch (name) {
      case "name":
        if (value.length < validationRules.name.minLength) {
          message = `Name must be at least ${validationRules.name.minLength} characters`;
        } else if (value.length > validationRules.name.maxLength) {
          message = `Name cannot exceed ${validationRules.name.maxLength} characters`;
        } else {
          isValid = true;
        }
        break;
      case "email":
        isValid = validationRules.email.pattern.test(value);
        message = isValid ? "" : "Please enter a valid email address";
        break;
      case "message":
        if (value.length < validationRules.message.minLength) {
          message = `Message must be at least ${validationRules.message.minLength} characters`;
        } else if (value.length > validationRules.message.maxLength) {
          message = `Message cannot exceed ${validationRules.message.maxLength} characters`;
        } else {
          isValid = true;
        }
        break;
      default:
        break;
    }

    return { valid: isValid, message };
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const fieldValidation = validateField(name, value);
    setValidation((prev) => ({
      ...prev,
      [name]: fieldValidation,
    }));
  };

  useEffect(() => {
    const formIsValid =
      validation.name.valid &&
      validation.email.valid &&
      validation.message.valid;

    setValidation((prev) => ({
      ...prev,
      formValid: formIsValid,
    }));
  }, [validation.name.valid, validation.email.valid, validation.message.valid]);

  // EmailJS credentials are now loaded from environment variables (see .env file)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields before submission
    const nameValidation = validateField("name", formData.name);
    const emailValidation = validateField("email", formData.email);
    const messageValidation = validateField("message", formData.message);

    setValidation((prev) => ({
      ...prev,
      name: nameValidation,
      email: emailValidation,
      message: messageValidation,
      formValid:
        nameValidation.valid &&
        emailValidation.valid &&
        messageValidation.valid,
    }));

    if (
      !nameValidation.valid ||
      !emailValidation.valid ||
      !messageValidation.valid
    ) {
      toast({
        title: "Form validation failed",
        description: "Please check the form for errors and try again.",
        variant: "destructive",
      });
      return;
    }

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
                <a
                  href={`tel:${import.meta.env.VITE_PHONE_NUMBER}`}
                  className="hover:text-engineering-accent transition-colors"
                >
                  {import.meta.env.VITE_PHONE_NUMBER}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-engineering-accent" />
                <a
                  href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS_HELLO}`}
                  className="hover:text-engineering-accent transition-colors"
                >
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
                      <label
                        htmlFor="name"
                        className="text-sm font-medium dark:text-gray-800"
                      >
                        Your Name
                      </label>
                    </div>
                    <div className="relative">
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        minLength={validationRules.name.minLength}
                        maxLength={validationRules.name.maxLength}
                        required
                        className={`dark:text-gray-800 dark:bg-white dark:border-gray-300 ${
                          formData.name && !validation.name.valid
                            ? "border-red-500"
                            : ""
                        }`}
                        aria-describedby="name-validation"
                      />
                      {formData.name && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          {validation.name.valid ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-red-500" />
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between mt-1">
                      <p id="name-validation" className="text-xs text-red-500">
                        {validation.name.message}
                      </p>
                      <p className="text-xs text-muted-foreground dark:text-gray-600">
                        {formData.name.length}/{validationRules.name.maxLength}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-engineering-accent" />
                      <label
                        htmlFor="email"
                        className="text-sm font-medium dark:text-gray-800"
                      >
                        Your Email
                      </label>
                    </div>
                    <div className="relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`dark:text-gray-800 dark:bg-white dark:border-gray-300 ${
                          formData.email && !validation.email.valid
                            ? "border-red-500"
                            : ""
                        }`}
                        aria-describedby="email-validation"
                      />
                      {formData.email && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          {validation.email.valid ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-red-500" />
                          )}
                        </div>
                      )}
                    </div>
                    <p
                      id="email-validation"
                      className="text-xs text-red-500 mt-1"
                    >
                      {validation.email.message}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-engineering-accent" />
                    <label
                      htmlFor="message"
                      className="text-sm font-medium dark:text-gray-800"
                    >
                      Your Message
                    </label>
                  </div>
                  <div>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Hello! I'd like to talk about..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      minLength={validationRules.message.minLength}
                      maxLength={validationRules.message.maxLength}
                      className={`dark:text-gray-800 dark:bg-white dark:border-gray-300 ${
                        formData.message && !validation.message.valid
                          ? "border-red-500"
                          : ""
                      }`}
                      aria-describedby="message-validation"
                    />
                    <div className="flex justify-between mt-1">
                      <p
                        id="message-validation"
                        className="text-xs text-red-500"
                      >
                        {validation.message.message}
                      </p>
                      <p
                        className={`text-xs ${
                          formData.message.length >
                          validationRules.message.maxLength
                            ? "text-red-500 font-medium"
                            : "text-muted-foreground dark:text-gray-600"
                        }`}
                      >
                        {formData.message.length}/
                        {validationRules.message.maxLength}
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-engineering-accent hover:bg-engineering-accent/90"
                  disabled={isSubmitting || !validation.formValid}
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
