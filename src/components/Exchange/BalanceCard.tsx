interface IBalcanceCard {
  title: string;
  value: number;
  currency: string;
}

export const BalanceCard = ({ title, value, currency }: IBalcanceCard) => {
  return (
    <div className="flex flex-col gap-2 exchange-color-main text-base">
      <span className="font-semibold">{title}</span>
      <div className="flex justify-between exchange-bg py-2 px-4 font-normal">
        <span className="exchange-color-second font-semibold">{value.toLocaleString("en-US")}</span>
        <span>{currency}</span>
      </div>
    </div>
  );
};
