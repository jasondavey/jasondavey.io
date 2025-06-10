import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  location: {
    name: string;
    embed: string; // Google Maps embed URL
  };
}

const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose, location }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white">
            {location.name}
          </DialogTitle>
          <DialogDescription className="text-gray-700 dark:text-gray-300">
            Here's where you can find me in {location.name}
          </DialogDescription>
        </DialogHeader>
        
        <Box className="w-full h-[400px] mt-2 rounded-lg overflow-hidden">
          <iframe
            src={location.embed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map of ${location.name}`}
            className="w-full h-full"
          ></iframe>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LocationModal;
