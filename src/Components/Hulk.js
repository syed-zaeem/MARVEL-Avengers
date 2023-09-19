import React from "react";
import Capatain_America_Character_Image from "../MyImages/Hulk_character_image.jpg";
import '../Characters.css'

export default function Hulk() {
  let Iron_Man_Style = {
    color: "Green",
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
      <div className="my-4" style={{marginLeft: '35%'}}>
        <h3 id="list-item-1" style={Iron_Man_Style}>
          Hulk{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify"}}
          >
            Dr. Bruce Banner, a brilliant scientist, was haunted by a dark
            secret—a hidden side of him that he could not control. Whenever his
            anger boiled over, he transformed into a monstrous creature known as
            the Hulk, endowed with immense strength and an uncontrollable rage.
            For years, Bruce sought a cure, a way to rid himself of the beast
            within. But it was during a tragic accident involving gamma
            radiation that his life took an unexpected turn. The incident
            transformed him into the very thing he feared—a living embodiment of
            destruction. As the Hulk, Bruce struggled to find his place in the
            world. He became a fugitive, pursued by the government, who sought
            to exploit his powers for their own gain. But amidst the chaos, a
            group of extraordinary individuals known as the Avengers crossed his
            path. Reluctantly joining the team, the Hulk fought alongside Iron
            Man, Thor, Captain America, and others, utilizing his incredible
            strength to protect the innocent. Though his beastly alter ego
            remained a burden, Bruce discovered that the Hulk could be a force
            for good. As the Avengers faced numerous threats, the Hulk's power
            proved indispensable. From battling against the treacherous Loki to
            defending Earth from the menacing Ultron, the Hulk's brute force
            became an invaluable asset. Yet, with each transformation, Bruce
            risked losing control, endangering those he fought to save. But it
            was through the compassion and understanding of his fellow Avengers
            that Bruce found a semblance of peace. Black Widow, Natasha
            Romanoff, saw beyond the monster and forged a deep connection with
            the man behind the rage. She helped him embrace his dual nature,
            recognizing that both the brilliant scientist and the formidable
            Hulk were integral parts of who he was. Bruce's journey reached a
            turning point when he confronted the otherworldly threat of Thanos.
            Faced with the mad Titan's overwhelming power, Bruce made a decision
            that altered his existence—he willingly merged his intelligence with
            the Hulk's strength, creating a symbiotic being known as Professor
            Hulk. As Professor Hulk, Bruce found harmony within himself. He
            retained his brilliant mind while harnessing the Hulk's physical
            prowess, striking a balance between his two personas. Together, he
            and the Avengers fought against Thanos, battling to save half of all
            life in the universe. But the war took its toll. Bruce and his
            allies suffered unimaginable losses, including the death of his
            beloved Natasha. The weight of the world rested on his broad
            shoulders as he grappled with his grief and the responsibility to
            carry on. In the aftermath, Bruce continued to evolve. He became a
            guiding force, working towards reconciliation and healing. As the
            world moved forward, he dedicated himself to scientific endeavors,
            seeking to make amends for the destruction he had inadvertently
            caused. Bruce Banner, the man cursed with the Hulk's might, proved
            that even in the face of inner turmoil, one could find strength and
            purpose. He taught us that embracing our flaws and accepting
            ourselves fully was the key to unlocking our true potential. The
            story of the Hulk was one of transformation, resilience, and the
            power of self-acceptance. Bruce Banner showed us that true heroism
            was not about suppressing our inner demons but understanding and
            harnessing them for the greater good. And so, as the green behemoth
            faded into the shadows, Bruce Banner remained, a testament to the
            human spirit's enduring capacity for growth and redemption.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Bruce Banner </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Mark Ruffalo </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Hulk in MCU :-
          </h5>
          <li>Physical Strength</li>
          <li>Anger</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li>The Incredible Hulk (2008)</li>
          <li>The Avengers (2012)</li>
          <li>Iron Man 3 (2013)</li>
          <li>Avengers: Age of Ultron (2015)</li>
          <li>Thor Ragnarok (2017)</li>
          <li>Avengers: Infinity War (2018)</li>
          <li style={{ marginBottom: "250px" }}>Avengers: Endgame (2019)</li>
        </div>
      </div>
    </div>
  );
}
