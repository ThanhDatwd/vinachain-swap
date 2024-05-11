import Link from "next/link";
import React, {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactNode,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string|ReactNode;
  error: string | null;
  className?: string;
  endIcon?: ReactNode;
  forgotPassword?: string;
}

const FormInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props
) => {
  const { label, error, className, endIcon, forgotPassword, ...rest } = props;
  return (
    <div className="flex flex-col gap-2 text-[15px] text-dark900 dark:text-gray200">
      <div className="flex justify-between">
        {label && <label>{label}</label>}
        {forgotPassword && (
          <Link href={"/lost-password"} className="text-gray550 dark:text-gray200 hover:text-[#0784c3]">
            {forgotPassword}
          </Link>
        )}
      </div>
      <div className={`relative flex justify-between items-center  border  overflow-hidden rounded-lg ${error?"inputError dark:inputError dark:!border-[#de443780]":rest.value!==""?"inputSuccess dark:inputSuccess dark:!border-[#00c9a780] ":"border-[#e9ecef] "}   `}>
        <input
          className={`${className} flex-1 outline-none border-none p-3 placeholder:text-gray550 bg-transparent `}
          {...rest}
        />
        {endIcon}
      </div>
      {error && <p className="error-message text-[#EA868F] dark:text-[#EA868F] text-[12.5px]">{error}</p>}
    </div>
  );
};

export default FormInput;
