export default function Axie({axie}) {
    return(
        <div style={{display: axie ? 'inline-block' : 'none', transition: "all 0.3s ease-in-out"}}>
            <h1>Axie Infinity</h1>
        </div>
    );
}