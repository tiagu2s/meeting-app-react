import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoriteContext from "../components/store/favorites-context";

function Favorites() {
  const ctx = useContext(FavoriteContext);
  let content;
  if (ctx.totalFavorites === 0) {
    content = <p>No Favorites</p>;
  } else {
    content = <MeetupList meetups={ctx.favorites} />;
  }
  return (
    <sectio>
      <h1>My Favorites</h1>
      {content}
    </sectio>
  );
}

export default Favorites;
