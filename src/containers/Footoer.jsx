import React from "react";
import { useStore } from "../store/RootStore";

export default function Footoer() {
  const { generalStore } = useStore();
  const { data: general } = generalStore;
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <label>Qısa Keçidlər</label>
              <ul className="footer-list">
                <li>
                  <a href="/aboutus">Haqqımızda</a>
                </li>
                <li>
                  <a href="/contactus">Əlaqə</a>
                </li>
                <li>
                  <a href="#">Hesabım</a>
                </li>
                <li>
                  <a href="#">Hesab Yarat</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <label>Kateqoriyalar</label>
              <ul className="footer-list">
                <li>
                  <a href="cat?id=9">Şablonlar</a>
                </li>
                <li>
                  <a href="cat?id=10">Kodlar</a>
                </li>
                <li>
                  <a href="cat?id=11">Api</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <label>Əlaqə</label>
              <ul className="footer-list">
                <li>
                  <a href="#">{general.contact?.email}</a>
                </li>
                <li>
                  <a href="#">{general.contact?.phone}</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <div className="footer-brand">
                <img
                  src="/assets/images/svg/logo.svg"
                  alt=""
                  style={{ width: "80%" }}
                />
              </div>
              <label>Bizi İzlə</label>
              <ul className="social-list">
                <li className="facebook">
                  <a href="https://facebook.com/devobagency" target="_blank">
                    <i className="ion-social-facebook"></i>
                  </a>
                </li>
                <li className="twitter">
                  <a href="https://twitter.com" target="_blank">
                    <i className="ion-social-twitter"></i>
                  </a>
                </li>
                <li className="instagram">
                  <a href="#" target="_blank">
                    <i className="ion-social-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <section className="copyright">
        <div className="container">
          Copyright © 2019 {general.name} Company. All rights reserved.
        </div>
      </section>
    </div>
  );
}
