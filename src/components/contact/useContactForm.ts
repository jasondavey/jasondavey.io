import { useState } from "react";
import type React from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

// Validation rules
export const validationRules = {
  name: { minLength: 2, maxLength: 50 },
  email: { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  message: { minLength: 10, maxLength: 1000 },
};

type SnackbarSeverity = "error" | "warning" | "info" | "success";

interface FieldValidation {
  valid: boolean;
  message: string;
}

const validateField = (name: string, value: string): FieldValidation => {
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

export function useContactForm() {
  // EmailJS credentials from environment variables
  const SERVICE_ID: string | undefined = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID: string | undefined = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY: string | undefined = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Form state
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  // Validation state. formValid is derived (see below), not stored, so
  // we never have to keep it in sync with the field-level flags.
  const [validation, setValidation] = useState({
    name: { valid: false, message: "" },
    email: { valid: false, message: "" },
    message: { valid: false, message: "" },
  });
  const formValid = validation.name.valid && validation.email.valid && validation.message.valid;

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<SnackbarSeverity>("success");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  // Handle snackbar close
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields before submission
    const nameValidation = validateField("name", formData.name);
    const emailValidation = validateField("email", formData.email);
    const messageValidation = validateField("message", formData.message);

    setValidation({
      name: nameValidation,
      email: emailValidation,
      message: messageValidation,
    });

    if (!nameValidation.valid || !emailValidation.valid || !messageValidation.valid) {
      setSnackbarMessage("Please fix the form errors before submitting");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setSnackbarMessage("Contact form is not configured. Please email me directly.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Reset validation
      setValidation({
        name: { valid: false, message: "" },
        email: { valid: false, message: "" },
        message: { valid: false, message: "" },
      });

      setSnackbarMessage("Thank you! Your message has been sent successfully.");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    } catch (error: unknown) {
      console.error("Failed to send email:", error);
      const status = error instanceof EmailJSResponseStatus ? error.status : undefined;
      let userMessage = "Failed to send your message. Please try again later.";
      if (status === 412) {
        // EmailJS returns 412 when the request origin is not on the
        // account's allow list. In production this should never fire; in
        // dev it means localhost is not whitelisted on the EmailJS
        // dashboard (Account -> Security -> Allow List).
        userMessage =
          "Email service rejected this origin. If you're on localhost, " +
          "add it to the EmailJS allow list.";
      } else if (status === 422) {
        userMessage = "Email template rejected the submission. Please contact me directly.";
      } else if (status === 0 || status === undefined) {
        userMessage =
          "Could not reach the email service. Please check your connection " +
          "or contact me directly.";
      }
      setSnackbarMessage(userMessage);
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    validation,
    formValid,
    isSubmitting,
    snackbarMessage,
    snackbarSeverity,
    openSnackbar,
    handleChange,
    handleSubmit,
    handleSnackbarClose,
  };
}
