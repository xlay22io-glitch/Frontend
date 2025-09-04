export type ActiveHistoryTypes = {
  id: number | string;
  total_odds: number;
  stake_amount: number;
  win_payout: number;
  loss_payout: number;
  file_name: string;
  home_team: string;
  away_team: string;
  tip: string;
  created_at: string;
  item: string;
  match: string;
  status: string;
};

export type WeeklyBonusType = {
  week_end: string;
  week_start: string;
  weekly_balance: string;
  weekly_reward: string;
};

export type AccountInfoTypes = {
  balance: number;
  weekly_cashback: number;
  active_lay: ActiveHistoryTypes[];
  weekly_bonus: WeeklyBonusType;
};
