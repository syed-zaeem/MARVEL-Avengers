import React, { useState, useEffect } from "react";
import Avengers_3 from "../MyImages/Avengers 3.jpg";
import LoadingBar from "react-top-loading-bar";
import MoonLoader from "react-spinners/MoonLoader";
// import ReactPaginate from "react-paginate";
import "../Home_main.css";
import Home_Page_Welcome_Captain_America from "../MyImages/Home_Page_Welcome_Captain_America.jpg";
import Home_Page_Avengers_Endgame_Poster from "../MyImages/Home_Page_Avengers_Endgame_Poster.jpg";
import Home_Page_Avengers_Infinity_War_Poster from "../MyImages/Home_Page_Avengers_Infinity_War_Poster.jpg";
import Home_Page_Avengers_Age_Of_Ultron_Poster from "../MyImages/Home_Page_Avengers_Age_Of_Ultron_Poster.jpg";
import Home_Page_The_Avengers_Poster from "../MyImages/Home_Page_The_Avengers_Poster.jpg";
import Home_Page_Captain_America_Civil_War_Poster from "../MyImages/Home_Page_Captain_America_Civil_War_Poster.jpg";
import Home_Page_Avengers_Spider_Man_No_Way_Home_Poster from "../MyImages/Home_Page_Spider_Man_No_Way_Home_Poster.jpg";
import Home_Page_Ant_Man_And_The_Wasp_Quantumania_Poster from "../MyImages/Home_Page_Ant_Man_And_The_Wasp_Quantumania_Poster.jpg";
import Home_Page_Thor_Ragnarok_Poster from "../MyImages/Home_Page_Thor_Ragnarok_Poster.jpg";
import Home_Page_Iron_Man_3_Poster from "../MyImages/Home_Page_Iron_Man_3_Poster.jpg";
import Home_Page_GOTG3_Poster from "../MyImages/Home_Page_GOTG3_Poster.jpg";
import MCU_Timeline from "../MyImages/MCU_Timeline.png";
import { useNavigate } from "react-router-dom";


