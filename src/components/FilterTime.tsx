export const FilterTime = ({
  isSelect,
  onClickTime,
  filterTimeData,
}: {
  isSelect: number;
  onClickTime: (index: number) => void;
  filterTimeData: string[];
}) => {
  return (
    <div className="flex w-fit rounded-lg border-address">
      {filterTimeData.map((item, index) => (
        <button
          onClick={() => onClickTime(index)}
          key={index}
          className={`py-1 px-2 text-[12.6px] text-dark900 dark:text-[#FAFAFA] ${
            isSelect === index && "bg-[#dee2e6] dark:bg-[#333]"
          } ${index > 0 && "border-l !border-[#dee2e6] dark:!border-[#333]"}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
