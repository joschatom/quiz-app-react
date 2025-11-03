import { useEffect, useState } from "react";

import "./App.css";
import Question from "./components/QuestionView";

export type QuestionData = {
  category: string;
  id: string;
  tags: string[];
  difficulty: "easy" | "medium" | "hard";
  regions: string[];
  isNiche: boolean;
  question: {
    text: string;
  };
  correctAnswer: string;
  incorrectAnswers: string[];
  type: "text_choice";
};

function App() {
  const [questions, setQuestions] = useState<QuestionData[]>()
  
  useEffect(() => {
    const fetchData = async () => { 
      const resp = await fetch("https://the-trivia-api.com/v2/questions");
      const data: QuestionData[] = await resp.json()
      console.log(data);
      setQuestions(data)
    };

    fetchData();
  }, [])

  const [questionId, setQuestionId] = useState(0);

  const nextQuestion = () => {
    
    setQuestionId((questionId + 1) % questions!.length);
    return questions![questionId];
  };

  return (
    <>
      Do you know the answer?
      {questions != undefined ? <Question next={nextQuestion} />: <></>}
    </>
  );
}

export default App;
