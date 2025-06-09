import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Paper,
  Stack,
  useTheme,
  alpha,
  InputAdornment,
  Snackbar,
  Alert,
  CircularProgress,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { motion, useScroll, useTransform } from "framer-motion";
import { useThemeContext } from "@/theme";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailOutlineIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

// Styled components
const SectionContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(15, 0),
  overflow: "hidden",
  backgroundColor: theme.palette.mode === "dark" 
    ? alpha(theme.palette.primary.dark, 0.05)
    : alpha(theme.palette.primary.light, 0.05),
}));

const GlassCard = styled(Paper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius ? `${Number(theme.shape.borderRadius) * 3}px` : '24px',
  overflow: "hidden",
  background: theme.palette.mode === "dark"
    ? `linear-gradient(145deg, ${alpha(theme.palette.grey[900], 0.7)}, ${alpha(theme.palette.background.paper, 0.7)})`
    : `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.7)}, ${alpha(theme.palette.grey[100], 0.7)})`,
  backdropFilter: "blur(10px)",
  border: `1px solid ${theme.palette.mode === "dark"
    ? "rgba(255, 255, 255, 0.05)"
    : "rgba(255, 255, 255, 0.8)"}`,
  boxShadow: theme.palette.mode === "dark"
    ? "0 10px 30px rgba(0, 0, 0, 0.3)"
    : "0 10px 30px rgba(0, 0, 0, 0.1)",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius ? `${Number(theme.shape.borderRadius) * 2}px` : '16px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    backgroundColor: theme.palette.mode === 'dark' 
      ? alpha(theme.palette.grey[900], 0.6) 
      : alpha(theme.palette.background.paper, 0.6),
    backdropFilter: 'blur(8px)',
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
      boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.1)}`,
    },
  },
}));

interface ContactInfoItemProps {
  icon: React.ReactNode;
  primary: string;
  secondary: string;
}

const ContactInfoItem = ({ icon, primary, secondary }: ContactInfoItemProps) => {
  const theme = useTheme();
  
  return (
    <Box sx={{ display: "flex", mb: 3, alignItems: "center" }}>
      <Box 
        sx={{ 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 48,
          height: 48,
          borderRadius: "50%",
          mr: 2,
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.1)})`,
          boxShadow: `0 4px 8px ${alpha(theme.palette.common.black, 0.05)}`,
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="subtitle1" fontWeight={600}>
          {primary}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {secondary}
        </Typography>
      </Box>
    </Box>
  );
};

