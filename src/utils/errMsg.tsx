import { ERR_CODE } from "./constants";

export const errorMsg = (errorCode?: string) => {
  switch (errorCode) {
    case ERR_CODE.NOT_FOUND:
      return "Not found";
    case ERR_CODE.USER_NOT_FOUND:
      return "User not found";
    case ERR_CODE.NOT_TX_OWNER:
      return "User not the owner of transaction";
    case ERR_CODE.CONFIRMATION_TOO_LOW:
      return "Confirmation too low";
    case ERR_CODE.INVALID_CURRENCY:
      return "Invalid Currency";
    case ERR_CODE.INVALID_TX_FUNCTION:
      return "Invalid Transaction Function";
    case ERR_CODE.INVALID_PURCHASE_PRICE:
      return "Invalid Purchase Price";
    case ERR_CODE.INVALID_DEPOSIT_ADDRESS:
      return "Invalid Deposit Address";
    case ERR_CODE.INVALID_SIGNATURE:
      return "Invalid Signature";
    case ERR_CODE.TX_HASH_USED:
      return "Transaction Hash Used";
    case ERR_CODE.USER_LOCKED:
      return "User Locked";
    case ERR_CODE.INVALID_CAPTCHA_TOKEN:
      return "Invalid Captcha Token";
    case ERR_CODE.TRADE_COMPLETED:
      return "Trade Completed";
    case ERR_CODE.INVALID_EMAIL_FORMAT:
      return "Invalid Email Format";
    case ERR_CODE.REQUIRE_EMAIL_OR_PHONE_NUMBER:
      return "Require Email Or Phone Number";
    case ERR_CODE.INVALID_REGISTER_METHOD:
      return "Invalid Register Method";
    case ERR_CODE.INVALID_USERNAME_FORMAT:
      return "Invalid Username Format";
    case ERR_CODE.INVALID_PASSWORD_FORMAT:
      return "Invalid Password Format";
    case ERR_CODE.EMAIL_ALREADY_EXISTS:
      return "Email Already Exists";
    case ERR_CODE.USERNAME_ALREADY_EXISTS:
      return "Username Already Exists";
    case ERR_CODE.PHONE_NUMBER_ALREADY_EXISTS:
      return "Phone Number Already Exists";
    case ERR_CODE.UNAUTHORIZED:
      return "Unauthorized";
    case ERR_CODE.TRADE_SETTLED:
      return "Trade Settled";
    case ERR_CODE.INTERNAL_SERVER_ERROR:
      return "somethingWentWrong";
    case ERR_CODE.INVALID_LOGIN_MODE:
      return "Invalid Login Mode";
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
    default:
      return "Please try again later";
  }
};
