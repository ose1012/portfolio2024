import React from "react";
import { MantineProvider } from "@mantine/core";
import Menu from "./Components/Menu";
import Album from "./Components/Album";
import "./Components/App.css";

const App: React.FC = () => {
  return (
    <MantineProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="mobile">
          <Menu />
          <Album />
        </div>
      </div>
    </MantineProvider>
  );
};

export default App;
