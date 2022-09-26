import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SettingPage from "./pages/settings/SettingPage";
import PageMyPage from "./pages/mypage/PageMyPage";
import QuestListPage from "./pages/quest/QuestListPage";
import RecommenListPage from "./pages/quest/RecommenListPage";
import RankingPage from "./pages/ranking/RankingPage";
import SearchPage from "./pages/search/SearchPage";
import AchievementPage from "./pages/achievement/AchievementPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/myquest' element={<QuestListPage />} />
        <Route path='/recommen' element={<RecommenListPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/mypage' element={<PageMyPage />} />
        <Route path='/ranking' element={<RankingPage />} />
        <Route path='/setting' element={<SettingPage />} />
        <Route path='/achievement' element={<AchievementPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
