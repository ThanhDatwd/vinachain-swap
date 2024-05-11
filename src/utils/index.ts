import { onToast } from "@/hooks/useToast";
import { convertNumberToFormattedString } from "./converter";
import { VPC_EXCHANGE_RATE_USD } from "./constants";

export const handleCopy = (value: string) => {
  navigator.clipboard
    .writeText(value)
    .then(() => onToast("Copied to clipboard", "info"));
};
export const generateRandomString = (length: number) => {
  return Array.from({ length }, () =>
    String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  ).join("");
};

export const calcVPCToUSD = (amount: number): string => {
  return convertNumberToFormattedString(
    String(amount * VPC_EXCHANGE_RATE_USD)
  );
};