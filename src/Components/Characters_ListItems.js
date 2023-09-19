import React from 'react'
import {Link } from "react-router-dom";
import '../Characters.css'

export default function Characters_ListItems(props) {
    // let HoverStyle = {
    //     color: "black",
    //   };

      let styeForMode = {
        backgroundColor: props.mode==='dark'?'#00000052':'white',
        color: props.mode==='dark'?'white':'black'
      }
    
      const hoverFunction = (e) => {
        e.target.style.color = props.mode === 'dark'? "white":'black';
      };

  return (
    <div
        id="list-example"
        className="list-group"
        style={{ width: "22%", height: '600px', position: "sticky", top: "56px", overflowY: "auto"}}
      >
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          // onMouseOut={(e) => {
          //   e.target.style.color = "black";
          // }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters"
          // to="IronMan"
          style={styeForMode}
        >
          Iron Man
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/CaptainAmerica"
          style={styeForMode}
        >
          Captain America
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/Thor"
          style={styeForMode}
        >
          Thor
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/Hulk"
          style={styeForMode}
        >
          Hulk
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/BlackWidow"
          style={styeForMode}
        >
          Black Widow
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/Hawkeye"
          style={styeForMode}
        >
          Hawkeye
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/AntMan"
          style={styeForMode}
        >
          Ant Man
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/BlackPanther"
          style={styeForMode}
        >
          Black Panther
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/CaptainMarvel"
          style={styeForMode}
        >
          Captain Marvel
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/DoctorStrange"
          style={styeForMode}
        >
          Doctor Strange
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/Drax"
          style={styeForMode}
        >
          Drax The Destroyer
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/Falcon"
          style={styeForMode}
        >
          Falcon
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/Gamora"
          style={styeForMode}
        >
          Gamora
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/Groot"
          style={styeForMode}
        >
          Groot
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/Mantis"
          style={styeForMode}
        >
          Mantis
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/Nebula"
          style={styeForMode}
        >
          Nebula
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/QuickSilver"
          style={styeForMode}
        >
          Quick Silver
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/Rocket"
          style={styeForMode}
        >
          Rocket
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/ScarletWitch"
          style={styeForMode}
        >
          Scarlet Witch
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/ShangChi"
          style={styeForMode}
        >
          Shang-Chi
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/SpiderMan"
          style={styeForMode}
        >
          Spider Man
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/StarLord"
          style={styeForMode}
        >
          Star Lord
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/Vision"
          style={styeForMode}
        >
          Vision
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/WarMachine"
          style={styeForMode}
        >
          War Machine
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/Wasp"
          style={styeForMode}
        >
          Wasp
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/WinterSoldier"
          // to="WinterSoldier"
          style={styeForMode}
        >
          Winter Soldier
        </Link>
        <Link
          onMouseOver={(e) => {
            e.target.style.color = "#f5493d";
          }}
          onMouseOut={(e) => hoverFunction(e)}
          className="list-group-item list-group-item-action"
          to="/Characters/Wong"
          // to="Wong"
          style={styeForMode}
        >
          Wong
        </Link>
        
        </div>
  )
}
