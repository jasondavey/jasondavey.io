import {
  Alert,
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  Snackbar,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlineIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutlined";
import SendIcon from "@mui/icons-material/Send";
import { GlassCard, StyledTextField } from "./styles";
import { useContactForm, validationRules } from "./useContactForm";

const ContactForm = () => {
  const theme = useTheme();
  const {
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
  } = useContactForm();

  return (
    <>
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
            <Stack spacing={3} sx={{ width: "100%" }}>
              <Box>
                <StyledTextField
                  fullWidth
                  name="name"
                  label="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  error={formData.name !== "" && !validation.name.valid}
                  helperText={formData.name !== "" && validation.name.message}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutlineIcon sx={{ color: theme.palette.primary.main }} />
                        </InputAdornment>
                      ),
                    },
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
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailOutlineIcon sx={{ color: theme.palette.primary.main }} />
                        </InputAdornment>
                      ),
                    },
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
                      : formData.message
                        ? `${formData.message.length}/${validationRules.message.maxLength} characters`
                        : ""
                  }
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{ alignSelf: "flex-start", mt: 1 }}
                        >
                          <ChatBubbleOutlineIcon sx={{ color: theme.palette.primary.main }} />
                        </InputAdornment>
                      ),
                    },
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
                    disabled={isSubmitting || !formValid}
                    endIcon={
                      isSubmitting ? (
                        <CircularProgress size={20} color="inherit" />
                      ) : (
                        <SendIcon />
                      )
                    }
                    sx={{
                      borderRadius: theme.shape.borderRadius
                        ? `${Number(theme.shape.borderRadius) * 2}px`
                        : "16px",
                      py: 1.5,
                      px: 4,
                      backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                      "&.Mui-disabled": {
                        backgroundImage:
                          theme.palette.mode === "dark"
                            ? `linear-gradient(90deg, ${alpha(
                                theme.palette.primary.main,
                                0.5
                              )}, ${alpha(theme.palette.secondary.main, 0.5)})`
                            : `linear-gradient(90deg, ${alpha(
                                theme.palette.primary.main,
                                0.7
                              )}, ${alpha(theme.palette.secondary.main, 0.7)})`,
                        color:
                          theme.palette.mode === "dark"
                            ? alpha(theme.palette.common.white, 0.5)
                            : alpha(theme.palette.common.white, 0.8),
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

      {/* Snackbar for feedback */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          variant="filled"
          sx={{
            width: "100%",
            borderRadius: theme.shape.borderRadius
              ? `${Number(theme.shape.borderRadius) * 1.5}px`
              : "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactForm;
