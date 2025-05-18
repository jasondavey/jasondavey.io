import { SiAmazon, SiTypescript, SiFfmpeg, SiNodedotjs } from "react-icons/si";
import { FaCloud, FaTerminal } from "react-icons/fa";
import { TbFileSmile } from "react-icons/tb";
import { BiSolidVolumeMute } from "react-icons/bi";
import { MdAudiotrack } from "react-icons/md";
import { RiFunctionLine } from "react-icons/ri";
import { AwsS3Icon } from "./AwsS3Icon";

export const VideoSanitizerTechMap: Record<string, { icon: JSX.Element; url: string; category: string }> = {
  "AWS Lambda": {
    icon: <SiAmazon className="text-yellow-500" title="AWS Lambda" />,
    url: "https://aws.amazon.com/lambda/",
    category: "Cloud",
  },
  "Amazon S3": {
    icon: <AwsS3Icon className="w-7 h-7" title="Amazon S3" />,
    url: "https://aws.amazon.com/s3/",
    category: "Cloud Storage",
  },
  "Amazon Transcribe": {
    icon: <SiAmazon className="text-green-500" title="Amazon Transcribe" />,
    url: "https://aws.amazon.com/transcribe/",
    category: "Speech Processing",
  },
  TypeScript: {
    icon: <SiTypescript className="text-blue-600" title="TypeScript" />,
    url: "https://www.typescriptlang.org/",
    category: "Language",
  },
  Nodejs: {
    icon: <SiNodedotjs className="text-green-600" title="Node.js" />,
    url: "https://nodejs.org/",
    category: "Backend",
  },
  FFmpeg: {
    icon: <SiFfmpeg className="text-red-600" title="FFmpeg" />,
    url: "https://ffmpeg.org/",
    category: "Video Processing",
  },
  JSON: {
    icon: <RiFunctionLine className="text-gray-600" title="JSON" />,
    url: "https://www.json.org/",
    category: "Data Format",
  },
  Bash: {
    icon: <FaTerminal className="text-gray-700" title="Bash" />,
    url: "https://www.gnu.org/software/bash/",
    category: "Scripting",
  },
  "Shell Scripts": {
    icon: <FaTerminal className="text-gray-500" title="Shell Scripts" />,
    url: "https://en.wikipedia.org/wiki/Shell_script",
    category: "Scripting",
  },
  WebVTT: {
    icon: <TbFileSmile className="text-purple-700" title="WebVTT Subtitles" />,
    url: "https://www.w3.org/TR/webvtt1/",
    category: "Subtitles",
  },
  "Audio Redaction": {
    icon: <BiSolidVolumeMute className="text-pink-500" title="Audio Redaction" />,
    url: "https://en.wikipedia.org/wiki/Audio_redaction",
    category: "Audio Processing",
  },
  "Media Processing": {
    icon: <MdAudiotrack className="text-indigo-600" title="Media Processing" />,
    url: "https://en.wikipedia.org/wiki/Media_processing",
    category: "Audio Processing",
  },
  "Content Moderation": {
    icon: <BiSolidVolumeMute className="text-yellow-700" title="Content Moderation" />,
    url: "https://en.wikipedia.org/wiki/Content_moderation",
    category: "Moderation",
  },
};
