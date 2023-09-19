import React from "react";
import Capatain_America_Character_Image from "../MyImages/Spider_Man_character_image.jpg";
import '../Characters.css'

export default function Spider_Man() {
  let Iron_Man_Style = {
    color: "#e70606",
  };

  return (
    <div
      style={{
        color: "black",
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
          Spider Man{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify", width: "50%" }}
          >
            Spider-Man, the friendly neighborhood superhero, had a story that
            captured the essence of youthful heroism, the struggles of balancing
            personal life and responsibility, and the unwavering determination
            to do what is right. Peter Parker, an ordinary high school student
            from Queens, had his life forever changed when he was bitten by a
            radioactive spider. Overnight, he gained incredible superhuman
            abilities, including agility, strength, and the iconic ability to
            cling to walls. With these newfound powers, Peter embraced his alter
            ego as Spider-Man. As Spider-Man, Peter swung into action,
            protecting the innocent and fighting against the forces of evil.
            With his quick wit and resourcefulness, he became a beloved figure
            in New York City, admired for his bravery and selflessness. But
            being a superhero wasn't without its challenges. Peter faced the
            constant struggle of juggling his dual life as a crimefighter and a
            regular teenager. Balancing school, friendships, and budding romance
            proved to be just as demanding as battling supervillains. Yet,
            through it all, Peter remained committed to his duty as a hero. Over
            time, Peter encountered a diverse array of villains, each testing
            his resolve and pushing him to his limits. From the cunning Green
            Goblin to the technologically advanced Vulture, Spider-Man faced
            formidable adversaries that challenged both his physical abilities
            and his moral compass. Throughout his journey, Peter learned the
            importance of responsibility and the consequences that came with his
            actions. He faced personal losses, experienced moments of
            self-doubt, and grappled with the weight of being a symbol of hope
            for the city. But it was through these trials that he grew stronger,
            both as a hero and as an individual. One of Peter's defining
            qualities was his unwavering belief in the inherent goodness of
            people. He often saw the potential for redemption, even in his
            adversaries. This empathy and compassion set him apart, as he aimed
            not just to defeat villains but to inspire them to change for the
            better. Peter's story also showcased the power of mentorship and the
            importance of guidance. From his relationship with Uncle Ben, whose
            words "With great power comes great responsibility" became his
            guiding principle, to his bond with Tony Stark, the billionaire
            genius who became his mentor, Peter learned from those who came
            before him and carried their wisdom forward. As Spider-Man, Peter
            demonstrated that heroism isn't defined by superhuman abilities
            alone, but by the choices we make and the impact we have on others.
            His commitment to protecting the innocent, even at great personal
            cost, inspired a new generation of heroes and reminded us all that
            anyone can be a hero, regardless of their circumstances. And so, as
            Spider-Man continued to swing through the city, his presence served
            as a symbol of hope, resilience, and the enduring spirit of a hero.
            Peter Parker, the young man behind the mask, embodied the idea that
            anyone, even a teenager from Queens, can make a difference and
            become something greater than themselves.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Peter Parkour </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Tom Holland </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Spider Man in MCU :-
          </h5>
          <li>Suits</li>
          <li>Web Shooters</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li>Captain America: Civil War (2016)</li>
          <li>Spider Man: Homecoming (2017)</li>
          <li>Avengers: Infinity War (2018)</li>
          <li>Avengers: Endgame (2019)</li>
          <li>Spider Man: Far From Home (2019)</li>
          <li style={{ marginBottom: "250px" }}>
            Spider Man: No Way Home (2021)
          </li>
        </div>
      </div>
    </div>
  );
}
