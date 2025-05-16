import { SiTypescript } from "react-icons/si";
import { FaEnvelope, FaReact } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { SiAuth0 } from "react-icons/si";
import { SiFauna } from "react-icons/si";
import { SiTwilio } from "react-icons/si";
import { SiDatadog } from "react-icons/si";
import { FaAddressBook } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { CrsCreditApiIcon } from "./CrsCreditApiIcon";
import { IoLogoIonic } from "react-icons/io5";

export const VerascoreTechMap: Record<string, JSX.Element> = {
  TypeScript: <SiTypescript className="text-blue-600" title="TypeScript" />,
  React: <FaReact className="text-blue-400" title="React" />,
  Netlify: <SiNetlify className="text-green-500" title="Netlify" />,
  Auth0: <SiAuth0 className="text-orange-500" title="Auth0" />,
  FaunaDB: <SiFauna className="text-green-700" title="FaunaDB" />,
  Plaid: <FaExchangeAlt className="text-black" title="Plaid" />, // No SiPlaid, so use FaExchangeAlt
  Datadog: <SiDatadog className="text-purple-500" title="Datadog" />,
  Smarty: <FaAddressBook className="text-indigo-500" title="Smarty" />,
  Twilio: <SiTwilio className="text-pink-500" title="Twilio" />,
  Nodejs: <FaNodeJs className="text-green-700" title="Node.js" />,
  Mailgun: <FaEnvelope className="text-red-500" title="Mailgun" />,
  CRS: <CrsCreditApiIcon title="CRS Credit API" className="w-10 h-5" />,
  Ionic: <IoLogoIonic className="text-blue-500" title="Ionic" />,
};
