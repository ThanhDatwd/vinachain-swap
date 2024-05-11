import { CloseIcon } from "@/assets/icons/CloseIcon";
import { useTheme } from "@/hooks/useTheme";
import { THEME } from "@/utils/constants";
import { FC, ReactNode, useEffect } from "react";

interface Props {
  isOpen: boolean;
  titleModal?: string;
  toggleOpenModal: () => void;
  children: ReactNode;
}

export const TopModal: FC<Props> = ({
  isOpen,
  titleModal,
  toggleOpenModal,
  children,
}) => {
  const { theme } = useTheme();

  return (
    <>
      <div
        className="relative z-[50] "
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className={` w-screen  top-0 left-0 bg-black  ${
            isOpen ? "opacity-50 z-40 fixed h-screen" : "opacity-0"
          } transition-opacity duration-300`}
          onClick={toggleOpenModal}
        />

        <div
          className={` left-1/2 transform -translate-x-1/2 ${
            isOpen ? "fixed top-0 translate-y-0 z-50" : "top-0 -translate-y-1/4 h-0 opacity-0"
          }  overflow-y-auto duration-300`}
        >
          <div className=" mx-auto mt-2 px-2 w-fit">
            <div className="relative box-shadow border bg-white dark:bg-gray900 shadow-xl rounded-xl">
              <div className="flex justify-between items-center p-4 border-b">
                <div className=" font-semibold">{titleModal}</div>
                <button onClick={toggleOpenModal}>
                  <CloseIcon
                    color={theme === THEME.DARK ? "#888" : "#7f7f7f"}
                  />
                </button>
              </div>
              <div className="px-4 py-2 max-h-[90vh] overflow-y-auto">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
