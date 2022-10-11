import React from "react";
import { RecoilRoot } from "recoil";
import Router from "./router";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </div>
  );
}

export default App;
