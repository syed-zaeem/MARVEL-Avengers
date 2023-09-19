import React from "react";
import Capatain_America_Character_Image from "../MyImages/Falcon_character_image.jpg";
import '../Characters.css'

export default function Falcon() {
  let Iron_Man_Style = {
    color: "red",
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
      <div className="my-4" style={{marginLeft: '40%'}}>
        <h3 id="list-item-1" style={Iron_Man_Style}>
          Falcon{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify"}}
          >
            Sam Wilson, known as Falcon, was a man who soared through the skies,
            embodying the spirit of freedom and justice. His journey from a
            former Air Force pararescue to becoming a superhero was a testament
            to his unwavering dedication and unwavering belief in doing what was
            right. Sam's path crossed with Steve Rogers, also known as Captain
            America, when they first met during a mission to rescue Sam's fellow
            soldiers from enemy hands. Impressed by Sam's skills and unwavering
            loyalty, Steve saw in him a true hero and a potential ally. After
            the fall of S.H.I.E.L.D. and the disbandment of the Avengers, Sam
            continued to fight for justice, using his advanced winged suit and
            formidable combat abilities. He became an integral part of the new
            team of heroes, dedicated to protecting the innocent and upholding
            the ideals for which Captain America stood. But Sam's greatest test
            came when Steve Rogers passed on his iconic shield, symbolizing the
            mantle of Captain America, to him. It was a profound moment that
            carried the weight of legacy and responsibility. Sam had to confront
            his own doubts and insecurities, questioning if he was truly worthy
            of carrying on Steve's legacy. As Sam grappled with his new role, he
            sought guidance from his sister, Sarah, and from his mentor, Isaiah
            Bradley, a super-soldier from the past who had faced tremendous
            hardship and injustice. Through their wisdom and support, Sam found
            the strength to embrace his destiny and step into the shoes of
            Captain America. With the shield in hand, Sam embodied the ideals of
            justice, equality, and the power of standing up for what was right.
            He became a symbol of hope, a beacon of light in a world grappling
            with division and uncertainty. Sam's journey as Captain America took
            him on a mission to confront the Flag Smashers, a group seeking to
            dismantle borders and restore the world to a state without nations.
            Through his leadership, empathy, and unwavering belief in the power
            of unity, Sam confronted these complex issues head-on, striving to
            find common ground and bridge the divides that separated people. His
            journey as Captain America was not without challenges and
            sacrifices. Sam faced backlash and opposition, but he stood firm,
            determined to prove that a new era of heroism had arrived. He
            shattered stereotypes, challenged the status quo, and fought for a
            world where everyone could be seen, heard, and valued. Sam Wilson,
            as Captain America, became an inspiration not only to those he saved
            but to a generation of individuals who saw themselves in his
            struggle and his unwavering commitment to justice. His journey
            taught us that anyone could rise to the occasion, regardless of
            their background or the challenges they faced. As he soared through
            the skies, Sam exemplified the power of compassion, courage, and the
            belief that true heroes are not defined by their powers, but by
            their actions and the impact they have on others. And so, as Captain
            America, Sam Wilson reminded us that the mantle of heroism could be
            carried by anyone willing to fight for what is right. His legacy
            would forever be etched in the hearts of those he inspired, a symbol
            of hope and a reminder that a better future was within reach, if we
            had the courage to strive for it.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Sam Wilson </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Anthony Mackie </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Falcon in MCU :-
          </h5>
          <li>Suits</li>
          <li>Devices</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li>Captain America: The Winter Soldier (2014)</li>
          <li>Avengers: Age of Ultron (2015)</li>
          <li>Captain America: Civil War (2016)</li>
          <li>Avengers: Infinity War (2018)</li>
          <li style={{ marginBottom: "250px" }}>Avengers: Endgame (2019)</li>
        </div>
      </div>
    </div>
  );
}
