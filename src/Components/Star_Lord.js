import React from "react";
import Capatain_America_Character_Image from "../MyImages/Star_Lord_character_image.jpg";
import '../Characters.css'

export default function Star_Lord() {
  let Iron_Man_Style = {
    color: "red",
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
          Star_Lord{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify", width: "50%" }}
          >
            Star-Lord, also known as Peter Quill, had a story that blended
            action, humor, and a touch of cosmic charm. His journey was one of
            self-discovery, redemption, and the pursuit of his own unique sense
            of heroism. Peter Quill was an intergalactic adventurer and the
            self-proclaimed leader of the Guardians of the Galaxy. With his
            quick wit, charm, and love for '80s music, he became the unlikely
            hero of the cosmos. Peter's story began when he was abducted from
            Earth as a young boy by a group of space pirates called the
            Ravagers. Raised among them, he learned the ways of the galaxy and
            embraced the life of a scoundrel, smuggling and stealing to get by.
            But it was in his quest for a mysterious artifact known as the Orb
            that Peter's life took an unexpected turn. Little did he know that
            the Orb contained one of the six powerful Infinity Stones, coveted
            by the villainous Ronan the Accuser. As fate would have it, Peter
            found himself teaming up with a ragtag group of misfits—Gamora,
            Drax, Rocket, and Groot—forming the Guardians of the Galaxy.
            Together, they embarked on a thrilling adventure to protect the
            galaxy and prevent the Infinity Stone from falling into the wrong
            hands. Throughout their escapades, Peter's true nature began to
            shine through. Beneath his brash and sometimes irresponsible
            exterior, he possessed a heart of gold and a deep sense of loyalty
            to his newfound family. He discovered that heroism came not from
            flashy acts of bravery but from the bonds of friendship and the
            willingness to sacrifice for those he cared about. Peter's journey
            was also marked by personal growth and redemption. He grappled with
            the legacy of his absent father, finally meeting him in the form of
            Ego, a powerful celestial being. In that encounter, Peter confronted
            his own fears and desires, realizing that true family was not
            defined by blood but by the connections we forge. With each
            adventure, Peter learned important lessons about responsibility,
            love, and the weight of his actions. He faced his own mistakes and
            made difficult choices that shaped not only his own destiny but also
            the fate of the universe. Peter's charm and humor brought a unique
            flavor to the cosmic landscape of the Marvel Cinematic Universe. His
            love for music, especially the nostalgic tunes of the '80s, added a
            touch of nostalgia and personality to his character. His infectious
            enthusiasm and sarcastic wit made him a beloved figure among fans,
            infusing the Guardians of the Galaxy with a distinct and endearing
            charm. And so, as Star-Lord continued to journey through the cosmos,
            his presence served as a reminder that heroism can come from the
            most unexpected places. Peter Quill, with his mix of bravado and
            vulnerability, embodied the idea that even flawed individuals can
            rise to the challenge and make a difference in the vastness of
            space.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Peter Quill </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Chris Pratt </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Star Lord in MCU :-
          </h5>
          <li>Devices</li>
          <li>Halmet</li>
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
