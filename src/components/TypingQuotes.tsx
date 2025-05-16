import React, { useEffect, useState } from "react";

interface TypingQuotesProps {
  quotes: string[];
  typingSpeed?: number; // ms per character
  pauseDuration?: number; // ms to pause after a quote
}

const TypingQuotes: React.FC<TypingQuotesProps> = ({
  quotes,
  typingSpeed = 40,
  pauseDuration = 2000,
}) => {
  const [displayed, setDisplayed] = useState(quotes[0] || "");
  const [currentQuote, setCurrentQuote] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showIntroBlink, setShowIntroBlink] = useState(false);

  // If there is more than one quote, start typing after a pause on the first quote
  useEffect(() => {
    if (quotes.length <= 1) return;
    if (currentQuote === 0) {
      // Wait for pauseDuration on first quote, then start typing second
      const pause = setTimeout(() => {
        setCurrentQuote(1);
        setDisplayed("");
        setCharIndex(0);
        setShowIntroBlink(false);
      }, pauseDuration);
      return () => clearTimeout(pause);
    }
  }, [currentQuote, quotes, pauseDuration]);

  // Typing effect for quotes[1] and onward
  useEffect(() => {
    if (currentQuote === 0 || currentQuote >= quotes.length) return;
    if (charIndex < quotes[currentQuote].length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + quotes[currentQuote][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      // Pause, then either advance or loop
      const pause = setTimeout(() => {
        if (currentQuote < quotes.length - 1) {
          setCurrentQuote((prev) => prev + 1);
          setDisplayed("");
          setCharIndex(0);
        } else {
          // Loop: go back to first quote (instantly shown, no typing)
          setCurrentQuote(0);
          setDisplayed(quotes[0] || "");
          setCharIndex(0);
        }
      }, pauseDuration);
      return () => clearTimeout(pause);
    }
  }, [charIndex, currentQuote, quotes, typingSpeed, pauseDuration]);

  return (
    <span>
      {displayed}<span className="blinking-cursor">|</span>
    </span>
  );
};

export default TypingQuotes;
