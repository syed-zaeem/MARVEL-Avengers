import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import MCQ from "./MCQ";
import "../Components/Quizz.css";
import { useNavigate } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";

export default function Quizz(props) {
  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [loadingDisplay, setLoadingDisplay] = useState(false);
  const navigate = useNavigate()
  // let newScore = 0
  // let finalScore = 0;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("Token is present.", localStorage.getItem('token'))
      const timer = setTimeout(() => {
            setLoading(false);
          }, 600);
      
          return () => clearTimeout(timer);
    } else {
      console.log("Token is null. Please add token for data. Redirect to login page to add token.", localStorage.getItem('token'))
      navigate("/Login")
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (loading) {
      props.setProgress(50); // Set the loading progress to 50 when the Movies component is being loaded
    } else {
      props.setProgress(800); // Set the loading progress to 100 when the Movies component has finished loading
    }
  }, [loading, props.setProgress]);

  if (loading) {
    return (
      <div>
        <LoadingBar height={3} color="#f11946" progress={50} />
        <h1>Loading Questions...</h1>
        <div style={{marginLeft: '45%', marginTop: '130px'}} >
        <MoonLoader color="red"/>
        </div>
      </div>
    );
  }

  let quizzQuestions = [
    {
      number: 1,
      question: "What is the real name of Iron Man in MCU?",
      options: ["Steve Rogers", "Bruce Banner", "Tony Stark", "Peter Parker"],
      correctAnswer: "Tony Stark",
    },
    {
      number: 2,
      question: "In MCU, which character has four solo movies?",
      options: ["Iron Man", "Captain America", "Spider Man", "Thor"],
      correctAnswer: "Thor",
    },
    {
      number: 3,
      question:
        "In MCU, in Doctor Strange in the Multiverse of Madness, who is the sorcerer supreme?",
      options: ["Ancient One", "Wong", "Doctor Strange", "Spider Man"],
      correctAnswer: "Wong",
    },
    {
      number: 4,
      question: "How many infinity stones are in MCU?",
      options: ["3", "8", "4", "6"],
      correctAnswer: "6",
    },
    {
      number: 5,
      question: "What is the last line of Iron Man in MCU?",
      options: [
        "I am Iron Man",
        "I can do this all day",
        "I am the owner of stark industries",
        "I am genius, millionaire and social worker",
      ],
      correctAnswer: "I am Iron Man",
    },
    {
      number: 6,
      question: "What is the most famous dialogue of Captain America in MCU?",
      options: [
        "I am Captain America",
        "I can do this all day",
        "I am worthy for Mjolnir",
        "We can not lose hope in any condition",
      ],
      correctAnswer: "I can do this all day",
    },
    {
      number: 7,
      question: "Who is Rocket?",
      options: ["Raccoon", "Alien", "Human", "Celestial"],
      correctAnswer: "Raccoon",
    },
    {
      number: 8,
      question: "How many children of Thanos are in MCU?",
      options: ["2", "4", "6", "3"],
      correctAnswer: "6",
    },
    {
      number: 9,
      question:
        "The events of Avengers Endgame are take place in which year in MCU?",
      options: ["2019", "2018", "2022", "2023"],
      correctAnswer: "2023",
    },
    {
      number: 10,
      question: "In MCU, Paul Rudd played the role of which character?",
      options: ["Ant Man", "Spider Man", "Star Lord", "Groot"],
      correctAnswer: "Ant Man",
    },
    {
      number: 11,
      question: "Who is the main villain of Avengers in infinity saga of MCU?",
      options: ["Kang", "Ultron", "Thanos", "Loki"],
      correctAnswer: "Thanos",
    },
    {
      number: 12,
      question: "What is the name of Star Lord's Father?",
      options: ["Ego", "Yondu", "Drax", "The Collector"],
      correctAnswer: "Ego",
    },
    {
      number: 13,
      question: "Who makes the captain america shield in MCU?",
      options: ["Nick Fury", "Howard Stark", "Howard Pots", "Arnim Zola"],
      correctAnswer: "Howard Stark",
    },
    {
      number: 14,
      question:
        "Among the following characters, which character is in main six avengers?",
      options: ["Hawkeye", "Spider Man", "Doctor Strange", "Captain Marvel"],
      correctAnswer: "Hawkeye",
    },
    {
      number: 15,
      question:
        "Among the following characters, which character is not present in Avengers Endgame final battle?",
      options: ["Star Lord", "Gamora", "Nebula", "Ms. Marvel"],
      correctAnswer: "Ms. Marvel",
    },
    {
      number: 16,
      question:
        "Among the following villains, which villain is now a hero, not villain?",
      options: ["Hela", "Surtur", "Loki", "Mysterio"],
      correctAnswer: "Loki",
    },
    {
      number: 17,
      question:
        "Who is the villain of Doctor Strange in the multiverse of madness?",
      options: [
        "Scarlet Witch",
        "Evil Doctor Strange",
        "Defender Doctor Strange",
        "America Chavez",
      ],
      correctAnswer: "Scarlet Witch",
    },
    {
      number: 18,
      question: "Ms. Marvel is the fan of which character?",
      options: ["Captain America", "Hulk", "Captain Marvel", "Wasp"],
      correctAnswer: "Captain Marvel",
    },
    {
      number: 19,
      question:
        "In Avengers 2012, who save the life of Iron Man who is falling from space?",
      options: ["Thor", "Captain America", "Hulk", "Black Widow"],
      correctAnswer: "Hulk",
    },
    {
      number: 20,
      question: "Who is the real leader of all Avengers in MCU?",
      options: ["Iron Man", "Captain America", "Thor", "Doctor Strange"],
      correctAnswer: "Captain America",
    },
  ];

  const UpdatingSelectedAnswersArray = (number, string) => {
    // useEffect(() => {
    //   // setSelectedAnswers((prevSelectedAnswers) => [...prevSelectedAnswers, string]);
    //   selectedAnswers[number] = string
    //   console.log(selectedAnswers[number])
    // }, []);

    selectedAnswers[number - 1] = string;
    // console.log("Option: ", selectedAnswers[number], "Number: ", number);
  };

  const calculateScore = () => {
    let newScore = 0;

    quizzQuestions.forEach((mcq, index) => {
      if (mcq.correctAnswer === selectedAnswers[index]) {
        newScore += 5;
      }
    });

    console.log("Final Score:", newScore);
    // finalScore = newScore
    setScore(newScore);
    setLoadingDisplay(true);
    // return newScore;

    // newScore = 0;

    // quizzQuestions.map((mcq, index)=>{
    //   if(mcq.correctAnswer == selectedAnswers[index]){
    //     newScore += 5;
    //   }
    // })

    // // setScore(newScore)
    //   console.log('Final Score: ', newScore);
    //   console.log('Final Score: ', score);
  };

  // useEffect(() => {
  //   setScore((prevScore) => prevScore + 5);
  // }, [newScore]);

  // const [score, setScore] = useState(0);
  // const [newScore, setNewScore] = useState(0);

  // useEffect(() => {
  //   setScore(0)
  //   setScore((prevScore) => prevScore + newScore);
  // }, [newScore]);

  // const calculateScore = () => {
  //   let calculatedScore = 0;

  //   quizzQuestions.forEach((mcq, index) => {
  //     if (mcq.correctAnswer === selectedAnswers[index]) {
  //       calculatedScore += 5;
  //     }
  //   });

  //   setNewScore(calculatedScore);
  //   console.log('Final Score: ', calculatedScore);
  //   console.log('Current Score: ', newScore);
  //   console.log('Current Score: ', score);
  // };

  return (
    <>
      {/* {UpdatingSelectedAnswersArray(32, 'helo brother')} */}

      <div className="container" style={{ marginBottom: "100px" }}>
        <div className="container" style={{ marginTop: "40px" }}>
          <div
            className="accordion accordion-flush"
            id="accordionFlushExample"
            style={{ border: "1px solid black" }}
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                  style={{
                    backgroundColor:
                      props.mode === "light" ? "white" : "#000000c2",
                    color: props.mode === "light" ? "black" : "white",
                    fontSize: "20px",
                  }}
                >
                  General Instructions
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  className="accordion-body"
                  style={{
                    backgroundColor:
                      props.mode === "light" ? "white" : "#000000c2",
                    color: props.mode === "light" ? "black" : "white",
                  }}
                >
                  <p style={{}}>
                    <li>This is a quizz of multiple choice questions.</li>
                    <li>
                      In this, you have four (4) options against each question.
                    </li>
                    <li>In this, you have to click on circles of options.</li>
                    <li>
                      When you click on any circle of any question, then you
                      will not be able to change your answer later.
                    </li>
                    <li>
                      When you select one option, then the other options of that
                      corresponding question will automatically disabled and you
                      can not change your option of any question.
                    </li>
                    <li>
                      You have only one chance to select any option of any
                      question.
                    </li>
                    <li>
                      When you mark all questions or questions of your choice,
                      then you have to click on the Submit button at the bottom
                      of the page.
                    </li>
                    <li>
                      When you click on the submit button, your score and
                      percentage score will be displayed at the bottom of your
                      page.
                    </li>
                    <li>
                      When you submit your quizz, then the corrected answers
                      will be displayed at the bottom of the page, so you can
                      telly your selected options with corrected answers of all
                      questions.
                    </li>
                    <li>So, best of luck for your quizz.</li>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {quizzQuestions.map((mcq, index) => (
          <MCQ
            number={mcq.number}
            key={index}
            question={mcq.question}
            options={mcq.options}
            UpdatingSelectedAnswersArray={UpdatingSelectedAnswersArray}
          />
        ))}

        <button
          onClick={calculateScore}
          type="button"
          className="btn btn-danger"
          style={{ marginLeft: "80%", width: "100px" }}
        >
          Submit
        </button>

        <div
          className="container my-5"
          style={{
            display: loadingDisplay === true ? "block" : "none",
            opacity: loadingDisplay === true ? "100%" : "0%",
          }}
        >
          <h5>
            Your Score is :-{" "}
            <span className="badge bg-danger mx-3 my-1">{score} / 100</span>
          </h5>
          <h5>
            Your Percentage is :-{" "}
            <span className="badge bg-danger mx-3 my-1">{score} %</span>
          </h5>
        </div>

        <div
          className="container"
          style={{
            marginTop: "70px",
            display: loadingDisplay === true ? "block" : "none",
            opacity: loadingDisplay === true ? "100%" : "0%",
          }}
        >
          <h5>Correct Answers :- </h5>

          <div className="my-4" style={{}}>
            <ol className="">
              {quizzQuestions.map((mcq, index) => {
                return (
                  <>
                    <li className="" key={index} style={{ listStyle: "none" }}>
                      <p
                        style={{
                          borderBottom: "1px solid lightgray",
                          paddingBottom: "6px",
                        }}
                      >
                        <b style={{ marginRight: "30px" }}>{mcq.number}.</b>{" "}
                        {mcq.correctAnswer}
                      </p>
                    </li>
                    {/* <hr /> */}
                  </>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