const M3Contact = () => {
  const theme = useTheme();
  const { mode } = useThemeContext();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // EmailJS credentials from environment variables
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
  
  // Validation state
  const [validation, setValidation] = useState({
    name: { valid: false, message: "" },
    email: { valid: false, message: "" },
    message: { valid: false, message: "" },
    formValid: false,
  });

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

  // Validation rules
  const validationRules = {
    name: { minLength: 2, maxLength: 50 },
    email: { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    message: { minLength: 10, maxLength: 1000 },
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

  // Update form validity when individual field validations change
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
      setSnackbarMessage("Please fix the form errors before submitting");
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

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

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
        formValid: false,
      });

      setSnackbarMessage("Thank you! Your message has been sent successfully.");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Failed to send email:", error);
      setSnackbarMessage("Failed to send your message. Please try again later.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionContainer ref={ref} id="contact" sx={{ scroll: "mt-20" }}>
      {/* Animated background elements */}
      <Box sx={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        {/* Gradient orbs */}
        <motion.div
          style={{ 
            position: "absolute", 
            top: "-10%", 
            right: "10%",
            width: "40vw",
            height: "40vw",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 70%)`,
            y: backgroundY
          }}
        />
        <motion.div
          style={{ 
            position: "absolute", 
            bottom: "0%", 
            left: "-10%",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.08)} 0%, transparent 70%)`,
            y: useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])
          }}
        />
      </Box>
      
      <Container sx={{ position: "relative", zIndex: 1 }}>
        {/* Section heading */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Typography
              component="span"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 1.5,
                fontSize: "0.9rem",
                mb: 2,
                display: "block",
              }}
            >
              Get In Touch
            </Typography>
            
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              style={{
                height: "4px",
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: "2px",
                margin: "0 auto 2rem",
              }}
            />
            
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 4,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                background: `linear-gradient(90deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Contact Me
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                maxWidth: "800px",
                margin: "0 auto",
                opacity: 0.8,
                lineHeight: 1.8,
                mb: 6,
              }}
            >
              Have a question or want to work together? Feel free to reach out!
            </Typography>
          </motion.div>
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 5 }}>
          {/* Contact form */}
          <Box sx={{ flex: { md: 7 }, width: '100%' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard elevation={0} sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  sx={{ 
                    mb: 4,
                    fontWeight: 700,
                  }}
                >
                  Send Me a Message
                </Typography>
                
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3} width="100%">
                    <Box>
                      <StyledTextField
                        fullWidth
                        name="name"
                        label="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        error={formData.name !== "" && !validation.name.valid}
                        helperText={formData.name !== "" && validation.name.message}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonOutlineIcon sx={{ color: theme.palette.primary.main }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                    
                    <Box>
                      <StyledTextField
                        fullWidth
                        name="email"
                        label="Your Email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={formData.email !== "" && !validation.email.valid}
                        helperText={formData.email !== "" && validation.email.message}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailOutlineIcon sx={{ color: theme.palette.primary.main }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                    
                    <Box>
                      <StyledTextField
                        fullWidth
                        name="message"
                        label="Your Message"
                        multiline
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        error={formData.message !== "" && !validation.message.valid}
                        helperText={
                          formData.message !== "" && validation.message.message
                            ? validation.message.message
                            : formData.message ? 
                              `${formData.message.length}/${validationRules.message.maxLength} characters` : ""
                        }
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start" sx={{ alignSelf: "flex-start", mt: 1 }}>
                              <ChatBubbleOutlineIcon sx={{ color: theme.palette.primary.main }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                    
                    <Box>
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          disabled={isSubmitting || !validation.formValid}
                          endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                          sx={{
                            borderRadius: theme.shape.borderRadius ? `${Number(theme.shape.borderRadius) * 2}px` : '16px',
                            py: 1.5,
                            px: 4,
                            backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                            '&.Mui-disabled': {
                              backgroundImage: theme.palette.mode === 'dark'
                                ? `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.5)}, ${alpha(theme.palette.secondary.main, 0.5)})`
                                : `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.7)}, ${alpha(theme.palette.secondary.main, 0.7)})`,
                              color: theme.palette.mode === 'dark' ? alpha(theme.palette.common.white, 0.5) : alpha(theme.palette.common.white, 0.8)
                            },
                          }}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </motion.div>
                    </Box>
                  </Stack>
                </form>
              </GlassCard>
            </motion.div>
          </Box>
          
          {/* Contact info */}
          <Box sx={{ flex: { md: 5 }, width: '100%' }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard elevation={0} sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant="h5"
                  sx={{ 
                    mb: 4,
                    fontWeight: 700,
                  }}
                >
                  Contact Information
                </Typography>
                
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: "flex", mb: 3, alignItems: "center" }}>
                    <Box 
                      sx={{ 
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        mr: 2,
                        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.1)})`,
                        boxShadow: `0 4px 8px ${alpha(theme.palette.common.black, 0.05)}`,
                      }}
                    >
                      <MailOutlineIcon fontSize="medium" sx={{ color: theme.palette.primary.main }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Email
                      </Typography>
                      <Link 
                        href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS_HELLO}`} 
                        underline="hover"
                        color="text.secondary"
                        sx={{
                          '&:hover': {
                            color: 'primary.main'
                          }
                        }}
                      >
                        {import.meta.env.VITE_EMAIL_ADDRESS_HELLO}
                      </Link>
                    </Box>
                  </Box>
                  
                  <ContactInfoItem
                    icon={<PhoneIcon fontSize="medium" sx={{ color: theme.palette.primary.main }} />}
                    primary="Phone"
                    secondary={import.meta.env.VITE_PHONE_NUMBER}
                  />
                  
                  <ContactInfoItem
                    icon={<LocationOnIcon fontSize="medium" sx={{ color: theme.palette.primary.main }} />}
                    primary="Location"
                    secondary="Bay Area, California, USA"
                  />
                </Box>
                
                <Typography variant="body2" sx={{ mt: 'auto', opacity: 0.7 }}>
                  I'll respond to your message as soon as possible. Thank you for reaching out!
                </Typography>
              </GlassCard>
            </motion.div>
          </Box>
        </Box>
      </Container>
      
      {/* Snackbar for feedback */}
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity={snackbarSeverity}
          variant="filled"
          sx={{ 
            width: '100%',
            borderRadius: theme.shape.borderRadius ? `${Number(theme.shape.borderRadius) * 1.5}px` : '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </SectionContainer>
  );
};

export default M3Contact;
