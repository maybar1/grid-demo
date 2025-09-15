import DemoCssGrid from "./DemoCssGrid";
import PureCssGrid from "./PureCssGrid";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>CSS Grid + Material UI Grid</h1>

      {/* Material UI Grid – 3 responsive cards */}
      <DemoCssGrid />

      {/* Pure CSS Grid – auto-fit + minmax */}
      <PureCssGrid />
    </div>
  );
}
