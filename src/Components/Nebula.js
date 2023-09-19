import React from "react";
import Capatain_America_Character_Image from "../MyImages/Nebula_character_image.jpg";
import '../Characters.css'

export default function Nebula() {
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
      <div className="my-4">
        <h3 id="list-item-1" style={Iron_Man_Style}>
          Nebula{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify", width: "50%" }}
          >
            Nebula, a cyborg assassin and adopted daughter of Thanos, had a
            tumultuous journey that spanned the cosmos. From a conflicted and
            broken being, she transformed into a resilient warrior fighting for
            her own redemption and the chance to rewrite her own story. Nebula's
            story began with a deep-seated rivalry with her adoptive sister,
            Gamora. Both were pitted against each other by their cruel and
            merciless father, Thanos, who forced them to compete in brutal
            combat. Nebula, fueled by bitterness and resentment, harbored an
            intense desire to surpass Gamora and gain her father's approval. But
            as time passed and Nebula joined forces with the Guardians of the
            Galaxy, her perspective began to shift. Through her interactions
            with Gamora and the other Guardians, Nebula discovered the strength
            of unity and friendship. She realized that her true enemy was not
            her sister but the twisted ideology of Thanos. Driven by a burning
            desire for vengeance and freedom, Nebula embarked on a path of
            self-discovery. She confronted the pain of her past and the darkness
            within herself, slowly unraveling the layers of her cyborg existence
            to find her own identity. As Nebula fought alongside the Guardians,
            she began to dismantle the toxic programming that bound her to
            Thanos. With each battle, she reclaimed her autonomy, defying the
            expectations placed upon her by her creator. Her journey to
            self-acceptance was fraught with challenges, as she grappled with
            the memories of her past and the pain inflicted upon her by Thanos.
            Nebula's transformation was not without sacrifice. In her pursuit of
            redemption, she made difficult choices and confronted the
            consequences of her past actions. She confronted her own demons and
            reconciled with her sister, forging an unbreakable bond rooted in
            shared pain and a determination to prevent others from suffering the
            same fate. Ultimately, Nebula played a vital role in the ultimate
            battle against Thanos. Her knowledge of his weaknesses and her
            willingness to confront her darkest fears proved instrumental in the
            fight to save the universe. Nebula stood tall alongside her newfound
            family, fighting not only for herself but for the countless lives
            threatened by Thanos' tyranny. In the aftermath of victory, Nebula
            emerged as a symbol of resilience and personal growth. She embraced
            her individuality and forged her own path, no longer defined by the
            expectations of others. Nebula's journey taught her the power of
            redemption and the ability to redefine oneself in the face of
            adversity. As Nebula ventured forth, she carried with her the
            lessons learned from her past. She became a beacon of hope for
            others who sought to break free from the chains of their own
            histories. Her story inspired others to confront their own pain and
            transform it into strength. Nebula's journey from a weapon of
            destruction to a warrior of redemption highlighted the capacity for
            change and the enduring power of the human spirit. Her legacy would
            forever be remembered as a testament to the strength found in
            embracing one's true self, and the belief that no matter how broken
            or damaged, there is always a chance for growth, forgiveness, and
            the pursuit of a brighter future.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Nebula </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Karen Gillan </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Nebula in MCU :-
          </h5>
          <li>Fighting Skills</li>
          <li>Metallic Body Parts</li>
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
