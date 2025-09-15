import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function DemoCssGrid() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper style={{ padding: 20, textAlign: "center" }}>Item 1</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper style={{ padding: 20, textAlign: "center" }}>Item 2</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper style={{ padding: 20, textAlign: "center" }}>Item 3</Paper>
      </Grid>
    </Grid>
  );
}
