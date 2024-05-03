export type ChangeEventHandler = (
  event: React.ChangeEvent<HTMLInputElement>
) => void;

export interface TokenCardProp {
  progressPercent: string;
  amount: string;
}

export type DataSectionProps = {
  label: string;
  value?: string;
  isCopyable?: boolean;
  short?: boolean;
  keyIcon?: JSX.Element;
};

export type SwapPackage = {
  _id: string;
  packageName: string;
  price: number;
  currency: string;
  maxSwapAmount: number;
  swapUnit: string;
};
