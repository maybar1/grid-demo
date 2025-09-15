import Box from "@mui/material/Box";

export default function PureCssGrid() {
  return (
    <div style={{ marginTop: 32 }}>
      <h2 style={{ textAlign: "center" }}>CSS Grid (auto-fit + minmax)</h2>
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <Box
            key={i}
            sx={{
              bgcolor: "primary.light",
              p: 2,
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            Item {i + 1}
          </Box>
        ))}
      </Box>
    </div>
  );
}
