import React from "react";
import "../SolarSystem.scss"; // Make sure this path is correct

const SolarSystem: React.FC = () => {
  return (
    <>
      <section>
        <div className="sun"></div>

        <article className="mercury">
          <div></div>
        </article>
        <article className="venus">
          <div></div>
        </article>
        <article className="earth">
          <div></div>
        </article>
        <article className="mars">
          <div></div>
        </article>
        <article className="jupiter">
          <div></div>
        </article>
        <article className="saturn">
          <div></div>
        </article>
        <article className="uranus">
          <div></div>
        </article>
        <article className="neptune">
          <div></div>
        </article>
      </section>
    </>
  );
};

export default SolarSystem;
