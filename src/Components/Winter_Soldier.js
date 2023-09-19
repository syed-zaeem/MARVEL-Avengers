import React from "react";
import Capatain_America_Character_Image from "../MyImages/Winter_Soldier_character_image.jpg";
import '../Characters.css'

export default function Winter_Soldier() {
  let Iron_Man_Style = {
    color: "darkgray",
  };

  return (
    // <div className="d-flex">

    // <Characters_ListItems/>

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
          Winter Soldier{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify", width: "50%" }}
          >
            The Winter Soldier, also known as Bucky Barnes, had a story that
            delved into themes of redemption, identity, and the enduring bond of
            friendship. From his origins as a loyal soldier to his
            transformation into a deadly assassin, Bucky's journey was a
            captivating exploration of the human spirit and the battle against
            one's own demons. Bucky Barnes, a close friend and ally of Steve
            Rogers, fought alongside him during World War II as a member of the
            Howling Commandos. Tragically, Bucky fell off a moving train during
            a mission and was presumed dead. Unbeknownst to his comrades, he was
            found and captured by Hydra, where he was subjected to a series of
            experiments and brainwashing that transformed him into the ruthless
            assassin known as the Winter Soldier. For years, Bucky operated in
            the shadows, carrying out Hydra's orders and leaving a trail of
            destruction in his wake. He became a symbol of fear and mystery, his
            past buried deep beneath layers of manipulation and mind control.
            But Bucky's story took a turn when he crossed paths with his old
            friend, Steve Rogers, also known as Captain America. Steve refused
            to give up on Bucky, seeing beyond the Winter Soldier's cold
            exterior to the man he once knew. Determined to bring him back from
            the darkness, Steve embarked on a quest to unravel the truth and
            help Bucky rediscover his own identity. As Bucky confronted his past
            and the atrocities he had committed under Hydra's control, he
            grappled with guilt, remorse, and a desire for redemption. His
            journey was marked by inner turmoil as he fought against the
            programming that sought to define him, seeking solace in the few
            remaining fragments of his true self. With the help of Steve and
            their allies, Bucky slowly broke free from the clutches of his past.
            He confronted his demons, both literal and metaphorical, and fought
            to regain control of his own destiny. His path to redemption was not
            without its challenges, as he faced adversaries who sought to use
            him for their own nefarious purposes, but he persevered, driven by a
            desire to make amends for his actions. Throughout his story, Bucky's
            friendship with Steve remained a guiding light. Steve's unwavering
            belief in Bucky's inherent goodness provided the strength and
            motivation for Bucky to continue his journey towards redemption.
            Their bond, forged through war and hardship, stood as a testament to
            the enduring power of friendship and loyalty. Bucky's transformation
            from the Winter Soldier to Bucky Barnes was a testament to the
            indomitable spirit of the human soul. His story showcased the
            capacity for change, forgiveness, and the pursuit of redemption, no
            matter how dark the path may seem. And so, as Bucky Barnes continued
            to fight alongside his allies, his presence served as a reminder
            that even those who have been consumed by darkness can find their
            way back to the light. Bucky's journey from assassin to hero stood
            as a testament to the resilience of the human spirit and the power
            of friendship to heal and redeem.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Bucky Barnes </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Sebastian Stan </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Winter Soldier in MCU :-
          </h5>
          <li>Vibranium Hand</li>
          <li>Fighting Weapons</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li>Captain America: The First Avenger (2011)</li>
          <li>Captain America: The Winter Soldier (2014)</li>
          <li>Captain America: Civil War (2016)</li>
          <li>Avengers: Infinity War (2018)</li>
          <li style={{ marginBottom: "250px" }}>Avengers: Endgame (2019)</li>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
