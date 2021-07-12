import { useRef } from "react";

import style from "./NewMeetupsForm.module.css";
import Card from "../ui/Card";
function NewMeetupsForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = titleInputRef.current.value;
    const enteredDescription = titleInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      imageUrl: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);

    console.log(meetupData);
  };
  return (
    <Card>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.control}>
          <label htmlFor>Meetup title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={style.control}>
          <label htmlFor>Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={style.control}>
          <label htmlFor>Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={style.control}>
          <label htmlFor>Description</label>
          <textarea
            type="text"
            required
            rows="5"
            id="description"
            ref={descriptionInputRef}
          />
        </div>

        <div className={style.actions}>
          <button>Add Meeting</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupsForm;
