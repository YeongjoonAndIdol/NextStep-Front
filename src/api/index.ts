import instance from "./axios";
import {
  IGetAchievement,
  IGetMyPage,
  IGetMySetting,
  IGetRanking,
  IGetRecommendList,
  IGetReview,
  IGetSearch,
} from "./response/index";

export const GetAchievement = async (): Promise<IGetAchievement> => {
  try {
    return (await instance.get(`/users/performance`)).data;
  } catch (error) {
    throw error;
  }
};

export const GetMyPage = async (): Promise<IGetMyPage> => {
  try {
    return await instance.get(`/users`);
  } catch (error) {
    throw error;
  }
};

export const GetMySetting = async (): Promise<IGetMySetting> => {
  try {
    return await instance.get(`/users/setting`);
  } catch (error) {
    throw error;
  }
};

export const GetRanking = async (): Promise<IGetRanking> => {
  try {
    return await instance.get(`/users/hall-of-fame`);
  } catch (error) {
    throw error;
  }
};

export const GetRecommendList = async (): Promise<IGetRecommendList> => {
  try {
    return await instance.get(`/quests/recommend`);
  } catch (error) {
    throw error;
  }
};

export const Search = async (): Promise<IGetSearch> => {
  try {
    return await instance.get(`/quests/search`);
  } catch (error) {
    throw error;
  }
};

export const GetReview = async (): Promise<IGetReview> => {
  try {
    return await instance.get(`/docs/template`);
  } catch (error) {
    throw error;
  }
};
