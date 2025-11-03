import { useEffect, useState } from "react";
import { arrayToReactState, type ReactState } from "./utils/reactState";

export class ScoreTracker {
  score: ReactState<number>;
  highscore: ReactState<number>;
  correct: ReactState<number>;
  incorrect: ReactState<number>;

  constructor(
    score: ReactState<number>,
    highscore: ReactState<number>,
    correct: ReactState<number>,
    incorrect: ReactState<number>
  ) {
    this.score = score;
    this.highscore = highscore;
    this.correct = correct;
    this.incorrect = incorrect;
  }

  public incCorrect() {
    this.correct.setValue(this.correct.value + 1);
    this.score.setValue(this.score.value + 1);
    if (this.score.value >= this.highscore.value) {
      this.highscore.setValue(this.score.value + 1);
    }
  }

  public incIncorrect() {
    this.incorrect.setValue(this.incorrect.value + 1);
    this.score.setValue(0);
  }
}

export function useScoreTracker(): ScoreTracker {
  const score = useState(0);
  const [highscore, setHighScore] = useState(0);
  const correct = useState(0);
  const incorrect = useState(0);

  useEffect(() => {
    if (highscore != 0) localStorage.setItem("highscore", highscore.toString());
  }, [highscore]);

  useEffect(() => {
    const value = localStorage.getItem("highscore");
    if (value) setHighScore(Number.parseInt(value));
  }, []);

  return new ScoreTracker(
    arrayToReactState(score),
    arrayToReactState([highscore, setHighScore]),
    arrayToReactState(correct),
    arrayToReactState(incorrect)
  );
}
