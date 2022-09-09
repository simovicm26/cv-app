import React from "react";
import editIcon from "../img/pencil.svg";
import checkIcon from "../img/check.svg";

export default function Info() {
  const [info, setInfo] = React.useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [active, setActive] = React.useState(false);

  function handleChange(e) {
    setInfo((prevInfo) => ({ ...prevInfo, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    setActive((prevActive) => !prevActive);
    e.preventDefault();
  }

  function handleClick() {
    setActive((prevActive) => !prevActive);
  }

  return (
    <div className="info">
      <div className="portrait"></div>
      <h3>STUDENT</h3>
      <h1>MARKO SIMOVIC</h1>
      <form onSubmit={handleSubmit}>
        <div className="info-edit">
          <h3>Contact Information</h3>
          <img
            className="edit-icon"
            style={{ display: active ? "none" : "block" }}
            onClick={handleClick}
            src={editIcon}
            width="25px"
            height="25px"
            alt=""
          />
          <button
            className="edit-icon"
            style={{ display: active ? "block" : "none" }}
            type="submit"
          >
            <img src={checkIcon} width="25px" alt="" />
          </button>
        </div>
        <div className="info-container">
          <label htmlFor="">Full Name</label>
          <p>{info.fullName}</p>
          <input
            onChange={handleChange}
            type="text"
            value={info.fullName}
            name="fullName"
            style={{ display: active ? "block" : "none" }}
          />
          <label htmlFor="">Email</label>
          <p>{info.email}</p>
          <input
            onChange={handleChange}
            type="text"
            value={info.email}
            name="email"
            style={{ display: active ? "block" : "none" }}
          />
          <label htmlFor="">Phone Number</label>
          <p>{info.phone}</p>
          <input
            onChange={handleChange}
            type="text"
            value={info.phone}
            name="phone"
            style={{ display: active ? "block" : "none" }}
          />
        </div>
      </form>
      <div></div>
    </div>
  );
}
