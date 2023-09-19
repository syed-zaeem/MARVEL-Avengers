import React from "react";
import Capatain_America_Character_Image from "../MyImages/Wong_character_image.jpg";
import '../Characters.css'

export default function Wong() {
  let Iron_Man_Style = {
    color: "darkorange",
  };

  return (
    // <div className="d-flex">
    // <Characters_ListItems />

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
          Wong{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify"}}
          >
            Wong, the skilled and enigmatic sorcerer, had a story that
            encompassed mysticism, wisdom, and the unwavering dedication to
            protecting the realms from supernatural threats. As a guardian of
            the mystical arts and a trusted ally of Doctor Strange, Wong's
            journey unfolded in the mystical realms and offered glimpses into
            the ancient and awe-inspiring world of magic. Wong's origins traced
            back to Kamar-Taj, a hidden enclave of sorcerers where he trained in
            the mystical arts under the guidance of the Ancient One. There, he
            honed his skills, delved into the secrets of ancient spells and
            artifacts, and embraced the responsibilities that came with his
            chosen path. As the librarian and keeper of sacred knowledge, Wong
            became an invaluable source of wisdom and guidance for Doctor
            Strange, assisting him in his journey of becoming the Sorcerer
            Supreme. With his vast knowledge and understanding of the mystical
            realms, Wong played a crucial role in protecting Earth from
            supernatural threats and maintaining the delicate balance between
            different dimensions. Throughout his story, Wong showcased not only
            his formidable magical abilities but also his unwavering loyalty and
            sense of duty. He stood as a stalwart defender of the Sanctum
            Sanctorum, the mystical stronghold protecting Earth from mystical
            intrusions. Wong's presence provided a sense of stability and calm
            in the face of otherworldly dangers. Despite his serious and
            reserved nature, Wong's dry humor and occasional wit added moments
            of levity to intense situations, bringing a touch of humanity to the
            world of magic. His interactions with Doctor Strange and other
            characters exemplified his depth of character and the intricate
            dynamics within the mystical community. Wong's journey extended
            beyond his role as a sorcerer and librarian. In battles against
            formidable foes, such as Dormammu and the forces of Thanos, he
            showcased his combat prowess, combining martial arts skills with the
            formidable powers of the mystic arts. His ability to seamlessly
            blend physical and magical techniques made him a formidable ally in
            the fight against supernatural evil. Beyond his magical talents,
            Wong also possessed a profound understanding of the greater cosmic
            forces at play. His knowledge and insights often guided Doctor
            Strange and others in their quests, shedding light on the
            complexities of the mystical realms and the challenges they faced.
            Wong's story highlighted the symbiotic relationship between magic
            and knowledge, showcasing the importance of preserving ancient
            wisdom while embracing new discoveries. His dedication to studying,
            preserving, and sharing mystical knowledge ensured the continuity of
            the mystical arts for future generations. And so, as Wong continued
            to guard the Sanctum Sanctorum and protect the realms from
            supernatural threats, his presence served as a reminder that
            strength and power come not only from the mystical abilities one
            possesses, but also from the wisdom, loyalty, and inner fortitude
            that define a true guardian of the mystical arts. Wong's journey
            embodied the essence of magic itself—a delicate balance of
            knowledge, strength, and unwavering dedication to protecting the
            realms from unseen dangers.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Wong </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Benedict Wong </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Wong in MCU :-
          </h5>
          <li>Magic Spells</li>
          <li>Physical Powers</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li>Doctor Strange (2016)</li>
          <li>Avengers: Infinity War (2018)</li>
          <li>Avengers: Endgame (2019)</li>
          <li>Shang-Chi and the Legend of Ten Rings (2021)</li>
          <li>Spider Man: No Way Home (2021)</li>
          <li style={{ marginBottom: "250px" }}>
            Doctor Strange in the Multiverse of Madness (2022)
          </li>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
