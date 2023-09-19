import React from "react";
import Capatain_America_Character_Image from "../MyImages/Drax_character_image.jpg";
import '../Characters.css'

export default function Drax() {
  let Iron_Man_Style = {
    color: "darkgray",
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
          Drax The Destroyer{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify", width: "50%" }}
          >
            Drax the Destroyer was a being driven by a single-minded quest for
            vengeance. His tragic past fueled his relentless pursuit of justice,
            as he sought to avenge the loss of his family at the hands of the
            merciless villain, Ronan the Accuser. Driven by rage and an
            insatiable desire for revenge, Drax set out on a path of
            destruction, determined to track down Ronan and bring him to
            justice. With his immense strength, combat skills, and an unwavering
            determination, he became a force to be reckoned with. But as Drax
            embarked on his mission, he found himself unexpectedly thrown into a
            ragtag group of outlaws known as the Guardians of the Galaxy.
            Initially resistant to their presence, he saw them as a means to an
            end—a way to get closer to his ultimate goal of vengeance. However,
            as Drax spent more time with his newfound companions, he began to
            see beyond his own quest and developed a sense of camaraderie and
            loyalty. He realized that there was more to life than just revenge
            and that there were battles worth fighting for that extended beyond
            his personal vendetta. Through his interactions with the Guardians,
            Drax learned the value of friendship, trust, and the importance of
            working together for a greater purpose. He discovered that the bonds
            forged in the heat of battle were stronger than any grudge he held,
            and that true strength came not just from physical might but from
            the unity of a team. Drax's journey took him to the farthest reaches
            of the galaxy, where he faced countless adversaries and encountered
            strange and wondrous worlds. Along the way, he learned to embrace
            humor and found joy in unexpected moments, allowing himself to
            experience emotions beyond anger and grief. His transformation from
            a solitary avenger to a valued member of the Guardians of the Galaxy
            was a testament to his growth and the power of redemption. Drax's
            indomitable spirit and unyielding resolve were instrumental in the
            team's battles against cosmic threats, including the mighty Thanos.
            But beneath his fierce exterior, Drax carried a deep sense of loss
            and pain. His mission for revenge was a constant reminder of the
            tragedy that had shaped his life. Yet, he channeled his pain into a
            determination to protect others from suffering the same fate,
            becoming a guardian for the innocent and a defender against evil.
            Drax the Destroyer would forever be remembered as a warrior with a
            heart, a fierce and loyal friend, and a symbol of resilience. His
            journey taught us that even in the face of immense tragedy, it was
            possible to find solace and purpose in the pursuit of justice. As he
            stood shoulder to shoulder with his fellow Guardians, Drax
            exemplified the strength of unity and the capacity for growth and
            redemption. His story reminded us that no matter how broken we may
            feel, there is always room for healing, connection, and the
            possibility of a brighter future.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Drax </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Dave Bautista </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Drax in MCU :-
          </h5>
          <li>Knives</li>
          <li>Physical Strength</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li>Guardians of the Galaxy (2014)</li>
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
