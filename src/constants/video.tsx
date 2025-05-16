import { SiAmazon, SiTypescript, SiFfmpeg, SiNodedotjs } from "react-icons/si";
import { FaCloud, FaTerminal } from "react-icons/fa";
import { TbFileSmile } from "react-icons/tb";
import { BiSolidVolumeMute } from "react-icons/bi";
import { MdAudiotrack } from "react-icons/md";
import { RiFunctionLine } from "react-icons/ri";
import { AwsS3Icon } from "./AwsS3Icon";

export const VideoSanitizerTechMap: Record<string, JSX.Element> = {
  "AWS Lambda": <SiAmazon className="text-yellow-500" title="AWS Lambda" />,
  "Amazon S3": <AwsS3Icon className="w-7 h-7" title="Amazon S3" />,
  "Amazon Transcribe": (
    <SiAmazon className="text-green-500" title="Amazon Transcribe" />
  ),
  TypeScript: <SiTypescript className="text-blue-600" title="TypeScript" />,
  Nodejs: <SiNodedotjs className="text-green-600" title="Node.js" />,
  FFmpeg: <SiFfmpeg className="text-red-600" title="FFmpeg" />,
  JSON: <RiFunctionLine className="text-gray-600" title="JSON" />,
  Bash: <FaTerminal className="text-gray-700" title="Bash" />,
  "Shell Scripts": (
    <FaTerminal className="text-gray-500" title="Shell Scripts" />
  ),
  WebVTT: <TbFileSmile className="text-purple-700" title="WebVTT Subtitles" />,
  "Audio Redaction": (
    <BiSolidVolumeMute className="text-pink-500" title="Audio Redaction" />
  ),
  "Media Processing": (
    <MdAudiotrack className="text-indigo-600" title="Media Processing" />
  ),
  "Content Moderation": (
    <BiSolidVolumeMute className="text-yellow-700" title="Content Moderation" />
  ),
};
