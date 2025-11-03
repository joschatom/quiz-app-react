import { useMemo, useState } from "react";
import type { QuestionData } from "../App";
import Answer from "./Answer";
import "./QuestionView.css";
import { arrayToShuffled } from "array-shuffle";
import ScoreDisplay from "./ScoreDisplay";
import { QuestionTags } from "./QuestionTags";
import { DifficultyTag } from "./DifficultyTag";
import { useScoreTracker } from "../scoreTracker";


function QuestionView({ next }: { next: () => QuestionData }) {
  const [selection, setSelection] = useState<number | null>(null);
  const [question, setQuestion] = useState<QuestionData>(next);

  const scoreTracker = useScoreTracker();

  const answers = useMemo(
    () =>
      arrayToShuffled([question.correctAnswer, ...question.incorrectAnswers]),
    [question]
  );

  const select = (id: number) => {
    if (answers[id] == question.correctAnswer) scoreTracker.incCorrect();
    else scoreTracker.incIncorrect();

    setSelection(id);
    setTimeout(() => {
      setQuestion(next());
      setSelection(null);
    }, 1000);
  };

  return (
    question && (
      <>
        <ScoreDisplay tracker={scoreTracker} />

        <QuestionTags question={question} />

        <h2 className="question-title">
          <span>{question.question.text} </span>
          <DifficultyTag difficulty={question.difficulty} />
        </h2>

        <div className="answers-container">
          {answers.map((answer, id) => (
            <Answer
              key={id}
              text={answer}
              id={id}
              select={select}
              correct={
                selection != null ? answer === question.correctAnswer : null
              }
            />
          ))}
        </div>
      </>
    )
  );
}

export default QuestionView;
