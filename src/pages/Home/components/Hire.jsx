import React from "react";

export default function Hire() {
  return (
    <section className="hire m-b-15">
      <div className="container">
        <div className="paragraph">
          <span>
            <em></em>
          </span>
          <h2>Layihələrinizi biz hazırlayaq</h2>
          <p>Böyük fikirlərinizi bizimlə bərabər layihələndirin</p>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="hirecard">
              <i className="ion-beer"></i>
              <strong>Başlanğıc</strong>
              <p>Blog, xəbər portalları və ya kiçik ölçülü layihələr</p>
              <p className="c-dark-green m-t-15 text-500">
                350$ dan başlayaraq
              </p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="hirecard">
              <i className="ion-wineglass"></i>
              <strong>Standard</strong>
              <p>Modern həllərin olduğu orta həcmli layihələr üçün</p>
              <p className="c-dark-green m-t-15 text-500">
                1000$ dan başlayaraq
              </p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="hirecard">
              <i className="ion-erlenmeyer-flask"></i>
              <strong>Startup</strong>
              <p>Böyük həcmli layihələr üçün böyük bacarıqlarımız var</p>
              <p className="c-dark-green m-t-15 text-500">
                5000$ dan başlayaraq
              </p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="hirecard">
              <i className="ion-help"></i>
              <strong>Özəlləştirilmiş</strong>
              <p>Layihənizi bərabər formalaşdıraq</p>
              <p className="c-dark-green m-t-15 text-500">Dəyişkən</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