export default function Home_main(props) {
  // let quizzQuestions = [
  //   {
  //     number: 1,
  //     question: "What is the real name of Iron Man in MCU?",
  //     options: ["Steve Rogers", "Bruce Banner", "Tony Stark", "Peter Parker"],
  //     correctAnswer: "Tony Stark",
  //   },
  //   {
  //     number: 2,
  //     question: "In MCU, which character has four solo movies?",
  //     options: ["Iron Man", "Captain America", "Spider Man", "Thor"],
  //     correctAnswer: "Thor",
  //   },
  //   {
  //     number: 3,
  //     question:
  //       "In MCU, in Doctor Strange in the Multiverse of Madness, who is the sorcerer supreme?",
  //     options: ["Ancient One", "Wong", "Doctor Strange", "Spider Man"],
  //     correctAnswer: "Wong",
  //   },
  //   {
  //     number: 4,
  //     question: "How many infinity stones are in MCU?",
  //     options: ["3", "8", "4", "6"],
  //     correctAnswer: "6",
  //   },
  //   {
  //     number: 5,
  //     question: "What is the last line of Iron Man in MCU?",
  //     options: [
  //       "I am Iron Man",
  //       "I can do this all day",
  //       "I am the owner of stark industries",
  //       "I am genius, millionaire and social worker",
  //     ],
  //     correctAnswer: "I am Iron Man",
  //   },
  //   {
  //     number: 6,
  //     question: "What is the most famous dialogue of Captain America in MCU?",
  //     options: [
  //       "I am Captain America",
  //       "I can do this all day",
  //       "I am worthy for Mjolnir",
  //       "We can not lose hope in any condition",
  //     ],
  //     correctAnswer: "I can do this all day",
  //   },
  //   {
  //     number: 7,
  //     question: "Who is Rocket?",
  //     options: ["Raccoon", "Alien", "Human", "Celestial"],
  //     correctAnswer: "Raccoon",
  //   },
  //   {
  //     number: 8,
  //     question: "How many children of Thanos are in MCU?",
  //     options: ["2", "4", "6", "3"],
  //     correctAnswer: "6",
  //   },
  //   {
  //     number: 9,
  //     question:
  //       "The events of Avengers Endgame are take place in which year in MCU?",
  //     options: ["2019", "2018", "2022", "2023"],
  //     correctAnswer: "2023",
  //   },
  //   {
  //     number: 10,
  //     question: "In MCU, Paul Rudd played the role of which character?",
  //     options: ["Ant Man", "Spider Man", "Star Lord", "Groot"],
  //     correctAnswer: "Ant Man",
  //   },
  //   {
  //     number: 11,
  //     question: "Who is the main villain of Avengers in infinity saga of MCU?",
  //     options: ["Kang", "Ultron", "Thanos", "Loki"],
  //     correctAnswer: "Thanos",
  //   },
  //   {
  //     number: 12,
  //     question: "What is the name of Star Lord's Father?",
  //     options: ["Ego", "Yondu", "Drax", "The Collector"],
  //     correctAnswer: "Ego",
  //   },
  //   {
  //     number: 13,
  //     question: "Who makes the captain america shield in MCU?",
  //     options: ["Nick Fury", "Howard Stark", "Howard Pots", "Arnim Zola"],
  //     correctAnswer: "Howard Stark",
  //   },
  //   {
  //     number: 14,
  //     question:
  //       "Among the following characters, which character is in main six avengers?",
  //     options: ["Hawkeye", "Spider Man", "Doctor Strange", "Captain Marvel"],
  //     correctAnswer: "Hawkeye",
  //   },
  //   {
  //     number: 15,
  //     question:
  //       "Among the following characters, which character is not present in Avengers Endgame final battle?",
  //     options: ["Star Lord", "Gamora", "Nebula", "Ms. Marvel"],
  //     correctAnswer: "Ms. Marvel",
  //   },
  //   {
  //     number: 16,
  //     question:
  //       "Among the following villains, which villain is now a hero, not villain?",
  //     options: ["Hela", "Surtur", "Loki", "Mysterio"],
  //     correctAnswer: "Loki",
  //   },
  //   {
  //     number: 17,
  //     question:
  //       "Who is the villain of Doctor Strange in the multiverse of madness?",
  //     options: [
  //       "Scarlet Witch",
  //       "Evil Doctor Strange",
  //       "Defender Doctor Strange",
  //       "America Chavez",
  //     ],
  //     correctAnswer: "Scarlet Witch",
  //   },
  //   {
  //     number: 18,
  //     question: "Ms. Marvel is the fan of which character?",
  //     options: ["Captain America", "Hulk", "Captain Marvel", "Wasp"],
  //     correctAnswer: "Captain Marvel",
  //   },
  //   {
  //     number: 19,
  //     question:
  //       "In Avengers 2012, who save the life of Iron Man who is falling from space?",
  //     options: ["Thor", "Captain America", "Hulk", "Black Widow"],
  //     correctAnswer: "Hulk",
  //   },
  //   {
  //     number: 20,
  //     question: "Who is the real leader of all Avengers in MCU?",
  //     options: ["Iron Man", "Captain America", "Thor", "Doctor Strange"],
  //     correctAnswer: "Captain America",
  //   },
  //   {
  //     number: 21,
  //     question: "Who is the real leader of all Avengers in MCU?",
  //     options: ["Iron Man", "Captain America", "Thor", "Doctor Strange"],
  //     correctAnswer: "Captain America",
  //   },
  // ];

  // const [pageNumber, setPageNumber] = useState(0)
  // const usersPerPage = 10;
  // const pagesVisited = pageNumber * usersPerPage;

  // const displayedUsers = quizzQuestions.slice(pagesVisited, pagesVisited + usersPerPage).map((user)=>{
  //   return (
  //     <div className="container">
  //       <h3>{user.number}</h3>
  //       <h5>{user.question}</h5>
  //       <h4>{user.correctAnswer}</h4>
  //     </div>
  //   )
  // })

  // const pageCount = Math.ceil(quizzQuestions.length / usersPerPage)

  // const changePage = (selected) => {
  //   setPageNumber(selected)
  //   // console.log(selected)
  //   // console.log(pageNumber)
  // }

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating an asynchronous process with setTimeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      props.setProgress(50);
    } else {
      props.setProgress(100);
    }
  }, [loading, props.setProgress]);

  if (loading) {
    return (
      <div>
        <LoadingBar height={3} color="#f11946" progress={50} />
        <div style={{marginLeft: '45%', marginTop: '150px'}} >
        <MoonLoader color="red"/>
        </div>
      </div>
    );
  }

  return (
    <>
      <img
        className=".img-fluid"
        src={Avengers_3}
        alt="This is not found."
        style={{ width: "100%", height: "100%" }}
      />

      <div className="welcome_section" style={{ marginTop: "120px" }}>
        <div className="row">
          <img
            src={Home_Page_Welcome_Captain_America}
            className="col-lg-4 col-md-5 welcome_image"
            alt="This is not found."
            style={{ borderRadius: "100%", marginBottom: '40px' }}
          />
          <div className="col-lg-8 col-md-7">
            <h2 className="mt-0 text-danger">
              Welcome to the Marvel Cinematic Universe Fans Website!
            </h2>
            <p className="" style={{ textAlign: "justify" }}>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; This is the fans website
              on Marvel Cinematic Universe. If you already have a little bit
              knowledge about MCU, then this webiste is very helpful to you.
              This contains all the major information about the MCU (Marvel
              Cinematic Universe). In this website, you can easily get the
              detailed information about all the movies of MCU from 2008 to
              2023. Moreover, by this website, you can easily get the detailed
              information about all the series of MCU from 2020 to 2023. You can
              also get every major information about your favourite superhero
              and not only your favourite but you can also know every major
              information about all the superheroes as the characters.
            </p>
            <p className="" style={{ textAlign: "justify" }}>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; In this website, you can
              also test your knowledge about the movies, series and superhero
              charaters of MCU by attending a quizz. By this quizz, you can test
              your knowledge about MCU in terms of scores that you mark in that
              quizz. So, this website is the great place to enhance your
              knowledge about MCU and also a great place to test your current
              knowledge and the knowledge after visiting this website by a fair
              quizz. So, lets started. Best of luck for you to enhance your
              knowledge about MCU.
            </p>
            <p className="" style={{ textAlign: "justify" }}>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; For the detailed
              information about movies, superheroes and series, you have to
              logged in your account into the system. So, click here to{" "}
              <span
                className="text-danger test"
                style={{}}
                onClick={() => {
                  navigate("/Login");
                }}
              >
                Log In
              </span>
            </p>
            <p className="" style={{ textAlign: "justify" }}>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; If, you don't have any
              account, so first of all create your account through sign up to get knowledge about MCU. So,
              click here to{" "}
              <span
                className="text-danger test"
                style={{}}
                onClick={() => {
                  navigate("/Signup");
                }}
              >
                Sign Up
              </span>
            </p>
          </div>
          <hr className="my-5" />
        </div>
      </div>

      <div className="container" style={{ marginTop: "30px" }}>
        <h3 className="text-danger" style={{ marginBottom: "40px" }}>
          MCU Timeline :
        </h3>
        <img
          className="timeline_image"
          src={MCU_Timeline}
          alt="This is not found."
        />
        <div className="timeline_content my-5">
          <p style={{ textAlign: "justify" }}>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The timeline of the Marvel
            Cinematic Universe (MCU) is a complex and interconnected narrative
            that spans multiple movies and TV series. The following provides a
            general overview of the MCU timeline up until the present point:
          </p>
          <h5>Pre-20th Century:</h5>
          {/* <p> */}
          <li style={{ textAlign: "justify" }}>
            Events of "Captain America: The First Avenger" take place during
            World War II, introducing Steve Rogers as Captain America and the
            villainous Red Skull.
          </li>
          {/* </p> */}
          <h5 className="mt-4">1940s-1990s:</h5>
          {/* <p> */}
          <li style={{ textAlign: "justify" }}>
            "Captain Marvel" reveals events from the 1990s, featuring Carol
            Danvers as Captain Marvel and the origin of Nick Fury's eye injury.
          </li>
          {/* </p> */}
          <h5 className="mt-4">Phase One:</h5>
          <li style={{ textAlign: "justify" }}>
            "Iron Man" marks the beginning of the modern MCU, introducing Tony
            Stark as Iron Man.
          </li>
          <li style={{ textAlign: "justify" }}>
            "The Incredible Hulk" follows Bruce Banner's transformation into the
            Hulk.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Iron Man 2" delves further into Tony Stark's struggles and
            introduces Black Widow/Natasha Romanoff.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Thor" introduces the Norse God of Thunder, Thor.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Captain America: The First Avenger" explores Steve Rogers' journey
            to becoming Captain America.
          </li>
          <li style={{ textAlign: "justify" }}>
            "The Avengers" unites the core Avengers team (Iron Man, Captain
            America, Thor, Hulk, Black Widow, and Hawkeye) to face Loki and the
            Chitauri invasion of New York City.
          </li>
          <h5 className="mt-4">Phase Two:</h5>
          <li style={{ textAlign: "justify" }}>
            "Iron Man 3" deals with the aftermath of the battle of New York and
            Tony Stark's personal struggles.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Thor: The Dark World" explores the Dark Elves and the Aether.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Captain America: The Winter Soldier" reveals the return of Bucky
            Barnes as the Winter Soldier and uncovers a SHIELD conspiracy.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Guardians of the Galaxy" introduces the cosmic side of the MCU and
            the Infinity Stones.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Avengers: Age of Ultron" sees the Avengers confront Ultron, an AI
            created by Tony Stark, and introduces Vision and Scarlet Witch.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Ant-Man" introduces Scott Lang as the new Ant-Man.
          </li>
          <h5 className="mt-4">Phase Three:</h5>
          <li style={{ textAlign: "justify" }}>
            "Captain America: Civil War" divides the Avengers into opposing
            factions led by Captain America and Iron Man.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Doctor Strange" introduces the mystical arts and other dimensions
            in the MCU.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Guardians of the Galaxy Vol. 2" explores Star-Lord's heritage.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Spider-Man: Homecoming" follows Peter Parker's adventures as
            Spider-Man.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Thor: Ragnarok" leads to the destruction of Asgard and the
            emergence of Hela, the Goddess of Death.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Black Panther" introduces Wakanda and its king, T'Challa, as Black
            Panther.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Avengers: Infinity War" culminates in a devastating battle against
            the powerful Thanos, who collects all six Infinity Stones and snaps
            half of all life out of existence.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Ant-Man and The Wasp" takes place before and during the events of
            "Infinity War."
          </li>
          <li style={{ textAlign: "justify" }}>
            "Captain Marvel" shows the return of Carol Danvers and her role in
            the Kree-Skrull war.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Avengers: Endgame" follows the Avengers' desperate attempt to undo
            Thanos' snap and bring back those who vanished.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Spider Man: Far From Home" shows the struggle of Spider Man to save
            the Earth and take control of Edith (AI) after the death of Iron
            Man.
          </li>
          <h5 className="mt-4">Phase Four:</h5>
          <li style={{ textAlign: "justify" }}>
            "WandaVision" describes the life of Wanda Maximoff after the death
            of Vision. This series also introduces the real Scarlet Witch in
            MCU.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Falcon and Winter Soldier" introduces the Falcon as new Captain
            America in MCU and also describes the life of Winter Soldier after
            the Captain America (Steve Rogers) in MCU.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Loki" introduces the multiverse for Loki. It describes the life of
            Loki with his different variants and stealing the Tasseract in TVA
            (Time Variant Authority). This series also introduces the Kang in
            MCU named He Who Remains.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Black Widow" shows the origin of Black Widow along with her sister
            Yelena. Its events take place after the Captain America: Civil War
            and before Avengers: Infinity War.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Shang-Chi and the Legend of the Ten Rings" introduces the Shang Chi
            as the new character and it also introduces the Ten Rings in MCU.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Eternals" introduces a new team named Eternals who are created by
            Celestials and Eternals save the Earth by going against the
            celestials.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Hawkeye" describes the life of Hawkeye after his retirement from
            Avengers, moreover, it also introduces the Kate Bishop in MCU.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Spider Man: No Way Home" introduces the multiverse in the MCU and
            also properly describes the life of Spider Man who is unknown to
            everyone in the main universe.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Moon Knight" introduces the new character Moon Knight in MCU with
            his moon God Khonshu.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Ms Marvel" the Ms Marvel as new character in MCU and here Bangels
            who can travel in time.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Doctor Strange in the Multiverse of Madness" explores the
            multiverse and it introduces the America Chavez and this movie gives
            the rise to the Scarlet Witch and also shows the different variants
            of Doctor Strange.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Thor Love and Thunder" brings the Mighty Thor and daughter of Gorr
            the God Butcher in MCU and it also describes the life of Thor after
            leaving Guardians of the Galaxy.
          </li>
          <li style={{ textAlign: "justify" }}>
            "I am Groot" describes the origin of Groot.
          </li>
          <li style={{ textAlign: "justify" }}>
            "She Hulk" introduces the She Hulk as a new character in MCU and she
            was the sister of Bruce Banner (Hulk).
          </li>
          <li style={{ textAlign: "justify" }}>
            "Black Panther: Wakanda Forever" introduces the Namor in MCU and it
            also brings the new Black Panther in MCU.
          </li>
          <h5 className="mt-4">Phase Five:</h5>
          <li style={{ textAlign: "justify" }}>
            "Ant Man and the Wasp: Quantumania" explores the quantum realm and
            it introduces the Kang the Conqueror in MCU, it also explores the
            future threats from different variants of kangs in the multiverse.
          </li>
          <li style={{ textAlign: "justify" }}>
            "Guardians of the Galaxy Vol.3" explores the of orign of Rocket from
            a simple raccoon to captain of guardians of the galaxy. This movie
            gives the great end to old guardians team members and introduces the
            new characters and guardians of the galaxy.
          </li>
          introduces
        </div>

        <hr className="my-5" />
      </div>

      <div className="container" style={{ marginTop: "30px" }}>
        <h3 className="text-danger" style={{ marginBottom: "60px" }}>
          Some Famous MCU Movies :
        </h3>
        <div
          id="carouselExampleControls"
          className="carousel slide my-5 movies_carousal"
          data-bs-ride="carousel"
          // style={{position: 'relative'}}
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{ width: "80%", marginLeft: "10%" }}
            >
              <img
                src={Home_Page_Avengers_Endgame_Poster}
                className="d-block w-100 home_page_movie_image"
                alt="This is not found."
              />
              <h3 className="my-2" style={{ textAlign: "center" }}>
                Avengers: Endgame
              </h3>
            </div>
            <div
              className="carousel-item"
              style={{ width: "80%", marginLeft: "10%" }}
            >
              <img
                src={Home_Page_Avengers_Infinity_War_Poster}
                className="d-block w-100 home_page_movie_image"
                alt="This is not found."
              />
              <h3 className="my-2" style={{ textAlign: "center" }}>
                Avengers: Infinity War
              </h3>
            </div>
            <div
              className="carousel-item"
              style={{ width: "80%", marginLeft: "10%" }}
            >
              <img
                src={Home_Page_Avengers_Age_Of_Ultron_Poster}
                className="d-block w-100 home_page_movie_image"
                alt="This is not found."
              />
              <h3 className="my-2" style={{ textAlign: "center" }}>
                Avengers: Age of Ultron
              </h3>
            </div>
            <div
              className="carousel-item"
              style={{ width: "80%", marginLeft: "10%" }}
            >
              <img
                src={Home_Page_The_Avengers_Poster}
                className="d-block w-100 home_page_movie_image"
                alt="This is not found."
              />
              <h3 className="my-2" style={{ textAlign: "center" }}>
                The Avengers
              </h3>
            </div>
            <div
              className="carousel-item"
              style={{ width: "80%", marginLeft: "10%" }}
            >
              <img
                src={Home_Page_Captain_America_Civil_War_Poster}
                className="d-block w-100 home_page_movie_image"
                alt="This is not found."
              />
              <h3 className="my-2" style={{ textAlign: "center" }}>
                Captain America: Civil War
              </h3>
            </div>
            <div
              className="carousel-item"
              style={{ width: "80%", marginLeft: "10%" }}
            >
              <img
                src={Home_Page_Avengers_Spider_Man_No_Way_Home_Poster}
                className="d-block w-100 home_page_movie_image"
                alt="This is not found."
              />
              <h3 className="my-2" style={{ textAlign: "center" }}>
                Spider Man: No Way Home
              </h3>
            </div>
            <div
              className="carousel-item"
              style={{ width: "80%", marginLeft: "10%" }}
            >
              <img
                src={Home_Page_Iron_Man_3_Poster}
                className="d-block w-100 home_page_movie_image"
                alt="This is not found."
              />
              <h3 className="my-2" style={{ textAlign: "center" }}>
                Iron Man 3
              </h3>
            </div>
            <div
              className="carousel-item"
              style={{ width: "80%", marginLeft: "10%" }}
            >
              <img
                src={Home_Page_Thor_Ragnarok_Poster}
                className="d-block w-100 home_page_movie_image"
                alt="This is not found."
              />
              <h3 className="my-2" style={{ textAlign: "center" }}>
                Thor Ragnarok
              </h3>
            </div>
            <div
              className="carousel-item"
              style={{ width: "80%", marginLeft: "10%" }}
            >
              <img
                src={Home_Page_GOTG3_Poster}
                className="d-block w-100 home_page_movie_image"
                alt="This is not found."
              />
              <h3 className="my-2" style={{ textAlign: "center" }}>
                Guardians of the Galaxy Vol.3
              </h3>
            </div>
            <div
              className="carousel-item"
              style={{ width: "80%", marginLeft: "10%" }}
            >
              <img
                src={Home_Page_Ant_Man_And_The_Wasp_Quantumania_Poster}
                className="d-block w-100 home_page_movie_image"
                alt="This is not found."
              />
              <h3 className="my-2" style={{ textAlign: "center" }}>
                Ant Man and The Wasp: Quantumania
              </h3>
            </div>
          </div>
          <button
            className="carousel-control-prev bg-dark"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
            style={{ width: "10%" }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next bg-dark"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
            style={{ width: "10%" }}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <hr className="my-5" />
      </div>

      {/* <div style={{ marginBottom: "800px" }}></div> */}

      {/* {displayedUsers}
    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={'paginationBttns'}
      previousLinkClassName={'previousBttn'}
      nextLinkClassName={'nextBttn'}
      disabledClassName={'paginationDisabled'}
      activeClassName={'paginationActive'}
    /> */}
    </>
  );
}
