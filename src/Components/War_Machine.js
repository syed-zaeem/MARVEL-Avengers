import React from "react";
import Capatain_America_Character_Image from "../MyImages/War_Machine_character_image.jpg";
import '../Characters.css'

export default function War_Machine() {
  let Iron_Man_Style = {
    color: "gray",
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
          War Machine{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify", width: "50%" }}
          >
            War Machine, also known as James Rhodes, had a story that epitomized
            loyalty, resilience, and the unwavering commitment to protecting the
            world, even in the face of adversity. As a highly skilled soldier
            and Iron Man's trusted ally, War Machine played a crucial role in
            the defense of justice. James Rhodes, a decorated military officer,
            first crossed paths with Tony Stark during their time serving in the
            military. Recognizing his bravery and exceptional skill set, Tony
            entrusted him with the state-of-the-art War Machine armor, creating
            a partnership that would endure throughout their superhero careers.
            As War Machine, James became a formidable force in his own right.
            Clad in advanced armor equipped with powerful weapons and flight
            capabilities, he stood shoulder to shoulder with Iron Man in
            battling threats to global security. Together, they fought against
            powerful villains, including the likes of Whiplash, Aldrich Killian,
            and Thanos. But War Machine's journey wasn't just about the battles
            and victories. James also grappled with personal challenges and
            internal conflicts. He navigated the delicate balance between his
            duty as a soldier and his loyalty to his friends, often finding
            himself torn between his military obligations and the call to
            protect as an Avenger. One defining moment in James' story occurred
            during the events of "Captain America: Civil War." In the midst of a
            clash between superheroes, an incident caused James to suffer a
            life-altering injury. Paralyzed from the waist down, he faced
            immense physical and emotional hurdles, requiring him to adapt and
            find new ways to contribute to the fight. Undeterred by his
            disability, James embraced his new reality and took on the mantle of
            War Machine once more, albeit with modified armor to accommodate his
            condition. His resilience and determination in the face of adversity
            became an inspiration to others, showcasing that true heroism
            transcends physical limitations. Throughout his journey, James also
            formed deep bonds with his fellow Avengers. His friendship with Tony
            Stark endured through thick and thin, marked by moments of
            camaraderie and mutual trust. He also developed a close relationship
            with Natasha Romanoff, also known as Black Widow, with their shared
            military background fostering a deep understanding and connection.
            War Machine's story embodied the spirit of duty, sacrifice, and
            loyalty. James' unwavering commitment to protecting the innocent and
            defending his comrades made him an indispensable asset to the
            Avengers. He showcased the resilience and adaptability required to
            face adversity head-on and rise above it, embodying the ideals of a
            true hero. And so, as War Machine continued to fight for justice and
            protect the world, his presence served as a reminder that heroism
            isn't confined to those with superhuman abilities. James Rhodes,
            with his unwavering dedication and his unyielding spirit, showcased
            that courage and integrity can be found in ordinary individuals who
            rise to extraordinary challenges.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> James Rhodes </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Don Cheadle </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Iron Man in MCU :-
          </h5>
          <li>Suits</li>
          <li>Fighting Weapons</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li>Iron Man 1 (2008)</li>
          <li>Iron Man 2 (2010)</li>
          <li>Iron Man 3 (2013)</li>
          <li>Avengers: Age of Ultron (2015)</li>
          <li>Captain America: Civil War (2016)</li>
          <li>Avengers: Infinity War (2018)</li>
          <li style={{ marginBottom: "250px" }}>Avengers: Endgame (2019)</li>
        </div>
      </div>
    </div>
  );
}
