import React from "react";
import Capatain_America_Character_Image from "../MyImages/Wasp_character_image.jpg";
import '../Characters.css'

export default function Wasp() {
  let Iron_Man_Style = {
    color: "yellow",
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
          Wasp{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify", width: "50%" }}
          >
            Wasp, also known as Hope van Dyne, had a story that revolved around
            empowerment, family legacy, and the embrace of her own heroic
            destiny. As a skilled fighter and the daughter of the original
            Ant-Man, Hope played a pivotal role in expanding the ranks of
            superheroes and fighting alongside the Avengers. Growing up under
            the shadow of her father, Hank Pym, the original Ant-Man, Hope
            possessed a natural talent and determination that made her a force
            to be reckoned with. But it was only when her father revealed the
            truth about her mother's disappearance and her own potential as a
            hero that her journey truly began. With the help of her father and
            the advanced technology he developed, Hope assumed the mantle of
            Wasp. Equipped with a specialized suit that granted her the ability
            to shrink, fly, and fire bio-electric blasts, she joined forces with
            Scott Lang, the current Ant-Man, to carry on her family's legacy and
            protect the world from threats both big and small. Throughout her
            story, Hope navigated the complexities of her relationship with her
            father, Hank, and her struggle to prove herself as a capable and
            independent hero. Despite the challenges and obstacles she faced,
            she remained resilient and determined, refusing to let anyone define
            her worth based on her gender or her family name. Hope's skills as a
            fighter, strategist, and pilot made her an invaluable asset to the
            superhero team. Her partnership with Ant-Man showcased a dynamic
            duo, with their contrasting personalities and abilities
            complementing each other perfectly. Together, they embarked on
            thrilling adventures, facing off against formidable foes and using
            their unique powers to save the day. But Hope's journey was not just
            about heroism and combat. She also experienced personal growth and
            discovered her own strength and purpose. Through her experiences,
            she came to embrace her own identity as Wasp and found her voice,
            becoming a symbol of empowerment for others. Her story reached new
            heights when she became a founding member of the Avengers in their
            fight against Thanos and his forces. Her leadership, bravery, and
            unwavering determination in the face of unimaginable odds proved
            instrumental in the battle to save the universe. Wasp's story
            exemplified the power of embracing one's true potential and breaking
            free from the constraints of expectations. Hope van Dyne, with her
            resilience, intelligence, and unwavering spirit, demonstrated that
            heroism knows no bounds and that anyone, regardless of their
            background or circumstances, can make a difference. And so, as Wasp
            continued to fly into action, her presence served as a reminder that
            strength, courage, and determination come in many forms. Hope van
            Dyne, with her fierce determination and her ability to overcome
            obstacles, showcased that true heroism lies not just in the powers
            we possess, but in the choices we make and the impact we have on the
            world.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Hope Van Dyne </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Evangeline Lilly </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Wasp in MCU :-
          </h5>
          <li>Suits</li>
          <li>Pym Particles</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li>Ant Man (2015)</li>
          <li>Ant Man and the Wasp (2018)</li>
          <li>Avengers: Endgame (2019)</li>
          <li style={{ marginBottom: "250px" }}>
            Ant Man and the Wasp: Quantumania (2023)
          </li>
        </div>
      </div>
    </div>
  );
}
