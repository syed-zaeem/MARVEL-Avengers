import React from "react";
import Capatain_America_Character_Image from "../MyImages/Black_Panther_character_image.jpg";
import '../Characters.css'

export default function Black_Panther() {
  let Iron_Man_Style = {
    color: "Purple",
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
          Black Panther{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify", width: "50%" }}
          >
            In the hidden nation of Wakanda, a young prince named T'Challa was
            preparing to assume the mantle of the Black Panther—the protector of
            his people and the rightful king. But little did he know that his
            path would be fraught with challenges that would test his strength,
            leadership, and devotion to his nation. Following the death of his
            father, T'Challa ascended to the throne of Wakanda. Clad in the
            iconic Black Panther suit, which derived its power from the mystical
            heart-shaped herb, he embraced his destiny as both a warrior and a
            king. But as T'Challa sought to maintain the isolationist traditions
            of Wakanda, he soon realized that the world around him was changing.
            Threats from outside forces and a dark secret lurking within his own
            nation forced him to confront the reality that Wakanda's prosperity
            could not be achieved in isolation. T'Challa's journey took him
            beyond the borders of Wakanda, as he ventured into the wider world
            to uphold justice and protect the innocent. With the aid of his
            loyal bodyguard, Okoye, and his technologically gifted sister,
            Shuri, he faced adversaries such as Ulysses Klaue and the mercenary
            Erik Killmonger, whose radical ideals challenged T'Challa's vision
            for Wakanda. Through his trials, T'Challa learned that true strength
            came not just from his enhanced abilities, but from the wisdom and
            compassion that guided his actions. He understood that Wakanda's
            advanced technology had the potential to aid the world, and he
            embraced the responsibility to share its resources and knowledge to
            create a better future for all. T'Challa's transformation as the
            Black Panther mirrored his growth as a leader. He became a voice for
            change, challenging the isolationist policies of the past and
            embracing a more inclusive vision for Wakanda. In doing so, he
            united his people and formed powerful alliances with other heroes,
            such as Captain America and the Avengers, to defend the world
            against formidable threats. But T'Challa's journey was not without
            sacrifice. He faced personal tragedies and moments of doubt, yet he
            remained resolute in his commitment to honor his father's legacy and
            protect his people. His unwavering dedication to his ideals and his
            nation inspired not only the people of Wakanda but countless
            individuals around the world. As the Black Panther, T'Challa fought
            not just with physical prowess, but with a deep understanding of the
            power of empathy and unity. He sought to bridge the divide between
            different cultures, recognizing the strength that could be found in
            diversity. In the end, T'Challa's legacy extended far beyond the
            Black Panther suit. He demonstrated that true leadership meant
            recognizing the interconnectedness of all people and striving for a
            world where justice and equality prevailed. He left an indelible
            mark on Wakanda and the world, forever remembered as a hero who
            stood for justice, compassion, and the enduring power of a nation
            united. And so, as the Black Panther, T'Challa stood as a symbol of
            hope, a king who embraced his responsibilities with grace, and a
            warrior who fought for a better future. His story taught us that
            greatness was not measured solely by one's power, but by the
            strength of their character and their commitment to the greater
            good.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> T'challa </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Chadwick Boseman </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Black Panther in MCU :-
          </h5>
          <li>Vibranium</li>
          <li>Suits</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li>Captain America: Civil War (2016)</li>
          <li>Black Panther (2018)</li>
          <li>Avengers: Infinity War (2018)</li>
          <li style={{ marginBottom: "250px" }}>Avengers: Endgame (2019)</li>
        </div>
      </div>
    </div>
  );
}
