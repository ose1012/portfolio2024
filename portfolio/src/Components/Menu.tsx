import React from "react";
import Profile from "./Profile";

const Menu: React.FC = () => {
  const profileImage =
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbX5mt1%2FbtsF2TgmO5d%2F3kxQmAT43nNxZtCYxwfhFk%2Fimg.png";
  const name = "해수";

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "flex-start",
      }}
    >
      <div
        style={{
          padding: "20px",
          fontFamily: "East Sea Dokdo",
          fontSize: "40px",
          maxWidth: "100%",
        }}
      >
        <Profile name={name} profileImage={profileImage} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          lineHeight: "0",
          fontFamily: "Sunflower",
          fontWeight: 300,
        }}
      >
        <h4 style={{ marginTop: "-30px" }}>CONTACT</h4>
        <h5>nnmmaz95@gmail.com</h5>
      </div>
    </div>
  );
};

export default Menu;
