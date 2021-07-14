import { useHistory } from "react-router";

import NewMeetupsForm from "../components/meetups/NewMeetupsForm";

const NewMeetup = () => {
  const history = useHistory();
  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-meeting-7d1c8-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(()=>{
      history.replace("/")
    });
  };
  return (
    <section>
      <NewMeetupsForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
