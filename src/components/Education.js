import React from "react";
import plusIcon from "../img/plus.svg";
import checkIcon from "../img/check.svg";
import closeIcon from "../img/close.svg";
import deleteIcon from "../img/delete.svg";

export default function Education(props) {
  const [active, setActive] = React.useState(false);
  const [education, setEducation] = React.useState([]);
  function handleAdd() {
    setActive((prevActive) => !prevActive);
  }

  function findInput(e, item) {
    const [elem] = [...e.target.children].filter(
      (child) => child.name === item
    );
    return elem.value;
  }

  function handleSubmit(e) {
    setEducation((prevEducation) => [
      ...prevEducation,
      {
        school: findInput(e, "school"),
        title: findInput(e, "title"),
        date: findInput(e, "date"),
        id: prevEducation.length,
      },
    ]);
    e.preventDefault();
  }

  function handleDelete(e) {
    setEducation((prevEducation) =>
      prevEducation.filter(
        (edu) => edu.id !== +e.target.closest(".edu-item").id
      )
    );
  }

  return (
    <div className={props.class}>
      <div className="education-edit">
        <h3>{props.title}</h3>
        <img
          onClick={handleAdd}
          width="25px"
          height="25px"
          src={plusIcon}
          alt=""
        />
      </div>
      <form
        onSubmit={handleSubmit}
        style={{ display: active ? "flex" : "none" }}
        className="form-list"
      >
        <input
          value={!active ? "" : undefined}
          type="text"
          name="school"
          placeholder={props.school}
        />
        <input
          value={!active ? "" : undefined}
          type="text"
          name="title"
          placeholder={props.name}
        />
        <input
          value={!active ? "" : undefined}
          type="text"
          name="date"
          placeholder={props.date}
        />
        <button>
          <img src={checkIcon} alt="" width="25px" height="25px" />
        </button>
        <img
          src={closeIcon}
          onClick={handleAdd}
          alt=""
          width="25px"
          height="25px"
        />
      </form>
      {education.map((edu, i) => (
        <div key={i} id={edu.id} className="edu-item">
          <h3>{edu.school}</h3>
          <p>{edu.date}</p>
          <p>{edu.title}</p>
          <img
            onClick={handleDelete}
            src={deleteIcon}
            width="25px"
            height="25px"
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
