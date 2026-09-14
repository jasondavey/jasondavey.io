import { useEffect } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Box, Container, Link, Stack, Typography, Chip } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiaryContent from "@/components/diary/DiaryContent";
import { getEntryBySlug } from "@/diary/entries";

const formatDate = (isoDate: string): string =>
  new Date(`${isoDate}T00:00:00`).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const DiaryEntry = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const entry = getEntryBySlug(slug);

  useEffect(() => {
    document.title = entry ? `${entry.title} — jasondavey.io Diary` : "Diary — jasondavey.io";
  }, [entry]);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden">
      <Navbar />
      <Container maxWidth="md" sx={{ pt: { xs: 14, md: 18 }, pb: 10 }}>
        <Link
          component={RouterLink}
          to="/diary"
          underline="hover"
          sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, mb: 4 }}
        >
          <ArrowBackIcon fontSize="small" />
          Back to Diary
        </Link>

        {entry ? (
          <Box component="article">
            <Typography variant="overline" color="text.secondary">
              {formatDate(entry.date)}
            </Typography>
            <Typography variant="h3" component="h1" sx={{ fontWeight: 800, mt: 0.5, mb: 2 }}>
              {entry.title}
            </Typography>
            {entry.tags.length > 0 && (
              <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: "wrap", rowGap: 1 }}>
                {entry.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" variant="outlined" />
                ))}
              </Stack>
            )}
            <DiaryContent markdown={entry.body} />
          </Box>
        ) : (
          <Typography color="text.secondary">
            That diary entry doesn't exist. It may have been moved or removed.
          </Typography>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default DiaryEntry;
