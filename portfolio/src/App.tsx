import React from "react";
import { MantineProvider } from "@mantine/core";
import Menu from "./Components/Menu";
import Album from "./Components/Album";

const App: React.FC = () => {
  return (
    <MantineProvider>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <Menu />
          <Album />
        </div>
      </div>
    </MantineProvider>
  );
};

export default App;
