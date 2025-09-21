import CssGrid from "./CssGrid";
import MaterialGrid from "./MaterialGrid";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>CSS Grid + Material UI Grid</h1>

      {/* Material UI Grid – 3 responsive cards */}
      <MaterialGrid />

      {/* Pure CSS Grid – auto-fit + minmax */}
      <CssGrid />
    </div>
  );
}
