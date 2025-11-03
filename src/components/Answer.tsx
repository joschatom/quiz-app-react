import "./Answer.css";

function Answer({
  id,
  text,
  select,
  correct,
}: {
  id: number;
  text: string;
  select: (id: number) => void;
  correct: boolean | null;
}) {
   const submitted = (correct != null) ? true : false;
  return (
    <button
      disabled={submitted}
      className={`answer-option ${
        (correct != null)
          ? correct
            ? "correct-answer"
            : "wrong-answer"
          : ""
      }`}
      onClick={() => select(id)}
    >
      {text}
    </button>
  );
}

export default Answer;
