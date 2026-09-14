import { Container, Typography } from "@mui/material";
import DiaryEntryCard from "@/components/diary/DiaryEntryCard";
import { getLatestEntry } from "@/diary/entries";

const LatestDiaryEntry = () => {
  const entry = getLatestEntry();

  if (!entry) {
    return null;
  }

  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
      <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
        Latest from the diary
      </Typography>
      <DiaryEntryCard entry={entry} />
    </Container>
  );
};

export default LatestDiaryEntry;
