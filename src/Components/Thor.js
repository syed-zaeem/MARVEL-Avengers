import React from "react";
import Thor_Character_Image from "../MyImages/Thor_character_image.jpg";
import '../Characters.css'

export default function Thor() {
  let Iron_Man_Style = {
    color: "#2575BE",
  };

  return (
    <div
      style={{
        color: "white",
        width: "78%",
        backgroundImage: `url(${Thor_Character_Image})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        top: "56px",
        backgroundSize: "100% 100%",
        // backgroundSize: "cover",
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
          Thor{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify", width: '50%'}}
          >
            In the realm of Asgard, Thor Odinson, the mighty God of Thunder, was
            born to be a king. With his powerful hammer, Mjolnir, and his
            immense strength, he was destined for greatness. But it was through
            a humbling journey that Thor truly became the hero he was meant to
            be. In his arrogance and recklessness, Thor defied his father Odin's
            orders and ventured into Jotunheim, the land of the Frost Giants.
            His actions ignited a dangerous conflict that threatened to plunge
            the realms into chaos. As punishment, Odin stripped Thor of his
            power and banished him to Earth. Stripped of his godly abilities and
            separated from his trusted hammer, Thor was cast down as a mortal.
            It was in this vulnerable state that he encountered the kindness and
            selflessness of Jane Foster, a brilliant astrophysicist. Through
            her, Thor learned humility and the value of compassion. As he
            embarked on a journey of self-discovery, Thor encountered his
            treacherous brother, Loki, who sought to seize the throne of Asgard.
            In a battle of epic proportions, Thor, though powerless, faced his
            brother with unwavering determination, proving that true strength
            came from within. With the aid of his newfound allies, including his
            loyal warrior friends Lady Sif and the Warriors Three, Thor defeated
            Loki and saved Asgard from destruction. Recognizing the gravity of
            his mistakes, Thor returned to his father's side, ready to assume
            his rightful place as the protector of his realm. But Thor's journey
            was far from over. He found himself facing cosmic threats that
            surpassed his own power, such as the sinister Dark Elves led by
            Malekith. With the fate of the universe at stake, Thor once again
            proved his worth, battling against insurmountable odds to safeguard
            the Nine Realms. Along the way, Thor encountered the Guardians of
            the Galaxy, forging new alliances and deep friendships. He faced the
            mighty Hela, the long-lost sister who sought to bring destruction to
            Asgard, and fought side by side with his comrades in the epic
            battles against the mad Titan, Thanos. In his darkest moment, Thor's
            hammer, Mjolnir, was destroyed. But it was then that he discovered
            his true power resided within him all along. With a new weapon,
            Stormbreaker, and his thunderous abilities, Thor stood as a force to
            be reckoned with. Through his trials and tribulations, Thor learned
            that being a hero was not defined by his godly powers or royal
            lineage, but by his courage, compassion, and willingness to fight
            for the greater good. He became a symbol of resilience, transforming
            from a brash warrior into a wise and compassionate leader. As the
            years passed, Thor faced personal losses and struggled with his own
            self-doubt. But he never gave up. With each challenge, he grew
            stronger, not only physically, but also emotionally. He learned to
            embrace his flaws and accept himself for who he truly was—a flawed
            hero with an unbreakable spirit. In the end, Thor's journey led him
            to a profound realization. He was not just a king or a god; he was a
            hero who inspired others to be their best selves. And with the
            support of his newfound family, including Valkyrie, Korg, and Miek,
            he set out to forge a new path, dedicated to protecting the realms
            and finding his own sense of purpose. Thor's story was one of
            redemption, growth, and the power of inner strength. Through his
            trials and triumphs, he proved that heroism was not solely defined
            by one's lineage or power but by the choices one made and the
            sacrifices one was willing to endure.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Thor Odinson </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Chris Hemsworth </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Thor in MCU :-
          </h5>
          <li>Mjolnir</li>
          <li>Storm Breaker</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li>Thor (2011)</li>
          <li>The Avengers (2012)</li>
          <li>Thor: The Dark World (2013)</li>
          <li>Avengers: Age of Ultron (2015)</li>
          <li>Thor Ragnarok (2017)</li>
          <li>Avengers: Infinity War (2018)</li>
          <li>Avengers: Endgame (2019)</li>
          <li style={{ marginBottom: "250px" }}>
            Thor: Love and Thunder (2022)
          </li>
        </div>
      </div>
    </div>
  );
}
