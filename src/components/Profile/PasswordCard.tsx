import { LockIcon } from "@/assets/icons/LockIcon";
import { VisibilityOffIcon } from "@/assets/icons/VisibilityOffIcon";
import { VisibilityOnIcon } from "@/assets/icons/VisibilityOnIcon";
import { useTheme } from "@/hooks/useTheme";
import { THEME } from "@/utils/constants";
import { ForwardRefRenderFunction, InputHTMLAttributes, useState } from "react";
import { useTranslation } from "react-i18next";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  error: string | null;
}

export const PasswordCard: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = (props) => {
  const { title, error, ...rest } = props;
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="user-info-block">
        <div className="user-info-title">
          <LockIcon color={theme === THEME.DARK ? "#B5A1DC" : "#6B5695"} />
          {title}
        </div>

        <div className="flex flex-1 px-4 items-center justify-between border-profile rounded-lg">
          <input
            placeholder="*******"
            className="flex w-full items-center py-2 rounded-lg outline-none border-none text-[#666] dark:text-[#C4C4C4] text-base font-semibold"
            {...rest}
            type={showPassword ? "text" : "password"}
          />
          <div
            className="cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <VisibilityOnIcon
                color={theme === THEME.DARK ? "#E8DEFD" : "#1D0F3A"}
              />
            ) : (
              <VisibilityOffIcon
                color={theme === THEME.DARK ? "#E8DEFD" : "#1D0F3A"}
              />
            )}
          </div>
        </div>
      </div>
      <div className="lg:ml-[244px] mt-1">
        {error && (
          <p className="error-message text-[#EA868F] dark:text-[#EA868F] text-[12.5px]">
            {error}
          </p>
        )}
      </div>
      <hr className="line-profile" />
    </>
  );
};
