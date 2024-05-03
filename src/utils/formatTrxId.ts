export const formatTrxId = (trxId: string) => {
  return `${trxId?.slice(0, 10)}...${trxId?.slice(
    trxId.length - 10,
    trxId.length,
  )}`;
};

export const formatTrxHash = (trxId: string) => {
  return `${trxId.slice(0, 12)}...`;
};

export const generateRandomHash = () => {
  const characters = "abcdef0123456789";
  let hash = "0x";
  for (let i = 0; i < 40; i++) {
    hash += characters[Math.floor(Math.random() * characters.length)];
  }
  return hash;
};

export const generateRandomEthereumAddress = () => {
  const characters = "abcdef0123456789";
  let address = "0x";
  for (let i = 0; i < 40; i++) {
    address += characters[Math.floor(Math.random() * characters.length)];
  }
  return address;
};
