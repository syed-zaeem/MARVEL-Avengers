import React from "react";
import Capatain_America_Character_Image from "../MyImages/Quick_Silver_character_image.jpg";
import '../Characters.css'

export default function Quick_Silver() {
  let Iron_Man_Style = {
    color: "#26A2E0",
  };

  return (
    <div
      style={{
        color: "black",
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
      <div className="my-4" style={{marginLeft: '40%'}}>
        <h3 id="list-item-1" style={Iron_Man_Style}>
          Quick Silver{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify"}}
          >
            Quicksilver, also known as Pietro Maximoff, possessed the
            extraordinary ability of superhuman speed. His story was one of
            courage, sacrifice, and the unwavering bond of family. Pietro, along
            with his twin sister Wanda, endured a difficult childhood marked by
            tragedy and instability. When they discovered their superhuman
            abilities, they became embroiled in a world filled with uncertainty
            and danger. Together, they relied on their unique powers to survive.
            As members of the Avengers, Pietro and Wanda fought alongside
            Earth's mightiest heroes. With his incredible speed, Pietro became
            an unstoppable force on the battlefield. He dashed through the
            chaos, swiftly neutralizing threats and saving lives. His agility
            and reflexes were unmatched, making him a formidable ally. But it
            was during the battle against Ultron that Pietro faced his greatest
            challenge. He selflessly used his incredible speed to protect
            innocent civilians, pushing himself to the limits to shield them
            from harm. In a moment of pure heroism, he made the ultimate
            sacrifice, using his own body to save the lives of Hawkeye and a
            child. Pietro's sacrifice left an indelible mark on the hearts of
            his friends and family. His loss was deeply felt, and the memory of
            his selflessness served as a constant reminder of the importance of
            fighting for what is right, even in the face of overwhelming odds.
            Despite his short time as an Avenger, Pietro's legacy lived on. His
            heroic acts inspired his sister Wanda and the rest of the team to
            continue the fight against evil. His spirit fueled their
            determination and united them in their pursuit of justice. Pietro
            Maximoff, known as Quicksilver, was a hero whose speed and
            selflessness made him a force to be reckoned with. His story taught
            us the value of family, the strength found in sacrifice, and the
            enduring impact that even the briefest of lives can have on the
            world. As time passed, Pietro's memory remained etched in the hearts
            of his friends and allies. His legacy served as a reminder that true
            heroes are defined not only by their powers but by their courage,
            compassion, and willingness to lay down their lives for the greater
            good. And so, as the Avengers carried on in the face of new
            challenges, Pietro's presence would forever be felt, a beacon of
            inspiration and a symbol of the extraordinary lengths one can go to
            protect those they love.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Pietro Maximoff </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Aaron Taylor-Johnson </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Quick Silver in MCU :-
          </h5>
          <li>Super Speed</li>
          <li>Physical Power</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li style={{ marginBottom: "250px" }}>
            Avengers: Age of Ultron (2015)
          </li>
        </div>
      </div>
    </div>
  );
}
