import React from "react";
import Capatain_America_Character_Image from "../MyImages/Groot_character_image.jpg";
import '../Characters.css'

export default function Groot() {
  let Iron_Man_Style = {
    color: "#BD7C36",
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
      <div className="my-4" style={{marginLeft: '48%'}}>
        <h3 id="list-item-1" style={Iron_Man_Style}>
          Groot{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify"}}
          >
            Groot, a sentient tree-like being, was a character whose journey
            exemplified the power of friendship, sacrifice, and growth. Despite
            his limited vocabulary, consisting only of the words "I am Groot,"
            he conveyed a depth of emotion and wisdom that touched the hearts of
            those around him. Groot's story began when he joined forces with a
            band of unlikely heroes known as the Guardians of the Galaxy.
            Initially viewed as a fearsome creature, Groot quickly endeared
            himself to his newfound companions through his loyalty, kindness,
            and his unwavering willingness to protect them. While his language
            might have been simple, Groot's actions spoke volumes. He would
            selflessly put himself in harm's way to shield his friends, using
            his regenerative abilities to heal their wounds and keep them safe.
            His gentle nature and nurturing spirit made him the heart of the
            team, a reminder that true strength lies not just in physical might,
            but in compassion and selflessness. But Groot's journey took a
            tragic turn when he sacrificed himself to save his friends during a
            dangerous battle. In a poignant and emotional moment, he used his
            own body as a shield, absorbing the full force of an explosion to
            protect those he held dear. His act of heroism left only a small
            twig of himself remaining. However, Groot's story didn't end there.
            From the remains of the original Groot, a new incarnation sprouted—a
            smaller, younger version affectionately known as Baby Groot. While
            physically smaller, Baby Groot possessed the same spirit and love
            for his friends as his predecessor. As Baby Groot grew, he carried
            on the legacy of his older self, becoming an integral part of the
            Guardians' adventures. His innocence, curiosity, and mischievous
            nature brought joy and lightness to the team, reminding them of the
            importance of embracing life's simple pleasures, even in the face of
            danger. Throughout his journey, Groot's presence touched the lives
            of those around him. He taught his friends the power of empathy and
            self-sacrifice, showing them that heroism comes in all shapes and
            sizes. Groot's unwavering devotion and willingness to give
            everything for his friends left an indelible mark on their hearts.
            As the Guardians faced new challenges and fought against formidable
            foes, Groot's abilities proved invaluable. His limbs could transform
            into deadly weapons, providing crucial assistance in battles against
            powerful adversaries. Yet, it was his unwavering loyalty and
            unwavering support that truly made him an irreplaceable member of
            the team. Groot's journey taught us that true heroism transcends
            physical appearances and the limitations of language. His story
            emphasized the power of unity, sacrifice, and the profound impact
            that small acts of kindness and selflessness can have on the world.
            And so, as Groot continued to grow, he remained a steadfast and
            cherished member of the Guardians of the Galaxy, reminding us all
            that even the smallest among us can make the biggest difference. His
            legacy of love, friendship, and growth would forever be etched in
            the hearts of his companions and those who witnessed his remarkable
            journey.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Groot </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Vin Diesel </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Groot in MCU :-
          </h5>
          <li>Regeneration Power</li>
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
