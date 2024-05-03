import { onToast } from "@/hooks/useToast";

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
