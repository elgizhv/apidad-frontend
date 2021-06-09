import { observer } from "mobx-react-lite";
import React from "react";
import { Redirect, Link } from "react-router-dom";
import { useStore } from "../store/RootStore";

function Downloads() {
  const { userStore } = useStore();
  return (
    <div>
      {!userStore.user && <Redirect to="/" />}
      <div className="page-head">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <Link to="/">Ana Səhifə</Link>
            </li>
            <li>
              <a href="#">Yükləmələr</a>
            </li>
          </ul>
          <h3>Yükləmələr</h3>
        </div>
      </div>
      <div className="page-wrapper">
        <div className="container">
          <div className="panel">
            <div className="simple-table">
              <table>
                <thead>
                  <tr>
                    <th>Məhsulun Kodu</th>
                    <th>Adı</th>
                    <th>Qiyməti</th>
                    <th>Yükləmək</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#24543</td>
                    <td>Dora - Coming Soon Template</td>
                    <td>30$</td>
                    <td>
                      <a href="#">Yükləmək</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(Downloads);
