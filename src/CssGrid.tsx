export default function CssGrid() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>CSS Grid Example</h2>
      <div
        style={{
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
        }}
      >
        <div style={{ background: "#90caf9", padding: "20px" }}>Item 1</div>
        <div style={{ background: "#f48fb1", padding: "20px" }}>Item 2</div>
        <div style={{ background: "#a5d6a7", padding: "20px" }}>Item 3</div>
        <div style={{ background: "#ffe082", padding: "20px" }}>Item 4</div>
      </div>
      </div>

 
  );
}
