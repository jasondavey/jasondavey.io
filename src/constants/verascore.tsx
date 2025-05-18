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

export const VerascoreTechMap: Record<
  string,
  { icon: JSX.Element; url: string }
> = {
  TypeScript: {
    icon: <SiTypescript className="text-blue-600" title="TypeScript" />,
    url: "https://www.typescriptlang.org/docs/",
  },
  React: {
    icon: <FaReact className="text-blue-400" title="React" />,
    url: "https://react.dev/",
  },
  Netlify: {
    icon: <SiNetlify className="text-green-500" title="Netlify" />,
    url: "https://docs.netlify.com/api/get-started/",
  },
  Auth0: {
    icon: <SiAuth0 className="text-orange-500" title="Auth0" />,
    url: "https://auth0.com/docs/api",
  },
  FaunaDB: {
    icon: <SiFauna className="text-green-700" title="FaunaDB" />,
    url: "https://docs.fauna.com/fauna/current/api/",
  },
  Plaid: {
    icon: <FaExchangeAlt className="text-black" title="Plaid" />, // No SiPlaid, so use FaExchangeAlt
    url: "https://plaid.com/docs/api/",
  },
  Datadog: {
    icon: <SiDatadog className="text-purple-500" title="Datadog" />,
    url: "https://docs.datadoghq.com/api/latest/",
  },
  Smarty: {
    icon: <FaAddressBook className="text-indigo-500" title="Smarty" />,
    url: "https://www.smarty.com/docs/cloud/us-street-api",
  },
  Twilio: {
    icon: <SiTwilio className="text-pink-500" title="Twilio" />,
    url: "https://www.twilio.com/docs/usage/api",
  },
  Nodejs: {
    icon: <FaNodeJs className="text-green-700" title="Node.js" />,
    url: "https://nodejs.org/api/",
  },
  Mailgun: {
    icon: <FaEnvelope className="text-red-500" title="Mailgun" />,
    url: "https://documentation.mailgun.com/en/latest/api_reference.html",
  },
  CRS: {
    icon: <CrsCreditApiIcon title="CRS Credit API" className="w-10 h-5" />,
    url: "https://crscreditapi.redoc.ly/",
  },
  Ionic: {
    icon: <IoLogoIonic className="text-blue-500" title="Ionic" />,
    url: "https://ionicframework.com/docs/api",
  },
};
