import { useEffect } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiaryEntryCard from "@/components/diary/DiaryEntryCard";
import { getAllEntries } from "@/diary/entries";

const Diary = () => {
  const entries = getAllEntries();

  useEffect(() => {
    document.title = "Diary — jasondavey.io";
  }, []);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden">
      <Navbar />
      <Container maxWidth="md" sx={{ pt: { xs: 14, md: 18 }, pb: 10 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 800, mb: 1 }}>
          Diary
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
          Notes on technical work, in roughly chronological order.
        </Typography>

        {entries.length === 0 ? (
          <Box sx={{ py: 6 }}>
            <Typography color="text.secondary">
              No entries yet — check back soon.
            </Typography>
          </Box>
        ) : (
          <Stack spacing={3}>
            {entries.map((entry) => (
              <DiaryEntryCard key={entry.slug} entry={entry} />
            ))}
          </Stack>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Diary;
