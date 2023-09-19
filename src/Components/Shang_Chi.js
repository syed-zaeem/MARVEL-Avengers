import React from "react";
import Capatain_America_Character_Image from "../MyImages/Shang_Chi_character_image.jpg";
import '../Characters.css'

export default function Shang_Chi() {
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
      <div className="my-4" style={{marginLeft: '45%'}}>
        <h3 id="list-item-1" style={Iron_Man_Style}>
          Shang-Chi{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify"}}
          >
            Shang-Chi, a skilled martial artist and the legendary Master of Kung
            Fu, had a remarkable journey of self-discovery, cultural identity,
            and embracing his destiny. Shang-Chi grew up in a world filled with
            secrecy and intrigue, unaware of his true heritage. Raised by his
            father, Wenwu, a powerful and enigmatic figure, Shang-Chi was
            trained in the art of combat from a young age. However, as he
            reached adulthood, he began to question his purpose and the path
            laid out before him. Driven by a desire for independence and a
            thirst for truth, Shang-Chi embarked on a quest to uncover the
            secrets of his past. He journeyed to the hidden village of Ta Lo,
            where he reunited with his estranged sister, Xialing, and
            encountered the mystical forces that shaped his destiny. In Ta Lo,
            Shang-Chi confronted the legacy of his father, who sought to unleash
            an ancient evil upon the world. With each battle and revelation,
            Shang-Chi unearthed the truth about his family's dark history and
            his own connection to it. He realized that he had the power to shape
            his own destiny and rewrite the narrative that had defined his life
            thus far. Throughout his journey, Shang-Chi discovered the strength
            and wisdom of his ancestors, drawing upon their teachings to become
            a true warrior. He embraced his cultural heritage and the legacy of
            the Ten Rings, a powerful artifact that held immense power. With
            each step, Shang-Chi grew not only in physical prowess but also in
            his understanding of the responsibilities that came with his
            newfound abilities. But Shang-Chi's journey was not just about
            physical combat; it was also about the power of love and family. He
            forged deep connections with his sister, Xialing, and his newfound
            allies, Katy and the residents of Ta Lo. Their unwavering support
            and belief in him fueled his determination to protect the world from
            the impending threat. In the ultimate battle against his father and
            the forces of darkness, Shang-Chi proved himself to be a true hero.
            He utilized his exceptional martial arts skills, his understanding
            of balance and harmony, and the strength of his heart to face his
            greatest fears and triumph over evil. As the dust settled, Shang-Chi
            emerged as a beacon of hope, a symbol of resilience and cultural
            pride. He embraced his role as a defender of justice and protector
            of the innocent, ready to face whatever challenges lie ahead.
            Shang-Chi's story was a testament to the power of self-discovery,
            the importance of embracing one's heritage, and the strength found
            in unity. His journey showcased the fusion of tradition and
            modernity, highlighting the significance of honoring the past while
            forging a path towards a better future. And so, as Shang-Chi
            continued to protect the world and navigate his newfound purpose,
            his presence served as a reminder that true power comes not from
            external forces but from within, from the willingness to embrace
            one's true self and stand tall in the face of adversity.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Shang-Chi </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Simu Liu </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Shang-Chi in MCU :-
          </h5>
          <li>Ten Rings</li>
          <li>Fighting Skills</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li style={{ marginBottom: "250px" }}>
            Shang-Chi and the Legend of the Ten Rings (2021)
          </li>
        </div>
      </div>
    </div>
  );
}
