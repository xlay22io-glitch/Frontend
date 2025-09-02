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
};

export type AccountInfoTypes = {
  balance: number;
  weekly_cashback: number;
  active_lay: ActiveHistoryTypes[];
  history: ActiveHistoryTypes[];
};
