import React from "react";
import { Text } from "@mantine/core";
import "./Profile.css";

interface ProfileProps {
  name: string;
  profileImage: string;
}

const Profile: React.FC<ProfileProps> = ({ name, profileImage }) => {
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
      <img
        src={profileImage}
        className="profile-image"
      />
      <Text>{name}</Text>
    </div>
  );
};

export default Profile;
