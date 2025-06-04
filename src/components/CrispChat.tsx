import { useEffect } from 'react';

declare global {
  interface Window {
    $crisp: Array<[string, ...unknown[]]>;
    CRISP_WEBSITE_ID: string;
  }
}

interface CrispChatProps {
  websiteId: string;
}

const CrispChat = ({ websiteId }: CrispChatProps) => {
  useEffect(() => {
    // Crisp initialization code
    window.CRISP_WEBSITE_ID = websiteId; // Your Crisp Website ID
    
    (function() {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = true;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
    
    // Initialize Crisp
    window.$crisp = [];
    
    // Optional configurations
    // window.$crisp.push(["config", "position:reverse", true]);
    // window.$crisp.push(["config", "hide:on:mobile", false]);
    
    // You can uncomment and use these for additional customization
    // To set a custom chat message: 
    // window.$crisp.push(["set", "message:text", ["Hi there! 👋 How can I help you today?"]]);
    
    // To hide the chat on initial load:
    // window.$crisp.push(["do", "chat:hide"]);
  }, [websiteId]);

  return null; // This component doesn't render anything visible
};

export default CrispChat;
