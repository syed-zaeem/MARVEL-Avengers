import React from "react";
import Capatain_America_Character_Image from "../MyImages/Vision_character_image.jpg";
import '../Characters.css'

export default function Vision() {
  let Iron_Man_Style = {
    color: "#C92020",
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
      <div className="my-4" style={{ marginLeft: "42%" }}>
        <h3 id="list-item-1" style={Iron_Man_Style}>
          Vision{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify" }}
          >
            Vision, the sentient android and Avenger, had a story that delved
            into themes of identity, humanity, and the complexities of love.
            Born from the fusion of artificial intelligence and the powerful
            Mind Stone, Vision's journey was a captivating exploration of what
            it means to be alive. From the moment of his creation, Vision stood
            as a symbol of hope and unity, bridging the gap between humanity and
            technology. With his unique abilities, including flight, superhuman
            strength, and the ability to phase through solid objects, he became
            an integral member of the Avengers, offering a perspective and
            wisdom that surpassed his artificial origins. But Vision's true
            journey of self-discovery began when he developed an emotional bond
            with Wanda Maximoff, also known as Scarlet Witch. Their connection
            transcended their differences, showcasing the capacity for love and
            companionship between beings of different origins. As Vision
            grappled with his own existence, he sought to understand his purpose
            and place in the world. Through his interactions with the Avengers
            and his growing relationship with Wanda, he learned about empathy,
            compassion, and the complexities of human emotions. Vision's journey
            was not without its challenges. He became a target for those who
            sought to harness the power of the Mind Stone within his being. His
            vulnerability and the significance of the stone within him made him
            a coveted prize, leading to conflicts that tested his resilience and
            loyalty to his friends. In the ultimate battle, Vision confronted
            the possibility of sacrificing himself to prevent the destruction
            that would result from the stone falling into the wrong hands. This
            pivotal moment highlighted Vision's selflessness and unwavering
            dedication to protecting others, even at great personal cost.
            Vision's story also delved into philosophical questions surrounding
            sentience and the nature of being. His conversations with fellow
            Avengers, particularly with Captain America and Thor, delved into
            the deeper existential aspects of his existence, exploring themes of
            consciousness and the blurred lines between man and machine. Through
            it all, Vision remained a beacon of wisdom, intelligence, and
            integrity. His measured and logical approach to situations often
            provided a balancing perspective among the more impulsive members of
            the team. He embodied the idea that heroism isn't limited to those
            with biological origins but can be found in the unlikeliest of
            forms. And so, as Vision's journey continued, his presence served as
            a reminder that humanity isn't defined solely by biology but by the
            choices we make and the capacity to love and empathize. His quest
            for understanding and his unwavering commitment to doing what is
            right showcased the profound impact an artificial being could have
            on the world and its heroes. Vision's story expanded the horizons of
            the Marvel Cinematic Universe, exploring themes of identity, love,
            and the blurred lines between man and machine. Through his
            experiences, he challenged our preconceptions of what it means to be
            alive and added a layer of depth and philosophical exploration to
            the superhero narrative.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Vision </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Paul Bettany </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Vision in MCU :-
          </h5>
          <li>Mind Stone</li>
          <li>Physical Powers</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li>Avengers: Age of Ultron (2015)</li>
          <li>Captain America: Civil War (2016)</li>
          <li style={{ marginBottom: "250px" }}>
            Avengers: Infinity War (2018)
          </li>
        </div>
      </div>
    </div>
  );
}
