import DemoCssGrid from "./DemoCssGrid";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>CSS Grid + Material UI Grid</h1>

      {/* דוגמת Material UI Grid – 3 כרטיסים רספונסיביים */}
      <DemoCssGrid />
    </div>
  );
}
