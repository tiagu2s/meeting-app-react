import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoriteContext from "../store/favorites-context";
import styles from "./MainNavigation.module.css";

function MainNavigation() {
  const ctx = useContext(FavoriteContext);
  const totalFav = ctx.totalFavorites;
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Meetups App</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
            <span className={styles.badge}>{totalFav}</span>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
