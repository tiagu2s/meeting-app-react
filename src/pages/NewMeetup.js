import NewMeetupsForm from "../components/meetups/NewMeetupsForm";

const NewMeetup = () => {
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
    ).then(alert("success"));
  };
  return (
    <section>
      <NewMeetupsForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
