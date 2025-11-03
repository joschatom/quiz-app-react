import "./Tag.css"

export function DifficultyTag({ difficulty }: { difficulty: string }) {
  const color =
    difficulty === "easy"
      ? "green"
      : difficulty === "medium"
      ? "orange"
      : difficulty === "hard"
      ? "red"
      : undefined;

  return (
    <span
      className="tag"
      style={{
        backgroundColor: color,
      }}
    >
      {difficulty}
    </span>
  );
}
