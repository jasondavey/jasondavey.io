import React, { Suspense, lazy, useState } from "react";
import { Box, Button, Link, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutlined";
import { GlassCard } from "./styles";

const LocationModal = lazy(() => import("../LocationModal"));

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
          background: `linear-gradient(135deg, ${alpha(
            theme.palette.primary.main,
            0.1
          )}, ${alpha(theme.palette.secondary.main, 0.1)})`,
          boxShadow: `0 4px 8px ${alpha(theme.palette.common.black, 0.05)}`,
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {primary}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {secondary}
        </Typography>
      </Box>
    </Box>
  );
};

// Location data
const locations = {
  sanFrancisco: {
    name: "San Francisco, CA, USA",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948547!3d37.75781499002628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus",
  },
  losAngeles: {
    name: "Los Angeles, CA, USA",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130390376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus",
  },
  atlanta: {
    name: "Atlanta, GA, USA",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.7411321579!2d-84.56068455!3d33.767351299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus",
  },
};

const ContactInfoPanel = () => {
  const theme = useTheme();

  // Location modal state
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<{
    name: string;
    embed: string;
  }>({ name: "", embed: "" });

  const openLocationModal = (location: typeof selectedLocation) => {
    setSelectedLocation(location);
    setLocationModalOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <GlassCard
          elevation={0}
          sx={{
            p: 4,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
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
                  background: `linear-gradient(135deg, ${alpha(
                    theme.palette.primary.main,
                    0.1
                  )}, ${alpha(theme.palette.secondary.main, 0.1)})`,
                  boxShadow: `0 4px 8px ${alpha(theme.palette.common.black, 0.05)}`,
                }}
              >
                <MailOutlineIcon
                  fontSize="medium"
                  sx={{ color: theme.palette.primary.main }}
                />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Email
                </Typography>
                <Link
                  href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS_HELLO}`}
                  underline="hover"
                  color="text.secondary"
                  sx={{
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {import.meta.env.VITE_EMAIL_ADDRESS_HELLO}
                </Link>
              </Box>
            </Box>

            <ContactInfoItem
              icon={
                <PhoneIcon fontSize="medium" sx={{ color: theme.palette.primary.main }} />
              }
              primary="Phone"
              secondary={import.meta.env.VITE_PHONE_NUMBER}
            />

            {/* Locations */}
            <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 600 }}>
              Locations:
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mt: 1 }}>
              {/* San Francisco */}
              <Button
                onClick={() => openLocationModal(locations.sanFrancisco)}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  textTransform: "none",
                  color: "text.primary",
                  padding: 0,
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "primary.main",
                  },
                }}
              >
                <LocationOnIcon
                  fontSize="small"
                  sx={{ mr: 1, color: theme.palette.primary.main }}
                />
                San Francisco, CA, USA
              </Button>

              {/* Los Angeles */}
              <Button
                onClick={() => openLocationModal(locations.losAngeles)}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  textTransform: "none",
                  color: "text.primary",
                  padding: 0,
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "primary.main",
                  },
                }}
              >
                <LocationOnIcon
                  fontSize="small"
                  sx={{ mr: 1, color: theme.palette.primary.main }}
                />
                Los Angeles, CA, USA
              </Button>

              {/* Atlanta */}
              <Button
                onClick={() => openLocationModal(locations.atlanta)}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  textTransform: "none",
                  color: "text.primary",
                  padding: 0,
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "primary.main",
                  },
                }}
              >
                <LocationOnIcon
                  fontSize="small"
                  sx={{ mr: 1, color: theme.palette.primary.main }}
                />
                Atlanta, GA, USA
              </Button>
            </Box>
          </Box>

          <Typography variant="body2" sx={{ mt: "auto", opacity: 0.7 }}>
            I'll respond to your message as soon as possible. Thank you for reaching out!
          </Typography>
        </GlassCard>
      </motion.div>

      {/* Location Modal */}
      {locationModalOpen && (
        <Suspense fallback={null}>
          <LocationModal
            isOpen={locationModalOpen}
            onClose={() => setLocationModalOpen(false)}
            location={selectedLocation}
          />
        </Suspense>
      )}
    </>
  );
};

export default ContactInfoPanel;
