import { marked } from "marked";
import DOMPurify from "dompurify";
import { Box } from "@mui/material";

marked.setOptions({ breaks: true, gfm: true });

interface DiaryContentProps {
  markdown: string;
}

const DiaryContent = ({ markdown }: DiaryContentProps) => (
  <Box
    className="prose dark:prose-invert max-w-none md:prose-base
      prose-headings:mt-6 prose-headings:mb-3 prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
      prose-p:my-3 prose-li:my-1 prose-ul:my-3 prose-ol:my-3 prose-pre:my-4
      prose-code:bg-gray-100 prose-code:text-gray-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
      dark:prose-code:bg-gray-800 dark:prose-code:text-gray-100
      prose-a:text-blue-600 dark:prose-a:text-blue-400"
    dangerouslySetInnerHTML={{
      __html: DOMPurify.sanitize(marked.parse(markdown) as string),
    }}
  />
);

export default DiaryContent;
