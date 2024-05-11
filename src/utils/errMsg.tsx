import { ERR_CODE } from "./constants";
import { snakeToCamel } from "./convertSnakeToCamel";

export const errorMsg = (errorCode?: string) => {
  const code = ERR_CODE[errorCode?.toUpperCase() as keyof typeof ERR_CODE] ?? "Please_Try_Again_Later";
  
  
  return snakeToCamel(code);
};
