import { DateTime } from "luxon";
import abiUsdtToken from "@/web3/abi/usdt.json";
import { convertNumberToFormattedString } from "./converter";
import { EToken, ITokenOption, TOKENS } from "@/web3/token";
import { CopyIcon } from "@/assets/icons/CopyIcon";

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
    label: "VietNam",
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
};

export const enum PLAN_SWAP {
  BASIC = 30,
  PREMIUM = 50,
}

export const enum CODE_CONTRACT_BUY_SWAP {
  BASIC = 1,
  PREMIUM = 2,
}
