import React from "react";
import { data } from "../restApi.json";

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">MEET THE AMAZING PEOPLE BEHIND THE FOOD</h1>
          <p>
            Our passionate team of chefs, servers, and creators are dedicated to delivering 
            exceptional culinary experiences. Get to know the faces behind the flavors!
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => (
            <div className="card" key={element.id}>
              <img src={element.image} alt={element.name} />
              <h3>{element.name}</h3>
              <p>{element.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
