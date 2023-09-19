import React from "react";
import Capatain_America_Character_Image from "../MyImages/Scarlet_Witch_character_image.jpg";
import '../Characters.css'

export default function Scarlet_Witch() {
  let Iron_Man_Style = {
    color: "#C32424",
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
          Scarlet Witch{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify", width: "50%" }}
          >
            Scarlet Witch, also known as Wanda Maximoff, possessed an
            extraordinary array of reality-altering powers that made her one of
            the most formidable beings in the Marvel Cinematic Universe. Her
            story was a journey of immense power, personal growth, and the
            struggle to find her place in a world torn apart by tragedy. Wanda's
            life was marked by pain and loss. As a child, she and her brother
            Pietro endured the horrors of war, losing their parents and living
            in constant fear. But it was the experimentation with the Mind Stone
            that granted Wanda her incredible abilities, forever changing the
            trajectory of her life. Initially, Wanda struggled to control her
            powers. Her grief and anger fueled her abilities, leading to
            unintended consequences. But as she joined the Avengers and formed
            bonds with her teammates, she began to understand the importance of
            self-control and responsibility. Throughout her journey, Wanda's
            powers evolved and intensified. She became a force to be reckoned
            with, capable of reshaping reality itself. But her immense power
            also became a source of inner conflict. Wanda grappled with the
            ethical implications of her abilities, the weight of her past
            mistakes, and the fear of losing control. It was in her relationship
            with Vision, an android with whom she found a deep connection, that
            Wanda discovered the depths of her love and the extent of her power.
            Their love transcended their differences, defying logic and reason.
            But their relationship was not without tragedy, as Vision's death
            further tested Wanda's resilience and challenged her understanding
            of her own abilities. In the wake of Vision's death, Wanda's grief
            consumed her. Her overwhelming sorrow led her to a secluded town
            called Westview, where she unintentionally created an alternate
            reality to live out her idyllic life with Vision. But in doing so,
            she unwittingly trapped the town's residents in her own
            grief-stricken fantasy. As Wanda realized the consequences of her
            actions, she confronted the darkness within herself. With the
            guidance of her mentor, Agatha Harkness, Wanda embarked on a journey
            of self-discovery, facing her pain head-on and acknowledging the
            mistakes she had made. In the end, Wanda's growth was defined by her
            willingness to confront her own demons and make amends. She
            dismantled the false reality she had created, releasing the town's
            inhabitants from her influence, and accepting the consequences of
            her actions. Wanda's story was one of redemption and the exploration
            of power, grief, and love. Through her journey, she learned the
            importance of acceptance, forgiveness, and the limits of her own
            power. Her growth showcased the indomitable spirit of the human soul
            and the capacity for change and growth even in the face of immense
            tragedy. As Wanda continued to navigate the complexities of her
            existence, she carried the weight of her past while striving to make
            amends and find her place in the world. Her legacy would forever be
            remembered as a reminder of the strength found in vulnerability, the
            power of love, and the enduring resilience of the human spirit. And
            so, as Scarlet Witch embraced her true potential and sought to make
            things right, her presence served as a beacon of hope, reminding us
            all that even in the face of darkness, there is always a chance for
            redemption and the possibility of a brighter future.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Wanda Maximoff </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Elizabeth Olsen </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Scarlet Witch in MCU :-
          </h5>
          <li>Dark Hold</li>
          <li>Magic Spells</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li>Captain America: The Winter Soldier (2014)</li>
          <li>Avengers: Age of Ultron (2015)</li>
          <li>Captain America: Civil War (2016)</li>
          <li>Avengers: Infinity War (2018)</li>
          <li>Avengers: Endgame (2019)</li>
          <li style={{ marginBottom: "250px" }}>
            Doctor Strange in the Multiverse of Madness (2022)
          </li>
        </div>
      </div>
    </div>
  );
}
