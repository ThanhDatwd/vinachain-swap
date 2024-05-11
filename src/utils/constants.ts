import { IOptions } from "@/components/StakingDropdown";
import abiUsdtToken from "@/web3/abi/usdt.json";
import { EToken, ITokenOption, TOKENS } from "@/web3/token";
import { DateTime } from "luxon";
import { convertNumberToFormattedString } from "./converter";

export const getStaticURL = () => process.env.NEXT_PUBLIC_STATIC_URL;

export const vinachainAddress = process.env.NEXT_PUBLIC_VINACHAIN_ADDRESS;

export const exploreVinachainUrl = "";

export const endsInTimer = "December 31, 2023 23:59:59";

export const FIELD_NAME_BUCKET_USER_IMAGE = "user-image";

export const calculateTimeRemaining = (endsInTimer: string) => {
  const endTime = DateTime.fromISO(endsInTimer);

  const now = DateTime.local();

  const diff = endTime.diff(now, ["days", "hours", "minutes", "seconds"]);

  const timeRemaining = diff.as("seconds");

  const days = diff.toObject().days;
  const hours = diff.toObject().hours;
  const minutes = diff.toObject().minutes;
  const seconds = diff.toObject().seconds?.toFixed(0);

  return { timeRemaining, days, hours, minutes, seconds };
};

export enum NETWORK {
  ETHEREUM = "ethereum",
  BINANCE = "binance",
}

export enum Currencies {
  USC = "USC",
  USDT = "USDT",
}

export enum FilterUserHistory {
  // ALL = "all",
  DEPOSIT = "deposit",
  // WITHDRAW = "withdraw",
}
export const DEFAULT_AUTOCLOSE_TOAST = 2000;

export enum PathName {
  DASHBOARD = "/",
  USERS = "/users",
  GAMES = "/games",
  PORTAL_TRANSACTION = "/portal-transaction",
  GAME_TRANSACTION = "/game-transaction",
  FEEDBACK = "/feedback",
  REFERRAL = "/referral",
}
export const subLinkReferral = [
  {
    label: "referral",
    link: "/referral",
  },
  {
    label: "referralType",
    link: "/referral/referral-type",
  },
  {
    label: "referralReward",
    link: "/referral/referral-reward",
  },
];

export const FACTOR = 0.99;
export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_GAME_PAGE_SIZE = 18;
export const DEFAULT_PAGE_NUMBER = 0;

export const MINIMUM_TX_CONFIRMATION = 5;
export const REFECT_CONFIRMATION_BLOCK = 3000;

export const PAGINATION_OPTIONS = [
  {
    label: "10",
    value: "10",
  },
  {
    label: "20",
    value: "20",
  },
  {
    label: "30",
    value: "30",
  },
  {
    label: "50",
    value: "50",
  },
];

export const EXCHANGE_OPTIONS = [
  {
    label: "rUSDT",
    value: "0.0",
  },
  {
    label: "VPC",
    value: "0.0",
  },
];

export enum FilterOfDirection {
  ALL = "all",
  IN = "in",
  OUT = "out",
}

export enum Direction {
  IN = "in",
  OUT = "out",
}

export enum Network {
  ETHEREUM = "ethereum",
  BINANCE = "binance",
}

export enum Currency {
  USC_ETH = "usc_eth",
  USC_BSC = "usc_bsc",
}

export enum ActionType {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
}

export enum TransferStatus {
  PENDING_TRANSFER = "pending_transfer",
  TRANSFERED = "transfered",
}

export const enum Event {
  TRANSACTIONS = "transactions",
  VERIFY = "verify",
}

export const enum VerifyStatus {
  NOT_VERIFY = "not_verify",
  VERIFY_SUCCESS = "verify_success",
  VERIFY_FAIL = "verify_fail",
}

export const DEFAULT_LOAD_CARD_AMOUNT = 0;

export const DEFAULT_STRING_SHOW = 20;

export const DefaultPaginationQuery = {
  sort: "-createdAt",
  limit: DEFAULT_PAGE_SIZE.toString(),
  offset: DEFAULT_PAGE_NUMBER.toString(),
};

export const BLOCKCHAIN_CHAIN: any = {
  1: "eth",
  5: "eth",
  56: "bsc",
  97: "bsc",
};

export enum TRANSACTION_DOMAIN {
  PORTAL = "portal",
  INTEGRATION = "integration",
  PARTNER = "partner",
}

export const OptionsAction = [
  {
    label: "all",
    value: "",
  },
  {
    label: "deposit",
    value: "deposit",
  },
  {
    label: "withdraw",
    value: "withdraw",
  },
  {
    label: "referral",
    value: "referral",
  },
  {
    label: "gameDeposit",
    value: "topup_to_integration",
  },
  {
    label: "gameWithdraw",
    value: "cashout_from_integration",
  },
  {
    label: "fee",
    value: "fee",
  },
  {
    label: "fundTransfer",
    value: "fund_transfer",
  },
  {
    label: "betPlaced",
    value: "bet_placed",
  },
  {
    label: "betSettled",
    value: "bet_settled",
  },
  {
    label: "betRollback",
    value: "bet_rollback",
  },
];

export const OptionsDirection = [
  {
    label: "all",
    value: "all",
  },
  {
    label: "in",
    value: "in",
  },
  {
    label: "out",
    value: "out",
  },
];

export const OptionsSearchUserBy = [
  { label: "Username", value: "username" },
  { label: "Full name", value: "fullname" },
];
export const OptionsSearchPostBy = [{ label: "Tag", value: "tag" }];
export const OptionsFeedbackSearchBy = [
  { label: "Feedback Title", value: "title" },
  { label: "Email", value: "email" },
  { label: "Phone Number", value: "phoneNumber" },
];

export const OptionsSearchByForReferral = [
  { label: "code", value: "code" },
  { label: "ownerEmail", value: "ownerEmail" },
];

export const OptionsSearchByForReferralType = [
  { label: "refCode", value: "refCode" },
  { label: "ownerEmail", value: "ownerEmail" },
];

export const OptionsSearchByForReferralReward = [
  { label: "referralName", value: "name" },
];

export const OptionsStatus = [
  {
    label: "Submitted",
    value: "submitted",
  },
  {
    label: "Solved",
    value: "solved",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
];

export const OptionsLanguage = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "简体中文",
    value: "cn",
  },
  {
    label: "Việt Nam",
    value: "vi",
  },
];

export enum THEME {
  LIGHT = "light",
  DARK = "dark",
  DIM = "dim",
}

export const DEFAULT_DATE_RANGE = 1;

export const MAX_INTEGRATION_NAME_LENGTH = 20;

export const FIXED_VALUE = 5;
export const MAX_FEEDBACK_IMAGE = 5;

