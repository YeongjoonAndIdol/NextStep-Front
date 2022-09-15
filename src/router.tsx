import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PageMyPage from "./pages/mypage/PageMyPage";
import QuestListPage from "./pages/quest/QuestListPage";
import RecommenListPage from "./pages/quest/RecommenListPage";
import SearchPage from "./pages/search/SearchPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/myquest" element={<QuestListPage />} />
        <Route path="/recommen" element={<RecommenListPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/mypage" element={<PageMyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
