import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h3>
          Möhtəşəm <span className="c-yellow">Temalar, Sistemlər</span> &amp;{" "}
          <span className="c-yellow">API'lər içində</span> Axtar
        </h3>
        <p>Wordpress, web temalar, infrastrukturlar və daha çox</p>
        <div className="custom-search">
          <input
            type="text"
            name=""
            defaultValue=""
            placeholder="e.g. wordpress theme"
          />
          <button type="button" className="btn-search">
            <i className="ion-ios-search-strong"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
