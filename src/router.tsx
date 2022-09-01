import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import QuestListPage from "./pages/quest/QuestListPage";
import RecommenListPage from "./pages/quest/RecommenListPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/myquest" element={<QuestListPage />} />
        <Route path="/recommen" element={<RecommenListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
