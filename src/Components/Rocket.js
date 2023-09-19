import React from "react";
import Capatain_America_Character_Image from "../MyImages/Rocket_character_image.jpg";
import '../Characters.css'

export default function Rocket() {
  let Iron_Man_Style = {
    color: "#E07426",
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
          Rocket{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify", width: "50%" }}
          >
            Rocket, a genetically enhanced raccoon and expert marksman, had a
            story that defied expectations and showcased the power of friendship
            and personal growth. Rocket began his life as a product of cruel
            experimentation, trapped in a laboratory and modified to be an
            intelligent, talking creature. His sharp wit, technical expertise,
            and proficiency with weapons made him a force to be reckoned with.
            But beneath his tough exterior, Rocket carried the weight of his
            painful past. Despite his initial tendencies toward selfishness and
            self-preservation, Rocket found an unlikely family in the Guardians
            of the Galaxy. Through their shared adventures, he learned the value
            of trust, loyalty, and true friendship. With each mission, he
            discovered that he was more than just the sum of his parts – he was
            capable of love, compassion, and sacrifice. Rocket's journey was a
            constant battle against his own insecurities and a quest for
            acceptance. He sought validation through his abilities, often hiding
            his vulnerabilities behind a façade of bravado. But it was in the
            moments of vulnerability and connection with his fellow Guardians
            that he found strength. As Rocket fought alongside his newfound
            family, he developed a deep bond with Groot, a tree-like creature.
            Their friendship grew from reluctant allies to inseparable
            companions. Groot's innocence and pure heart provided a stark
            contrast to Rocket's hardened nature, reminding him of the
            importance of empathy and emotional connection. Rocket's growth was
            not without its challenges. He confronted his deepest fears, faced
            his own inner demons, and learned to embrace his capacity for love
            and selflessness. Through it all, he remained fiercely loyal to his
            friends, always willing to risk everything to protect those he cared
            about. In the face of galactic threats, Rocket's technical expertise
            and tactical genius proved invaluable. He often served as the team's
            strategist, devising intricate plans to outsmart their adversaries.
            With his relentless determination and keen sense of survival, he
            played a vital role in the battles to save the galaxy. But it was in
            the quieter moments that Rocket's true character shone through. He
            provided unwavering support and comic relief, lightening the mood in
            the face of darkness. He taught his friends to find humor and joy
            even in the most dire situations, reminding them that even amidst
            chaos, laughter could be a powerful force. Rocket's story was one of
            transformation, redemption, and the power of chosen family. He
            shattered the expectations placed upon him, proving that one's
            origins do not define their worth. His journey reminded us that
            beneath the rough exterior lies the capacity for growth, compassion,
            and the potential for extraordinary acts of heroism. As Rocket
            continued to navigate the cosmos, he carried the lessons learned
            from his past. He found solace in his newfound family, a group of
            misfits and outcasts who became his home. His legacy would forever
            be remembered as a reminder that true strength is found not in
            physical abilities alone, but in the bonds we forge and the courage
            to face our own demons. And so, as Rocket soared through the stars
            alongside the Guardians of the Galaxy, his presence served as a
            testament to the resilience of the human spirit and the
            transformative power of friendship.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Rocket Raccoon </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Bradley Cooper </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Rocket in MCU :-
          </h5>
          <li>Devices</li>
          <li>Raccoon Abilities</li>
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
