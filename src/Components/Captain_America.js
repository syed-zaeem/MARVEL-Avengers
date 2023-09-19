import React from "react";
import Capatain_America_Character_Image from "../MyImages/Captain_America_character_image.jpg";
import '../Characters.css'

export default function Captain_America() {
  let Iron_Man_Style = {
    color: "#2596BE",
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
          Captain America{" "}
        </h3>
        <div>
          <p
            className="my-3 mx-2 text-justify"
            style={{ textAlign: "justify", width: '50%'}}
          >
            Steve Rogers, a scrawny young man from Brooklyn, had always
            possessed an unwavering sense of justice and a deep desire to make a
            difference in the world. It was this steadfast spirit that led him
            on a path that would transform him into the legendary Captain
            America. In the midst of World War II, Steve yearned to serve his
            country, but his physical limitations prevented him from enlisting.
            Undeterred, he volunteered for an experimental procedure known as
            the Super Soldier Serum. The serum not only enhanced his physique
            but also amplified his strength, speed, and agility. Emerging from
            the procedure as a symbol of strength and resilience, Steve became
            Captain America. Armed with an unbreakable shield and an unwavering
            commitment to protect the innocent, he joined the Allied forces in
            their fight against the forces of tyranny. Captain America quickly
            became a beacon of hope, inspiring both his fellow soldiers and the
            world at large. His leadership and unwavering moral compass set him
            apart, earning the respect and admiration of all who stood beside
            him. Throughout his journey, Captain America faced formidable
            adversaries. From the villainous Red Skull, a twisted reflection of
            his own determination, to the enigmatic Winter Soldier, a former
            friend turned lethal assassin, Steve encountered challenges that
            tested his resolve and loyalty. But it was not just in battle that
            Captain America made his mark. His compassion and empathy touched
            the lives of those he encountered, both on and off the battlefield.
            He formed deep friendships with fellow heroes like Natasha Romanoff,
            the Black Widow, and Sam Wilson, who would become his loyal ally and
            eventually take up the mantle of Captain America. As the years
            passed, Steve faced his greatest trial yet. Thanos, a cosmic threat
            of unimaginable power, sought to erase half of all life in the
            universe. With the Avengers divided, Steve united the team once
            more, leading them into a battle for the very existence of humanity.
            In a final showdown against Thanos and his forces, Steve fought
            valiantly, never wavering in his determination to protect the world
            he loved. When all seemed lost, he summoned the strength to wield
            Thor's mighty hammer, Mjolnir, proving himself worthy of its power.
            In a climactic moment, Steve sacrificed himself to save the
            universe. He returned the Infinity Stones to their proper places in
            time, knowing that doing so would trap him in the past. He
            reappeared as an old man, having lived a life of quiet contentment,
            finally getting the chance to dance with Peggy Carter, the love he
            had left behind. Passing on his shield and the legacy of Captain
            America to Sam Wilson, Steve Rogers showed that heroism was not
            confined to one person. It was a spirit, an ideal, that could be
            carried forward by those who believed in the power of compassion,
            courage, and the pursuit of justice. Captain America's story was one
            of unwavering honor and sacrifice. His journey taught the world that
            true strength lay not only in physical prowess but in the
            willingness to stand up for what was right, even in the face of
            overwhelming adversity. As his name echoed through history, Steve
            Rogers, the scrawny kid from Brooklyn, became a symbol of hope and
            resilience. His unwavering spirit lived on, inspiring generations to
            come to strive for a better world, and reminding us all that true
            heroes could be found in the most unexpected places.
          </p>
          <p>
            {" "}
            Real Name : <b style={Iron_Man_Style}> Steve Rogers </b>
          </p>
          <p>
            {" "}
            Actor played the role of this character :{" "}
            <b style={Iron_Man_Style}> Chris Evans </b>
          </p>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Some weapons of Captain America in MCU :-
          </h5>
          <li>Shield</li>
          <li>Mjolnir</li>
          <h5 className="mt-4" style={Iron_Man_Style}>
            Movies Appearances :-
          </h5>
          <li>Captain America: The First Avenger (2011)</li>
          <li>The Avengers (2012)</li>
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
