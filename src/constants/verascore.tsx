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

export type VerascoreTechCategory =
  | "Frontend"
  | "Backend"
  | "Auth"
  | "Db"
  | "DevOps"
  | "Comms"
  | "Integration";

export const VerascoreTechMap: Record<
  string,
  { icon: JSX.Element; url: string; category: VerascoreTechCategory }
> = {
  TypeScript: {
    icon: <SiTypescript className="text-blue-600" title="TypeScript" />,
    url: "https://www.typescriptlang.org/docs/",
    category: "Frontend",
  },
  React: {
    icon: <FaReact className="text-blue-400" title="React" />,
    url: "https://react.dev/",
    category: "Frontend",
  },
  Netlify: {
    icon: <SiNetlify className="text-green-500" title="Netlify" />,
    url: "https://docs.netlify.com/api/get-started/",
    category: "DevOps",
  },
  Auth0: {
    icon: <SiAuth0 className="text-orange-500" title="Auth0" />,
    url: "https://auth0.com/docs/api",
    category: "Auth",
  },
  FaunaDB: {
    icon: <SiFauna className="text-green-700" title="FaunaDB" />,
    url: "https://docs.fauna.com/fauna/current/api/",
    category: "Db",
  },
  Plaid: {
    icon: <FaExchangeAlt className="text-black" title="Plaid" />, // No SiPlaid, so use FaExchangeAlt
    url: "https://plaid.com/docs/api/",
    category: "Integration",
  },
  Datadog: {
    icon: <SiDatadog className="text-purple-500" title="Datadog" />,
    url: "https://docs.datadoghq.com/api/latest/",
    category: "DevOps",
  },
  Smarty: {
    icon: <FaAddressBook className="text-indigo-500" title="Smarty" />,
    url: "https://www.smarty.com/docs/cloud/us-street-api",
    category: "Integration",
  },
  Twilio: {
    icon: <SiTwilio className="text-pink-500" title="Twilio" />,
    url: "https://www.twilio.com/docs/usage/api",
    category: "Comms",
  },
  Nodejs: {
    icon: <FaNodeJs className="text-green-700" title="Node.js" />,
    url: "https://nodejs.org/api/",
    category: "Backend",
  },
  Mailgun: {
    icon: <FaEnvelope className="text-red-500" title="Mailgun" />,
    url: "https://documentation.mailgun.com/en/latest/api_reference.html",
    category: "Comms",
  },
  CRS: {
    icon: <CrsCreditApiIcon title="CRS Credit API" className="w-10 h-5" />,
    url: "https://crscreditapi.redoc.ly/",
    category: "Integration",
  },
  Ionic: {
    icon: <IoLogoIonic className="text-blue-500" title="Ionic" />,
    url: "https://ionicframework.com/docs/api",
    category: "Frontend",
  },
};
