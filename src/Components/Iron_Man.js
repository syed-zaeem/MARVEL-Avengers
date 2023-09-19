import React from "react";
import Iron_Man_Character_Image from "../MyImages/Iron_Man_character_image.jpg";
import '../Characters.css'

export default function Iron_Man() {
  let Iron_Man_Style = {
    color: "red",
  };
  return (
    // <div className="d-flex">
      // <Characters_ListItems />

      <div
        style={{
          color: "white",
          width: "78%",
          backgroundImage: `url(${Iron_Man_Character_Image})`,
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
            Iron Man{" "}
          </h3>
          <div>
            <p
              className="my-3 mx-2 text-justify"
              style={{ textAlign: "justify", width: '50%'}}
            >
              Tony Stark, the billionaire genius, had always been known as the
              playboy, the eccentric inventor, and the prodigious mind behind
              Stark Industries. But fate had a way of transforming people, and
              Tony was about to embark on a journey that would reshape his life
              forever. It all began with an unexpected turn of events. While
              attending a weapons demonstration in Afghanistan, Tony was taken
              captive by a terrorist group. Forced to build a weapon of mass
              destruction, he instead used his brilliance to create a suit of
              armor that would become his salvation. As Iron Man, Tony fought
              his way to freedom, leaving behind the life he once knew.
              Determined to make amends for the devastation his weapons had
              caused, he vowed to protect the innocent and use his technological
              advancements for the greater good. With unwavering resolve, Tony
              refined his suit, enhancing its capabilities and becoming an
              unstoppable force for justice. As Iron Man, he became a symbol of
              hope, defending the world against threats too powerful for
              conventional means. But being a hero came with a price. Tony faced
              adversaries who sought to exploit his inventions for their selfish
              gain. The world seemed to be constantly on the brink of
              destruction, and he found himself in the center of it all,
              fighting to maintain balance. Yet, amidst the chaos, Tony
              discovered something he never expected—a family. His bond with his
              loyal friend and confidant, James "Rhodey" Rhodes, grew stronger
              with each battle they faced together. Pepper Potts, his steadfast
              assistant, became his beacon of love and support. And a young
              prodigy named Peter Parker, who would become Spider-Man, looked up
              to him as a mentor and friend. Tony's journey as Iron Man had its
              highs and lows. He experienced the weight of responsibility and
              the toll it took on his personal life. His desire to protect those
              he cared about often clashed with his own fears and insecurities.
              But through it all, he never lost his wit, charm, or determination
              to make the world a safer place. As the years passed, Tony faced
              his greatest challenge yet—a powerful cosmic threat known as
              Thanos. With the fate of the universe hanging in the balance, he
              united with the Avengers, a team of extraordinary individuals, to
              prevent the annihilation of half of all life. In a climactic
              battle, Tony made the ultimate sacrifice, wielding the power of
              the Infinity Stones to defeat Thanos and save the universe. His
              selfless act reverberated across the cosmos, leaving an indelible
              mark on the hearts of those who knew him. Tony Stark, the man who
              started as a reckless genius, evolved into a true hero. He taught
              the world that even with immense power, one must never lose sight
              of what truly matters—love, sacrifice, and the pursuit of a better
              world. Though Tony was gone, his legacy lived on. The Iron Man
              suit continued to be a symbol of hope, passed down to a new
              generation of heroes. And Tony's spirit remained in the hearts of
              his friends and allies, reminding them to always strive for
              greatness, just as he had. Iron Man's story was one of triumph,
              loss, and redemption. His journey had touched the lives of
              countless people and left an indelible mark on the world. And
              though he may have been just a man in a suit of armor, he will
              forever be remembered as a legend, the invincible Iron Man.
            </p>
            <p>
              {" "}
              Real Name : <b style={Iron_Man_Style}> Tony Stark </b>
            </p>
            <p>
              {" "}
              Actor played the role of this character :{" "}
              <b style={Iron_Man_Style}> Robert Downey Jr. </b>
            </p>
            <h5 className="mt-4" style={Iron_Man_Style}>
              Some weapons of Iron Man in MCU :-
            </h5>
            <li>Armours</li>
            <li>Arc Reactor</li>
            <h5 className="mt-4" style={Iron_Man_Style}>
              Movies Appearances :-
            </h5>
            <li>Iron Man 1 (2008)</li>
            <li>The Incredible Hulk (2008)</li>
            <li>Iron Man 2 (2010)</li>
            <li>The Avengers (2012)</li>
            <li>Iron Man 3 (2013)</li>
            <li>Avengers: Age of Ultron (2015)</li>
            <li>Captain America: Civil War (2016)</li>
            <li>Spider Man: Homecoming (2017)</li>
            <li>Avengers: Infinity War (2018)</li>
            <li style={{ marginBottom: "250px" }}>Avengers: Endgame (2019)</li>
          </div>
        </div>
        {/* </div> */}
      </div>
    
  );
}
