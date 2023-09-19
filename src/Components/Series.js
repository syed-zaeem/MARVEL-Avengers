import React, { useState, useEffect } from "react";
import Wanda_Vision from "../MyImages/wanda_vision.jpg";
import Loki from "../MyImages/Loki.jpg";
import Falcon_And_The_Winter_Soldier from "../MyImages/Falcon_And_The_Winter_Soldier.jpg";
import Hawkeye from "../MyImages/Hawkeye.jpg";
import What_If from "../MyImages/What_If.jpg";
import Moon_Knight from "../MyImages/Moon_Knight.jpg";
import Ms_Marvel from "../MyImages/Ms_Marvel.jpg";
import She_Hulk from "../MyImages/She_Hulk.jpg";
import I_Am_Groot from "../MyImages/I_Am_Groot.jpg";
import Secret_Invasion from "../MyImages/Secret_Invasion.jpg";
import "../Movies.css";
import LoadingBar from "react-top-loading-bar";
import { useNavigate } from "react-router-dom";
import { MoonLoader } from "react-spinners";

export default function Series(props) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("Token is present.", localStorage.getItem("token"));
      const timer = setTimeout(() => {
        setLoading(false);
      }, 600);

      return () => clearTimeout(timer);
    } else {
      console.log(
        "Token is null. Please add token for data. Redirect to login page to add token.",
        localStorage.getItem("token")
      );
      navigate("/Login");
    }
    // eslint-disable-next-line
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
        <h1>Loading Series...</h1>
        <div style={{marginLeft: '45%', marginTop: '130px'}} >
        <MoonLoader color="red"/>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* {props.setProgress(0)} */}
      {/* {props.setProgress(30)} */}
      <div className="container">
        <div className="my-4">
          <h3 id="list-item-1">WandaVision (2021)</h3>
          <div>
            <img
              src={Wanda_Vision}
              alt="This is not found."
              style={{ width: "65%", marginLeft: "15%" }}
            />
            <p
              className="my-3 mx-2 text-justify"
              style={{ textAlign: "justify" }}
            >
              "WandaVision" is a unique and captivating series that unfolded
              within the Marvel Cinematic Universe (MCU), featuring Wanda
              Maximoff, also known as Scarlet Witch, and Vision. It explores the
              complex journey of grief, love, and the consequences of wielding
              immense power. The series begins with Wanda and Vision living a
              seemingly idyllic suburban life in the town of Westview. However,
              things quickly take a mysterious turn as they start to realize
              that something is amiss. The world around them appears to be
              trapped in different decades of television sitcoms, with Wanda and
              Vision playing the lead roles. As Wanda and Vision navigate their
              new reality, they try to blend in with their neighbors and keep
              their abilities hidden. They encounter quirky characters such as
              Agnes, their nosy neighbor, and Dottie, the queen bee of the town.
              Each episode of the series pays homage to a different era of
              television, capturing the essence of sitcoms from the '50s, '60s,
              '70s, '80s, and beyond. While Wanda seems to be in control of this
              reality, it becomes evident that she is using her powers to cope
              with the immense loss she has suffered. Wanda's grief over the
              death of Vision, who was killed by Thanos in "Avengers: Infinity
              War," manifests itself in this alternate reality where she can
              have the life she always wanted. As the series progresses, cracks
              start to appear in the facade. Vision begins to question their
              reality and suspects that something is wrong. Wanda's grip on her
              creation begins to slip, leading to glitches and confrontations
              with the people of Westview. S.W.O.R.D. (Sentient Weapon
              Observation Response Division), an organization tasked with
              dealing with sentient weapons, is monitoring the situation from
              the outside and trying to uncover the truth. The series delves
              into Wanda's past, exploring her traumatic experiences in Sokovia
              and her journey to becoming the Scarlet Witch. It becomes clear
              that her powers are more formidable than anyone imagined, and her
              grief has given her the ability to rewrite reality itself. As the
              truth unfolds, it is revealed that a powerful being named Agatha
              Harkness has been manipulating events from behind the scenes.
              Agatha is a witch who seeks to harness Wanda's power for her own
              gain. She forces Wanda to confront her past, revealing the pain
              and loss she has endured. In the climactic moments of the series,
              Vision and Wanda confront their own fears and the illusions that
              have kept them trapped in Westview. Wanda realizes that she needs
              to let go of her fantasy and face the pain of losing Vision. She
              also understands that she cannot control or bring him back to
              life. As Wanda comes to terms with her grief, she releases the
              people of Westview from her influence. The town is restored, and
              the citizens are freed from their roles as sitcom characters.
              Vision and Wanda share a heart-wrenching goodbye as Vision
              acknowledges that they can't be together in this reality. The
              consequences of Wanda's actions, however, have far-reaching
              implications. Her use of chaos magic and the creation of this
              alternate reality attract the attention of powerful entities. The
              events in Westview become a catalyst for the upcoming events in
              the MCU, leading to the events of "Doctor Strange in the
              Multiverse of Madness." "WandaVision" stands as a poignant
              exploration of loss, grief, and the lengths one will go to find
              solace. It showcases the depth of Wanda Maximoff's character and
              sets the stage for her continued journey in the MCU.
            </p>
            <p>
              {" "}
              Release Date of this Series : <b> January 15, 2021 </b>
            </p>
            <p>
              {" "}
              IMDB Rating : <b> 7.9/10 </b>
            </p>
            <p>
              {" "}
              Budget of this Series : <b> $225-million </b>
            </p>
            <p>
              {" "}
              Episodes : <b>9</b>{" "}
            </p>
            <h5 className="mt-3">Producers of this Series :-</h5>
            <li>Brian Chapek</li>
            <h5 className="mt-3">Directors of this Series :-</h5>
            <li>Matt Shakman</li>
            <h5 className="mt-3">Famous Actors in this Series :-</h5>
            <li>Elizabeth Olsen (Scarlet Witch)</li>
            <li>Kathryn Hahn (Agatha Harkness)</li>
            <li>Paul Bettany (Vision)</li>
            <li>Kat Dennings (Darcy Lewis)</li>
          </div>
        </div>

        <div className="my-4">
          <h3 id="list-item-1">The Falcon and the Winter Soldier (2021)</h3>
          <div>
            <img
              src={Falcon_And_The_Winter_Soldier}
              alt="This is not found."
              style={{ width: "65%", marginLeft: "15%" }}
            />
            <p
              className="my-3 mx-2 text-justify"
              style={{ textAlign: "justify" }}
            >
              The "Falcon and the Winter Soldier" series picks up after the
              events of "Avengers: Endgame," where Steve Rogers passes on the
              mantle of Captain America to Sam Wilson, also known as Falcon. The
              series explores the challenges faced by Sam and his ally Bucky
              Barnes, the Winter Soldier, as they navigate a world without
              Captain America and confront new threats. Sam Wilson struggles
              with the weight of taking up the iconic shield and becoming the
              symbol of hope that Captain America represented. He grapples with
              doubts about his worthiness and whether he can live up to the
              legacy left behind by Steve Rogers. Meanwhile, Bucky Barnes is on
              a journey of redemption, haunted by his past as an assassin and
              seeking to make amends for the pain he caused. The series
              introduces a new antagonist group called the Flag Smashers, led by
              Karli Morgenthau. The Flag Smashers believe in a world without
              borders and seek to disrupt the new power structures that emerged
              after the Blip, the period when half the population was snapped
              away by Thanos and later returned. Sam and Bucky find themselves
              drawn into the conflict, working together to dismantle the Flag
              Smashers' plans. As Sam and Bucky team up, they also face the
              return of a familiar face—Helmut Zemo, the villainous Baron Zemo
              from "Captain America: Civil War." Zemo manipulates events from
              the shadows, attempting to eliminate the super-soldier serum that
              powers the Flag Smashers. Sam and Bucky reluctantly enlist Zemo's
              help, navigating the gray areas of morality as they pursue
              justice. The series delves into themes of race and identity,
              highlighting Sam's experiences as a Black man taking on the mantle
              of Captain America. It explores the complex social and political
              landscape of the MCU, addressing systemic racism and the need for
              representation and understanding. Sam's journey becomes one of
              self-discovery and using the Captain America mantle to fight for a
              more inclusive and just world. Throughout the series, Sam and
              Bucky face personal challenges and confront their demons. Bucky
              confronts his past as the Winter Soldier, seeking to make amends
              with those he wronged and find redemption. Sam must confront his
              own doubts and embrace the responsibility of being Captain
              America, proving to himself and the world that he is worthy. In
              the final showdown, Sam fully embraces his role as Captain
              America, donning a new suit and wielding the shield. With Bucky's
              support, Sam leads the fight against the Flag Smashers and
              confronts the deeper issues plaguing society. He becomes a symbol
              of hope, inspiring people around the world and solidifying his
              place as the new Captain America. The "Falcon and the Winter
              Soldier" series provides a deep exploration of its characters'
              struggles, weaving together action-packed sequences with social
              commentary. It showcases the evolution of Sam Wilson from Falcon
              to Captain America and the growth of Bucky Barnes as he finds his
              own path to redemption. The series leaves a lasting impact on the
              MCU, setting the stage for future stories and the continued legacy
              of Captain America.
            </p>
            <p>
              {" "}
              Release Date of this Series : <b> March 19, 2021 </b>
            </p>
            <p>
              {" "}
              IMDB Rating : <b> 7.2/10 </b>
            </p>
            <p>
              {" "}
              Budget of this Series : <b> $150-million </b>
            </p>
            <p>
              {" "}
              Episodes : <b>6</b>{" "}
            </p>
            <h5 className="mt-3">Producers of this Series :-</h5>
            <li>Kari Skogland</li>
            <li>Kevin Feige</li>
            <h5 className="mt-3">Directors of this Series :-</h5>
            <li>Kari Skogland</li>
            <h5 className="mt-3">Famous Actors in this Series :-</h5>
            <li>Anthony Mackie (Falcon)</li>
            <li>Sebastian Stan (Winter Soldier)</li>
            <li>Erin Kellyman (Karli Morgenthau)</li>
            <li>Emily VanCamp (Sharon Carter)</li>
            <li>Daniel Brühl (Baron Zemo)</li>
          </div>
        </div>

        <div className="my-4">
          <h3 id="list-item-1">Loki (2021)</h3>
          <div>
            <img
              src={Loki}
              alt="This is not found."
              style={{ width: "65%", marginLeft: "15%" }}
            />
            <p
              className="my-3 mx-2 text-justify"
              style={{ textAlign: "justify" }}
            >
              The "Loki" series takes place after the events of "Avengers:
              Endgame," where an alternate version of Loki from 2012 escapes
              with the Tesseract during the Avengers' time heist. This alternate
              Loki, known as the "Variant," is apprehended by the Time Variance
              Authority (TVA), a powerful organization tasked with maintaining
              the timeline and preventing multiversal chaos. Loki finds himself
              in the TVA's custody, facing the consequences of his actions. The
              TVA is overseen by the Time-Keepers, enigmatic beings who ensure
              the "Sacred Timeline" remains intact. Loki encounters Mobius M.
              Mobius, a TVA agent who recruits him to help fix the timeline and
              capture a dangerous Variant that threatens the stability of
              reality. As Loki reluctantly assists Mobius, he discovers the vast
              extent of the TVA's power and the true nature of his existence. He
              learns that his life has been meticulously predetermined, with
              every action following a predetermined script. This revelation
              shakes Loki to his core, challenging his sense of self and free
              will. Together, Loki and Mobius pursue the Variant, who is
              revealed to be another version of Loki. This Variant, named
              Sylvie, is a skilled and cunning fugitive who is determined to
              expose the Time-Keepers as frauds and dismantle the TVA. As Loki
              and Sylvie clash and collaborate, their complex dynamic evolves,
              blurring the lines between hero and villain. Throughout the
              series, Loki grapples with his identity, seeking redemption and
              purpose beyond his mischievous nature. He confronts his past,
              facing his failures and the consequences of his actions. As he
              spends more time with Sylvie, a romantic connection blossoms,
              further complicating his motivations. As Loki and Sylvie uncover
              the truth about the Time-Keepers and the TVA, they realize that
              they are merely pawns in a larger scheme. They discover that a
              variant of Kang the Conqueror, a powerful and manipulative being,
              has been pulling the strings behind the scenes, using the TVA to
              maintain his own dominion over the multiverse. In a climactic
              battle, Loki and Sylvie confront the Time-Keepers and Kang's
              deception. They manage to defeat the Time-Keepers but at the cost
              of Sylvie banishing Loki to a different timeline. This event sets
              the stage for the upcoming film "Doctor Strange in the Multiverse
              of Madness" and the further exploration of the multiverse in the
              MCU. As the series concludes, Loki finds himself in a new reality,
              facing the ramifications of his choices and the uncertainty of his
              future. The show presents a nuanced exploration of Loki's
              character, delving into themes of self-discovery, destiny, and the
              consequences of tampering with time. The "Loki" series stands as a
              thrilling and thought-provoking addition to the MCU, opening up
              possibilities for the multiverse and paving the way for future
              adventures and crossovers within the Marvel universe.
            </p>
            <p>
              {" "}
              Release Date of this Series : <b> June 9, 2021 </b>
            </p>
            <p>
              {" "}
              IMDB Rating : <b> 8.2/10 </b>
            </p>
            <p>
              {" "}
              Budget of this Series : <b> $150-million </b>
            </p>
            <p>
              {" "}
              Episodes : <b>6</b>{" "}
            </p>
            <h5 className="mt-3">Producers of this Series :-</h5>
            <li>Kate Herron</li>
            <li>Kevin Feige</li>
            <h5 className="mt-3">Directors of this Series :-</h5>
            <li>Kate Herron</li>
            <h5 className="mt-3">Famous Actors in this Series :-</h5>
            <li>Tom Hiddleston (Loki)</li>
            <li>Jonathan Majors (He Who Remains)</li>
            <li>Sophia Di Martino (Sylvie)</li>
            <li>Owen Wilson (Mobius M. Mobius)</li>
            <li>Gugu Mbatha-Raw (Revonna)</li>
          </div>
        </div>

        <div className="my-4">
          <h3 id="list-item-1">Hawkeye (2021)</h3>
          <div>
            <img
              src={Hawkeye}
              alt="This is not found."
              style={{ width: "65%", marginLeft: "15%" }}
            />
            <p
              className="my-3 mx-2 text-justify"
              style={{ textAlign: "justify" }}
            >
              The "Hawkeye" series follows Clint Barton, also known as Hawkeye,
              in a post-"Avengers: Endgame" world. Clint, having served as a
              skilled archer and loyal member of the Avengers, is ready to pass
              on the mantle and spend more time with his family during the
              holiday season. However, Clint's plans are interrupted when he
              discovers that a new vigilante has taken up the Hawkeye name. This
              new Hawkeye is revealed to be Kate Bishop, a talented young archer
              and fan of Clint's heroics. Impressed by her skills and
              determination, Clint reluctantly takes Kate under his wing to
              train her and keep her safe. As Clint and Kate navigate the
              streets of New York City, they find themselves entangled in a
              conspiracy involving the tracksuit-wearing bros, a criminal
              organization led by Ivan Banionis. The tracksuit-wearing bros seek
              a powerful artifact known as the Ronin suit, which Clint had
              donned during his darkest days as a vigilante. Throughout the
              series, Clint grapples with the trauma and guilt associated with
              his time as Ronin, as well as the sacrifices he made during the
              Blip. He strives to protect Kate and prevent her from making the
              same mistakes he did. Together, they form an unlikely partnership,
              combining their skills to uncover the truth behind the
              tracksuit-wearing bros and their connection to the Ronin suit. As
              their investigation progresses, Clint and Kate encounter several
              familiar faces from Clint's past, including Maya Lopez, also known
              as Echo, a skilled fighter and the adopted daughter of a powerful
              crime lord. Echo has a personal vendetta against Ronin and becomes
              a formidable adversary for Clint and Kate. The series explores
              Clint's desire to retire and reconcile with his family, while also
              confronting the consequences of his actions as Ronin. It delves
              into themes of legacy, mentorship, and the sacrifices heroes make
              to protect others. Clint's relationship with his children and wife
              becomes a central focus, highlighting the toll that his life as an
              Avenger has taken on his personal life. As the series reaches its
              climax, Clint and Kate face off against the tracksuit-wearing bros
              and Maya Lopez, culminating in a thrilling battle. The heroes must
              rely on their skills, resourcefulness, and their bond as mentor
              and protege to emerge victorious. In the end, Clint passes on the
              Hawkeye mantle to Kate, recognizing her potential as a hero and
              carrying on the legacy of the name. With her training complete,
              Kate fully embraces her role as Hawkeye and takes up the bow and
              arrow to protect the innocent. The "Hawkeye" series offers an
              intimate exploration of Clint Barton's character, showcasing his
              humanity, vulnerability, and dedication to protecting others. It
              introduces Kate Bishop as a new and promising hero within the MCU,
              setting the stage for her future adventures. The series blends
              action, humor, and heartfelt moments, delivering a holiday-themed
              story that celebrates family, friendship, and the enduring spirit
              of heroism.
            </p>
            <p>
              {" "}
              Release Date of this Series : <b> November 24, 2021 </b>
            </p>
            <p>
              {" "}
              IMDB Rating : <b> 7.5/10 </b>
            </p>
            <p>
              {" "}
              Budget of this Series : <b> $150-million </b>
            </p>
            <p>
              {" "}
              Episodes : <b>6</b>{" "}
            </p>
            <h5 className="mt-3">Producers of this Series :-</h5>
            <li>Brad Winderbaum</li>
            <li>Victoria Alonso</li>
            <li>Louis D'Esposito</li>
            <h5 className="mt-3">Directors of this Series :-</h5>
            <li>Rhys Thomas</li>
            <h5 className="mt-3">Famous Actors in this Series :-</h5>
            <li>Jeremy Renner (Hawkeye)</li>
            <li>Hailee Steinfeld (Kate Bishop)</li>
            <li>Florence Pugh (Yelena Belova)</li>
            <li>Alaqua Cox (Echo)</li>
            <li>Vincent D'Onofrio (Kingpin)</li>
            <li>Vera Farmiga (Eleanor Bishop)</li>
          </div>
        </div>

        <div className="my-4">
          <h3 id="list-item-1">What If? (2021)</h3>
          <div>
            <img
              src={What_If}
              alt="This is not found."
              style={{ width: "65%", marginLeft: "15%" }}
            />
            <p
              className="my-3 mx-2 text-justify"
              style={{ textAlign: "justify" }}
            >
              The "What If...?" series takes audiences on a journey through
              alternate realities within the Marvel Cinematic Universe (MCU),
              exploring the question of "what if" pivotal moments had unfolded
              differently. Each episode presents a standalone story that
              diverges from the established timeline, showcasing familiar
              characters in new and unexpected roles. The series begins with the
              Watcher, an omnipotent being who observes the multiverse,
              introducing various scenarios and narrating the events that
              unfold. Each episode explores a specific question, such as "What
              if Peggy Carter became the first Super Soldier?" or "What if
              T'Challa became Star-Lord?" In these alternate realities, beloved
              characters face different fates and make divergent choices. Peggy
              Carter, instead of Steve Rogers, takes the Super Soldier serum and
              becomes Captain Carter, leading the fight against HYDRA in World
              War II. T'Challa, instead of Peter Quill, becomes the charismatic
              Star-Lord, influencing and changing the lives of those around him.
              Throughout the series, fans witness intriguing twists and turns,
              as characters from different timelines interact and form
              unexpected alliances. The series introduces compelling new stories
              and explores the ripple effects of key decisions, showcasing the
              interconnectedness of the multiverse. The "What If...?" series
              provides opportunities for familiar characters to be reimagined
              and allows actors to lend their voices to these alternate
              versions. The show features a vast ensemble of MCU actors
              reprising their roles, bringing authenticity and depth to their
              animated counterparts. As the episodes progress, a greater
              narrative arc begins to take shape. A threat emerges that seeks to
              disrupt the multiverse and threatens to unravel reality itself.
              The Watcher, typically an observer, is forced to confront the
              challenge of intervening to protect the delicate balance of the
              multiverse. In the final episodes, the disparate storylines
              converge, bringing together key characters from different
              realities to confront the common threat. Heroes and villains alike
              must set aside their differences and work together to save the
              multiverse from destruction. The "What If...?" series provides
              audiences with a fresh and imaginative exploration of the MCU,
              showcasing the infinite possibilities of the multiverse. It delves
              into themes of choice, consequence, and the impact of individual
              actions on the larger tapestry of existence. By presenting
              alternate realities, the series offers fans a chance to see
              beloved characters in entirely new contexts, pushing the
              boundaries of storytelling within the MCU. As the series
              concludes, the events of "What If...?" have ramifications that
              extend into the wider MCU, setting the stage for future storylines
              and introducing the concept of the multiverse more prominently.
              The series highlights the infinite potential for storytelling
              within the Marvel universe and leaves audiences excited for what
              lies ahead.
            </p>
            <p>
              {" "}
              Release Date of this Series : <b> August 11, 2021 </b>
            </p>
            <p>
              {" "}
              IMDB Rating : <b> 6.3/10 </b>
            </p>
            <p>
              {" "}
              Budget of this Series : <b> $225-million </b>
            </p>
            <p>
              {" "}
              Episodes : <b>9</b>{" "}
            </p>
            <h5 className="mt-3">Producers of this Series :-</h5>
            <li>A. C. Bradley</li>
            <h5 className="mt-3">Directors of this Series :-</h5>
            <li>Bryan Andrews</li>
            <h5 className="mt-3">Famous Actors in this Series :-</h5>
            <li>Hayley Atwell (Captain Carter)</li>
            <li>Brian T. Delaney (Star Lord)</li>
            <li>Lake Bell (Black Widow)</li>
            <li>Mick Wingert (Iron Man)</li>
            <li>Chadwick Boseman (Black Panther)</li>
            <li>Samuel L. Jackson (Nick Fury)</li>
            <li>Chris Hemsworth (Thor)</li>
            <li>Tom Hiddleston (Loki)</li>
            <li>Benedict Cumberbatch (Doctor Strange)</li>
            <li>Michael B. Jordan (Erik Killmonger)</li>
            <li>Cynthia Kaye McWilliams (Gamora)</li>
            <li>Ross Marquand (Ultron)</li>
            <li>Jeremy Renner (Hawkeye)</li>
            <li>Alexandra Daniels (Captain Marvel)</li>
            <li>Jeffrey Wright (Watcher)</li>
          </div>
        </div>

        <div className="my-4">
          <h3 id="list-item-1">Moon Knight (2022)</h3>
          <div>
            <img
              src={Moon_Knight}
              alt="This is not found."
              style={{ width: "65%", marginLeft: "15%" }}
            />
            <p
              className="my-3 mx-2 text-justify"
              style={{ textAlign: "justify" }}
            >
              The "Moon Knight" series takes audiences on a dark and thrilling
              journey into the psyche of Marc Spector, a complex and enigmatic
              character known as Moon Knight. As a former mercenary, Spector
              suffers from dissociative identity disorder, manifesting as
              multiple distinct personalities that he assumes throughout the
              series. The story begins with Marc Spector, haunted by his violent
              past, seeking redemption and a purpose beyond his days as a
              mercenary. He becomes the vessel for the Egyptian moon god,
              Khonshu, who grants him enhanced strength and abilities to fight
              against the forces of darkness. As Moon Knight, Spector operates
              in the seedy underbelly of New York City, protecting the innocent
              and battling supernatural threats. The series delves into the
              blurred line between reality and madness as Spector struggles to
              distinguish between his different personalities and navigate the
              darkness within himself. Throughout the series, Moon Knight faces
              a formidable array of villains, including Bushman, a brutal
              mercenary and Spector's former colleague, who seeks to destroy
              him. Alongside Bushman, Moon Knight encounters other adversaries
              tied to Egyptian mythology, ancient artifacts, and occult forces
              that test his physical and mental limits. As the series
              progresses, Spector's multiple identities, including the
              charismatic Steven Grant, the brutal enforcer Jake Lockley, and
              the sophisticated millionaire Mr. Knight, become more defined and
              integral to his crime-fighting methods. These personas not only
              aid him in his battles but also contribute to his ongoing internal
              struggle for control and self-acceptance. The series also delves
              into Spector's personal life and relationships. He forms a complex
              bond with Marlene Alraune, a fellow adventurer who becomes his
              confidante and love interest. Their relationship is tested as
              Spector's mental instability and Moon Knight's dangerous lifestyle
              threaten to consume them both. As the series reaches its climax,
              Moon Knight confronts the truth about his origins, the extent of
              Khonshu's influence, and the dark forces manipulating his life.
              The lines between friend and foe blur, leading to unexpected
              alliances and revelations that shake Spector to his core. In the
              final battle against his enemies, Moon Knight embraces the
              totality of his identities, integrating his different
              personalities into a cohesive whole. With newfound clarity and
              control, he vanquishes the forces of darkness and emerges as a
              true hero, transcending his tormented past. The "Moon Knight"
              series is a psychological thriller that explores the duality of
              identity, the blurred boundaries between sanity and madness, and
              the power of redemption. It showcases the depth and complexity of
              Marc Spector as he embraces his role as Moon Knight, defender of
              the night. The series stands as a unique and atmospheric addition
              to the MCU, pushing the boundaries of storytelling and offering
              audiences a captivating exploration of one of Marvel's most
              intriguing characters.
            </p>
            <p>
              {" "}
              Release Date of this Series : <b> March 30, 2022 </b>
            </p>
            <p>
              {" "}
              IMDB Rating : <b> 7.3/10 </b>
            </p>
            <p>
              {" "}
              Budget of this Series : <b> $150-million </b>
            </p>
            <p>
              {" "}
              Episodes : <b>6</b>{" "}
            </p>
            <h5 className="mt-3">Producers of this Series :-</h5>
            <li>Jeremy Slater</li>
            <h5 className="mt-3">Directors of this Series :-</h5>
            <li>Mohamed Diab</li>
            <h5 className="mt-3">Famous Actors in this Series :-</h5>
            <li>Oscar Isaac (Moon Knight)</li>
            <li>May Calamawy (Layla El-Faouly)</li>
            <li>Ethan Hawke (Arthur Harrow)</li>
            <li>F. Murray Abraham (Khonshu)</li>
            <li>Saba Mubarak (Ammit)</li>
            <li>Gaspard Ulliel (Anton Mogart)</li>
          </div>
        </div>
        {/* {props.setProgress(70)} */}

        <div className="my-4">
          <h3 id="list-item-1">Ms Marvel (2022)</h3>
          <div>
            <img
              src={Ms_Marvel}
              alt="This is not found."
              style={{ width: "65%", marginLeft: "15%" }}
            />
            <p
              className="my-3 mx-2 text-justify"
              style={{ textAlign: "justify" }}
            >
              The "Ms. Marvel" series introduces audiences to Kamala Khan, a
              young Pakistani-American teenager living in Jersey City. Kamala is
              an avid fan of superheroes, particularly Captain Marvel, and
              dreams of becoming a hero herself. When Kamala unexpectedly gains
              shape-shifting abilities, she embarks on a journey of
              self-discovery and takes on the mantle of Ms. Marvel. The series
              begins by delving into Kamala's life, her close-knit family, and
              her struggles with identity and belonging. Kamala navigates the
              challenges of being a teenager, dealing with school, friendships,
              and the expectations placed upon her by her conservative Pakistani
              heritage. Kamala's journey is one of embracing her individuality
              and finding her place in the world. As Kamala learns to control
              her powers, she grapples with the responsibilities that come with
              being a hero. She encounters villains who threaten Jersey City,
              such as the Inventor and the nefarious organization A.I.M.
              (Advanced Idea Mechanics). With the guidance of her friends,
              including her best friend Nakia, Kamala develops her own unique
              style of heroism, blending her shape-shifting abilities with her
              wit and compassion. Throughout the series, Kamala's idol, Captain
              Marvel, becomes a mentor figure and occasional ally. Kamala looks
              up to Captain Marvel, who offers guidance and support, helping
              Kamala embrace her role as Ms. Marvel and navigate the challenges
              of being a young hero. The "Ms. Marvel" series celebrates Kamala's
              multicultural background and her experiences as a
              Pakistani-American Muslim. It addresses themes of representation,
              identity, and the power of embracing one's unique heritage.
              Kamala's journey resonates with audiences as she finds strength in
              her diversity and uses her powers to bring people together. The
              series also explores Kamala's personal relationships, including
              her dynamic with Bruno, a childhood friend who becomes a romantic
              interest. Their friendship undergoes strain as Kamala's hero life
              begins to intersect with her personal life, testing their bond and
              forcing Kamala to prioritize her duties as Ms. Marvel. In the
              series' climactic moments, Kamala confronts a powerful villain who
              threatens to tear apart Jersey City. With the support of her
              friends and her newfound confidence, Kamala taps into the full
              extent of her shape-shifting abilities to save the day and protect
              her community. The "Ms. Marvel" series is a coming-of-age story
              that captures the spirit of resilience, self-discovery, and
              heroism. Kamala Khan's journey inspires audiences, encouraging
              them to embrace their own uniqueness and strive to make a positive
              impact on the world. The series introduces a vibrant and diverse
              hero to the MCU, setting the stage for Kamala's continued
              adventures and her eventual team-up with other Marvel heroes.
            </p>
            <p>
              {" "}
              Release Date of this Series : <b> June 8, 2022 </b>
            </p>
            <p>
              {" "}
              IMDB Rating : <b> 6.3/10 </b>
            </p>
            <p>
              {" "}
              Budget of this Series : <b> $200-million </b>
            </p>
            <p>
              {" "}
              Episodes : <b>6</b>{" "}
            </p>
            <h5 className="mt-3">Producers of this Series :-</h5>
            <li>Sana Amanat</li>
            <h5 className="mt-3">Directors of this Series :-</h5>
            <li>El Arbi</li>
            <li>Fallah</li>
            <li>Menon</li>
            <li>Obaid-Chinoy</li>
            <h5 className="mt-3">Famous Actors in this Series :-</h5>
            <li>Iman Vellani (Ms Marvel)</li>
            <li>Yasmeen Fletcher (Nakia Bahadir)</li>
            <li>Matt Lintz (Bruno Carrelli)</li>
            <li>Mehwish Hayat (Aisha)</li>
            <li>Rish Shah (Kamran)</li>
            <li>Mohan Kapoor (Yusuf Khan)</li>
            <li>Laurel Marsden (Zoe Zimmer)</li>
            <li>Fawad Khan (Hasan)</li>
            <li>Farhan Akhtar (Waleed)</li>
            <li>Nimra Bucha (Najma)</li>
            <li>Samina Ahmad (Sana)</li>
          </div>
        </div>

        <div className="my-4">
          <h3 id="list-item-1">I am Groot (2022)</h3>
          <div>
            <img
              src={I_Am_Groot}
              alt="This is not found."
              style={{ width: "65%", marginLeft: "15%" }}
            />
            <p
              className="my-3 mx-2 text-justify"
              style={{ textAlign: "justify" }}
            >
              The "I Am Groot" series is a lighthearted and whimsical adventure
              that follows the lovable and sentient tree creature, Groot, from
              the Guardians of the Galaxy. In this series, Groot takes center
              stage as the main character, showcasing his charming personality
              and unique perspective on the universe. The story begins with
              Groot finding himself separated from the rest of the Guardians
              during a mission gone awry. Lost and alone, Groot embarks on a
              journey across the cosmos, encountering strange new worlds and
              forming unlikely friendships along the way. As Groot navigates
              various planets and encounters different species, he becomes
              entangled in a larger cosmic conflict. A powerful cosmic entity
              threatens to disrupt the balance of the universe, endangering all
              life. Groot, armed with his limited vocabulary and his
              compassionate nature, takes it upon himself to rally a band of
              misfits and save the day. Throughout the series, Groot forms a
              ragtag team of unexpected allies. These include a sarcastic bounty
              hunter, an adventurous alien child, and a brilliant yet quirky
              scientist. Each member brings their own unique skills and quirks,
              and together they face a series of challenges and obstacles that
              test their resolve. The "I Am Groot" series infuses humor, heart,
              and a sense of childlike wonder as Groot and his companions
              traverse the galaxy. Groot's limited vocabulary, consisting mostly
              of the phrase "I am Groot," is cleverly utilized, leading to
              humorous misunderstandings and communication hurdles. As the team
              faces off against the cosmic entity threatening the universe,
              Groot's true strength and power are revealed. His connection to
              nature and his ability to communicate with plants become key
              elements in their battle against the cosmic threat. Groot's
              empathy and capacity for growth inspire those around him,
              reinforcing the idea that heroism comes in all shapes and sizes.
              In the climactic moments of the series, Groot and his newfound
              friends unite their strengths, combining their unique abilities to
              defeat the cosmic entity and restore balance to the universe.
              Groot emerges as a true hero, recognized not just for his physical
              strength, but for his kindness, loyalty, and resilience. The "I Am
              Groot" series celebrates the joy and innocence of Groot's
              character, offering a delightful and whimsical adventure within
              the MCU. It showcases the power of friendship, the strength of
              empathy, and the idea that even the smallest among us can make a
              big difference. The series stands as a testament to the enduring
              popularity of Groot and his ability to captivate audiences with
              his charm and childlike spirit.
            </p>
            <p>
              {" "}
              Release Date of this Series : <b> August 10, 2022 </b>
            </p>
            <p>
              {" "}
              IMDB Rating : <b> 6.7/10 </b>
            </p>
            <p>
              {" "}
              Budget of this Series : <b> -- </b>
            </p>
            <p>
              {" "}
              Episodes : <b>5</b>{" "}
            </p>
            <h5 className="mt-3">Producers of this Series :-</h5>
            <li>Kevin Feige</li>
            <li>James Gunn</li>
            <li>Brad Winderbaum</li>
            <li>Kirsten Lepore</li>
            <h5 className="mt-3">Directors of this Series :-</h5>
            <li>Kirsten Lepore</li>
            <h5 className="mt-3">Famous Actors in this Series :-</h5>
            <li>Vin Diesel (Groot)</li>
            <li>Bradley Cooper (Rocket)</li>
          </div>
        </div>

        <div className="my-4">
          <h3 id="list-item-1">She Hulk (2022)</h3>
          <div>
            <img
              src={She_Hulk}
              alt="This is not found."
              style={{ width: "65%", marginLeft: "15%" }}
            />
            <p
              className="my-3 mx-2 text-justify"
              style={{ textAlign: "justify" }}
            >
              The "She-Hulk" series follows the story of Jennifer Walters, a
              skilled lawyer who also happens to be the cousin of Bruce Banner,
              the Hulk. When Jennifer is gravely injured, Bruce Banner gives her
              a life-saving blood transfusion, inadvertently passing on some of
              his gamma-infused powers. As a result, Jennifer transforms into
              the green-skinned, superhuman She-Hulk. The series explores
              Jennifer's dual life as a lawyer and a superhero, as she embraces
              her newfound powers and learns to navigate the challenges that
              come with them. Jennifer uses her legal expertise to represent
              individuals with superhuman abilities, tackling cases involving
              enhanced individuals and defending their rights. As She-Hulk,
              Jennifer becomes a beloved and respected figure within the
              superhero community. She embraces her physical strength and fights
              against injustice, both in and out of the courtroom. The series
              showcases her unique blend of intelligence, wit, and power as she
              balances her personal and professional life. Throughout the
              series, Jennifer encounters a variety of cases and adversaries
              that test her abilities and force her to confront her own
              limitations. She faces off against familiar villains from the
              comics, as well as new threats that emerge from her legal
              practice. Alongside her best friend and fellow lawyer, Patsy
              Walker (also known as Hellcat), Jennifer tackles legal battles
              while battling supervillains. The series also delves into
              Jennifer's personal life and relationships. It explores her
              complicated dynamic with Bruce Banner and their shared connection
              through their gamma-induced powers. Jennifer strives to find her
              own identity separate from her cousin's, while also grappling with
              the responsibilities and consequences of her abilities. As the
              series progresses, Jennifer's journey takes an unexpected turn
              when she discovers a dark conspiracy within the legal and
              superhero worlds. She must navigate treacherous waters, uncovering
              hidden truths and facing powerful enemies who seek to manipulate
              and control the balance of power. In the series' climactic
              moments, Jennifer confronts the mastermind behind the conspiracy,
              employing her legal skills, physical strength, and intelligence to
              bring them to justice. She proves that she is not just a
              formidable superhero, but also a brilliant lawyer capable of
              outsmarting her adversaries. The "She-Hulk" series explores themes
              of empowerment, identity, and the pursuit of justice. It
              celebrates Jennifer Walters' unique blend of strength and
              intelligence, showcasing her as a powerful and multifaceted hero
              within the MCU. The series offers a compelling mix of action,
              humor, and courtroom drama, delivering a fresh and captivating
              story that expands the superhero genre and further enriches the
              Marvel universe.
            </p>
            <p>
              {" "}
              Release Date of this Series : <b> August 18, 2022 </b>
            </p>
            <p>
              {" "}
              IMDB Rating : <b> 5.3/10 </b>
            </p>
            <p>
              {" "}
              Budget of this Series : <b> $225-million </b>
            </p>
            <p>
              {" "}
              Episodes : <b>9</b>{" "}
            </p>
            <h5 className="mt-3">Producers of this Series :-</h5>
            <li>Jessica Gao</li>
            <h5 className="mt-3">Directors of this Series :-</h5>
            <li>Kat Coiro</li>
            <h5 className="mt-3">Famous Actors in this Series :-</h5>
            <li>Tatiana Maslany (She Hulk)</li>
            <li>Mark Ruffalo (Hulk)</li>
            <li>Ginger Gonzaga (Nikki Ramos)</li>
            <li>Jameela Jamil (Titania)</li>
            <li>Charlie Cox (Daredevil)</li>
            <li>Tim Roth (Abomination)</li>
            <li>Wil Deusner (Skaar)</li>
            <li>Renée Elise Goldsberry (Amelia)</li>
          </div>
        </div>

        <div className="my-4">
          <h3 id="list-item-1">Secret Invasion (2023)</h3>
          <div>
            <img
              src={Secret_Invasion}
              alt="This is not found."
              style={{ width: "65%", marginLeft: "15%" }}
            />
            <p
              className="my-3 mx-2 text-justify"
              style={{ textAlign: "justify" }}
            >
              The core concept of Secret Invasion is undeniably fascinating. The
              Skrulls, a shape-shifting alien species, plan to take over Earth
              by stealing the faces of humans and infiltrating their militaries
              and governments. Secret Invasion is an American television
              miniseries created by Kyle Bradstreet for the streaming service
              Disney+, loosely adapted from the 2008 Marvel Comics storyline of
              the same name. It is the ninth television series in the Marvel
              Cinematic Universe (MCU) produced by Marvel Studios, sharing
              continuity with the films of the franchise. It follows Nick Fury
              and Talos as they uncover a conspiracy by a group of shapeshifting
              Skrulls to conquer Earth. Bradstreet serves as the head writer
              with Ali Selim directing. Samuel L. Jackson and Ben Mendelsohn
              reprise their respective roles as Fury and Talos from previous MCU
              media, with Kingsley Ben-Adir, Killian Scott, Samuel Adewunmi,
              Dermot Mulroney, Richard Dormer, Emilia Clarke, Olivia Colman, Don
              Cheadle, Charlayne Woodard, Christopher McDonald, and Katie
              Finneran also starring. Development on the series began by
              September 2020, with Bradstreet and Jackson attached. The title
              and premise of the series, along with Mendelsohn's return, were
              revealed that December. Additional casting occurred throughout
              March and April 2021, followed by the hiring of Selim that May to
              direct the series. Filming began in London by September 2021 and
              wrapped in late April 2022, with additional filming around
              England. Secret Invasion premiered on June 21, 2023, and ran for
              six episodes until July 26. It is the first series of Phase Five
              of the MCU. The series received mixed reviews from critics, who
              praised Jackson's performance but criticized the writing, pacing,
              and visual effects.
            </p>
            <p>
              {" "}
              Release Date of this Series : <b> June 21, 2023 </b>
            </p>
            <p>
              {" "}
              IMDB Rating : <b> 6.2/10 </b>
            </p>
            <p>
              {" "}
              Budget of this Series : <b> $200-million </b>
            </p>
            <p>
              {" "}
              Episodes : <b>6</b>{" "}
            </p>
            <h5 className="mt-3">Producers of this Series :-</h5>
            <li> Kevin Feige</li>
            <h5 className="mt-3">Directors of this Series :-</h5>
            <li>Ali Selim</li>
            <h5 className="mt-3">Famous Actors in this Series :-</h5>
            <li>Samuel L. Jackson (Nick Fury)</li>
            <li>Cobie Smulders (Maria Hill)</li>
            <li>Ben Mendelsohn (Talos)</li>
            <li>Kingsley Ben-Adir (Gravik)</li>
            <li>Emilia Clarke (G'iah)</li>
            <li>Olivia Colman (Sonya Falsworth)</li>
            <li>Dermot Mulroney (Ritson)</li>
            <li>Don Cheadle (James Rhodes)</li>
            <li>Charlayne Woodard (Varra / Priscilla Davis)</li>
          </div>
        </div>
      </div>
      {/* {props.setProgress(100)} */}
    </>
  );
}
