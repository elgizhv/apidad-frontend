import { observer } from "mobx-react-lite";
import { NavLink, Link } from "react-router-dom";
import { LOGIN_MODAL } from "../constants/modal";
import { useAuth } from "../context/AuthContext";
import { useStore } from "../store/RootStore";

function Navbar() {
  const { categoryStore, modalStore, generalStore, userStore } = useStore();
  const { signout } = useAuth();
  const languages = generalStore?.data?.languages;
  const { categories } = categoryStore;
  const { user } = userStore;

  function toggleDropdown(el) {
    el.classList.toggle("open");
    el.querySelector(".dropdown-menu").classList.toggle("show");
  }
  return (
    <nav className="navbar navbar-fixed">
      <div className="navbar-inner container">
        <div className="navbar-brand">
          <NavLink activeClassName="active" to="/" exact>
            <img src="/images/svg/logo.svg" style={{ width: "150px" }} alt="" />
          </NavLink>
        </div>
        <ul className="navbar-nav hidden-xs-down">
          <li>
            <NavLink activeClassName="active" to="/" exact>
              Ana Səhifə
            </NavLink>
          </li>
          {categories?.map((category) => (
            <li key={category.id}>
              <NavLink activeClassName="active" to={`/category/${category.id}`}>
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="navbar-nav">
          {user ? (
            <li
              className="dropdown"
              onClick={(e) => toggleDropdown(e.currentTarget)}
            >
              <a href="#" className="c-yellow dropdown-toggle">
                {user.name}
                <i className="ml10 ion-arrow-down-b"></i>
              </a>
              <div className="dropdown-menu">
                <ul>
                  <li>
                    <Link to="/downloads">
                      <i className="ion-android-download"></i> Downloads
                    </Link>
                  </li>
                  <li>
                    <a href="#" onClick={() => signout()}>
                      <i className="ion-log-out"></i> Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ) : (
            <li>
              <a
                href="#"
                onClick={() => modalStore.open(LOGIN_MODAL)}
                className="btn btn-warning"
              >
                Giriş
              </a>
            </li>
          )}
          <li>
            <select className="changelang">
              <option disabled>Change Language</option>
              {languages.map((lang) => (
                <option key={lang.key} value={lang.key}>
                  {lang.name}
                </option>
              ))}
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default observer(Navbar);
