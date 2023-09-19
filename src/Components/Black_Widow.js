import React from "react";
import Capatain_America_Character_Image from "../MyImages/Black_Widow_character_image.jpg";
import '../Characters.css'

export default function Black_Widow() {
  let Iron_Man_Style = {
    color: "#2885E6",
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
          Black Widow{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify"}}
          >
            Natasha Romanoff, known as the Black Widow, was a woman shrouded in
            mystery. Trained as an assassin in the notorious Red Room, she
            possessed formidable skills and a dark past. But it was through her
            journey as an Avenger that she found redemption, purpose, and the
            strength to confront her demons. Natasha's path led her to the
            Avengers, a team of extraordinary individuals who fought to protect
            the world from threats beyond imagination. With her unmatched combat
            skills and mastery of espionage, she became an invaluable asset, an
            agent of justice who could infiltrate the most dangerous
            organizations and dismantle them from within. But Natasha's journey
            went beyond her abilities as a spy. She possessed a unique blend of
            resilience and compassion, a willingness to put others before
            herself. These qualities became evident as she formed deep bonds
            with her fellow Avengers, including her closest friend, Clint
            Barton, also known as Hawkeye. Natasha's loyalty to her friends was
            tested when a shadow from her past emerged—her former mentor and
            tormentor, General Dreykov. Determined to eliminate the lingering
            remnants of her dark past, Natasha confronted her deepest fears and
            sought to dismantle the Red Room, the organization that had molded
            her into an assassin. Her quest for redemption led Natasha to
            reunite with her long-lost sister, Yelena Belova, and a band of
            unconventional allies. Together, they waged a relentless battle
            against the Red Room, exposing its secrets and freeing countless
            women from a life of manipulation and control. As Natasha confronted
            her own past, she realized that her journey was not just about
            seeking redemption for herself—it was about saving others from a
            similar fate. She became a champion for the vulnerable, using her
            skills and experiences to empower those who had been silenced.
            Natasha's ultimate sacrifice came in the face of an impending threat
            that would alter the course of the universe. In a bid to save her
            newfound family and prevent untold destruction, she made the
            ultimate sacrifice—giving her life so that others could live.
            Natasha's legacy as the Black Widow extended far beyond her final
            act of heroism. She left an indelible mark on the Avengers, her
            friends, and the world she fought to protect. Her strength,
            resilience, and unwavering dedication to justice inspired those who
            knew her, reminding them of the enduring power of selflessness and
            sacrifice. Though she may be gone, Natasha's spirit lived on, a
            beacon of hope for a world that still needed heroes. Her story
            taught us that redemption was always within reach, and that even in
            the face of darkness, a flicker of light could ignite a spark of
            change. Natasha Romanoff, the Black Widow, would forever be
            remembered as a hero who transcended her past, fought for justice,
            and gave everything for the greater good. Her legacy served as a
            reminder that one's past did not define their future, and that even
            in the darkest of times, heroes would rise to protect those who
            could not protect themselves.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Natasha Romanoff </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Scarlett Johansson </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Black Widow in MCU :-
          </h5>
          <li>Devices</li>
          <li>Guns</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li>Iron Man 2 (2010)</li>
          <li>The Avengers (2012)</li>
          <li>Captain America: The Winter Soldier (2014)</li>
          <li>Avengers: Age of Ultron (2015)</li>
          <li>Captain America: Civil War (2016)</li>
          <li>Avengers: Infinity War (2018)</li>
          <li>Avengers: Endgame (2019)</li>
          <li style={{ marginBottom: "250px" }}>Black Widow (2021)</li>
        </div>
      </div>
    </div>
  );
}
