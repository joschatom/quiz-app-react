import type { QuestionData } from "../App";
import "./Tag.css";

export function QuestionTags({ question }: { question: QuestionData }) {
  return (
    <div>
      {question.tags.map((tag) => (
        <span
          className="tag"
          style={{
            backgroundColor: "lightgray",
            color: "black",
            marginLeft: "10px",
            userSelect: "all",
          }}
        >
          {tag
            .replaceAll("_", " ")
            .split(" ")
            .map((k) =>
              k.length <= 2 ? k.toUpperCase() : k[0].toUpperCase() + k.slice(1)
            )
            .join(" ")}
        </span>
      ))}
    </div>
  );
}
