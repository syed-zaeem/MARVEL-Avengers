import React from "react";
import Capatain_America_Character_Image from "../MyImages/Gamora_character_image.jpg";
import '../Characters.css'

export default function Gamora() {
  let Iron_Man_Style = {
    color: "green",
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
          Gamora{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify", width: "50%" }}
          >
            Gamora, the deadliest woman in the galaxy, had a past marred by
            tragedy and a destiny intertwined with the fate of the universe. As
            an adopted daughter of the villainous Thanos, she grew up under his
            twisted influence, molded into a weapon and trained to be an
            assassin. But Gamora's journey took a dramatic turn when she crossed
            paths with the Guardians of the Galaxy, a group of misfits and
            outlaws with hearts of gold. At first, she saw them as nothing more
            than obstacles in her path, but as time went on, she began to
            question her loyalty to Thanos and the darkness that consumed her.
            Through her interactions with the Guardians, particularly Peter
            Quill, also known as Star-Lord, Gamora found herself torn between
            her allegiance to Thanos and her desire for freedom and redemption.
            She realized that her past did not define her and that she had the
            power to choose her own path. Gamora's transformation truly began
            when she discovered the truth about Thanos' genocidal plans. She
            learned of his quest to collect the Infinity Stones, which would
            give him the power to wipe out half of all life in the universe.
            Horrified by the scale of his madness, she joined forces with the
            Guardians and other heroes to stop him. But Gamora's journey was far
            from easy. She faced internal conflicts, grappling with the guilt of
            her past actions and the fear that she would always be defined by
            her association with Thanos. Yet, she found solace in the love and
            support of her newfound family, the Guardians. As the battle against
            Thanos reached its climax, Gamora played a pivotal role in the fight
            for the universe's survival. She confronted her adoptive father,
            knowing that it would require immense courage and sacrifice to
            ensure his defeat. In a heart-wrenching moment, Gamora made the
            ultimate sacrifice to save the universe, giving her life to protect
            the ones she loved. Though her physical form was lost, Gamora's
            legacy lived on. Her actions and her unwavering resolve inspired the
            Guardians and all who fought alongside them. Her journey from a
            weapon of destruction to a hero willing to lay down her life for the
            greater good exemplified the power of redemption and the capacity
            for change. In the aftermath of the battle, Gamora's absence was
            deeply felt. Her sacrifice was a reminder that heroes come in all
            forms and that sometimes, the greatest acts of heroism require the
            greatest sacrifices. As the universe continued to rebuild, Gamora's
            story remained a testament to the resilience of the human spirit and
            the transformative power of love and friendship. Her legacy would
            forever be etched in the hearts of those who knew her, a symbol of
            strength, redemption, and the enduring hope that even the most
            broken can find their way back to the light.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Gamora </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Zoe Saldana </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Gamora in MCU :-
          </h5>
          <li>Fighting Weapons</li>
          <li>Fighting Skills</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li>Guardians of the Galaxy (2014)</li>
          <li>Guardians of the Galaxy Vol.2 (2017)</li>
          <li>Avengers: Infinity War (2018)</li>
          <li>Avengers: Endgame (2019)</li>
          <li style={{ marginBottom: "250px" }}>
            Guardians of the Galaxy Vol.3 (2023)
          </li>
        </div>
      </div>
    </div>
  );
}
