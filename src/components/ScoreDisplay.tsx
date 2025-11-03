import type { ScoreTracker } from "../scoreTracker";
import "./ScoreDisplay.css"

function ScoreDisplay({ tracker: { score, highscore, correct, incorrect } }: { tracker: ScoreTracker }) {
  return (
    <div className="score-display">
      <span>
        TOP {highscore.value.toString().padStart(3, "0")}
        {" | "}
        {score.value.toString().padStart(3, "0")}
      </span>
      <span className="left">
        <span style={{ color: "green" }}>{correct.value}</span> :{" "}
        <span style={{ color: "red" }}>{incorrect.value}</span>
      </span>
    </div>
  );
}


export default ScoreDisplay