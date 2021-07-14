import { useContext } from "react";
import Card from "../ui/Card";
import styles from "./MeetupItem.module.css";
import FavoriteContext from "../store/favorites-context";

function MeetupItem(props) {
  const ctx = useContext(FavoriteContext);
  const isFavorite = ctx.itemIsFavorite(props.id);

  function toogleFavoriteHandler() {
    if (isFavorite) {
      ctx.removeFavorite(props.id);
    } else {
      ctx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.description,
        address: props.address,
      });
    }
  }

  return (
    <li className={styles.item} key={props.id}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toogleFavoriteHandler}>
            {isFavorite ? "RemoveFav" : "AddFav"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
