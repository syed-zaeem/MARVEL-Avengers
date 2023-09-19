import React from "react";
import Capatain_America_Character_Image from "../MyImages/Mantis_character_image.jpg";
import '../Characters.css'

export default function Mantis() {
  let Iron_Man_Style = {
    color: "#2AA41C",
  };

  return (
    <div
      style={{
        color: "white",
        width: "78%",
        backgroundImage: `url(${Capatain_America_Character_Image})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        top: "56px",
        backgroundSize: "100% 100%",
        // backgroundSize: "center",
        backgroundPosition: 'center',
        marginLeft: "0px",
      }}
      data-bs-spy="scroll"
      data-bs-target="#list-example"
      data-bs-offset="0"
      className="scrollspy-example px-4"
      tabIndex="0"
    >
      <div className="my-4">
        <h3 id="list-item-1" style={Iron_Man_Style}>
          Mantis{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify", width: "50%" }}
          >
            Mantis, a unique empath and member of the Guardians of the Galaxy,
            possessed a remarkable ability to sense and influence the emotions
            of those around her. Her journey was one of self-discovery and
            finding her place in a universe filled with chaos and adventure.
            Mantis was raised by Ego, a celestial being who posed as a
            benevolent father figure. Under his tutelage, she learned to harness
            her empathic powers, using them to soothe and manipulate the
            emotions of others. However, she was sheltered from the realities of
            the galaxy and knew little of the world beyond Ego's domain.
            Everything changed when Mantis crossed paths with the Guardians of
            the Galaxy, a group of interstellar misfits who became her unlikely
            family. As she traveled with them, she discovered a sense of
            belonging and a purpose greater than herself. Mantis found solace in
            their companionship, their camaraderie, and their unwavering
            commitment to doing what was right. During their adventures, Mantis
            played a crucial role in the battles against cosmic threats. Her
            ability to sense the emotions of others allowed her to provide
            valuable insights, aiding the team in understanding their allies and
            adversaries. Her gentle nature and empathetic spirit brought a sense
            of harmony and balance to the group, often diffusing tense
            situations and helping to heal emotional wounds. But it was in the
            face of the all-powerful Thanos that Mantis truly demonstrated her
            strength. During the battle on Titan, she used her empathic powers
            to hold Thanos at bay, briefly rendering him helpless by amplifying
            his feelings of grief and regret. Her selfless act allowed the other
            Guardians to momentarily gain the upper hand, showcasing her pivotal
            role in their fight against tyranny. As Mantis continued to grow and
            evolve, she embraced her true potential. She learned to trust in her
            instincts, to believe in her own strength, and to have faith in her
            abilities. With each passing adventure, she became more confident
            and assertive, blossoming into a vital member of the team. Mantis's
            journey was not without challenges. She faced moments of doubt and
            struggled with her own self-worth, often feeling like an outsider
            due to her unique abilities. However, the unwavering support and
            acceptance of her Guardians family helped her overcome these
            obstacles, reminding her that her differences were what made her
            special. Throughout her journey, Mantis's presence brought a sense
            of compassion and understanding to the team. She taught them the
            power of empathy, the importance of recognizing and addressing their
            own emotions, and the profound impact that emotional connection can
            have on one's actions. Mantis's story was a testament to the
            strength of the human spirit and the power of empathy. She proved
            that even the most unassuming individuals can make a significant
            impact by embracing their gifts and using them for the greater good.
            Her journey reminded us all that understanding, compassion, and
            emotional connection are the threads that bind us together as a
            community. And so, as Mantis continued to explore the vast expanse
            of the universe alongside her Guardians family, her legacy would
            forever be remembered as a beacon of empathy, reminding us of the
            extraordinary power of understanding and the ability to touch the
            hearts of those around us.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Mantis </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Pom Klementieff </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Mantis in MCU :-
          </h5>
          <li>Mind Control</li>
          <li>Sweat Nature</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li>Guardians of the Galaxy Vol.2 (2017)</li>
          <li>Avengers: Infinity War (2018)</li>
          <li>Avengers: Endgame (2019)</li>
          <li>Thor: Love and Thunder (2022)</li>
          <li style={{ marginBottom: "250px" }}>
            Guardians of the Galaxy Vol.3 (2023)
          </li>
        </div>
      </div>
    </div>
  );
}
