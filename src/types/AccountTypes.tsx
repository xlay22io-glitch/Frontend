export type ActiveHistoryTypes = {
  id: number | string;
  total_odds: number;
  stake_amount: number;
  win_payout: number;
  loss_payout: number;
  file_name: string;
};

export type AccountInfoTypes = {
  balance: number;
  weekly_cashback: number;
  active_lay: ActiveHistoryTypes[];
  history: ActiveHistoryTypes[];
};
