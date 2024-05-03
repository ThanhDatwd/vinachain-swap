interface ISwitchButton {
  onClickSwitch: () => void;
  toggle?: boolean;
}

export const SwitchButton = ({ onClickSwitch, toggle }: ISwitchButton) => {
  return (
    <div
      className={`relative flex items-center justify-center w-[32px] h-[16px] rounded-full border ml-1 ${
        toggle
          ? "bg-[#0784c3] dark:bg-[#DA6C1D] border-[#0784c3]"
          : "bg-theme border-[#ced4d9] dark:!border-gray600"
      } transition-all duration-700 ease-in-out`}
      onClick={onClickSwitch}
    >
      <div
        className={`absolute w-3 h-3 rounded-full ${
          toggle
            ? "bg-white right-[2px]"
            : "bg-[#ced4d9] dark:bg-gray600 left-[2px]"
        } transition-all duration-700 ease-in-out`}
      />
    </div>
  );
};
