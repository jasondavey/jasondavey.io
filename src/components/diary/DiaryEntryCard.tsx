import { Link as RouterLink } from "react-router-dom";
import { Box, Card, CardActionArea, CardContent, Typography, Chip, Stack } from "@mui/material";
import type { DiaryEntry } from "@/diary/types";

interface DiaryEntryCardProps {
  entry: DiaryEntry;
}

const formatDate = (isoDate: string): string =>
  new Date(`${isoDate}T00:00:00`).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const DiaryEntryCard = ({ entry }: DiaryEntryCardProps) => (
  <Card variant="outlined" sx={{ borderRadius: 3 }}>
    <CardActionArea component={RouterLink} to={`/diary/${entry.slug}`}>
      <CardContent>
        <Typography variant="overline" color="text.secondary">
          {formatDate(entry.date)}
        </Typography>
        <Typography variant="h6" component="h2" sx={{ fontWeight: 700, mt: 0.5 }}>
          {entry.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {entry.excerpt}
        </Typography>
        {entry.tags.length > 0 && (
          <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap", rowGap: 1 }}>
            {entry.tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" variant="outlined" />
            ))}
          </Stack>
        )}
        <Box sx={{ mt: 2 }}>
          <Typography variant="button" color="primary">
            Read more →
          </Typography>
        </Box>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default DiaryEntryCard;
