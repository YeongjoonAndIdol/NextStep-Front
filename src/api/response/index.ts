export interface IGetRanking {
  userRanking: [
    {
      id: string;
      name: string;
      ranking: number;
      level: number;
    }
  ];
  my_ranking: {
    name: string;
    ranking: number;
    level: number;
  };
}

export interface MyRoutin {
  id: string;
  routin_name: string;
}

export interface IGetMyPage {
  name: string;
  level: number;
  exp: number;
  walk_count: number;
  ranking: number;
  my_routin: MyRoutin[];
}

export interface LikedQuest {
  id: string;
  liked_name: string;
}

export interface IGetMySetting {
  name: string;
  liked_quest: LikedQuest[];
}

export interface QuestList {
  id: string;
  quest_name: string;
  is_liked: boolean;
  like_count: number;
}

export interface IGetRecommendList {
  recomend_quest: QuestList[];
}

export interface IGetAchievement {
  week_achievement: [week: boolean];
  completed_quests: [
    {
      type: string;
      title: string;
      content: string;
      exp: number;
    }
  ];
}

export interface IGetSearch {
  quests: [
    {
      id: string;
      name: string;
    }
  ];
}

export interface IGetReview {
  is_success: boolean;
  content: string;
}
