import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useThemeContext } from "@/theme";

interface M3TypingQuotesProps {
  quotes: string[];
  speed?: number;
  pauseDuration?: number;
}

const M3TypingQuotes: React.FC<M3TypingQuotesProps> = ({ 
  quotes, 
  speed = 40, 
  pauseDuration = 2000 
}) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const { mode } = useThemeContext();
  const typingTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clean up function to clear timeout on unmount
    return () => {
      if (typingTimer.current) clearTimeout(typingTimer.current);
    };
  }, []);

  useEffect(() => {
    if (typingTimer.current) clearTimeout(typingTimer.current);
    
    if (isWaiting) {
      typingTimer.current = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, pauseDuration);
      return;
    }
    
    if (isDeleting) {
      // Deleting text logic
      if (displayedText === "") {
        setIsDeleting(false);
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
      } else {
        typingTimer.current = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, speed / 2); // Faster deletion
      }
    } else {
      // Typing text logic
      const currentQuote = quotes[currentQuoteIndex];
      if (displayedText.length < currentQuote.length) {
        typingTimer.current = setTimeout(() => {
          setDisplayedText(currentQuote.slice(0, displayedText.length + 1));
        }, speed);
      } else {
        setIsWaiting(true);
      }
    }
  }, [displayedText, currentQuoteIndex, isDeleting, isWaiting, quotes, speed, pauseDuration]);

  const cursorColor = mode === "dark" ? "#1DE9B6" : "#009688";

  return (
    <Box sx={{ position: "relative", display: "inline" }}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ 
          duration: 0.8, 
          repeat: Infinity,
          repeatType: "loop"
        }}
        style={{ 
          display: "inline-block",
          width: "0.7ch",
          height: "1.2em",
          marginLeft: "2px",
          backgroundColor: cursorColor,
          verticalAlign: "text-bottom"
        }}
      />
    </Box>
  );
};

export default M3TypingQuotes;
