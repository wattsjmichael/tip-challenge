export type Bet = {
  id: string;
  marketTitle: string;
  side: "YES" | "NO";
  stake: number;
  entryPrice: number;
  payout: number;
  result: "win" | "loss" | "open";
  reasoning: string;
  createdAt: string;
};

export const challenge = {
  handle: "michael",
  title: "$10 Tip Challenge",
  startingAmount: 10,
  currentBankroll: 100,
  goal: 5000,
  totalDeposited: 10,
  yearlyBudget: 520,
};

export const bets: Bet[] = [
  {
    id: "1",
    marketTitle: "Gas price market",
    side: "YES",
    stake: 10,
    entryPrice: 50,
    payout: 20,
    result: "win",
    reasoning: "I noticed gas prices moving locally and thought the market was slow.",
    createdAt: "2026-06-24",
  },
  {
    id: "2",
    marketTitle: "Silver price market",
    side: "YES",
    stake: 20,
    entryPrice: 50,
    payout: 40,
    result: "win",
    reasoning: "Silver felt underpriced based on recent movement.",
    createdAt: "2026-06-24",
  },
];