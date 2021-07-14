import { useState } from "react";
import { createContext } from "react";

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoriteContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favMeetup) {
    setUserFavorites((prevFav) => {
      return prevFav.concat(favMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevFav) => {
      return prevFav.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemFavoriteHandler(meetId) {
    return userFavorites.some((meetup) => meetup.id === meetId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemFavoriteHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;
