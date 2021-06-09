import React from "react";

export default function Suggestion() {
  return (
    <section className="products-mini">
      <div className="container">
        <div className="paragraph">
          <span>
            <em></em>
          </span>
          <h2>Önərilən temalar, scriptlər və apilər</h2>
          <p>Check out our newest themes and templates</p>
        </div>
        <ul>
          <li>
            <div className="item">
              <a href="/product?id=1">
                <div className="image">
                  <img
                    src="/assets/uploads/recommended/5b83ed67f8a1585e545812596141599d.png"
                    alt=""
                  />
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="item">
              <a href="/product?id=4">
                <div className="image">
                  <img
                    src="/assets/uploads/recommended/0beb55a9d707806265285651ebc9a4a6.png"
                    alt=""
                  />
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="item">
              <a href="/product?id=5">
                <div className="image">
                  <img
                    src="/assets/uploads/recommended/cf11e7913d76b2bb545d6bc47d862dfd.png"
                    alt=""
                  />
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="item">
              <a href="/product?id=6">
                <div className="image">
                  <img
                    src="/assets/uploads/recommended/17d8614ed4858386c6fd680734acbb3e.png"
                    alt=""
                  />
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="item">
              <a href="/product?id=7">
                <div className="image">
                  <img
                    src="/assets/uploads/recommended/7fb11bc001b0a428a4d775d7235eb5da.png"
                    alt=""
                  />
                </div>
              </a>
            </div>
          </li>
        </ul>
        <div className="viewall">
          <button type="button" className="btn btn-warning">
            Önə çıxan məhsulları gör
          </button>
        </div>
      </div>
    </section>
  );
}
