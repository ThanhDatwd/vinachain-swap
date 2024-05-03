import { CloseIcon } from "@/assets/icons/CloseIcon";
import { useTheme } from "@/hooks/useTheme";
import { THEME } from "@/utils/constants";
import { FC, ReactNode } from "react";

interface Props {
  isOpen: boolean;
  titleModal?: string;
  toggleOpenModal: () => void;
  onClick?: () => void;
  children: ReactNode;
}

export const AdvanceFilterModal: FC<Props> = ({
  isOpen,
  titleModal,
  toggleOpenModal,
  children,
}) => {
  const { theme } = useTheme();

  return (
    <>
      <div
        className="relative z-100"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className={`${
            isOpen ? "fixed opacity-100" : "opacity-0"
          } duration-700 inset-0 bg-black opacity-50 transition-opacity`}
          onClick={toggleOpenModal}
        />

        <div
          className={`fixed left-1/2 transform -translate-x-1/2 ${
            isOpen ? "top-1/4 -translate-y-1/4" : "top-0 -translate-y-full opacity-0"
          } z-[100] overflow-y-auto duration-700`} 
        >
          <div
            onClick={toggleOpenModal}
            className="flex justify-center flex-1 p-4 text-center items-center sm:p-0"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-96 md:w-[480px] text-dark dark:text-[#FAFAFA]  relative overflow-hidden rounded-2xl shadow-xl sm:my-8 bg-theme border dark:border-gray600"
            >
              <div className="w-full p-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="">{titleModal}</div>
                  <div className="cursor-pointer" onClick={toggleOpenModal}>
                    <CloseIcon color={theme === THEME.DARK ? "#888" : "#7f7f7f"}/>
                  </div>
                </div>
              </div>
              <div className="w-full  md:max-h-[500px]">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
