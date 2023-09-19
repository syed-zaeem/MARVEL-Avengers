import React from "react";
import Capatain_America_Character_Image from "../MyImages/Doctor_Strange_character_image.jpg";
import '../Characters.css'

export default function Doctor_Strange() {
  let Iron_Man_Style = {
    color: "darkorange",
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
      <div className="my-4" style={{ marginLeft: "38%" }}>
        <h3 id="list-item-1" style={Iron_Man_Style}>
          Doctor Strange{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify" }}
          >
            Dr. Stephen Strange was a brilliant neurosurgeon known for his
            exceptional skills and unwavering confidence. But his life took a
            dramatic turn when a devastating car accident left his hands
            shattered, robbing him of his surgical abilities and plunging him
            into despair. Desperate to find a cure for his condition, Strange
            embarked on a journey that would lead him to the Ancient One, a
            mystical sorcerer who resided in the hidden realm of Kamar-Taj.
            Under her tutelage, Strange discovered the mystic arts and the
            boundless realm of possibilities that existed beyond the physical
            world. As Strange delved deeper into the mystical arts, he realized
            that his journey was about more than just healing his physical body.
            It was an exploration of the mind, the spirit, and the very fabric
            of reality itself. He shed his ego and embraced the humility and
            discipline required to wield the immense power of sorcery. Through
            his training, Strange became the Sorcerer Supreme, the protector of
            Earth against supernatural threats. Armed with the Eye of Agamotto,
            an artifact capable of manipulating time itself, he defended the
            world from ancient forces and dark dimensions that threatened to
            consume it. But Strange's journey was not without its challenges. He
            faced the relentless pursuit of Kaecilius, a former disciple of the
            Ancient One who sought to unleash the power of the dark dimension
            and bring about eternal life. In a battle of wills and sorcery,
            Strange ultimately triumphed, saving the world from Kaecilius'
            destructive plans. As the Sorcerer Supreme, Strange joined forces
            with the Avengers, Earth's mightiest heroes, to protect the world
            from formidable threats. His mastery of the mystic arts and his
            ability to manipulate time proved invaluable in their battles
            against the likes of Thanos and other cosmic adversaries. But
            Strange's true strength lay not only in his magical abilities, but
            in his understanding of the consequences of his actions. He foresaw
            the future through his mystical visions and made difficult choices,
            even if they seemed to go against the immediate desires of his
            fellow heroes. His commitment to the greater good and his unwavering
            resolve to protect the fabric of reality often placed him at odds
            with others, but he remained steadfast in his mission. Through his
            journey, Strange learned that the power he wielded was a
            double-edged sword. It required responsibility, sacrifice, and an
            unyielding commitment to protecting the natural order of things. He
            understood that he had to put aside personal desires for the sake of
            the greater good, even if it meant making painful choices. Dr.
            Stephen Strange transformed from a skilled surgeon driven by ego to
            a sorcerer driven by a sense of duty and a deep understanding of the
            complexities of the universe. His story taught us that even in the
            face of overwhelming odds, we could find strength within ourselves
            and rise above our limitations. As the Sorcerer Supreme, Dr. Strange
            became a guardian of realms and a protector of the mystical balance.
            His legacy inspired others to explore the depths of their own
            potential and embrace the unseen forces that shape our reality. And
            so, as Doctor Strange, he stood as a beacon of wisdom, a master of
            the mystic arts who safeguarded the world from supernatural threats.
            His journey exemplified the transformative power of perseverance,
            humility, and the pursuit of knowledge, reminding us that true power
            lies not in the hands but in the mind and the spirit.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Doctor Stephen Strange </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Benedict Cumberbatch </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Doctor Strange in MCU :-
          </h5>
          <li>Magic Spells</li>
          <li>Cloak of Levitation</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li>Doctor Strange (2016)</li>
          <li>Thor Ragnaork (2017)</li>
          <li>Avengers: Infinity War (2018)</li>
          <li>Avengers: Endgame (2019)</li>
          <li>Spider Man: No Way Home (2021)</li>
          <li style={{ marginBottom: "250px" }}>
            Doctor Strange in the Multiverse of Madness (2022)
          </li>
        </div>
      </div>
    </div>
  );
}
