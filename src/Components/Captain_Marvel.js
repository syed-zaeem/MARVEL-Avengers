import React from "react";
import Capatain_America_Character_Image from "../MyImages/Captain_Marvel_character_image.jpg";
import '../Characters.css'

export default function Captain_Marvel() {
  let Iron_Man_Style = {
    color: "#2596BE",
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
      <div className="my-4" style={{ marginLeft: "52%" }}>
        <h3 id="list-item-1" style={Iron_Man_Style}>
          Captain Marvel{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify" }}
          >
            Carol Danvers, an Air Force pilot with a fearless spirit, had always
            dreamed of soaring to new heights. Little did she know that her
            destiny would take her beyond the Earth's atmosphere and transform
            her into Captain Marvel, a beacon of hope and power. Carol's journey
            began when an encounter with the enigmatic Kree warrior, Yon-Rogg,
            resulted in a fusion of her DNA with that of the Kree, bestowing her
            with incredible abilities. With her newfound powers of superhuman
            strength, energy projection, and the ability to fly, she became a
            force to be reckoned with. But Carol's path to understanding her
            true potential was not without obstacles. Haunted by fragmented
            memories of her past and torn between her Kree heritage and her
            connection to Earth, she embarked on a mission to uncover the truth
            about her identity. As Carol delved deeper into her past, she
            discovered that she had once been a fighter pilot named Vers, who
            had crash-landed on Earth years ago. Her journey led her to
            reconnect with old friends, including Maria Rambeau, another
            fearless pilot who had remained by her side through thick and thin.
            Through her experiences, Carol learned the importance of self-belief
            and the power of embracing one's true self. She shed the shackles of
            her past and fully embraced her identity as Captain Marvel, vowing
            to use her powers to protect the innocent and defend the universe
            from those who sought to exploit its vulnerabilities. Carol's
            mission led her to join forces with the Avengers, Earth's mightiest
            heroes, as they faced the intergalactic threat of Thanos. Her
            presence and strength became instrumental in the battle to save half
            of all life in the universe, as she fought alongside her comrades to
            restore balance and order. But Carol's impact extended beyond her
            role as a superhero. She became a symbol of resilience and
            empowerment, inspiring others, particularly young girls, to embrace
            their own strengths and chase their dreams without fear or
            hesitation. She shattered barriers and challenged the notion that
            power had a gender, proving that anyone could rise to greatness. As
            Captain Marvel, Carol embodied the spirit of perseverance and the
            unwavering commitment to justice. Her journey taught her that true
            power lay not in the abilities she possessed, but in the compassion,
            bravery, and determination that guided her actions. And so, as
            Captain Marvel, Carol Danvers became a beacon of hope, a cosmic
            force for good in an ever-changing universe. Her story reminded us
            that we all had the capacity to tap into our inner strength and rise
            above any challenge that stood in our way. As she soared through the
            skies, her legacy remained etched in the hearts of those she
            inspired, a testament to the indomitable spirit of a hero who
            embraced her true potential and fought for a better world.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Carol Danvers </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Brie Larson </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Captain Marvel in MCU :-
          </h5>
          <li>Cosmic Powers</li>
          <li>Physical Strength</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li>Captain Marvel (2019)</li>
          <li style={{ marginBottom: "250px" }}>Avengers: Endgame (2019)</li>
        </div>
      </div>
    </div>
  );
}
