import React from "react";
import Ant_Man_Character_Image from "../MyImages/Ant_Man_character_image.jpg";
import '../Characters.css'

export default function Ant_Man() {
  let Iron_Man_Style = {
    color: "#E62828",
  };

  return (
    <div
      style={{
        color: "white",
        width: "78%",
        backgroundImage: `url(${Ant_Man_Character_Image})`,
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
      <div className="my-4" style={{marginLeft: '55%'}}>
        <h3 id="list-item-1" style={Iron_Man_Style}>
          Ant Man{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify"}}
          >
            Scott Lang, a skilled thief with a knack for technology, found
            himself at a crossroads in life. Determined to turn over a new leaf
            and be a hero to his young daughter, Cassie, he embraced a path that
            would change his life forever—becoming Ant-Man. Scott's journey
            began when he stumbled upon a suit that allowed him to shrink to the
            size of an ant while maintaining his strength. Guided by Dr. Hank
            Pym, the original Ant-Man, and his daughter, Hope Van Dyne, Scott
            learned to harness the suit's incredible capabilities. With his
            newfound powers, Scott became a superhero, using his abilities to
            fight injustice and protect the innocent. But being Ant-Man was not
            just about shrinking in size; it was about thinking big and seizing
            opportunities that others might overlook. Scott faced numerous
            challenges, both personal and external. He encountered adversaries
            such as Darren Cross, a former protege of Dr. Pym, who sought to
            exploit the Ant-Man technology for nefarious purposes. But Scott's
            determination and resourcefulness enabled him to overcome these
            obstacles time and again. But it wasn't just his size-changing
            abilities that made Scott a hero. His quick wit, charm, and
            unwavering dedication to his loved ones set him apart. He formed a
            bond with his mentor, Dr. Pym, and grew closer to Hope, eventually
            becoming the trusted partner she needed as they fought side by side.
            In the face of seemingly insurmountable odds, Scott also found
            solace in his ragtag team of allies, including his former cellmate,
            Luis, and fellow ex-convicts Kurt and Dave. Their unwavering loyalty
            and infectious spirit transformed their missions into something more
            than just a fight against evil—they became adventures that
            strengthened their bond as a family. Scott's journey as Ant-Man
            reached new heights when he became an integral part of the Avengers,
            joining forces with Earth's mightiest heroes to confront the
            devastating threat of Thanos. In the battle against the mad Titan,
            he played a pivotal role, shrinking down to navigate the Quantum
            Realm and assisting in a plan to reverse the effects of the Snap.
            With each adventure, Scott grew not only as a hero but as a person.
            He understood that being a hero wasn't just about the suit—it was
            about the choices he made and the impact he had on the lives of
            others. Whether saving the world or simply being there for his
            daughter, Scott realized that true heroism began with love and
            selflessness. In the end, Scott's legacy as Ant-Man was more than
            just the battles he fought or the technology he wielded. He became a
            symbol of second chances, showing that anyone, regardless of their
            past, had the potential to do great things. As Scott continued his
            adventures as Ant-Man, he taught us that sometimes the smallest of
            heroes could make the biggest difference. His story reminded us that
            it was not the size of the person that mattered but the size of
            their heart and the strength of their convictions. And so, as
            Ant-Man, Scott Lang remained a beacon of hope, proving that even in
            a world of giants, the tiniest of heroes could rise to the occasion
            and inspire others to do the same.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Scott Lang </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Paul Rudd </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Ant Man in MCU :-
          </h5>
          <li>Suits</li>
          <li>Pym Particles</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li>Ant Man (2015)</li>
          <li>Captain America: Civil War (2016)</li>
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
