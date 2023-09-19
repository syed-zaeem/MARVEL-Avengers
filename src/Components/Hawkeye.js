import React from "react";
import Capatain_America_Character_Image from "../MyImages/Hawkeye_character_image.jpg";
import '../Characters.css'

export default function Hawkeye() {
  let Iron_Man_Style = {
    color: "#981CA4",
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
          Hawkeye{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify", width: "50%" }}
          >
            Hawkeye, also known as Clint Barton, was a skilled archer and a
            member of the Avengers. While he lacked superhuman abilities, his
            unwavering determination and exceptional marksmanship made him a
            formidable hero in his own right. Clint's journey began as a highly
            trained agent of S.H.I.E.L.D., where he honed his skills as a master
            archer. But it was his encounter with Natasha Romanoff, also known
            as Black Widow, that would change his life forever. The two formed a
            deep bond, becoming not only partners in the field but close friends
            who understood each other's past and shared the weight of their own
            personal demons. As a member of the Avengers, Clint fought alongside
            Earth's mightiest heroes, using his archery skills to take down
            enemies and provide tactical support. While others possessed
            extraordinary powers, he proved that ordinary humans could make a
            significant impact in the face of overwhelming odds. But it was
            during the devastating events of the Battle of New York that Clint
            faced his greatest challenge. Under the influence of Loki's mind
            control, he was forced to act as a weapon against his friends.
            However, Clint's willpower and the strength of his friendship with
            Natasha ultimately broke the mind control's hold over him, allowing
            him to rejoin the fight on the side of the Avengers. As Clint's
            journey continued, he faced personal tragedies that tested his
            resolve. The loss of his family during the events of "Avengers:
            Infinity War" left him broken and consumed by grief. But it was in
            this dark period that Clint found a new purpose—to bring justice to
            those who had escaped the consequences of their actions during the
            Blip. During his quest for redemption, Clint took on the mantle of
            Ronin, a vigilante persona that sought to dismantle criminal
            organizations and bring them to justice. His methods were ruthless,
            fueled by his pain and anger, but deep down, he remained driven by
            his sense of justice and protection for those who couldn't defend
            themselves. Throughout his journey, Clint found solace in his
            friendship with Natasha, who served as a guiding light and a
            reminder of his humanity. Together, they supported each other
            through their darkest moments, reminding one another of the
            importance of family and the power of second chances. In the end,
            Clint's determination to protect his loved ones and make amends for
            his past mistakes brought him back into the fold of the Avengers.
            His marksmanship and strategic skills proved crucial in the final
            battle against Thanos and his forces, where he fought alongside his
            friends to restore balance to the universe. Clint Barton, known as
            Hawkeye, was a hero whose strength lay not in superhuman abilities,
            but in his unwavering loyalty, resilience, and skill. His journey
            taught us that even the most ordinary individuals can rise above
            their limitations and make a difference in the world. As Clint
            continued to fight for justice, his legacy would forever be
            remembered as a symbol of human determination and the power of
            friendship. Whether wielding a bow and arrow or simply offering a
            helping hand, Hawkeye's story exemplified that true heroism comes
            from within, driven by compassion, loyalty, and the unwavering
            desire to protect those we hold dear.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Clint Barton </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Jeremy Renner </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Hawkeye in MCU :-
          </h5>
          <li>Arrows</li>
          <li>Boe</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li>Thor (2011)</li>
          <li>The Avengers (2012)</li>
          <li>Avengers: Age of Ultron (2015)</li>
          <li>Captain America: Civil War (2016)</li>
          <li style={{ marginBottom: "250px" }}>Avengers: Endgame (2019)</li>
        </div>
      </div>
    </div>
  );
}
