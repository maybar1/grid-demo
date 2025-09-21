import Grid from "@mui/material/Grid";

export default function SimpleMuiGrid() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Material UI Grid Example</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <div style={{ background: "#90caf9", padding: "20px" }}>Item 1</div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div style={{ background: "#f48fb1", padding: "20px" }}>Item 2</div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div style={{ background: "#a5d6a7", padding: "20px" }}>Item 3</div>
        </Grid>
      </Grid>
    </div>
  );
}