export const ALI_CLOUD_ACCESS_CREDENTIAL = "ali_oss_credentials";
export const ALI_CREDENTIALS_TIMEOUT_IN_MILI_SECONDS = 900000; //15 minutes
export const debounce = (fn: Function, delay: number) => {
  let timer: any;
  return function (...args: any) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const VinachainData = [
  {
    page: "vinaChain",
    footerItemKey: "useVina",
    footerItemValue: "title",
    footerList: [
      {
        label: "findWallet",
        link: "/coming-soon",
      },
      {
        label: "getUSDv",
        link: "/coming-soon",
      },
      {
        label: "dapps",
        link: "/coming-soon",
      },
      {
        label: "layer2",
        link: "/coming-soon",
      },
      {
        label: "runANode",
        link: "/coming-soon",
      },
      {
        label: "stableCoins",
        link: "/coming-soon",
      },
      {
        label: "skate",
        link: "/coming-soon",
      },
    ],
  },
  {
    page: "vinaChain",
    footerItemKey: "learn",
    footerItemValue: "title",
    footerList: [
      {
        label: "learnHub",
        link: "/coming-soon",
      },
      {
        label: "whatIsUSDv",
        link: "/coming-soon",
      },
      {
        label: "uSDvWallets",
        link: "/coming-soon",
      },
      {
        label: "layer2",
        link: "/coming-soon",
      },
      {
        label: "gasFees",
        link: "/coming-soon",
      },
      {
        label: "uSDvSecurityAndScamPrevention",
        link: "/coming-soon",
      },
      {
        label: "whatIsWeb3",
        link: "/coming-soon",
      },
      {
        label: "smartConstracts",
        link: "/coming-soon",
      },
      {
        label: "uSDvEnergyConsumption",
        link: "/coming-soon",
      },
      {
        label: "uSDvRoadmap",
        link: "/coming-soon",
      },
      {
        label: "uSDvImprovementProposals",
        link: "/coming-soon",
      },
      {
        label: "historyOfUSDv",
        link: "/coming-soon",
      },
      {
        label: "uSDvWallpaper",
        link: "/coming-soon",
      },
      {
        label: "uSDvGlossary",
        link: "/coming-soon",
      },
      {
        label: "uSDvGovernance",
        link: "/coming-soon",
      },
      {
        label: "blockchainBridges",
        link: "/coming-soon",
      },
      {
        label: "zeroKnowledgeProofs",
        link: "/coming-soon",
      },
      {
        label: "quizHub",
        link: "/coming-soon",
      },
    ],
  },
  {
    page: "vinaChain",
    footerItemKey: "developers",
    footerItemValue: "title",
    footerList: [
      {
        label: "getStarted",
        link: "/coming-soon",
      },
      {
        label: "documentation",
        link: "/coming-soon",
      },
      {
        label: "tutorials",
        link: "/coming-soon",
      },
      {
        label: "learnByConding",
        link: "/coming-soon",
      },
      {
        label: "setUpLocalEnviroment",
        link: "/coming-soon",
      },
    ],
  },
  {
    page: "vinaChain",
    footerItemKey: "ecosystem",
    footerItemValue: "title",
    footerList: [
      {
        label: "communityHub",
        link: "/coming-soon",
      },
      {
        label: "uSDvFoundation",
        link: "/coming-soon",
      },
      {
        label: "uSDvFoundationBlog",
        link: "/coming-soon",
      },
      {
        label: "uSDvBugBountyProgram",
        link: "/coming-soon",
      },
      {
        label: "ecosystemGrantProgram",
        link: "/coming-soon",
      },
      {
        label: "uSDvBrandAssets",
        link: "/coming-soon",
      },
      {
        label: "devCon",
        link: "/coming-soon",
      },
    ],
  },
  {
    page: "vinaChain",
    footerItemKey: "enterprise",
    footerItemValue: "title",
    footerList: [
      {
        label: "mainnetUSDv",
        link: "/coming-soon",
      },
      {
        label: "privateUSDv",
        link: "/coming-soon",
      },
      {
        label: "enterprise",
        link: "/coming-soon",
      },
    ],
  },
  {
    page: "vinaChain",
    footerItemKey: "about",
    footerItemValue: "title",
    footerList: [
      {
        label: "aboutUs",
        link: "/coming-soon",
      },
      {
        label: "jobs",
        link: "/coming-soon",
      },
      {
        label: "contributing",
        link: "/coming-soon",
      },
      {
        label: "languageSupport",
        link: "/coming-soon",
      },
      {
        label: "privacyPolicy",
        link: "/coming-soon",
      },
      {
        label: "termOfUse",
        link: "/coming-soon",
      },
      {
        label: "cookiePolicy",
        link: "/coming-soon",
      },
      {
        label: "contact",
        link: "/coming-soon",
      },
    ],
  },
  {
    page: "vinaChain",
    footerItemKey: "community",
    footerItemValue: "title",
    footerList: [
      {
        label: "communityHub",
        link: "/coming-soon",
      },
      {
        label: "onlineCommunities",
        link: "/coming-soon",
      },
      {
        label: "uSDTevents",
        link: "/coming-soon",
      },
      {
        label: "getInvolved",
        link: "/coming-soon",
      },
      {
        label: "openResearch",
        link: "/coming-soon",
      },
      {
        label: "grants",
        link: "/coming-soon",
      },
      {
        label: "uSDTSupport",
        link: "/coming-soon",
      },
      {
        label: "languageResources",
        link: "/coming-soon",
      },
    ],
  },
];

export const VinachainHeader = VinachainData.filter(
  (item, index) => item.footerItemKey !== "about"
);
export const VinachainFooter = VinachainData.filter(
  (item, index) => item.footerItemKey !== "community"
);

export const VinaScanData = [
  {
    page: "vinaScan",
    footerItemKey: "blockchain",
    footerItemValue: "title",
    footerList: [
      {
        label: "transactions",
        link: "/txs",
      },
      {
        label: "pendingTransactions",
        link: "/txsPending",
      },
      {
        label: "contractInternalTransactions",
        link: "/txsInternal",
      },
      {
        label: "beaconDeposits",
        link: "/txsBeaconDeposit",
      },
      {
        label: "beaconWithdrawals",
        link: "/txsBeaconWithdrawal",
      },
      {
        label: "viewBlobs",
        link: "/txsBlobs",
      },
      {
        label: "",
        link: "",
      },
      {
        label: "viewBlocks",
        link: "/blocks",
      },
      {
        label: "forkedBlocks",
        link: "/blocks_forked",
      },
      {
        label: "uncles",
        link: "/uncles",
      },
      {
        label: "",
        link: "",
      },
      {
        label: "topAccounts",
        link: "/accounts",
      },
      {
        label: "verifiedContracts",
        link: "/contractsVerified",
      },
    ],
  },
  {
    page: "vinaScan",
    footerItemKey: "tokens",
    footerItemValue: "title",
    footerList: [
      {
        label: "topTokens",
        link: "/tokens",
      },
      {
        label: "tokensTransfer",
        link: "/tokentxns",
      },
    ],
  },
  {
    page: "vinaScan",
    footerItemKey: "nFTs",
    footerItemValue: "title",
    footerList: [
      {
        label: "topNFTs",
        link: "/nft-top-contracts",
      },
      {
        label: "topMints",
        link: "/nft-top-mints",
      },
      {
        label: "lastedTrades",
        link: "/nft-trades",
      },
      {
        label: "lastedTransfer",
        link: "/nft-transfers",
      },
      {
        label: "lastedMints",
        link: "/coming-soon",
      },
    ],
  },
  {
    page: "vinaScan",
    footerItemKey: "resources",
    footerItemValue: "title",
    footerList: [
      {
        label: "chartsAndStats",
        link: "/coming-soon",
      },
      {
        label: "topStatistics",
        link: "/coming-soon",
      },
      {
        label: "leaderboard",
        link: "/coming-soon",
      },
      {
        label: "",
        link: "",
      },
      {
        label: "directory",
        link: "/coming-soon",
      },
      {
        label: "newsletter",
        link: "/coming-soon",
      },
      {
        label: "knowledgeBase",
        link: "/coming-soon",
      },
    ],
  },
  {
    page: "vinaScan",
    footerItemKey: "developers",
    footerItemValue: "title",
    footerList: [
      {
        label: "aPIPlans",
        link: "/coming-soon",
      },
      {
        label: "aPIDocumentation",
        link: "/coming-soon",
      },
      {
        label: "",
        link: "",
      },
      {
        label: "codeReader",
        link: "/coming-soon",
      },
      {
        label: "verifyContract",
        link: "/coming-soon",
      },
      {
        label: "similarContractSearch",
        link: "/coming-soon",
      },
      {
        label: "smartContractSearch",
        link: "/coming-soon",
      },
      {
        label: "contractDiffChecker",
        link: "/coming-soon",
      },
      {
        label: "",
        link: "",
      },
      {
        label: "vyperOnlineCompiler",
        link: "/coming-soon",
      },
      {
        label: "bytecodeToOpcode",
        link: "/coming-soon",
      },
      {
        label: "broadcastTransaction",
        link: "/coming-soon",
      },
    ],
  },
];

export const VinaScanHeader = [...VinaScanData];
export const VinaScanFooter = VinaScanData.filter(
  (item, index) => item.footerItemKey !== "more"
);

export const LIST_MENU = [
  {
    label: "swap",
    linkDefault: "/swap",
    path: [
      {
        d: "M10.7511 21.5C8.80112 21.5 7.03154 21.0173 5.44237 20.0518C3.85337 19.0864 2.60696 17.7928 1.70312 16.171V19.1538H0.203125V13.6538H5.70312V15.1538H2.86263C3.58563 16.6103 4.65421 17.7821 6.06838 18.6693C7.48254 19.5564 9.04346 20 10.7511 20C11.9755 20 13.1239 19.7737 14.1964 19.3212C15.2687 18.8686 16.2075 18.2509 17.0126 17.4683C17.8178 16.6856 18.4643 15.7613 18.9521 14.6953C19.44 13.6293 19.7031 12.4808 19.7416 11.25H21.2414C21.2094 12.6705 20.9123 14.0026 20.3501 15.2462C19.788 16.4897 19.0341 17.5763 18.0886 18.5058C17.1431 19.4353 16.0405 20.1667 14.7809 20.7C13.5212 21.2333 12.178 21.5 10.7511 21.5ZM10.0434 17.8078V16.5462C9.31137 16.3756 8.70271 16.0717 8.21738 15.6345C7.73221 15.1973 7.36012 14.6077 7.10112 13.8655L8.36637 13.35C8.60487 14.0013 8.94629 14.4963 9.39062 14.8348C9.83479 15.1731 10.3383 15.3422 10.9011 15.3422C11.4703 15.3422 11.9812 15.2003 12.4339 14.9163C12.8864 14.6324 13.1126 14.177 13.1126 13.55C13.1126 13.0282 12.9181 12.6125 12.5291 12.303C12.14 11.9933 11.414 11.6436 10.3511 11.2537C9.32296 10.8846 8.58129 10.4712 8.12612 10.0135C7.67096 9.55583 7.44337 8.95133 7.44337 8.2C7.44337 7.55517 7.67612 6.96475 8.14162 6.42875C8.60696 5.89292 9.25754 5.55125 10.0934 5.40375V4.19225H11.4589V5.40375C12.0204 5.44742 12.5374 5.65867 13.0099 6.0375C13.4822 6.41633 13.8229 6.87175 14.0319 7.40375L12.7974 7.9C12.6255 7.5295 12.38 7.2215 12.0606 6.976C11.7415 6.7305 11.3216 6.60775 10.8011 6.60775C10.1793 6.60775 9.69179 6.75517 9.33862 7.05C8.98546 7.34483 8.80888 7.72817 8.80888 8.2C8.80888 8.67183 8.98129 9.03917 9.32613 9.302C9.67096 9.56483 10.369 9.87575 11.4204 10.2348C12.6204 10.6681 13.4268 11.1539 13.8396 11.6923C14.2525 12.2308 14.4589 12.85 14.4589 13.55C14.4589 14.027 14.3707 14.4456 14.1944 14.8057C14.018 15.1661 13.7876 15.469 13.5031 15.7145C13.2185 15.96 12.8944 16.1539 12.5309 16.2962C12.1674 16.4384 11.7934 16.5384 11.4089 16.5963V17.8078H10.0434ZM0.260875 10.75C0.305708 9.2975 0.612375 7.94783 1.18088 6.701C1.74954 5.45417 2.50979 4.36925 3.46162 3.44625C4.41362 2.52308 5.51463 1.80125 6.76463 1.28075C8.01463 0.760249 9.34346 0.5 10.7511 0.5C12.682 0.5 14.4515 0.984333 16.0599 1.953C17.6682 2.9215 18.9146 4.22633 19.7991 5.8675V2.84625H21.2991V8.34625H15.7991V6.84625H18.6396C17.9358 5.41542 16.8752 4.25 15.4579 3.35C14.0405 2.45 12.4716 2 10.7511 2C9.55246 2 8.41846 2.22308 7.34913 2.66925C6.27996 3.11542 5.33963 3.72658 4.52813 4.50275C3.71663 5.27908 3.06212 6.20025 2.56462 7.26625C2.06712 8.33225 1.79912 9.4935 1.76062 10.75H0.260875Z",
      },
    ],
    iconName: "currency_exchange",
    links: ["/swap"],
    itemList: [],
  },
  {
    label: "staking",
    linkDefault: "/staking",
    path: [
      {
        d: "M14.0042 4.97375L15.7027 2.49074C14.1323 2.58428 12.233 2.95311 10.4106 3.4803C9.1723 3.83855 7.79325 3.7845 6.51115 3.54795C6.10735 3.47345 5.70955 3.38015 5.3244 3.27405L6.4781 4.9725C8.83385 5.8421 11.648 5.8425 14.0042 4.97375ZM5.89075 5.81825C8.6011 6.89425 11.8875 6.8939 14.5975 5.81725C15.6994 6.96035 16.8375 8.38285 17.7145 9.8708C18.6313 11.4263 19.21 12.9648 19.248 14.2862C19.284 15.5367 18.8447 16.6141 17.6071 17.4413C16.2955 18.3179 14.0101 18.9622 10.262 18.9985C6.51285 19.0347 4.22395 18.434 2.90867 17.5837C1.67088 16.7834 1.223 15.7177 1.25122 14.4601C1.28106 13.1307 1.85309 11.5702 2.76792 9.98175C3.64125 8.46535 4.7797 7.00515 5.89075 5.81825ZM5.081 2.15975C5.59465 2.32143 6.1388 2.46236 6.6926 2.56453C7.89145 2.78574 9.09935 2.81864 10.1327 2.5197C11.446 2.13978 12.8246 1.83192 14.1165 1.64955C13.0141 1.28663 11.6813 1 10.2717 1C8.23715 1 6.3484 1.59697 5.081 2.15975ZM4.12345 1.50616C5.4759 0.82873 7.76245 0 10.2717 0C12.7344 0 14.9654 0.798315 16.312 1.46837C16.3346 1.47962 16.357 1.49084 16.3791 1.50202C16.7419 1.68539 17.0368 1.85785 17.25 2L15.1978 5C19.9287 9.83635 25.5751 19.8505 10.2717 19.9984C-5.03178 20.1463 0.51587 10.0213 5.2879 5L3.25 2C3.3926 1.90628 3.571 1.79939 3.7811 1.68488C3.8873 1.62701 4.00155 1.5672 4.12345 1.50616Z",
      },
      {
        d: "M9.39435 8H11.1057V8.8H12.817V10.4H9.39435L9.31735 10.4064C9.2187 10.4231 9.12945 10.4717 9.0652 10.5436C9.00095 10.6155 8.9657 10.7063 8.9657 10.8C8.9657 10.8937 9.00095 10.9845 9.0652 11.0564C9.12945 11.1284 9.2187 11.1769 9.31735 11.1936L9.39435 11.2H11.1057L11.246 11.204C11.801 11.2369 12.3205 11.4705 12.6944 11.8553C13.0682 12.2402 13.2671 12.746 13.2489 13.2657C13.2306 13.7853 12.9967 14.2779 12.5966 14.6389C12.1965 15.0001 11.6618 15.2013 11.1057 15.2V16H9.39435V15.2H7.68305V13.6H11.1057L11.1827 13.5936C11.2813 13.5769 11.3706 13.5284 11.4348 13.4564C11.4991 13.3845 11.5343 13.2937 11.5343 13.2C11.5343 13.1063 11.4991 13.0155 11.4348 12.9436C11.3706 12.8717 11.2813 12.8231 11.1827 12.8064L11.1057 12.8H9.39435L9.25405 12.796C8.69905 12.7632 8.17955 12.5296 7.80565 12.1447C7.4318 11.7599 7.2329 11.254 7.25115 10.7344C7.2694 10.2147 7.50335 9.72215 7.9034 9.3611C8.30355 8.99995 8.83825 8.7987 9.39435 8.8V8Z",
      },
    ],
    iconName: "price_check",
    links: ["/vpl-staking", "/vpc-staking", "/staking", "/history-staking"],
    itemList: [
      // {
      //   label: "VPC",
      //   value: "VPC",
      //   link: "/vpc-staking",
      //   links:["/history-staking"]
      // },
      // {
      //   label: "VPL",
      //   value: "VPL",
      //   link: "/vpl-staking",
      //   links:[]
      // },
    ],
  },
  {
    label: "referral",
    linkDefault: "/referral",
    path: [
      {
        d: "M9.75 0.596191L18.5308 5.82294C18.7537 5.96794 18.9294 6.15869 19.0578 6.39519C19.1859 6.63169 19.25 6.88328 19.25 7.14994V17.6922C19.25 18.1974 19.075 18.6249 18.725 18.9749C18.375 19.3249 17.9474 19.4999 17.4423 19.4999H2.05775C1.55258 19.4999 1.125 19.3249 0.775 18.9749C0.425 18.6249 0.25 18.1974 0.25 17.6922V7.14994C0.25 6.88328 0.314083 6.63169 0.44225 6.39519C0.570583 6.15869 0.74625 5.96794 0.96925 5.82294L9.75 0.596191ZM9.75 11.6499L17.55 6.99994L9.75 2.34994L1.95 6.99994L9.75 11.6499ZM9.75 13.4037L1.75 8.62294V17.6922C1.75 17.782 1.77883 17.8558 1.8365 17.9134C1.89417 17.9711 1.96792 17.9999 2.05775 17.9999H17.4423C17.5321 17.9999 17.6058 17.9711 17.6635 17.9134C17.7212 17.8558 17.75 17.782 17.75 17.6922V8.62294L9.75 13.4037Z",
      },
    ],
    iconName: "drafts",
    links: ["/referral"],
    itemList: [],
  },
  {
    label: "vpcTransfer",
    linkDefault: "/exchange",
    iconName: "price_check",
    links: ["/exchange", "/claim", "/bridge"],
    path: [
      {
        d: "M14.7942 0L13.7046 1.1138L17.0218 4.43099H0.702179V5.98063H17.0218L13.7046 9.29782L14.7942 10.4116L20 5.20581L14.7942 0ZM5.20581 10.8475L0 16.0533L5.20581 21.2591L6.2954 20.1453L2.97821 16.8281H19.2978V15.2785H2.97821L6.2954 11.9613L5.20581 10.8475Z",
      },
    ],
    itemList: [
      {
        label: "exchange",
        link: "/exchange",
        links: [],
      },
      {
        label: "claim",
        link: "/claim",
        links: [],
      },
      {
        label: "bridge",
        link: "/bridge",
        links: [],
      },
    ],
  },
];

export const SMART_CHAIN_OPTIONS: IOptions[] = [
  {
    imgName: "logo",
    value: "vinachain",
    label: "Vinachain",
  },
];

export const WALLET_INFO_OPTIONS: IOptions[] = [
  {
    imgName: "wallet",
    value: "0x...87C&",
    label: "0x...87C&",
  },
  {
    imgName: "wallet",
    value: "0x...87C&",
    label: "0x...87C&",
  },
];

export const CURRENCY_OPTIONS = [
  {
    label: "VPC",
    value: "vpc",
  },
  {
    label: "VPL",
    value: "vpl",
  },
];

export const Developers = [
  {
    label: "getStarted",
    link: "/coming-soon",
  },
  {
    label: "documentation",
    link: "/coming-soon",
  },
  {
    label: "tutorials",
    link: "/coming-soon",
  },
  {
    label: "learnByConding",
    link: "/coming-soon",
  },
  {
    label: "setUpLocalEnviroment",
    link: "/coming-soon",
  },
];

export const Ecosystem = [
  {
    label: "communityHub",
    link: "/coming-soon",
  },
  {
    label: "uSDvFoundation",
    link: "/coming-soon",
  },
  {
    label: "uSDvFoundationBlog",
    link: "/coming-soon",
  },
  {
    label: "uSDvBugBountyProgram",
    link: "/coming-soon",
  },
  {
    label: "ecosystemGrantProgram",
    link: "/coming-soon",
  },
  {
    label: "uSDvBrandAssets",
    link: "/coming-soon",
  },
  {
    label: "devCon",
    link: "/coming-soon",
  },
];

export const Enterprise = [
  {
    label: "mainnetUSDv",
    link: "/coming-soon",
  },
  {
    label: "privateUSDv",
    link: "/coming-soon",
  },
  {
    label: "enterprise",
    link: "/coming-soon",
  },
];

export const About = [
  {
    label: "aboutUs",
    link: "/coming-soon",
  },
  {
    label: "jobs",
    link: "/coming-soon",
  },
  {
    label: "contributing",
    link: "/coming-soon",
  },
  {
    label: "languageSupport",
    link: "/coming-soon",
  },
  {
    label: "privacyPolicy",
    link: "/coming-soon",
  },
  {
    label: "termOfUse",
    link: "/coming-soon",
  },
  {
    label: "cookiePolicy",
    link: "/coming-soon",
  },
  {
    label: "contact",
    link: "/coming-soon",
  },
];

export const Community = [
  {
    label: "communityHub",
    link: "/coming-soon",
  },
  {
    label: "onlineCommunities",
    link: "/coming-soon",
  },
  {
    label: "uSDTevents",
    link: "/coming-soon",
  },
  {
    label: "getInvolved",
    link: "/coming-soon",
  },
  {
    label: "openResearch",
    link: "/coming-soon",
  },
  {
    label: "grants",
    link: "/coming-soon",
  },
  {
    label: "uSDTSupport",
    link: "/coming-soon",
  },
  {
    label: "languageResources",
    link: "/coming-soon",
  },
];
export const UserNavLink = [
  {
    label: "myProfile",
    link: "/coming-soon",
  },
  {
    label: "",
    link: "",
  },
  {
    label: "watchList",
    link: "/coming-soon",
  },
  {
    label: "txPrivateNote",
    link: "/coming-soon",
  },
  {
    label: "privateNameTag",
    link: "/coming-soon",
  },
  {
    label: "tokenIgnoreList",
    link: "/coming-soon",
  },
  {
    label: "",
    link: "",
  },
  {
    label: "apiKey",
    link: "/coming-soon",
  },
  {
    label: "verifyAddress",
    link: "/coming-soon",
  },
  {
    label: "customABI",
    link: "/coming-soon",
  },
  {
    label: "advancedFilter",
    link: "/coming-soon",
  },
  {
    label: "",
    link: "/logout",
  },
];
export const ADDRESS_NULL = "0x0000000000000000000000000000000000000000";

export const HardCap = 2000000;
export const SoftCap = 1000000;
export const StartDate = "18/12/2023";
export const EndDate = "18/12/2023";
export const DateRange = 90;
export const Rate = 0.00018;
export const ListRate = 0.0018;
export const Unlock = "100%";
export const TotalSupply = "N/A";
export const MAX_SIZE_IMAGE = 1024 * 1024 * 10;
export const InitialSupply = convertNumberToFormattedString(
  String(Rate * HardCap)
);

export const PoolDetailsSectionData = [
  {
    label: "hardCap",
    value: convertNumberToFormattedString(String(HardCap)),
  },
  {
    label: "softCap",
    value: convertNumberToFormattedString(String(SoftCap)),
  },
  {
    label: "startDay",
    value: DateTime.fromFormat(StartDate, "dd/MM/yyyy").toFormat(
      "LLL dd, yyyy"
    ),
  },
  {
    label: "endDay",
    value: DateTime.fromFormat(StartDate, "dd/MM/yyyy")
      .plus({ days: DateRange })
      .toFormat("LLL dd, yyyy"),
  },
  {
    label: "rate",
    value: `1 VNDT = $${Rate}`,
  },
  {
    label: "listRate",
    value: `1 VNDT = $${ListRate}`,
  },
  {
    label: "unlock",
    value: Unlock,
  },
];

export const TokenSectionData = [
  {
    label: "token",
    value: "Vina Token",
  },
  {
    label: "ticker",
    value: "$USDT",
  },
  {
    label: "totalSupply",
    value: TotalSupply,
  },
  {
    label: "initialSupply",
    value: InitialSupply,
  },
  {
    label: "tokenForSale",
    value: "",
  },
  {
    label: "listing",
    value: "",
  },
  {
    label: "address",
    value: vinachainAddress,
    isCopyable: true,
    short: true,
  },
];

export const TokenOptions: ITokenOption[] = [
  {
    name: TOKENS.USDT.name,
    value: EToken.USDT,
    image: `${getStaticURL()}/assets/images/liquidity/${TOKENS.USDT.image}`,
    abi: abiUsdtToken,
    address: "",
  },
];

export const optionFilterScan = [
  {
    label: "All Filters",
    value: "all",
  },
  {
    label: "Address",
    value: "address",
  },
  {
    label: "Tokens",
    value: "tokens",
  },
  {
    label: "Name tags",
    value: "name-tags",
  },
  {
    label: "Labels",
    value: "labels",
  },
  {
    label: "Websites",
    value: "websites",
  },
];

export const STAFF_INFO_DATA = [
  {
    avatar: "staff-1.jpg",
    name: "Matthew Tan",
    position: "CEO/Founder & Dev",
    desc: "Stay focused and keep pushing",
  },
  {
    avatar: "staff-1.jpg",
    name: "Matthew Tan",
    position: "CEO/Founder & Dev",
    desc: "Stay focused and keep pushing",
  },
  {
    avatar: "staff-1.jpg",
    name: "Matthew Tan",
    position: "CEO/Founder & Dev",
    desc: "Stay focused and keep pushing",
  },
  {
    avatar: "staff-1.jpg",
    name: "Matthew Tan",
    position: "CEO/Founder & Dev",
    desc: "Stay focused and keep pushing",
  },
  {
    avatar: "staff-1.jpg",
    name: "Matthew Tan",
    position: "CEO/Founder & Dev",
    desc: "Stay focused and keep pushing",
  },
  {
    avatar: "staff-1.jpg",
    name: "Matthew Tan",
    position: "CEO/Founder & Dev",
    desc: "Stay focused and keep pushing",
  },
  {
    avatar: "staff-1.jpg",
    name: "Matthew Tan",
    position: "CEO/Founder & Dev",
    desc: "Stay focused and keep pushing",
  },
  {
    avatar: "staff-1.jpg",
    name: "Matthew Tan",
    position: "CEO/Founder & Dev",
    desc: "Stay focused and keep pushing",
  },
  {
    avatar: "staff-1.jpg",
    name: "Matthew Tan",
    position: "CEO/Founder & Dev",
    desc: "Stay focused and keep pushing",
  },
  {
    avatar: "staff-1.jpg",
    name: "Matthew Tan",
    position: "CEO/Founder & Dev",
    desc: "Stay focused and keep pushing",
  },
];

export const SUBJECT_DATA = [
  {
    label: "pleaseSelectYourMessageSubject",
    value: "0",
  },
  {
    label: "inquiries",
    value: "1",
  },
  {
    label: "generalInquiry",
    value: "1.a",
  },
  {
    label: "advertising",
    value: "1.b",
  },
  {
    label: "eaaS",
    value: "1.c",
  },
  {
    label: "submissions",
    value: "2",
  },
  {
    label: "updateTokenInfo",
    value: "2.a",
  },
  {
    label: "addNameTag",
    value: "2.b",
  },
  {
    label: "requestRemovalOfNameTag",
    value: "2.c",
  },
  {
    label: "suggestTransactionAction",
    value: "2.d",
  },
  {
    label: "updateProxyContractImplementationAddress",
    value: "2.e",
  },
  {
    label: "security",
    value: "3",
  },
  {
    label: "reportPhishingAddress",
    value: "3.a",
  },
  {
    label: "securityAudit",
    value: "3.b",
  },
  {
    label: "prioritySupport",
    value: "4",
  },
  {
    label: "apiSupport",
    value: "5",
  },
];

export const HELPFUL_LINKS_DATA = [
  {
    title: "aboutVinachain",
    data: [
      {
        label: "whatIsVinachain",
        link: "/",
      },
      {
        label: "vinachainForums",
        link: "/",
      },
      {
        label: "vinachainWiki",
        link: "/",
      },
      {
        label: "communityDocsByEthHub",
        link: "/",
      },
    ],
  },
  {
    title: "aboutVinascan",
    data: [
      {
        label: "whatIsVinascan",
        link: "/",
      },
      {
        label: "vinascanKnowledgeBase",
        link: "/",
      },
      {
        label: "vinachainDirectoryListings",
        link: "/",
      },
      {
        label: "vinascanPrioritySupport",
        link: "/",
      },
    ],
  },
  {
    title: "faqs",
    data: [
      {
        label: "whatIsAPendingTransaction",
        link: "/",
      },
      {
        label: "howToCancelVinachainPendingTransactions",
        link: "/",
      },
      {
        label: "howToTransferAndWithdrawFromVinascan",
        link: "/",
      },
      {
        label: "howToRefundATransaction",
        link: "/",
      },
      {
        label: "whatAreVinaeasonsForFailedTransactions",
        link: "/",
      },
      {
        label: "transactionDroppedReplaced",
        link: "/",
      },
      {
        label: "howDoIRecoverThem",
        link: "/",
      },
    ],
  },
];

export const MENU_TOKEN_DATA = [
  {
    label: "Token Approvals",
    contentRight: "Beta",
    line: true,
    link: "/coming-soon",
  },
  {
    label: "Validate Account Balance",
    line: false,
    link: "/coming-soon",
  },
  {
    label: "Check Previous Balance",
    line: true,
    link: "/coming-soon",
  },
  {
    label: "Update Name Tag or Label",
    line: false,
    link: "/coming-soon",
  },
  {
    label: "Remove Name Tag",
    line: false,
    link: "/coming-soon",
  },
  {
    label: "Report/Flag Address",
    line: true,
    link: "/coming-soon",
  },
];

export const TOKEN_HOLDINGS_DATA = [
  {
    title: "Adventure Go... (AGLD)",
    amount: "2,931.51",
    fee: "@1.1155",
    amountNest: "2,627.94943455 AGLD",
    link: "/coming-soon",
  },
  {
    title: "USDC (USDC)",
    amount: "471.60",
    fee: "@0.9997",
    amountNest: "471.721852 USDC",
    link: "/coming-soon",
  },
  {
    title: "ERC-20 TOKEN*",
    amount: "",
    fee: "[Suspicious]",
    amountNest: "1.4 Token",
    link: "/coming-soon",
  },
];

export const BLOCK_SCAN_DATA = [
  {
    label: "BscScan ($163)",
    link: "/coming-soon",
    line: true,
  },
  {
    label: "Blockscan (View All)",
    link: "/coming-soon",
    line: false,
  },
];

export const IDE_DATA = [
  {
    label: "Blockscan IDE",
    link: "/coming-soon",
    contentRight: "Beta",
  },
  {
    label: "Code Reader",
    link: "/coming-soon",
  },
  {
    label: "Remix IDE",
    link: "/coming-soon",
  },
];
export const OUTLINE_DATA = [
  {
    label: "- function _msgSender()",
    link: "/coming-soon",
  },
  {
    label: "- function _msgData()",
    link: "/coming-soon",
  },
  {
    label: "- function owner()",
    link: "/coming-soon",
  },
  {
    label: "- function renounceOwnership()",
    link: "/coming-soon",
  },
  {
    label: "- function transferOwnership(address ne ...",
    link: "/coming-soon",
  },
  {
    label: "- function _setOwner(address newOwner)",
    link: "/coming-soon",
  },
  {
    label: "- function owner()",
    link: "/coming-soon",
  },
];

export const MORE_OPTIONS_DATA = [
  {
    label: "Similar",
    link: "/coming-soon",
  },
  {
    label: "Sol2Uml",
    link: "/coming-soon",
  },
  {
    label: "Submit Audit",
    link: "/coming-soon",
  },
  {
    label: "Compare",
    link: "/coming-soon",
  },
];

export const QUESTIONS_DATA = [
  {
    path: [
      {
        d: "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48z",
        fill: "#246bee",
      },
      {
        d: "M0 112V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V112c0 15.1-7.1 29.3-19.2 38.4L275.2 313.6c-11.4 8.5-27 8.5-38.4 0L19.2 150.4C7.1 141.3 0 127.1 0 112z",
        fill: "#b8dcf8",
      },
    ],
    title: "Contact Us",
    content: "Our support team's ready for your questions, anytime.",
  },
  {
    path: [
      {
        d: "M205.1 73.3c-2.6-5.7-8.3-9.3-14.5-9.3s-11.9 3.6-14.5 9.3L123.4 187.4 9.3 240C3.6 242.6 0 248.3 0 254.6s3.6 11.9 9.3 14.5l114.1 52.7L176 435.8c2.6 5.7 8.3 9.3 14.5 9.3s11.9-3.6 14.5-9.3l52.7-114.1 114.1-52.7c5.7-2.6 9.3-8.3 9.3-14.5s-3.6-11.9-9.3-14.5L257.8 187.4 205.1 73.3z",
        fill: "#246bee",
      },
      {
        d: "M327.5 85.2L384 64 405.2 7.5C406.9 3 411.2 0 416 0s9.1 3 10.8 7.5L448 64l56.5 21.2c4.5 1.7 7.5 6 7.5 10.8s-3 9.1-7.5 10.8L448 128l-21.2 56.5c-1.7 4.5-6 7.5-10.8 7.5s-9.1-3-10.8-7.5L384 128l-56.5-21.2c-4.5-1.7-7.5-6-7.5-10.8s3-9.1 7.5-10.8zm0 320L384 384l21.2-56.5c1.7-4.5 6-7.5 10.8-7.5s9.1 3 10.8 7.5L448 384l56.5 21.2c4.5 1.7 7.5 6 7.5 10.8s-3 9.1-7.5 10.8L448 448l-21.2 56.5c-1.7 4.5-6 7.5-10.8 7.5s-9.1-3-10.8-7.5L384 448l-56.5-21.2c-4.5-1.7-7.5-6-7.5-10.8s3-9.1 7.5-10.8z",
        fill: "#b8dcf8",
      },
    ],
    title: "Priority Support",
    content: "A Paid Service for priority handling of your needs and queries.",
  },
  {
    path: [
      {
        d: "M473.4 121.4c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z",
        fill: "#246bee",
      },
      {
        d: "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6z",
        fill: "#b8dcf8",
      },
    ],
    title: "Developer Docs",
    content: "In-depth explanations on technical issues faced by developers.",
  },
];

export const TRANSFER_DATA = [
  {
    label: "Hex",
    value: "hex",
  },
  {
    label: "Number",
    value: "number",
  },
  {
    label: "Text",
    value: "text",
  },
  {
    label: "Address",
    value: "address",
  },
];

export const SETTING_CONTENT_DATA = [
  {
    title: "advancedMode",
    value: "mode",
    content: true,
    note: true,
    switch: true,
    toggle: false,
    options: [],
  },
  {
    title: "ignoreToken",
    value: "ignore-token",
    content: true,
    note: true,
    switch: true,
    toggle: false,
    options: [],
  },
  {
    title: "tolenTransfers",
    value: "token-transfers",
    content: true,
    note: true,
    switch: true,
    toggle: false,
    options: [],
  },
  {
    title: "highlights",
    value: "highlight",
    content: true,
    note: true,
    switch: true,
    toggle: false,
    options: [],
  },
  {
    title: "language",
    value: "language",
    content: true,
    note: false,
    switch: false,
    options: [
      { label: "English", value: "en" },
      { label: "CN", value: "cn" },
      { label: "KR", value: "kr" },
      { label: "RU", value: "ru" },
      { label: "JP", value: "jp" },
    ],
    toggle: false,
  },
  {
    title: "currency",
    value: "currency",
    content: true,
    note: false,
    switch: false,
    options: [
      { label: "United States Dollar", value: "USD" },
      { label: "China Yuan Renminbi", value: "CNY" },
      { label: "Korea Won", value: "Won" },
      { label: "Euro", value: "EURO" },
      { label: "Japan Yen", value: "JPY" },
      { label: "Viet Nam Dong", value: "VND" },
    ],
    toggle: false,
  },
  {
    title: "addressDisplay",
    value: "address-display",
    content: true,
    note: true,
    switch: false,
    options: [
      { label: "Middle (0x000000...000000)", value: "middle" },
      { label: "Back (0x00000000000000...)", value: "back" },
    ],
    toggle: false,
  },
  {
    title: "domainName",
    value: "domain-name",
    content: false,
    note: true,
    switch: false,
    options: [
      { label: "Enthereum Name Service (ENS)", value: "ens" },
      { label: "Unstoppable Domains (UD)", value: "ud" },
    ],
    toggle: false,
  },
  {
    title: "time",
    value: "time",
    content: true,
    note: false,
    options: [
      { label: "UTC", value: "utc" },
      { label: "Local (UTC+7)", value: "utc+7" },
    ],
    toggle: false,
  },
];

export const BLOCK_ANALYTIC_DATA = [
  { title: "networkUtilization", value: "50.7%" },
  { title: "lastSafeBlock", value: "19672667" },
  { title: "producedByNemBuilders", value: "88%" },
  { title: "burntFees", value: "4,266,768.57 VPC" },
];

export const VERIFIED_CONTRACT_ANALYTIC_DATA = [
  { title: "contractsDeployedTotal", value: "65,634,620" },
  { title: "contractsDeployed", value: "10,418" },
  { title: "contractsVerifiedTotal", value: "636,296" },
  { title: "contractsVerified", value: "337" },
];

export const FILTER_VERIFIED_CONTRACT_DATA = [
  {
    label: "Latest 500 Verified Contracts",
    line: true,
    link: "/coming-soon",
  },
  {
    label: "Solidity Compiler",
    line: false,
    link: "/coming-soon",
  },
  {
    label: "Vyper Compiler",
    line: true,
    link: "/coming-soon",
  },
  {
    label: "Open Source License",
    line: false,
    link: "/coming-soon",
  },
  {
    label: "Contract Security Audit",
    line: false,
    link: "/coming-soon",
  },
];

export const FILTER_TIME_DATA = ["1h", "6h", "12h", "1d", "7d", "30d"];
export const FILTER_TOP_MINTS_TIME_DATA = [
  "1m",
  "3m",
  "5m",
  "15m",
  "20m",
  "1h",
];

export const MARKETPLACES_DATA = [
  {
    label: "All Marketplaces",
    value: "all",
  },
  {
    label: "OpenSea",
    value: "openSea",
  },
  {
    label: "LooksRare",
    value: "looksRare",
  },
  {
    label: "Ox Protocol",
    value: "protocol",
  },
  {
    label: "Blur",
    value: "blur",
  },
  {
    label: "Rarible",
    value: "rarible",
  },
  {
    label: "Seaport",
    value: "seaport",
  },
  {
    label: "SuperRare",
    value: "superRare",
  },
  {
    label: "X2Y2",
    value: "x2y2",
  },
];

export const SOCIAL_LIST = {
  TELEGRAM: "https://t.me/viplus_vinachain",
  TWITTER: "https://twitter.com/ViplusToken",
  FACEBOOK: "https://www.facebook.com/viplus.vinachain",
};

export const VPC_PRC_URL = "https://chain.vinachain.io";
export const VPC_CHAIN_ID = 32382;

export enum TableType {
  LATEST_BLOCKS = "latest_blocks",
  LATEST_TRANSACTIONS = "latest_transactions",
  HOT_CONTRACTS = "host_contracts",
  TOP_GUZZLERS = "top_guzzlers",
}

export const VPC_EXCHANGE_RATE_USD = 0.008;

export const ERR_CODE = {
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR".toLowerCase(),
  NOT_FOUND: "NOT_FOUND".toLowerCase(),
  INVALID_USERNAME_FORMAT: "INVALID_USERNAME_FORMAT".toLowerCase(),
  INVALID_EMAIL_FORMAT: "INVALID_EMAIL_FORMAT".toLowerCase(),
  INVALID_TX_HASH_FORMAT: "INVALID_TX_HASH_FORMAT".toLowerCase(),
  INVALID_PASSWORD_FORMAT: "INVALID_PASSWORD_FORMAT".toLowerCase(),
  EMAIL_ALREADY_EXISTS: "EMAIL_ALREADY_EXISTS".toLowerCase(),
  WALLET_ADDRESS_ALREADY_TAKEN: "WALLET_ADDRESS_ALREADY_TAKEN".toLowerCase(),
  TRANSACTION_HASH_ALREADY_EXISTS:
    "TRANSACTION_HASH_ALREADY_EXISTS".toLowerCase(),
  EMAIL_AND_LOGGED_IN_USER_EMAIL_DO_NOT_MATCH:
    "EMAIL_AND_LOGGED_IN_USER_EMAIL_DO_NOT_MATCH".toLowerCase(),
  WALLET_ADDRESS_AND_TRANSACTION_FROM_ADDRESS_DO_NOT_MATCH:
    "WALLET_ADDRESS_AND_TRANSACTION_FROM_ADDRESS_DO_NOT_MATCH".toLowerCase(),
  TRANSACTION_NOT_SENT_TO_CORRECT_RECIPIENT_ADDRESS:
    "TRANSACTION_NOT_SENT_TO_CORRECT_RECIPIENT_ADDRESS".toLowerCase(),
  TRANSACTION_NOT_SENT_WITH_VPL_TOKEN:
    "TRANSACTION_NOT_SENT_WITH_VPL_TOKEN".toLowerCase(),
  TRANSACTION_NOT_SENT_WITH_USDT_TOKEN:
    "TRANSACTION_NOT_SENT_WITH_USDT_TOKEN".toLowerCase(),
  SWAP_TOKEN_REQUEST_IS_PENDING: "SWAP_TOKEN_REQUEST_IS_PENDING".toLowerCase(),
  WALLET_ADDRESS_ALREADY_PURCHASED_SWAP_PACKAGE:
    "WALLET_ADDRESS_ALREADY_PURCHASED_SWAP_PACKAGE".toLowerCase(),
  SWAP_PACKAGE_NOT_FOUND: "SWAP_PACKAGE_NOT_FOUND".toLowerCase(),
  NOT_TRANSFERRING_ENOUGH_MONEY: "NOT_TRANSFERRING_ENOUGH_MONEY".toLowerCase(),
  DO_NOT_BOUGHT_SWAP_PACKAGE_YET:
    "DO_NOT_BOUGHT_SWAP_PACKAGE_YET".toLowerCase(),
  NOT_ENOUGH_BALANCE_TO_SWAP: "NOT_ENOUGH_BALANCE_TO_SWAP".toLowerCase(),
  INVALID_SIGNATURE: "INVALID_SIGNATURE".toLowerCase(),
  INVALID_TRANSACTION_HASH: "INVALID_TRANSACTION_HASH".toLowerCase(),
  PASSWORD_INCORRECT: "PASSWORD_INCORRECT".toLowerCase(),
  USERNAME_ALREADY_EXISTS: "USERNAME_ALREADY_EXISTS".toLowerCase(),
  UNAUTHORIZED: "UNAUTHORIZED".toLowerCase(),
  USER_NOT_VERIFIED: "USER_NOT_VERIFIED".toLowerCase(),
  INVALID_TOKEN: "INVALID_TOKEN".toLowerCase(),
  USER_ALREADY_VERIFIED: "USER_ALREADY_VERIFIED".toLowerCase(),
  INVALID_CAPTCHA_TOKEN: "INVALID_CAPTCHA_TOKEN".toLowerCase(),
  OLD_PASSWORD_INCORRECT: "OLD_PASSWORD_INCORRECT".toLowerCase(),
  EXCEED_MAX_AMOUNT: "EXCEED_MAX_AMOUNT".toLowerCase(),
  NOT_OWNER_OF_WALLET_ADDRESS: "NOT_OWNER_OF_WALLET_ADDRESS".toLowerCase(),
  WALLET_NOT_LINKED_YET: "WALLET_NOT_LINKED_YET".toLowerCase(),
  TRANSACTION_HASH_ALREADY_EXISTS_OR_USER_ALREADY_BOUGHT_SWAP_PACKAGE:
    "TRANSACTION_HASH_ALREADY_EXISTS_OR_USER_ALREADY_BOUGHT_SWAP_PACKAGE".toLowerCase(),
  WALLET_ADDRESS_AND_LOGGED_IN_USER_WALLET_ADDRESS_DO_NOT_MATCH:
    "WALLET_ADDRESS_AND_LOGGED_IN_USER_WALLET_ADDRESS_DO_NOT_MATCH".toLowerCase(),
  TRANSACTION_SENT_NOT_CORRECT_CONTRACT_ADDRESS:
    "TRANSACTION_SENT_NOT_CORRECT_CONTRACT_ADDRESS".toLowerCase(),
  USER_NOT_FOUND: "USER_NOT_FOUND".toLowerCase(),
  CIRCLE_REFERRAL_NOT_ALLOWED: "CIRCLE_REFERRAL_NOT_ALLOWED".toLowerCase(),
  INVALID_REFERRAL_CODE: "INVALID_REFERRAL_CODE".toLowerCase(),
  TRANSACTION_HASH_OR_AMOUNT_IS_REQUIRED:
    "TRANSACTION_HASH_OR_AMOUNT_IS_REQUIRED".toLowerCase(),
  MUST_NOT_HAVE_BOTH_TRANSACTION_HASH_AND_AMOUNT:
    "MUST_NOT_HAVE_BOTH_TRANSACTION_HASH_AND_AMOUNT".toLowerCase(),
  TRANSACTION_NOT_SENT_TO_CORRECT_STAKE_USDT_RECIPIENT_ADDRESS:
    "TRANSACTION_NOT_SENT_TO_CORRECT_STAKE_USDT_RECIPIENT_ADDRESS".toLowerCase(),
  USER_ALREADY_LINKED_WALLET_ADDRESS:
    "USER_ALREADY_LINKED_WALLET_ADDRESS".toLowerCase(),
  TRANSACTION_ALREADY_USED_TO_STAKE:
    "TRANSACTION_ALREADY_USED_TO_STAKE".toLowerCase(),
  STAKE_DO_NOT_SUPPORT_THIS_CURRENCY:
    "STAKE_DO_NOT_SUPPORT_THIS_CURRENCY".toLowerCase(),
  INVALID_FUNCTION_NAME: "INVALID_FUNCTION_NAME".toLowerCase(),
  STAKE_NOT_ENOUGH_MINIUM_REQUIRED_AMOUNT:
    "STAKE_NOT_ENOUGH_MINIUM_REQUIRED_AMOUNT".toLowerCase(),
  STAKE_PERIOD_USDT_IS_ONE_YEAR: "STAKE_PERIOD_USDT_IS_ONE_YEAR".toLowerCase(),
};

export const enum PLAN_SWAP {
  BASIC = 30,
  PREMIUM = 50,
}

export const enum CODE_CONTRACT_BUY_SWAP {
  BASIC = 1,
  PREMIUM = 2,
}

export const VINACHAIN_NETWORK = {
  name: "Vinachain",
};
export const OptionsNetwork = [
  {
    label: "Vinachain",
    value: "",
  },
];

export const EXCESS_AMOUNT_ERROR_MSG = "excess swap";
export enum STAKING_CURRENCY {
  VPC = "VPC",
  USDT = "USDT",
}
export const LINK_GET_USDT = "https://pancakeswap.finance/swap?outputCurrency=0x55d398326f99059fF775485246999027B3197955"