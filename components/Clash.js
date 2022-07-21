export default function Clash({clash}) {

  return(
    <div style={{display: clash ? "inline-block" : "none", transition: "all 0.3s ease-in-out"}}>
      <h1>Clash Royale</h1>
    </div>
  );
}