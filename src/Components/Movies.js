import React, {useState, useEffect} from "react";
import Iron_Man_2_image from "../MyImages/Iron_Man_2_image.jpg";
import Iron_Man_1_image from "../MyImages/Iron_Man_1_image.jpg";
import Iron_Man_3_image from "../MyImages/Iron_Man_3_image.jpg";
import The_Incredible_Hulk from "../MyImages/The_Incredible_Hulk.jpg";
import Thor_1 from "../MyImages/Thor_1.jpg";
import Captain_America_The_First_Avenger from "../MyImages/Captain_America_The_First_Avenger.jpg";
import Avengers_1 from "../MyImages/Avengers_1.jpg";
import Thor_The_Dark_World from "../MyImages/Thor_The_Dark_World.jpg";
import Captain_America_The_Winter_Soldier from "../MyImages/Captain_America_And_The_Winter_Soldier.jpg";
import Guardians_Of_The_Galaxy_Vol_1 from "../MyImages/Guardians_Of_The_Galaxy_Vol_1.jpg";
import Avengers_Age_Of_Ultron from "../MyImages/Avengers_Age_Of_Ultop.jpg";
import Ant_Man_1 from "../MyImages/Ant_Man_1.jpg";
import Captain_America_Civil_War from "../MyImages/Captain_America_Civil_War.jpg";
import Doctor_Strange_1 from "../MyImages/Doctor_Strange_1.jpg";
import Guardians_Of_The_Galaxy_Vol_2 from "../MyImages/Guardians_Of_The_Galaxy_Vol_2.jpg";
import Spider_Man_Homecoming from "../MyImages/Spider_Man_Homecoming.jpg";
import Thor_Ragnarok from "../MyImages/Thor_Ragnarok.jpg";
import Black_Panther_1 from "../MyImages/Black_Panther_1.jpg";
import Avengers_Infinity_War from "../MyImages/Avengers_Infinity_War.jpg";
import Ant_Man_And_The_Wasp from "../MyImages/Ant_Man_And_The_Wasp.jpg";
import Captain_Marvel_1 from "../MyImages/Captain_Marvel_1.jpg";
import Avengers_Endgame from "../MyImages/Avengers_Endgame.jpg";
import Spider_Man_Far_From_Home from "../MyImages/Spider_Man_Far_From_Home.jpg";
import Black_Widow_1 from "../MyImages/Black_Widow_1.jpg";
import Shang_Chi_And_The_Legend_Of_Ten_Rings from "../MyImages/Shang_Chi_And_The_Legend_Of_Ten_Rings.jpeg";
import Eternals_1 from "../MyImages/Eternals_1.jpg";
import Spider_Man_No_Way_Home from "../MyImages/Spider_Man_No_Way_Home.jpg";
import Doctor_Strange_In_The_Multiverse_Of_Madness from "../MyImages/Doctor_Strange_In_The_Multiverse_Of_Madness.jpg";
import Thor_Love_And_Thunder from "../MyImages/Thor_Love_and_Thunder.jpg";
import Black_Panther_Wakanda_Forever from "../MyImages/Black_Panther_Wakanda_Forever.jpg";
import Ant_Man_And_The_Wasp_Quantumania from "../MyImages/Ant_Man_And_The_Wasp_Quantumania.jpg";
import Guardians_Of_The_Galaxy_Vol_3 from "../MyImages/Guardians_Of_The_Galaxy_Vol_3.jpg";
import '../Movies.css'
import LoadingBar from 'react-top-loading-bar'
import { useNavigate } from "react-router-dom";
import {MoonLoader} from "react-spinners";

