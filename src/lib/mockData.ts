export interface Market {
  symbol: string;
  name: string;
  supplyAPY: number;
  borrowAPY: number;
  totalSupply: number;
  totalBorrow: number;
  utilizationRate: number;
  iconColor: string;
  tokenAddress: string;
}

// Spender address for approve() calls — mock lending pool on Sepolia
export const MOCK_LENDING_POOL = "0xAaAAaaA000000000000000000000000000000001" as const;

export const MARKETS: Market[] = [
  {
    symbol: "RLUSD",
    name: "Ripple USD",
    supplyAPY: 4.82,
    borrowAPY: 6.15,
    totalSupply: 48_230_000,
    totalBorrow: 22_100_000,
    utilizationRate: 45.8,
    iconColor: "#00aae4",
    // RLUSD has no official Sepolia deployment; using USDC address as fallback
    tokenAddress: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
  },
  {
    symbol: "PYUSD",
    name: "PayPal USD",
    supplyAPY: 4.21,
    borrowAPY: 5.75,
    totalSupply: 31_450_000,
    totalBorrow: 14_800_000,
    utilizationRate: 47.1,
    iconColor: "#003087",
    tokenAddress: "0xCaC524BcA292aaade2DF8bD895A70bb9B1d95f80",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    supplyAPY: 5.12,
    borrowAPY: 6.89,
    totalSupply: 124_700_000,
    totalBorrow: 72_300_000,
    utilizationRate: 57.9,
    iconColor: "#2775ca",
    tokenAddress: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
  },
];

export interface Position {
  symbol: string;
  name: string;
  amount: number;
  valueUSD: number;
  apy: number;
  iconColor: string;
}

export const MOCK_SUPPLY_POSITIONS: Position[] = [
  {
    symbol: "USDC",
    name: "USD Coin",
    amount: 5000,
    valueUSD: 5000,
    apy: 5.12,
    iconColor: "#2775ca",
  },
  {
    symbol: "RLUSD",
    name: "Ripple USD",
    amount: 2500,
    valueUSD: 2500,
    apy: 4.82,
    iconColor: "#00aae4",
  },
];

export const MOCK_BORROW_POSITIONS: Position[] = [
  {
    symbol: "PYUSD",
    name: "PayPal USD",
    amount: 1200,
    valueUSD: 1200,
    apy: 5.75,
    iconColor: "#003087",
  },
];

export const MOCK_NET_WORTH = {
  netWorth: 6300,
  netAPY: 3.84,
  healthFactor: 2.41,
  totalSupplied: 7500,
  totalBorrowed: 1200,
};

export function formatCurrency(value: number): string {
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`;
  }
  if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(2)}K`;
  }
  return `$${value.toFixed(2)}`;
}

export function formatAPY(value: number): string {
  return `${value.toFixed(2)}%`;
}

export function formatUtilization(value: number): string {
  return `${value.toFixed(1)}%`;
}
