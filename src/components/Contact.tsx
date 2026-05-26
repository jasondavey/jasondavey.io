import { useRef } from "react";
import { Box, Typography, Container, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionContainer } from "./contact/styles";
import ContactForm from "./contact/ContactForm";
import ContactInfoPanel from "./contact/ContactInfoPanel";

const Contact = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

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
            background: `radial-gradient(circle, ${alpha(
              theme.palette.primary.main,
              0.08
            )} 0%, transparent 70%)`,
            y: backgroundY,
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
            background: `radial-gradient(circle, ${alpha(
              theme.palette.secondary.main,
              0.08
            )} 0%, transparent 70%)`,
            y: backgroundY2,
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

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 5,
          }}
        >
          {/* Contact form */}
          <Box sx={{ flex: { md: 7 }, width: "100%" }}>
            <ContactForm />
          </Box>

          {/* Contact info */}
          <Box sx={{ flex: { md: 5 }, width: "100%" }}>
            <ContactInfoPanel />
          </Box>
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default Contact;
