import { ERR_CODE } from "./constants";

export const errorMsg = (errorCode?: string) => {
  switch (errorCode) {
    case ERR_CODE.NOT_FOUND:
      return "notFound";
    case ERR_CODE.INVALID_SIGNATURE:
      return "invalidSignature";
    case ERR_CODE.INVALID_CAPTCHA_TOKEN:
      return "invalidCaptchaToken";
    case ERR_CODE.INVALID_EMAIL_FORMAT:
      return "invalidEmailFormat";
    case ERR_CODE.INVALID_USERNAME_FORMAT:
      return "invalidUsernameFormat";
    case ERR_CODE.INVALID_PASSWORD_FORMAT:
      return "invalidPasswordFormat";
    case ERR_CODE.EMAIL_ALREADY_EXISTS:
      return "emailAlreadyExists";
    case ERR_CODE.USERNAME_ALREADY_EXISTS:
      return "usernameAlreadyExists";
    case ERR_CODE.UNAUTHORIZED:
      return "unauthorized";
    case ERR_CODE.INTERNAL_SERVER_ERROR:
      return "somethingWentWrong";
    case ERR_CODE.WALLET_ADDRESS_ALREADY_TAKEN:
      return "walletAddressAlreadyTaken";
    case ERR_CODE.EMAIL_AND_LOGGED_IN_USER_EMAIL_DO_NOT_MATCH:
      return "emailAndLoggedInUserEmailDoNotMatch";
    case ERR_CODE.WALLET_ADDRESS_AND_TRANSACTION_FROM_ADDRESS_DO_NOT_MATCH:
      return "walletAddressAndTransactionFromAddressDoNotMatch";
    case ERR_CODE.TRANSACTION_NOT_SENT_TO_CORRECT_RECIPIENT_ADDRESS:
      return "transactionNotSentToCorrectRecipientAddress";
    case ERR_CODE.TRANSACTION_NOT_SENT_WITH_VPL_TOKEN:
      return "transactionNotSentWithVplToken";
    case ERR_CODE.SWAP_TOKEN_REQUEST_IS_PENDING:
      return "swapTokenRequestIsPending";
    case ERR_CODE.INVALID_TRANSACTION_HASH:
      return "invalidTransactionHash";
    case ERR_CODE.PASSWORD_INCORRECT:
      return "passwordIncorrect";
    case ERR_CODE.USER_NOT_VERIFIED:
      return "userNotVerified";
    case ERR_CODE.INVALID_TOKEN:
      return "invalidToken";
    case ERR_CODE.USER_ALREADY_VERIFIED:
      return "userAlreadyVerified";
    case ERR_CODE.OLD_PASSWORD_INCORRECT:
      return "oldPasswordIncorrect";
    case ERR_CODE.INVALID_TX_HASH_FORMAT:
      return "invalidTxHashFormat";
    case ERR_CODE.WALLET_ADDRESS_ALREADY_PURCHASED_SWAP_PACKAGE:
      return "walletAddressAlreadyPurchasedSwapPackage";
    case ERR_CODE.SWAP_PACKAGE_NOT_FOUND:
      return "swapPackageNotFound";
    case ERR_CODE.NOT_TRANSFERRING_ENOUGH_MONEY:
      return "notTransferringEnoughMoney";
    case ERR_CODE.DO_NOT_BOUGHT_SWAP_PACKAGE_YET:
      return "doNotBoughtSwapPackageYet";
    case ERR_CODE.NOT_ENOUGH_BALANCE_TO_SWAP:
      return "notEnoughBalanceToSwap";
    default:
      return "PleaseTryAgainLater";
  }
};
