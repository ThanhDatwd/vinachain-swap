export const signMsg = {
  confirmWalletAddress: (walletAddress: string) =>
    `I confirm that the wallet address ${walletAddress.toLowerCase()} is owned by me`,
  confirmBuyPlan: (price: number, walletAddress: string) => 
    `I confirm my agreement to purchase the swap package at the price of ${price} USDT and my wallet address for the transaction is ${walletAddress.toLowerCase()}`
};