export default function Movies(props) {

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
        <h1>Loading Movies...</h1>
        <div style={{marginLeft: '45%', marginTop: '130px'}} >
        <MoonLoader color="red"/>
        </div>
      </div>
    );
  }




  // let HoverStyle = {
  //   color: "black",
  // };

  let styeForMode = {
    backgroundColor: props.mode==='dark'?'#00000052':'white',
    color: props.mode==='dark'?'white':'black'
  }

  const hoverFunction = (e) => {
    e.target.style.color = props.mode === 'dark'? "white":'black';
  };
  return (
    <>
    {/* {props.setProgress(0)} */}
    {/* {props.setProgress(30)} */}
      <div className="d-flex">
        <div
          id="list-example"
          className="list-group"
          style={{
            width: "22%",
            height: "600px",
            position: "sticky",
            top: "56px",
            overflowY: "auto",
          }}
        >
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            // onMouseOut={(e) => {
            //   e.target.style.color = "black";
            // }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-1"
            style={styeForMode}
          >
            Iron Man 1
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-2"
            style={styeForMode}
          >
            The Incredible Hulk
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-3"
            style={styeForMode}
          >
            Iron Man 2
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-4"
            style={styeForMode}
          >
            Thor
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-5"
            style={styeForMode}
          >
            Captain America: The First Avenger
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-6"
            style={styeForMode}
          >
            The Avengers
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-7"
            style={styeForMode}
          >
            Iron Man 3
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-8"
            style={styeForMode}
          >
            Thor: The Dark World
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-9"
            style={styeForMode}
          >
            Captain America: The Winter Soldier
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-10"
            style={styeForMode}
          >
            Guardians of the Galaxy
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-11"
            style={styeForMode}
          >
            Avengers: Age of Ultron
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-12"
            style={styeForMode}
          >
            Ant Man
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-13"
            style={styeForMode}
          >
            Captain America: Civil War
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-14"
            style={styeForMode}
          >
            Doctor Strange
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-15"
            style={styeForMode}
          >
            Guardians of the Galaxy Vol.2
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-16"
            style={styeForMode}
          >
            Spider Man: Homecoming
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-17"
            style={styeForMode}
          >
            Thor Ragnarok
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-18"
            style={styeForMode}
          >
            Black Panther
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-19"
            style={styeForMode}
          >
            Avengers: Infinity War
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-20"
            style={styeForMode}
          >
            Ant Man and the Wasp
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-21"
            style={styeForMode}
          >
            Captain Marvel
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-22"
            style={styeForMode}
          >
            Avengers: Endgame
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-23"
            style={styeForMode}
          >
            Spider Man: Far From Home
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-24"
            style={styeForMode}
          >
            Black Widow
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-25"
            style={styeForMode}
          >
            Shang-Chi and the Legend of Ten Rings
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-26"
            style={styeForMode}
          >
            Eternals
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-27"
            style={styeForMode}
          >
            Spider Man: No Way Home
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-28"
            style={styeForMode}
          >
            Doctor Strange in the Multiverse of Madness
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-29"
            style={styeForMode}
          >
            Thor Love and Thunder
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-30"
            style={styeForMode}
          >
            Black Panther: Wakanda Forever
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-31"
            style={styeForMode}
          >
            Ant Man and the Wasp: Quantumania
          </a>
          <a
            onMouseOver={(e) => {
              e.target.style.color = "#f5493d";
            }}
            onMouseOut={(e) => hoverFunction(e)}
            className="list-group-item list-group-item-action"
            href="#list-item-32"
            style={styeForMode}
          >
            Guardians of the Galaxy Vol.3
          </a>
        </div>
        {/* {props.setProgress(70)} */}
        <div
          style={{ width: "78%" }}
          data-bs-spy="scroll"
          data-bs-target="#list-example"
          data-bs-offset="0"
          className="scrollspy-example px-4"
          tabIndex="0"
        >
          <div className="my-4">
            <h3 className="" id="list-item-1">Iron Man 1 (2008)</h3>
            <div>
              <img
                src={Iron_Man_1_image}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                This one is the first of all the Marvel movies. Tony Stark
                eventually inherits his father’s company. Over the years, Stark
                Industries has been manufacturing and supplying weapons across
                the world. Obadiah Stane, a senior personnel in the company, has
                been illegally trafficking weapons. In one of Tony’s
                demonstrations of the Jerico missile, he’s captured by
                terrorists. In the process, Tony is wounded in the chest by
                shrapnel shards from the explosion. In the cave, where Tony is
                kept, is another captive, Dr. Yinsen, who implants an
                electromagnet into Tony’s chest to keep the shards out of his
                heart. The terrorists demand that Tony builds them missiles, but
                Tony and Yinsen build an armored suit powered by an arc reactor.
                Yinsen sacrifices himself and Tony blows his way out destroying
                the terrorist camp. Tony gets found by his friend Colonel James
                Rhodes and begins work on a more advanced suit powered by a more
                powerful arc reactor. He also announces that Stark Industries
                will stop manufacturing weapons which annoys Stane. Tony finds
                out about Stane and flies off to Afghanistan to blow up the bad
                guys who have his guns. We’re introduced to Tony’s secretary,
                Pepper Potts, who hacks into the company’s database to locate
                all illegal shipments. She also informs S.H.I.E.L.D’s agent Phil
                Coulson about Stane’s activities. Stane reverse engineers a new
                suite for himself and steals Tony’s arc leaving him to die. Tony
                manages to get to his old arc reactor. We then have a final
                showdown between Tony (who’s now the Iron Man) and Stane. Tony
                has Pepper overload the giant arc reactor powering his building
                which causes a surge that consumes Stane. The next day, Tony
                announces to the world that he is the Iron Man.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> May 2, 2008 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 7.9/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $140 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$585,796,247</b>{" "}
              </p>
              <h5 className="mt-3 movies_producer_style">Producers of this Movie :-</h5>
              <li>Avi Arad</li>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Jon Favreau</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Robert Downey Jr. (Iron Man)</li>
              <li>Gwyneth Paltrow (Pepper Pots)</li>
              <li>Terrence Howard (James Rhodes)</li>
            </div>
          </div>
          <div className="my-4">
            <h3 id="list-item-2">The Incredible Hulk (2008)</h3>
            <div>
              <img
                src={The_Incredible_Hulk}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                While not shown in this film, Dr. Bruce Banner is subject to
                gamma radiations in an experiment gone wrong. As a result, when
                Bruce is angry, he transforms into the Hulk. In this film, Bruce
                is lying low in Brazil, working in a bottling plant. But due to
                a small cut on his hands, his blood happens to get into one of
                the bottles. This bottle eventually causes a death by gamma
                poisoning and is traced back to Bruce. General Ross and Emil
                Blonsky want to weaponize the Hulk and hence try to capture
                Bruce. But they lose to the Hulk. Blonsky is initially given a
                small dose of the low-power super-soldier serum, this makes him
                stronger and gives him healing powers, but he begins losing his
                mind. After multiple defeats at the hands of the hulk, Blonsky
                finally gets Banner’s blood injected into him. The combination
                of the super-soldier serum and the infected gamma blood
                transforms Blonsky into a mindless beast – Abomination. The Hulk
                battles the Abomination and kills him. After this, Bruce stays
                in British Columbia and slowly learns to turn into the Hulk in a
                controlled manner.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> June 13, 2008 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 7/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $137.5–150 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$264,770,996</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Avi Arad</li>
              <li>Gale Anne Hurd</li>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Louis Leterrier</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Edward Norton (Hulk)</li>
              <li>Tim Roth (Abomination)</li>
              <li>Liv Tyler (Betty Ross)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-3">Iron Man 2 (2010)</h3>
            <div>
              <img
                src={Iron_Man_2_image}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                While the arc reactor, that Tony made, powers his suit, it’s not
                his invention. Many years back his father, Howard, and a Russian
                scientist, Anton Vanko, invented it. Anton tried to sell it for
                profit and is deported back home. Ivan, Anton’s son, happens to
                see the Iron Man powered by his father arc and wants revenge.
                Ivan begins building a mini arc reactor based weapon. At a Grand
                Prix, Ivan attacks Tony who uses his portable suit to become
                Iron Man and defeats Ivan. Seeing this event, Justin Hammer, a
                Start Industry rival, stages Ivan’s death and gets him to build
                armored suits. Tony’s arc reactor uses a Palladium core, and
                this is slowly poisoning him and will kill him soon. As a
                result, Tony makes Pepper the CEO of his company and gets a new
                assistant, Natasha. This is Agent Natasha Romanoff (Black
                Widow), undercover, who is assessing Tony. Nick Fury meets Tony
                and says that he knew Howard Stark back in the day and hands
                Tony some of Howard’s old material. In the 3-D hologram, Tony
                discovers a piece of hidden information for a new element – it’s
                fair to assume that Howard Stark found this by experimenting
                with the Tesseract that hosts the Space Stone. Tony synthesizes
                this element with the help of his computer J.A.R.V.I.S. This new
                element removes the need for Palladium. Meanwhile, Ivan takes
                remote control of all of Justin’s drones and wreaks havoc.
                Rhodes and Iron Man fight them off and defeat Ivan, who
                detonates the drones and himself.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> May 7, 2010 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 6.9/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $170–200 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$623,933,331</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Jon Favreau</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Robert Downey Jr. (Iron Man)</li>
              <li>Gwyneth Paltrow (Pepper Pots)</li>
              <li>Don Cheadle (War Machine)</li>
              <li>Scarlett Johansson (Black Widow)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-4">Thor (2011)</h3>
            <div>
              <img
                src={Thor_1}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                Thor is the son of Odin (king of Asgard) and an arrogant God.
                Loki is this brother. For rupturing the truce between Asgard and
                Jotunheim, Odin exiles Thor to Earth after stripping him off all
                the Godly powers. Thor’s hammer, the source of his power, is
                enchanted such that only the worthy can wield it. Thor gets
                separated from his hammer. While the hammer is found by
                S.H.I.E.L.D, Thor is found by Dr. Jane Foster and Dr. Erik
                Selvig. Thor manages to get to the hammer but is unable to lift
                it because he’s not worthy. Back in Asgard, Loki finds out that
                he’s adopted. While Odin enters his deep slumber, Loki takes
                over the throne. Thor’s friends don’t like this and convince the
                gatekeeper of the Bifröst (rainbow bridge transportation
                thingy), Heimdall, to send them to Earth. Loki gets to know of
                this and sends the Destroyer (an indestructible metallic being
                thingy) to Earth to kill Thor. The Destroyer defeats Thor’s
                friends, but he offers himself as a sacrifice and is struck.
                Because of his worthy actions, Thor’s hammer returns to him.
                Thor destroys the Destroyer and heads back to Asgard to confront
                Loki. The two of them fight, and Thor blows up the Bifröst
                bridge so that no one can enter Asgard and invade it. Odin
                awakens and stops Thor and Loki from falling into the emptiness
                under the bridge. Loki commits suicide by letting himself fall
                off (no he doesn’t die, he returns in The Avengers). Thor and
                Odin reconcile, but Thor is stuck on Asgard. Back on Earth, Jane
                is looking for a way to get to Thor.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> May 6, 2011 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 7/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $150 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$449,326,618</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Kenneth Branagh</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Chris Hemsworth (Thor)</li>
              <li>Natalie Portman (Jane Foster)</li>
              <li>Tom Hiddleston (Loki)</li>
              <li>Anthony Hopkins (Odin)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-5">Captain America: The First Avenger (2011)</h3>
            <div>
              <img
                src={Captain_America_The_First_Avenger}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                This is dated earliest of all the Marvel movies. In 1942, Steve
                Rogers is a small skinny dude, his close buddy is Bucky. Due to
                his physicality, Rogers is rejected for the World War II
                military but is persistent. Dr. Abraham Erskine, head of the
                Super Soldier program, overhears Rogers and deems him a suitable
                candidate because of his selfless nature. Rogers is ultimately
                picked for the program and becomes tall, muscular, super strong,
                agile .. the works and becomes Captain America. A while before
                this, a Nazi officer, Johann Schmidt (also a Hydra operative),
                had gone through an imperfect version of the Super Soldier
                program. Schmidt get his hands on the Tesseract. He intends to
                harness its powers to build weapons and destroy all of America.
                Howard Stark (Tony Stark’s dad), gives Cap a Vibranium shield.
                Schmidt, whose plans are foiled by Cap, reveals that his face
                was merely a mask covering his Red Skull. In one of the missions
                on a train, Bucky falls to his apparent death (no he doesn’t
                die, he comes back in Winter Soldier). In the climax of the
                film, Cap gets on board Red Skull’s plane which is armed with
                the Tesseract weapon. Red Skull touches the Tesseract which
                opens a wormhole and sucks him through (he doesn’t die, Red
                Skull returns in Infinity War). The Tesseract falls into the
                ocean, and Captain America sacrifices himself by crashing the
                plane in the Arctic. He doesn’t die, he gets cryogenically
                frozen. Howard Stark retrieves the Tesseract but is unable to
                find Cap. Howard eventually becomes one of the founding members
                of S.H.I.E.L.D. Cap remains frozen for 70 years.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> July 22, 2011 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 6.9/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $140 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$370,569,774</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Joe Johnston</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Chris Evans (Captain America)</li>
              <li>Hayley Atwell (Peggy Carter)</li>
              <li>Sebastian Stan (Bucky Barnes)</li>
              <li>Hugo Weaving (Red Skull)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-6">The Avengers (2012)</h3>
            <div>
              <img
                src={Avengers_1}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                This one was the first multi-starrer after all the previous
                Marvel movies. Loki, who faked his death, makes a deal with the
                leader of a race called Chitauri. Loki is offered an army in
                exchange for the Tesseract (Space Stone) that’s on Earth. It’s
                important to know that Thanos is the one who’s firing the shots
                here. Via the Chitauri, Thanos has given Loki a mighty Sceptre
                to aid him in the mission of getting the Tesseract. This Sceptre
                contains the Mind Stone, but no one knows about this but Thanos.
                Loki is able to control minds using the Sceptre. The film begins
                with Loki taking over Dr. Selvig and Hawk-Eye’s minds and
                stealing the Tesseract from Nick Fury. Natasha goes to India
                looking for Bruce Banner because the Tesseract is giving out
                gamma radiations which she’s hoping Bruce can trace. Long story
                short, Loki uses the Tesseract to open a portal and the Chitauri
                attack. Iron Man, Captain America, Thor, Hulk, Hawk-Eye, and
                Natasha team together as the Avengers and fight off the aliens.
                Leaders of Earth decide the best way to end the invasion is to
                blow up New York and launch a nuke. Iron Man deflects this
                missile through the worm-hole and blows up the Chitauri
                mothership. Dr. Selvig and Natasha use the Sceptre to close the
                portal (one Infinity Stone vs. another, but no one knows about
                these stones yet). Iron Man falls back through the closing
                portal just in time, and Hulk grabs him midway. Thor takes Loki
                and the Tesseract back to Asgard. The Scepter is confiscated by
                S.H.I.E.L.D.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> May 4, 2012 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 8/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $220 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$1,520,538,536</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Joss Whedon</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Robert Downey Jr. (Iron Man)</li>
              <li>Chris Evans (Captain America)</li>
              <li>Chris Hemsworth (Thor)</li>
              <li>Scarlett Johansson (Black Widow)</li>
              <li>Mark Ruffalo (Hulk)</li>
              <li>Jeremy Renner (Hawkeye)</li>
              <li>Samuel L. Jackson (Nick Fury)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-7">Iron Man 3 (2013)</h3>
            <div>
              <img
                src={Iron_Man_3_image}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                Since the episode of the alien invasion in Avengers, Tony has
                been having panic attacks. Aldrich Killian, once a disabled
                scientist who was rejected by Tony for an idea around healing
                crippling injuries, is the villain in this film. Aldrich’s
                treatment, called Extremis, is unstable. While Extremis
                temporarily cures the subject, it also causes them to explode
                eventually. To cover up these explosions, Aldrich creates a
                terrorist by the name Mandarin and gives it the face of an
                aspiring British actor. He makes it appear like Mandarin has
                been blowing up stuff. Long story short, Aldrich blows up Tony’s
                home, kidnaps Pepper, injects her with Extremis so that Tony
                would be forced to fix the flaw, gets into a brawl with
                everybody, has a showdown with the Iron Man and finally gets
                blown up by a super-powered Pepper. Tony stabilizes the effects
                of Extremis inside of Pepper Pots. Now, she will not explode,
                but it’s not mentioned if she has retained any of her
                superpowers.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> May 3, 2013 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 7.1/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $200 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$1,215,577,205</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Shane Black</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Robert Downey Jr. (Iron Man)</li>
              <li>Gwyneth Paltrow (Pepper Pots)</li>
              <li>Don Cheadle (War Machine)</li>
              <li>Guy Pearce (Aldrich Killian)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-8">Thor: The Dark World (2013)</h3>
            <div>
              <img
                src={Thor_The_Dark_World}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                When the universe was dark, a race called the Dark Elves ruled.
                Then came the Light, and they lost their power. Malekith, the
                ruler of the Dark Elves, wants to use the Aether (Reality Stone)
                and throw the world back into darkness. Now, there is an event
                that aligns all the nine realms together once every 5000 years.
                It’ s called Convergence. Malekith tries to use the Aether to
                darken the world in a previous convergence, but is stopped by
                Thor’s granddad. Hence Malekith puts himself and few other Dark
                Elves in a state of hibernation. In the present day, as the next
                convergence approaches, portals begin to randomly appear in the
                9 realms. Jane goes to investigate one such portal and gets
                sucked into the realm where the Aether has been kept hidden from
                Malekith. Jane activates the Aether by mistake, and it enters
                her. This awakens Malekith and the other hibernating Dark Elves.
                The Aether begins to kill Jane because of its power. Long story
                short – Thor takes Jane to Asgard, Malekith attacks Asgard to
                get Jane, Thor’s mother dies protecting Jane, Loki joins forces
                with Thor to avenge his mother, Loki tricks Malekith by bringing
                Thor and Jane as his prisoners, Malekith extracts the Aether
                from Jane, Loki dies (no he doesn’t, Loki is faking it again,
                he’ll be back in the end), Thor and Malekith fight through the
                various portals, Thor finally kills Malekith. In the end, Loki
                is posing as Odin and ruling Asgard. The real Odin is on Earth,
                we’ll get to that in Ragnarok.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> November 8, 2013 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 6.8/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> 170 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$644,783,140</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Alan Taylor</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Chris Hemsworth (Thor)</li>
              <li>Natalie Portman (Jane Foster)</li>
              <li>Tom Hiddleston (Loki)</li>
              <li>Christopher Eccleston (Malekith)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-9">Captain America: The Winter Soldier (2014)</h3>
            <div>
              <img
                src={Captain_America_The_Winter_Soldier}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                This film is about the return of Bucky, Cap’s old friend. After
                he falls off the train (in the first Captain America film), he’s
                captured by Hydra and is brain-washed and is given instructions
                to take down S.H.I.E.L.D. We also learn that S.H.I.E.L.D has
                been infiltrated by Hydra right from its inception. The present
                executive in S.H.I.E.L.D who is a Hydra operative is Alexander
                Pierce. Hydra is using three S.H.I.E.L.D helicarriers to predict
                potential threats to Hydra and plans to eliminate them. Nick,
                Natasha, Captain America and Falcon (Sam Wilson) join forces to
                stop Hydra and the Winter Soldier. Cap is able to use electronic
                chips to override all the helicarriers. He fights Bucky but
                doesn’t want to kill him. The override causes the helicarriers
                to fire at each other, and they crash. Cap falls into the river
                below. Bucky pulls Cap out of the river before running into the
                woods, indicating that the Hydra mind-control is wearing off.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> April 4, 2014 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 7.8/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $170–177 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$714,421,503</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Anthony Russo</li>
              <li>Joe Russo</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Chris Evans (Captain America)</li>
              <li>Scarlett Johansson (Black Widow)</li>
              <li>Anthony Mackie (Falcon)</li>
              <li>Sebastian Stan (Winter Soldier)</li>
              <li>Samuel L. Jackson (Nick Fury)</li>
              <li>Emily VanCamp (Sharon Carter)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-10">Guardians of the Galaxy (2014)</h3>
            <div>
              <img
                src={Guardians_Of_The_Galaxy_Vol_1}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                This film introduces us to a set of new characters to the Marvel
                movies catalogue. Peter Quill – a half human, half alien who is
                raised by Yondu. Gamora and Nebula, the adopted daughters of
                Thanos (they don’t like each other). Rocket Raccoon, a talking
                raccoon who’s a sharp technician and engineer. Groot, a powerful
                tree creature who’s vocabulary consists of “I am Groot”. Groot
                and Rocket are bounty hunters. Drax, a powerful being whose
                family was killed by Ronan and Thanos. Quill gets his hands on a
                powerful orb, the Power Stone. Gamora and Nebula are sent to
                retrieve it while Rocket and Groot go after him for the bounty.
                Rocket, Groot, Quill, and Gamora are arrested, and in the Nova
                Corp prison, they run into Drax. The five of them form a team
                and fight off Ronan who’s commissioned to get the Power Stone.
                The team is able to use the Power Stone to overthrow Ronan and
                hand over the stone to the Nova Corp. Quill initially promises
                the Power Stone to Yondu but tricks him in the end because he
                feels it will be safer in the hands of the Nova Corp.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> August 1, 2014 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 8/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $170 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$773,350,147</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>James Gunn</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Chris Pratt (Star Lord)</li>
              <li>Zoe Saldana (Gamora)</li>
              <li>Vin Diesel (Groot)</li>
              <li>Bradley Cooper (Rocket)</li>
              <li>Karen Gillan (Nebula)</li>
              <li>Dave Bautista (Drax The Destroyer)</li>
              <li>Michael Rooker (Yondu)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-11">Avengers: Age of Ultron (2015)</h3>
            <div>
              <img
                src={Avengers_Age_Of_Ultron}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                The Avengers retrieve the Sceptre (Mind Stone) from Baron
                Wolfgang von Strucker. Tony and Bruce use the Mind Stone to
                develop an A.I driven program called Ultron which is a planned
                means for global defense. Ultron goes rogue and tries to destroy
                J.A.R.V.I.S and infiltrates Tony’s robots. Ultron believes that
                humans need to be eradicated for the protection of the planet.
                He escapes with the Sceptre and heads to Strucker’s headquarters
                and builds himself a new body. Ultron meets Peter and Wanda (the
                mutants that Strucker created using the Scepter) and takes them
                on to his side by feeding them stories about how Tony Stark’s
                weapons killed their parents. The Avengers attack Ultron but
                have their asses handed to them by Wanda’s hallucinations and
                are forced to retreat. Ultron meets with Ulysses Klaue, an arms
                dealer who has access to Vibranium from a place called Wakanda.
                Ultron forges a new body which is part-synthetic, part-Vibraniam
                and is powered by the Mind Stone. Just as Ultron uploads himself
                into this new body, Wanda reads his intentions and realizes that
                Ultron plans for human extinction. She helps the Avengers
                procure the synthetic body. Tony finds J.A.R.V.I.S who was in
                hiding within the Internet and secretly uploads him into the
                body. Thus is born Vision. Ultron uses all the Vibranium to lift
                up an entire city and plans to drop it causing a global effect
                like a meteorite would and eradicate everything but metal
                (robots). Long story short, the Avengers with the help of Peter,
                Wanda and Vision, stop Ultron. Hulk, not wanting to endanger
                people of Earth, uses Ultron’s jet and takes off someplace
                unknown (he’ll be back in Ragnarok).
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> May 1, 2015 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 7.3/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $250–444 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$1,405,018,048</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Joss Whedon</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Robert Downey Jr. (Iron Man)</li>
              <li>Chris Evans (Captain America)</li>
              <li>Chris Hemsworth (Thor)</li>
              <li>Scarlett Johansson (Black Widow)</li>
              <li>Mark Ruffalo (Hulk)</li>
              <li>Jeremy Renner (Hawkeye)</li>
              <li>Elizabeth Olsen (Scarlet Witch)</li>
              <li>James Spader (Ultron)</li>
              <li>Paul Bettany (Vision)</li>
              <li>Aaron Taylor-Johnson (Quick Silver)</li>
              <li>Samuel L. Jackson (Nick Fury)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-12">Ant Man (2015)</h3>
            <div>
              <img
                src={Ant_Man_1}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                This one has certain uniqueness compared to all the Marvel
                movies. Hank Pym is a scientist who’s the inventor of the Pym
                Particle – the thing that can alter the size of objects. He
                resigns from S.H.I.E.L.D because he doesn’t want it falling into
                the wrong hands. Hank builds the Ant-Man suit which allows him
                to shrink down to the size of an ant but gain strength in
                inverse proportion. Basically the smaller you get, the more
                powerful you become. He also devises a way to mentally
                communicate with ants. Hank’s wife, Janet, used to operate using
                the Wasp suit. In one of their missions, Hank and Janet are
                trying to disarm a nuclear missile which they can’t get inside.
                Janet decides to enter the rocket by shrinking down to subatomic
                size and gets lost in subatomic space. In the present day, an
                evil man by the name of Darren Cross is building a replica of
                the Ant-Man suit, called the Yellow Jacket, and wants to sell it
                to Hydra. Long story short, Hank and his daughter, Hope, recruit
                a dude named Scott who dawns the suit to become Ant-Man and
                stops Cross. Ant-Man goes into the subatomic state to sabotage
                Cross’ suit and kills him. However, unlike Janet, he’s able to
                use the enlarger to get himself back to his actual size.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> July 17, 2015 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 7.3/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $130 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$519,311,965</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Peyton Reed</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Paul Rudd (Ant Man)</li>
              <li>Evangeline Lilly (Hope Van Dyne)</li>
              <li>Corey Stoll (Yellow Jacket)</li>
              <li>Michael Douglas (Hank Pym)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-13">Captain America: Civil War (2016)</h3>
            <div>
              <img
                src={Captain_America_Civil_War}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                This one is the first epic film in all the Marvel movies. When
                Bucky was under the Hydra Mind Control, he was given the
                assignment to kill Howard Stark and his wife. Bucky kills Tony’s
                parents. At some point in time after the Winter Soldier movie,
                Cap gets to know but keeps it a secret from Tony. In the current
                day, the UN feels that the Avengers have become way too powerful
                and they need to be “governed”. That the events that involve the
                Avengers cause way too many casualties. Tony is ridden with
                guilt and agrees to sign up with this. Natasha, Vision, and
                Rhodes are with Tony whereas Captain America, Falcon, Hawk-Eye,
                and Wanda are against it. Enter Zemo, a guy who has lost his
                family in the Ultron incident. He wants revenge and understands
                that there is no point in fighting the Avengers. Instead, he
                gets his hands on the information that Bucky assassinated Tony’s
                parents and plans to use this to turn Iron Man against Cap. Zemo
                tracks down the document that contains the trigger words to
                activate Bucky’s brainwashing. We are then introduced to
                T’Challa who appears with his father, T’Chaka, king of Wakanda,
                at the UN signing. Zemo instructs Bucky to bomb this meeting,
                and T’Chaka is killed. T’Challa (secretly the Black Panther)
                seeks revenge and joins Team Iron Man. Tony also gets Spider-Man
                to join him. Cap retrieves Bucky who’s temporarily free of the
                Mind Control. Team Captain America gets Ant-Man to join them.
                The two sides have a massive showdown at an airport leaving
                Rhodes with a crushed leg. Team Captain America are arrested
                except for Cap and Bucky. Zemo makes the Avengers believe that
                he’s going to activate all the other Winter Soldiers (who are in
                cryosleep) in a secret facility. Cap and Bucky get to the
                facility. Iron-Man realizes that Bucky was framed and also heads
                to the location. But Zemo has killed off all the Winter Soldiers
                and plays Tony a video that shows Bucky killing his parents.
                Enraged, Iron Man attacks and dismembers Bucky’s arm. Cap
                deactivated the Iron Man suit and saves Bucky. Zemo is
                successful in breaking up the Avengers and plans to commit
                suicide but Black Panther, stops him and hands him over to the
                authorities.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> May 6, 2016 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 7.8/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $250 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$1,155,046,416</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Anthony Russo</li>
              <li>Joe Russo</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Robert Downey Jr. (Iron Man)</li>
              <li>Chris Evans (Captain America)</li>
              <li>Anthony Mackie (Falcon)</li>
              <li>Scarlett Johansson (Black Widow)</li>
              <li>Paul Rudd (Ant Man)</li>
              <li>Jeremy Renner (Hawkeye)</li>
              <li>Elizabeth Olsen (Scarlet Witch)</li>
              <li>Tom Holland (Spider Man)</li>
              <li>Paul Bettany (Vision)</li>
              <li>Sebastian Stan (Winter Soldier)</li>
              <li>Don Cheadle (War Machine)</li>
              <li>Daniel Brühl (Helmut Zemo)</li>
              <li>Chadwick Boseman (Black Panther)</li>
              <li>Emily VanCamp (Sharon Carter)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-14">Doctor Strange (2016)</h3>
            <div>
              <img
                src={Doctor_Strange_1}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                This has got to be visually the most exciting in all the Marvel
                movies. Doctor Stephan Strange is an arrogant neurosurgeon whose
                hands get damaged in a car accident. Unable to perform any
                operations Dr. Strange begins searching various options to get
                better. He stumbles upon a paraplegic who mysteriously regained
                the use of his legs. This leads him to Nepal where he meets the
                Ancient One (an aged sorcerer) and Mordo (a fellow sorcerer).
                Dr. Strange learns that sorcerer Kaecilius and his men stole
                some ancient mystical text to open a portal to the Dark
                Dimension. Dr. Strange trains under the Ancient One and learns
                quickly. He also learns how to use the Eye Of Agamotto (Time
                Stone) to bend time. In a fight against Kaecilius, the Ancient
                One gets fatally wounded and dies. Dr. Strange, Mordo and Wong
                (the keeper of the books) are left to stop Kaecilius by
                themselves. Dr. Strange enters the Dark Dimension to face
                Dormammu (the ruler) and creates a time loop around himself.
                Dormammu repeatedly kills Dr. Strange only to realize he’s stuck
                in an endless loop. He agrees to leave Earth and take Kaecilius
                and his men with him. The Earth is safe.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> November 4, 2016 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 7.5/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $165 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$677,796,076</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Scott Derrickson</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Benedict Cumberbatch (Doctor Strange)</li>
              <li>Benedict Wong (Wong)</li>
              <li>Rachel McAdams (Christine Palmer)</li>
              <li>Chiwetel Ejiofor (Baron Mordo)</li>
              <li>Tilda Swinton (Ancient One)</li>
              <li>Mads Mikkelsen (Kaecilius)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-15">Guardians of the Galaxy Vol.2 (2017)</h3>
            <div>
              <img
                src={Guardians_Of_The_Galaxy_Vol_2}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                This film is about Quill’s Daddy Issues. We learn that a
                Celestial being called Ego plans on terraforming countless
                planets to extend his own consciousness. He’s been going around
                impregnating women from various worlds to give birth to an
                offspring who would hopefully be able to wield the celestial
                powers. Ego has also planted seedlings on each of the planets,
                but the terraformation can be initiated only by two celestials.
                Ego had hired Yondu to fetch the various offsprings to check if
                they could access the celestial powers. Given that none of them
                could do so, he’s been killing them off. One such planet is
                Earth, and one such offspring is Quill. Yondu realizes Ego’s
                plan and saves Quill by not delivering him. Long story short,
                Quill displays the ability to access the celestial power, bonds
                with his dad, realizes his dad is evil and resulted in his
                mother’s death, fights his dad with the help of the other
                Guardians of the Galaxy, and kills Ego. Yondu sacrifices himself
                to protect Quill who realizes that his real dad was indeed
                Yondu. Gamora and Nebula fight as usual but make peace in the
                end. Nebula vows to kill Thanos and sets off on her own path.
                Ego’s empath, Mantis, joins the Guardians as they set out in
                search of new adventures.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> May 5, 2017 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 7.6/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $200 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$863,756,051</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>James Gunn</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Chris Pratt (Star Lord)</li>
              <li>Zoe Saldana (Gamora)</li>
              <li>Bradley Cooper (Rocket)</li>
              <li>Vin Diesel (Groot)</li>
              <li>Karen Gillan (Nebula)</li>
              <li>Dave Bautista (Drax The Destroyer)</li>
              <li>Kurt Russell (Ego)</li>
              <li>Michael Rooker (Yondu)</li>
              <li>Sean Gunn (Kraglin)</li>
              <li>Pom Klementieff (Mantis)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-16">Spider Man: Homecoming (2017)</h3>
            <div>
              <img
                src={Spider_Man_Homecoming}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                This one is the first solo for Spidey in all the Marvel movies.
                After the Chitauri’s invasion in Avengers, a man named Toomes is
                hired to clear the city. But Tony’s company takes over the
                operation, and Toomes is left without a job. He uses the
                Chitauri tech to build new weapons and a suit for himself;
                Toomes is the Vulture. After the fight at the airport in Civil
                War, Peter resumes school but focuses on crime-fighting with his
                new Spider-Suit from Tony. Peter is reckless and takes on the
                Vulture endangering himself and civilians. Tony takes away the
                Spider-Suit. Eventually, Spider-Man and Vulture learn of each
                other’s true identities. Peter dawns his plain-old Spider-Man
                costume and goes after Vulture who plans on stealing from a
                plane transporting weapons from the Avenger Tower. Spider-Man
                defeats Vulture and saves Toomes from the unstable Vulture-Suit.
                Toomes is arrested, and Peter declines the offer to become a
                full-time Avenger.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> July 7, 2017 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 7.4/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $175 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$880,166,924</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <li>Amy Pascal</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Jon Watts</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Robert Downey Jr. (Iron Man)</li>
              <li>Tom Holland (Spider Man)</li>
              <li>Zendaya (MJ)</li>
              <li>Marisa Tomei (May Parker)</li>
              <li>Jacob Batalon (Ned Leeds)</li>
              <li>Laura Harrier (Liz Allan)</li>
              <li>Michael Keaton (Vulture)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-17">Thor Ragnarok (2017)</h3>
            <div>
              <img
                src={Thor_Ragnarok}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                This one is the funniest of all the Marvel movies. The film
                begins with Surtur, the fire demon, who has captured Thor. Thor
                learns about Odin not being on Asgard and the prophecy of
                Ragnarok that will allow Surtur to destroy Asgard. Thor steals
                Surtur’s crown, the source of his power, and returns to Asgard.
                He exposes Loki who has been posing as Odin and takes him to
                Earth to look for the real Odin. With the help of Dr. Strange,
                they find Odin in Norway. Odin explains to them that he’s dying
                and his death will free their sister, Hela, the Goddess of
                death, who he has kept imprisoned. As promised, Odin dies, Hela
                emerges and destroys Thor’s hammer. Loki and Thor try to get
                back to Asgard using the Bifröst, but they are interrupted by
                Hela who throws them into outer space and the two of them land
                on the planet Sakaar. While Loki somehow happens to make friends
                with the Grandmaster (ruler of Sakaar), Thor is taken prisoner
                by a slave trader and is sold as a Gladiator. Now, remember Hulk
                takes the jet and leaves Earth after beating up Ultron? He
                happened to wander into Sakaar and has not turned back into
                Bruce ever since. Thor meets Hulk on the battlefield but is
                subdued because of an inhibitor chip on his neck. The slave
                trader, 142, happens to be an ex-member of the Valkyrior, who
                once battled Hela. Thor teams up with 142, and Hulk and heads to
                Asgard to take on Hela. He realizes that she’s way too powerful
                and asks Loki to fetch Surtur’s crown. Loki gets the crown but
                also steals the Tesseract (Space-Stone) from the vault. Surtur
                is reborn and fulfills the prophecy of Ragnarok and destroys
                Asgard while killing Hela.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> November 3, 2017 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 7.9/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $180 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$855,301,806</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Taika Waititi</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Chris Hemsworth (Thor)</li>
              <li>Cate Blanchett (Hela)</li>
              <li>Jeff Goldblum (Grandmaster)</li>
              <li>Taika Waititi (Korg)</li>
              <li>Tessa Thompson (Valkyrie)</li>
              <li>Mark Ruffalo (Hulk)</li>
              <li>Tom Hiddleston (Loki)</li>
              <li>Idris Elba (Heimdall)</li>
              <li>Clancy Brown (Surtur)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-18">Black Panther (2018)</h3>
            <div>
              <img
                src={Black_Panther_1}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                This one is culturally the most unique film in all Marvel
                movies. In this film, we are shown that a meteorite hit a place
                in Africa thousands of years ago. This meteorite contained the
                metal Vibranium (the one Cap’s shield is made from). One warrior
                eats a heart-shaped herb affected by the metal and gains
                super-human strength. Thus is formed the kingdom of Wakanda
                under the leadership of this warrior. Over generations, they use
                the Vibranium to become highly advanced but remain hidden. When
                T’Challa is a young boy, his uncle begins dealing with Ulysses
                Klaue and supplying him Vibranium; now we know how Klaue
                provided Ultron with the metal. The uncle wants to empower all
                the people from Africa across the world with weapons to rise
                against their oppressors. T’Challa’s father kills his brother
                and abandons his brother’s child, Erik, to grow up as an orphan.
                Erik (Killmonger) learns about the real Wakanda from his
                father’s journals and eventually joins the black-ops. After the
                events of Civil War, T’Challa returns to Wakanda to become king.
                He faces M’Baku in ritualistic combat to the death and defeats
                him but doesn’t kill him. Erik initially appears to be working
                with Klaue. A CIA agent, Everett, gets involved and is severely
                wounded while trying to arrest Klaue. T’Challa decides to take
                Everett back to Wakanda to save his life. Erik kills Klaue,
                shows up in Wakanda, and announces who he is. He challenges
                T’Challa and defeats him, throws him over a waterfall, and
                becomes king. He also consumes the herb to turn super-powered.
                Erik picks up where his father left off and commissions jets to
                fly out Vibranium to dealers in America. T’Challa is saved by
                M’Baku as a repayment. T’Challa’s family revive him by giving
                him the last of the heart-shaped-herb. In a final showdown with
                the Black Panther, Erik is killed. Everett remote pilots a jet
                and takes down the planes carrying the Vibranium. After this,
                T’Challa announces at the UN the truth about Wakanda.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> February 16, 2018 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 7.3/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $200 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$1,349,926,083</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Ryan Coogler</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Chadwick Boseman (Black Panther)</li>
              <li>Michael B. Jordan (Erik Killmonger)</li>
              <li>Letitia Wright (Shuri)</li>
              <li>Lupita Nyong'o (Nakia)</li>
              <li>Danai Gurira (Okoye)</li>
              <li>Winston Duke (M'Baku)</li>
              <li>Angela Bassett (Ramonda)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-19">Avengers: Infinity War (2018)</h3>
            <div>
              <img
                src={Avengers_Infinity_War}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                This one is the highest point of ‘all-stars’ in all the Marvel
                movies. Thanos, a mighty Titan, has a simple solution to
                over-population – randomly kill half the universe so the
                survivors will have a better chance of .. well, surviving. For
                this, he needs to collect all six infinity stones, put it on his
                infinity gauntlet, and snap his fingers. Before the film begins,
                Thanos has already gotten the Power Stone from the Nova Corps in
                Xandar. He beats up Thor, Hulk and kills Loki and takes the
                Space Stone from the Tesseract. Heimdal, the keeper of the
                Bifröst, teleports Hulk to Earth before getting killed. Hulk
                transforms back to Bruce and is unable to go back to being Hulk.
                Bruce warns Dr. Strange who contacts Tony. Thanos’ henchmen land
                up on Earth to get the Time Stone. The battle leads Dr. Strange,
                Iron-Man and Spider-Man to get on the henchmen’s Space Ship.
                Bruce contacts Cap. Wanda and Vision are attacked by another set
                of henchmen. Cap, Natasha, and Falcon come to their aid. They
                head to Wakanda to figure a way to separate the Mind Stone from
                Vision’s head. The Guardians rescue Thor who tells them that
                Thanos will head to Knowhere to get the Reality Stone from the
                Collector. Groot, Rocket and Thor head to Nidavellir to get a
                new Axe forged from a giant dwarf. Quill, Drax, Gamora and
                Mantis head to Knowhere only to realize that Thanos has already
                taken the Reality Stone. He also kidnaps Gamora and has already
                captured Nebula. To save Nebula from torture, Gamora reveals the
                location of the Soul Stone. Thanos and Gamora head to Vormir,
                where the Soul Stone is, and meet with Red Skull (remember the
                guy who got sucked in through a wormhole in Captain America?).
                The Soul Stone needs a sacrifice, and Thanos kills Gamora to
                procure it. Nebula escapes and teams with the remaining
                Guardians and heads to Titan. Here, Nebula, Mantis, Drax,
                Spider-Man, Iron-Man, and Dr.Strange try to get Thano’s gauntlet
                off. But Quill interferes after learning that Gamora is dead. As
                a result, Thanos defeats everyone and Dr. Strange hands over the
                Time Stone in exchange for Iron-Man’s life. At Wakanda, Black
                Panther and friends, Bucky, Captain America, Rhodes, Natasha,
                Bruce, Falcon, and Wanda fight off Thanos’ henchmen. Shuri tries
                to separate the Mind Stone from Vision but is unable to. Groot,
                Rocket, and Thor (with his new Axe) arrive at Wakanda to help.
                Thanos finally arrives and beats everyone up. Wanda destroys the
                Mind Stone and kills Vision. But Thanos uses the Time Stone to
                reverse time and rips the Mind Stone out of Vision. Thor comes
                landing his Axe into Thanos’ chest, but Thanos snaps his
                gauntleted fingers. As promised, half the population of the
                universe is instantly killed. On Titan, Iron-Man and Nebula are
                left alive while Quill, Drax, Mantis, Spider-Man and Dr. Strange
                die. And in Wakanda, Bruce, Rhodes, Rocket, Cap, Natasha, Thor,
                and a few Wakandans remain alive while Blank Panther, Bucky,
                Groot, Wanda, and Falcon die.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> April 27, 2018 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 8.4/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $325–400 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$2,052,415,039</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Anthony Russo</li>
              <li>Joe Russo</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Robert Downey Jr. (Iron Man)</li>
              <li>Chris Evans (Captain America)</li>
              <li>Chris Hemsworth (Thor)</li>
              <li>Mark Ruffalo (Hulk)</li>
              <li>Anthony Mackie (Falcon)</li>
              <li>Scarlett Johansson (Black Widow)</li>
              <li>Benedict Cumberbatch (Doctor Strange)</li>
              <li>Tom Hiddleston (Loki)</li>
              <li>Elizabeth Olsen (Scarlet Witch)</li>
              <li>Tom Holland (Spider Man)</li>
              <li>Paul Bettany (Vision)</li>
              <li>Sebastian Stan (Winter Soldier)</li>
              <li>Don Cheadle (War Machine)</li>
              <li>Chris Pratt (Star Lord)</li>
              <li>Zoe Saldana (Gamora)</li>
              <li>Bradley Cooper (Rocket)</li>
              <li>Vin Diesel (Groot)</li>
              <li>Karen Gillan (Nebula)</li>
              <li>Dave Bautista (Drax The Destroyer)</li>
              <li>Pom Klementieff (Mantis)</li>
              <li>Chadwick Boseman (Black Panther)</li>
              <li>Letitia Wright (Shuri)</li>
              <li>Peter Dinklage (Eitri)</li>
              <li>Benedict Wong (Wong)</li>
              <li>Josh Brolin (Thanos)</li>
              <li>Carrie Coon (Proxima Midnight)</li>
              <li>Michael James Shaw (Corvus Glave)</li>
              <li>Tom Vaughan-Lawlor (Ebony Maw)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-20">Ant Man and the Wasp (2018)</h3>
            <div>
              <img
                src={Ant_Man_And_The_Wasp}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                Because of Scott using the Ant-Man suit to team up with Captain
                America in the Civil War movie, Scott is placed under house
                arrest. Remember Ant-Man goes into subatomic space in the first
                movie? Because of that he gets into a quantum entanglement with
                Janet and can see her memories. Scott reaches out to Hank and
                Hope telling them about his visions. They confirm that Janet is
                alive and plan to go into the subatomic space to retrieve her.
                We’re introduced to Ava Starr, who is the daughter of Hank’s old
                partner. During an experiment that goes wrong, Ava’s parents are
                killed, and she’s left in an unstable ghost state. Bill Foster,
                yet another old partner of Hank, has been helping Ava and plans
                to draw on Janet’s energy to stabilize her. Hank believes this
                might kill Janet and this leads to a feud. In the end, Hank is
                able to retrieve Janet from the subatomic space. She uses her
                energy to stabilize Ava. Scott sneaks back into his home just in
                time and is released from his house arrest.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> July 6, 2018 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 7/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $162 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$622,674,139</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Peyton Reed</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Paul Rudd (Ant Man)</li>
              <li>Evangeline Lilly (Wasp)</li>
              <li>Michael Douglas (Hank Pym)</li>
              <li>Michelle Pfeiffer (Janet Van Dyne)</li>
              <li>Hannah John-Kamen (Ava Starr)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-21">Captain Marvel (2019)</h3>
            <div>
              <img
                src={Captain_Marvel_1}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                Years after Cap’s plane crash, Howard continues to test on the
                Tesseract to learn more as part of Project Pegasus created by
                S.H.I.E.L.D. Over time, a Kree by the name of Mar-Vell somehow
                infiltrates S.H.I.E.L.D under the name of Dr. Wendy Lawson. She
                becomes the head of Project Pegasus and relocates the Tesseract
                to her secret lab in space. Dr. Wendy continues to work as part
                of Project Pegasus to create a Light-Speed Engine. She doesn’t
                approve of her people obliterating the Skrulls (a race of
                shape-shifters). She wants to hand the Skrulls the Light-Speed
                Engine so they can escape. She’s also secretly stowed away a
                bunch of Skrulls in her Space Lab. Before she can complete her
                work, a Kree squadron, lead by Yon-Rogg, finds her in 1989.
                Mar-Vell asks a young pilot, Carol Danvers, to accompany her and
                the two of them get shot down. This plane has a Jet Engine that
                Mar-Vell has built, and is powered by the Tesseract. Yon-Rogg
                kills Mar-Vell. Carol blows up the jet engine. Somehow, she ends
                up absorbing all the energy from the explosion. Given the
                closest thing to the Light-Speed Engine has been blown up,
                Yon-Rogg takes Carol with him as she might be the key to
                figuring out the Engine. The Kree use Carol’s amnesia to make
                her believe she is a Kree too. To keep her powers at bay, they
                put an inhibitor on her. Six years pass. In one of the missions
                in 1995, Carol is captured by the Skrulls who are trying to get
                to the location of the Secret Lab. Long story short, Carol ends
                up on Earth, runs into a young Nick Fury, finds the lab,
                remembers her Earth life, realizes the Skrulls are good, gets
                the Tesseract (which is gobbled by an alien cat), removes her
                inhibitor, unleashes her full powers, takes down all of the
                Kree, and set the Skrulls free. The exotic cat scratches Nick
                Fury’s eye causing him to lose it, and he gets his famous eye
                patch. Carol gives Nick Fury a pager-on-steroids which he is to
                use only in case of a vital emergency.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> March 8, 2019 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 6.8/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $150–175 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$1,131,416,446</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Anna Boden</li>
              <li>Ryan Fleck</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Brie Larson (Captain Marvel)</li>
              <li>Samuel L. Jackson (Nick Fury)</li>
              <li>Lee Pace (Ronan)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-22">Avengers: Endgame (2019)</h3>
            <div>
              <img
                src={Avengers_Endgame}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                This one is the most epic of all the Marvel moves. After
                Infinity War, the remaining Avengers find Thanos but he has
                already destroyed the stones. Thor kills him. 5 years later,
                Scott, who is stuck in the quantum realm, gets tossed out
                because of a rat snooping around the truck. While it was just a
                few seconds for him, 5 years pass for the rest. Scott suggests
                the idea of time-travel. The remaining Avengers get together and
                plot an elaborate time-heist using the Pym particles Scott has
                access to. They go to multiple dates in the past to spawn new
                timelines. They temporarily borrow Infinity Stones from these
                timelines and successfully un-snap and bring all the dusted
                people back. Unfortunately, another Thanos from one of the
                timelines learns about this future and makes his way with an
                army to wipe all living beings by getting his hands on the
                stones. An epic battle ensues, and Tony gives his life by
                snapping and dusting Thanos and his entire army. After this,
                Steve goes on a journey to return the Infinity Stones to their
                rightful timelines and finally makes a journey to the past to
                create one final timeline. Here, he lives his whole life happily
                with Peggy and returns as an old man to give his shield to The
                Falcon.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> April 26, 2019 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 8.4/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $356–400 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$2,799,439,100</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Anthony Russo</li>
              <li>Joe Russo</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Robert Downey Jr. (Iron Man)</li>
              <li>Chris Evans (Captain America)</li>
              <li>Chris Hemsworth (Thor)</li>
              <li>Mark Ruffalo (Hulk)</li>
              <li>Jeremy Renner (Hawkeye)</li>
              <li>Anthony Mackie (Falcon)</li>
              <li>Scarlett Johansson (Black Widow)</li>
              <li>Benedict Cumberbatch (Doctor Strange)</li>
              <li>Tom Hiddleston (Loki)</li>
              <li>Elizabeth Olsen (Scarlet Witch)</li>
              <li>Brie Larson (Captain Marvel)</li>
              <li>Tom Holland (Spider Man)</li>
              <li>Sebastian Stan (Winter Soldier)</li>
              <li>Paul Rudd (Ant Man)</li>
              <li>Evangeline Lilly (Wasp)</li>
              <li>Don Cheadle (War Machine)</li>
              <li>Chris Pratt (Star Lord)</li>
              <li>Zoe Saldana (Gamora)</li>
              <li>Bradley Cooper (Rocket)</li>
              <li>Vin Diesel (Groot)</li>
              <li>Karen Gillan (Nebula)</li>
              <li>Dave Bautista (Drax The Destroyer)</li>
              <li>Pom Klementieff (Mantis)</li>
              <li>Chadwick Boseman (Black Panther)</li>
              <li>Letitia Wright (Shuri)</li>
              <li>Peter Dinklage (Eitri)</li>
              <li>Benedict Wong (Wong)</li>
              <li>Josh Brolin (Thanos)</li>
              <li>Carrie Coon (Proxima Midnight)</li>
              <li>Michael James Shaw (Corvus Glave)</li>
              <li>Tom Vaughan-Lawlor (Ebony Maw)</li>
              <li>Gwyneth Paltrow (Pepper Pots)</li>
              <li>Tessa Thompson (Valkyrie)</li>
              <li>John Slattery (Howard Stark)</li>
              <li>Tilda Swinton (Ancient One)</li>
              <li>Taika Waititi (Korg)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-23">Spider Man: Far From Home (2019)</h3>
            <div>
              <img
                src={Spider_Man_Far_From_Home}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                A short while after the events of Avengers: Endgame, a person
                named Beck, who was once a STARK employee and
                holographic-illusions specialist, is looking to take control of
                Tony’s orbital weapon supply powered by a pair of glasses. Using
                drones and carefully projected holograms, Beck takes on the role
                of Mysterio, a super-human from a parallel universe, fighting
                enemies called the Elementals. First, Beck stages a fight in
                Mexico with the Earth Elemental. Nick Fury and Maria Hill take
                notice and reach out to Beck. Next, he stages a battle with the
                Water Elemental in Italy. Peter, who happens to be part of a
                school trip, witnesses this fight and helps protect his
                classmates. Fury hands Peter Tony’s glasses powered by the AI,
                EDITH, which gives him access to Stark’s orbital weapon supply.
                When Peter and Beck meet, Beck feeds him lies about a multiverse
                (getting the audience excited about how this movie could connect
                with Spiderman: Into The Spiderverse). Avoiding his superhero
                duties, Peter hands Tony’s glasses to Beck and transfers
                control. Beck uses the orbital weapon to wreak havoc with the
                more elaborate holograms. MJ discloses that she knows Peter is
                Spider-Man, and the two stumble upon a drone of Beck’s that
                makes them realize that Beck was bluffing. In a final fight,
                Peter takes down Beck. Peter’s spider-sense saves him from a
                missile which instead hits Beck and kills him.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> July 2, 2019 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 7.4/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $160 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$1,131,927,996</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <li>Amy Pascal</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Jon Watts</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Tom Holland (Spider Man)</li>
              <li>Zendaya (MJ)</li>
              <li>Marisa Tomei (May Parker)</li>
              <li>Jacob Batalon (Ned Leeds)</li>
              <li>Samuel L. Jackson (Nick Fury)</li>
              <li>Jake Gyllenhaal (Mysterio)</li>
              <li>Jon Favreau (Happy Hogan)</li>
              <li>Remy Hii (Brad Davis)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-24">Black Widow (2021)</h3>
            <div>
              <img
                src={Black_Widow_1}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                Dreykov is a guy who runs a program called the Red Room, which
                is where he trains and brainwashes young girls to become
                assassins called Widows. Natasha and her sister, Yelena, are
                Widows who managed to escape. In the past, Natasha has attacked
                Dreykov and assumes he is dead. But he manages to survive and
                take his operations to the sky. His daughter is badly injured,
                and he transforms her into a killer by the name Taskmaster. The
                main story takes place right after Civil War. Natasha meets
                Yelena, who hands her a gas that can neutralize the Widow
                mind-control drug and informs her that Dreykov is still alive.
                The sisters break out their fake childhood father, Alexie, a
                super-soldier called Red Guardian. The three of them meet the
                fake childhood mother, Melina, who is a Widow too. All four of
                them infiltrate Dreykov sky-setup and destroy everything, kill
                Dreykov, free the Widows, save Taskmaster and call it a day.
                Natasha hands Yelena the location of remaining Widows in the
                world and the last vile of antidote, bids goodbye, and heads to
                release the arrested Avengers.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> July 9, 2021 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 6.7/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $200 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$379,751,655</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Cate Shortland</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Scarlett Johansson (Black Widow)</li>
              <li>Florence Pugh (Yeleno Belova)</li>
              <li>Olga Kurylenko (Taskmaster)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-25">
              Shang-Chi and the Legend of the Ten Rings (2021)
            </h3>
            <div>
              <img
                src={Shang_Chi_And_The_Legend_Of_Ten_Rings}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                Post Endgame, this one is most unique of all the Marvel movies.
                A thousand years back, Xu Wenwu came to possess the all-powerful
                ten rings and formed his shadowy organization called the Ten
                Rings, which helped topple kingdoms and governments. Wenwu is on
                the hunt for Ta Lo but is stopped by a guardian called Ying Li,
                and the two fall in love and have two kids – Shang-Chi and
                Xialing. Wenwu locks away his ten rings, and for a while, it was
                good. Eventually, his enemies come seeking revenge and kill Ying
                Li, which is witnessed by a young Shang-Chi. Wenwu reinstates
                the Ten Rings and instructs Shang-Chi to kill his mother’s
                murderer. Shang-Chi kills but doesn’t want to be caught up in
                this life of murder and abandons his little sister and makes a
                run for it. The main events take place after Endgame. Shang-Chi
                now lives in San Fransisco, working with his friend Katy as a
                parking valet. He gets attacked, and the assailants take the
                pendant his mother once gave him. Shang-Chi and Katy go to Macau
                to meet Xialing and are rounded up by Wenwu, who explains that
                Ying Li has been talking to him and that she’s being held
                prisoner in Ta Lo. But in reality, the voices are coming from an
                imprisoned beast called Dweller-in-Darkness. Everyone lands up
                in Ta Lo for the climax, and we are introduced to Ying Li’s
                sister Ying Nan. Wenwu is tricked into freeing the beast, which
                claims his soul. The Ten Rings and the Ta Lo warriors unite and
                take down the beast with the help of Katy and Shang-Chi, who now
                controls the rings. Katy and Shang-Chi head back to San
                Fransisco, and the film ends with Wong taking them to Kamar-Taj.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> September 3, 2021 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 7.4/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $150–200 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$432,243,292</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <li>Jonathan Schwartz</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Destin Daniel Cretton</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Simu Liu (Shang-Chi)</li>
              <li>Tony Leung (Xu Wenwu) </li>
              <li>Meng'er Zhang (Xu Xialing)</li>
              <li>Awkwafina (Katy)</li>
              <li>Ben Kingsley (Trevor Slattery)</li>
            </div>
          </div>

          <div className="my-4">
            <h3 id="list-item-26">Eternals (2021)</h3>
            <div>
              <img
                src={Eternals_1}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                This story dates back to before the creation of the Infinity
                Stones. Cosmic beings called Celestials create stars and bring
                light to the universe. From the darkness, there came Deviants
                that kill intelligent life on planets. The Celestial Arishem
                sends a group of superpowered beings called Eternals to Earth in
                5000BC to protect humans from Deviants. The Eternals succeed in
                eradicating all the Deviants by the 1500s, or so they think. A
                bunch of Deviants get preserved in ice. The Eternals live their
                lives on Earth, waiting for a message from Arishem stating their
                mission is complete. Hundreds of years pass, and in the present
                day, the Eternals come to know that Earth is one of many host
                planets for the seed of a Celestial. Once the intelligent life
                reaches a particular threshold, the Celestial will emerge from
                the core, and the planet will be destroyed. Arishem later
                reveals that he created the Deviants to eliminate apex predators
                from planets so that intelligent life could develop. But
                Deviants evolved and began destroying all life. To stop them,
                Arishem created the Eternals to kill Deviants. After each
                emergence, the memories of Eternals are wiped clean, and they
                are assigned another planet. Deviants get free from the ice and
                attack the Eternals and absorb their powers. Ikaris turns
                against the Eternals, who plan to kill the Celestial, but is
                unable to stop Sersi as he loves her. In the end, the surviving
                Eternals form a Uni-Mind and freeze and kill the emerging
                Celestial.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> November 5, 2021 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 6.3/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $236.2 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$402,064,899</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <li>Nate Moore</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Chloé Zhao</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Richard Madden (Ikaris)</li>
              <li>Harry Styles (Starfox) </li>
              <li>Kit Harington (Black Knight)</li>
              <li>Ma Dong-seok (Gilgamesh)</li>
              <li>Angelina Jolie (Thena)</li>
              <li>Gemma Chan (Sersi)</li>
              <li>Barry Keoghan (Druig)</li>
              <li>Bill Skarsgård (Kro)</li>
              <li>Lauren Ridloff (Makkari)</li>
              <li>Brian Tyree Henry (Phastos)</li>
              <li>Salma Hayek (Ajak)</li>
              <li>Kumail Nanjiani (Kingo)</li>
              <li>David Kaye (Arishem)</li>
            </div>
          </div>

          {/* Spider Man */}
          <div className="my-4">
            <h3 id="list-item-27">Spider Man: No Way Home (2021)</h3>
            <div>
              <img
                src={Spider_Man_No_Way_Home}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                After Mysterio reveals Peter’s identity, life becomes miserable
                for him, Ned and MJ. Peter seeks the help of Dr Strange to make
                everyone forget his identity. But Peter’s intrusions mess the
                spell up, causing entities from other parallel universes who
                know their Spider-Man’s identity to attack the wrong Peter
                Parker. While Peter works with Strange to return these people to
                their home universes, Aunt May says that it is their
                responsibility to help these villains as they are merely broken
                individuals. Peter agrees and stops Strange from returning The
                Green Goblin, Doc Ock, Sandman, The Lizard and Electro and tries
                to fix them with the help of Stark tech. Only Doc Ock’s chip is
                successfully replaced and it all backfires when Goblin provokes
                the rest and flees after killing Aunt May. The most iconic
                moments in comic films history happens when the other two
                Spider-Men come to the aid of Peter, and the three team up to
                take down and fix the bad guys. Strange says the spell is
                uncontainable, and far too many intruders from other universes
                start encroaching. Peter asks Strange to make everyone forget
                him, which stops the convergence of the multiverse. The
                Spider-Men bid goodbye and Peter Parker begins a new life where
                no one knows him, and he swings away into the night.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> December 17, 2021 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 8.2/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $200 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$1,921,847,111</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <li>Amy Pascal</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Jon Watts</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Tom Holland (Spider Man)</li>
              <li>Zendaya (MJ)</li>
              <li>Marisa Tomei (May Parker)</li>
              <li>Jacob Batalon (Ned Leeds)</li>
              <li>Tobey Maguire (Spider Man)</li>
              <li>Andrew Garfield (Spider Man)</li>
              <li>Jon Favreau (Happy Hogan)</li>
              <li>Willem Dafoe (Green Goblin)</li>
              <li>Jamie Foxx (Electro)</li>
              <li>Alfred Molina (Doctor Octopus)</li>
              <li>Benedict Cumberbatch (Doctor Strange)</li>
              <li>J.K. Simmons (J. Jonah Jameson)</li>
            </div>
          </div>

          {/* Doctor Strange */}
          <div className="my-4">
            <h3 id="list-item-28">
              Doctor Strange in the Multiverse of Madness (2022)
            </h3>
            <div>
              <img
                src={Doctor_Strange_In_The_Multiverse_Of_Madness}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                This is the only one with a tinge of horror in all the Marvel
                movies. Wanda becomes obsessed with the kids she conjures up in
                the series WandaVision. Unable to deal with her grief of losing
                Vision, she turns to the book of the damned, Darkhold. She wants
                the powers of America Chavez, a girl who can travel across
                multiverses. Wanda’s plan is to replace herself in another
                universe where her kids, Billy and Tommy, are real. The film
                does not explain who the father could be as we all know it’s not
                Vision. Chavez initially takes the help of another Strange, who
                gets killed, and she makes her way into the Prime MCU. Strange
                learns that Wanda is now the Scarlet Witch and tries to protect
                Chavez with Wong’s help. Chavez and Strange land in another
                universe and are captured by the Illuminati, headed by Mordo,
                Black Bolt, Mr Fantastic, Captain Carter (Peggy), and Captain
                Marvel (Maria). Wanda dreamwalks into this universe via her
                alter ego and kills the Illuminati. The alternate Christine
                helps Strange find the Book of Vishanti, which is useless.
                Strange kills and steals a Darkhold from another Strange, in
                another universe, possesses the dead Strange and tries to stop
                Wanda. It all fails, and finally, Chavez opens a portal to show
                how Billy and Tommy fear Wanda, the Witch. Wanda destroys the
                Darkhold in all universes and kills herself. The film ends with
                Strange gaining the third eye.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> May 6, 2022 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 6.9/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $172–200 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$955,775,804</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Sam Raimi</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Benedict Cumberbatch (Doctor Strange)</li>
              <li>Benedict Wong (Wong)</li>
              <li>Rachel McAdams (Christine Palmer)</li>
              <li>Chiwetel Ejiofor (Baron Mordo)</li>
              <li>Elizabeth Olsen (Scarlet Witch)</li>
              <li>Xochitl Gomez (America Chavez)</li>
              <li>John Krasinski (Reed Richards)</li>
              <li>Hayley Atwell (Captain Carter)</li>
              <li>Patrick Stewart (Professor X)</li>
              <li>Anson Mount (Black Bolt)</li>
            </div>
          </div>

          {/* Thor */}
          <div className="my-4">
            <h3 id="list-item-29">Thor Love and Thunder (2022)</h3>
            <div>
              <img
                src={Thor_Love_And_Thunder}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                In the past, Thor requests Mjolnir to take care of Jane in her
                time of need. In the present day, Jane is dying from cancer and
                is beckoned by the hammer. Because she’s worthy enough, she
                commands the power of Thor. A person named Gorr is chosen by
                Necrosword, and he seeks revenge for his daughter’s death by
                killing every god. He kidnaps the Asgardian children to lure
                Thor and take the Stormbreaker, which is the key to reaching
                Eternity, a cosmic being that can grant any wish (oddly,
                something Thanos was unaware of). With Zeus refusing to help,
                Valkyrie, Jane Thor, Thor and Korg steal Thunderbolt, take the
                battle to Gorr, save the kids, and destroy the Necrosword. Thor
                convinces Gorr to wish for his daughter back with the promise of
                taking care of her. Gorr dies, Jane dies, and Gorr’s daughter
                and Thor become the duo Love and Thunder.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> July 8, 2022 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 6.2/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $250 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$760,928,081</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <li>Brad Winderbaum</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Taika Waititi</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Chris Hemsworth (Thor)</li>
              <li>Natalie Portman (Mighty Thor)</li>
              <li>Christian Bale (Gorr the God Butcher)</li>
              <li>Taika Waititi (Korg)</li>
              <li>Tessa Thompson (Valkyrie)</li>
              <li>Russell Crowe (Zeus)</li>
              <li>Chris Pratt (Star Lord)</li>
              <li>Bradley Cooper (Rocket)</li>
              <li>Vin Diesel (Groot)</li>
              <li>Karen Gillan (Nebula)</li>
              <li>Dave Bautista (Drax The Destroyer)</li>
              <li>Pom Klementieff (Mantis)</li>
            </div>
          </div>

          {/* Black Panther */}
          <div className="my-4">
            <h3 id="list-item-30">Black Panther: Wakanda Forever (2022)</h3>
            <div>
              <img
                src={Black_Panther_Wakanda_Forever}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                This one is the most tragic of all the Marvel movies. The story
                is set a year after T’Challa’s death when a student named Riri
                invents a Vibranium finder, and the US government gets its hands
                on it. Unfortunately, they use the machine to trace the hidden
                kingdom of Talokan, ruled by one called Namor. He wants to kill
                Riri to protect his kingdom, whereas Wakanda takes Riri into
                their protective custody. The US believes Talokan’s attack is
                actually Wakanda’s doing. Ross tries to help but is arrested.
                Shuri gets kidnapped, but Nakia saves her and, in the process,
                ends up killing two Talokans. Namor kills Queen Ramonda and
                declares war on Wakanda. Shuri uses a synthesized heart-shaped
                herb and gains the powers of the Black Panther; Okoye dawns the
                Midnight Angel suit and Riri an Iron-Man-like armour. In the
                battle between Talokan and Wakanda, Shuri gains the upper hand
                but spares Namor in return for peace. Riri returns to college,
                Okoye frees Ross, and M’Baku challenges for the throne.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> November 11, 2022 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 6.7/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $250 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$859,208,836</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <li>Nate Moore</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Ryan Coogler</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Letitia Wright (Black Panther)</li>
              <li>Tenoch Huerta (Namor)</li>
              <li>Lupita Nyong'o (Nakia)</li>
              <li>Danai Gurira (Okoye)</li>
              <li>Dominique Thorne (Iron Heart)</li>
              <li>Winston Duke (M'Baku)</li>
              <li>Angela Bassett (Ramonda)</li>
              <li>Michael B. Jordan (Erik Killmonger)</li>
            </div>
          </div>

          {/* Ant Man */}
          <div className="my-4">
            <h3 id="list-item-31">Ant Man and the Wasp: Quantumania (2023)</h3>
            <div>
              <img
                src={Ant_Man_And_The_Wasp_Quantumania}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                Ant-Man and the Wasp find themselves exploring the Quantum
                Realm, interacting with strange new creatures and embarking on
                an adventure that pushes them beyond the limits of what they
                thought was possible.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> February 16, 2023 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 6.1/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $200 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$476,071,119</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <li>Stephen Broussard</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>Peyton Reed</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Paul Rudd (Ant Man)</li>
              <li>Evangeline Lilly (Wasp)</li>
              <li>Corey Stoll (MODOK)</li>
              <li>Michael Douglas (Hank Pym)</li>
              <li>Michelle Pfeiffer (Janet Van Dyne)</li>
              <li>Kathryn Newton (Cassie Lang)</li>
              <li>Jonathan Majors (Kang)</li>
              <li>Katy M. O'Brian (Jentorra)</li>
            </div>
          </div>

          {/* Guardians of the Galaxy */}
          <div className="my-4">
            <h3 id="list-item-32">Guardians of the Galaxy Vol.3 (2023)</h3>
            <div>
              <img
                src={Guardians_Of_The_Galaxy_Vol_3}
                alt="This is not found."
                style={{ width: "65%", marginLeft: "15%" }}
              />
              <p
                className="my-3 mx-2 text-justify"
                style={{ textAlign: "justify" }}
              >
                Years ago, a person called the High Evolutionary experiments on
                Rocket Racoon, resulting in the brilliant mind he is today.
                Young Rocket befriends other creatures brutally experimented on.
                The villain wants to build a Counter-Earth with ‘perfectly’
                evolved beings. While his friends die, Rocket escapes, leaving
                High Evolutionary’s plan unfinished. In the present time, Adam
                Warlock is sent to capture Rocket and wounds him fatally. The
                Guardians cannot heal him because of a kill switch inside his
                chest. The Guardians go to Gamora (the alternate one from
                Endgame) for help. She’s with the Ravagers. While Rocket is
                saved, Drax, Nebula, and Mantis get imprisoned. In the end,
                Rocket takes down the High Evolutionary, and the Guardians, with
                the help of Adam, save all the children and animals that were
                being experimented on. The film ends with Gamora returning to
                the Ravagers, Quill meeting his grandfather on Earth, Mantis
                going on her spiritual journey, Rocket becoming the new captain
                while Drax and Nebula stay in Knowhere.
              </p>
              <p>
                {" "}
                Release Date of this Movie : <b> May 5, 2023 </b>
              </p>
              <p>
                {" "}
                IMDB Rating : <b> 8.2/10 </b>
              </p>
              <p>
                {" "}
                Budget of this Movie : <b> $250 million </b>
              </p>
              <p>
                {" "}
                WorldWide Box Office Collection : <b>$823,828,079</b>{" "}
              </p>
              <h5 className="mt-3">Producers of this Movie :-</h5>
              <li>Kevin Feige</li>
              <h5 className="mt-3">Directors of this Movie :-</h5>
              <li>James Gunn</li>
              <h5 className="mt-3">Famous Actors in this Movie :-</h5>
              <li>Chris Pratt (Star Lord)</li>
              <li>Zoe Saldana (Gamora)</li>
              <li>Bradley Cooper (Rocket)</li>
              <li>Vin Diesel (Groot)</li>
              <li>Karen Gillan (Nebula)</li>
              <li>Dave Bautista (Drax The Destroyer)</li>
              <li>Will Poulter (Adam Warlock)</li>
              <li>Michael Rooker (Yondu)</li>
              <li>Sean Gunn (Kraglin)</li>
              <li>Pom Klementieff (Mantis)</li>
              <li>Chukwudi Iwuji (High Evolutionary)</li>
              <li>Linda Cardellini (Lylla)</li>
              <li>Mikaela Hoover (Floor)</li>
              <li>Maria Bakalova (Cosmo)</li>
            </div>
          </div>
        </div>
      </div>
      {/* {props.setProgress(100)} */}
    </>
  );
}
