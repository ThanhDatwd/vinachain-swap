import { FileLineIcon } from "@/assets/icons/FileLineIcon";
import { MoreInfo } from "./MoreInfo";
import Link from "next/link";
import { ContractInfo } from "./ContractInfo";

const ReadContractInfo = [
  {
    title: "1. adventureGoldPerTokenId",
    children: (
      <div className="text-xs text-dark900 dark:text-[#FAFAFA]">
        <span className="text-[#3498db]">10000000000000000000000</span>&nbsp;
        uint256
      </div>
    ),
  },
  {
    title: "2. allowance",
    children: (
      <div className="flex flex-col gap-[6.5px] text-xs text-dark900 dark:text-[#FAFAFA]">
        <div className="flex flex-col gap-[13px]">
          <span>owner (address)</span>
          <input
            placeholder="owner (address)"
            className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
          />
        </div>
        <div className="flex flex-col gap-[13px]">
          <span>spender (address)</span>
          <input
            placeholder="spender (address)"
            className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
          />
        </div>
        <button className="bg-[#f8f9fa] dark:bg-gray700 !border border-[#e9ecef] dark:!border-gray600 rounded-lg py-1 px-2 w-fit">
          Query
        </button>
        <span className="text-[#6c757d] dark:text-[#bbb] italic">uint256</span>
      </div>
    ),
  },
  {
    title: "4. decimals",
    children: (
      <div className="flex flex-col gap-[13px] text-[10px] text-[#6c757d] dark:text-[#F5F5F5] italic">
        {
          "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
        }
        <span className="text-xs text-dark900 dark:text-[#FAFAFA]">
          18<span className="text-[#6c757d] dark:text-[#bbb]">uint256</span>
        </span>
      </div>
    ),
  },
  {
    title: "5. lootContract",
    children: (
      <div className="text-[12px] text-[#6c757d] dark:text-[#bbb] italic">
        <Link
          href={"/coming-soon"}
          className="text-[#3498db] hover:text-[#1d6fa5] hover:underline"
        >
          0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7
        </Link>
        &nbsp; address
      </div>
    ),
  },
  {
    title: "6. lootContractAddress",
    children: (
      <div className="text-[12px] text-[#6c757d] dark:text-[#bbb] italic">
        <Link
          href={"/coming-soon"}
          className="text-[#3498db] hover:text-[#1d6fa5] hover:underline"
        >
          0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7
        </Link>
        &nbsp; address
      </div>
    ),
  },
  {
    title: "7. name",
    children: (
      <div className="flex flex-col gap-[13px] text-[10px] text-dark900 dark:text-[#FAFAFA] italic">
        Returns the name of the token.
        <span className="text-[12px]">
          Adventure Gold&nbsp;
          <span className="text-[12px] text-[#6c757d] dark:text-[#bbb]">string</span>
        </span>
      </div>
    ),
  },
  {
    title: "8. owner",
    children: (
      <div className="flex flex-col gap-[13px] text-[10px] text-dark900 dark:text-[#FAFAFA] italic">
        Returns the address of the current owner.
        <div className="text-[12px] text-[#6c757d] dark:text-[#bbb] italic">
          <Link
            href={"/coming-soon"}
            className="text-[#3498db] hover:text-[#1d6fa5] hover:underline"
          >
            0xcD814C83198C15A542F9A13FAf84D518d1744ED1
          </Link>
          &nbsp; address
        </div>
      </div>
    ),
  },
  {
    title: "9. season",
    children: (
      <div className="text-[12px] text-dark900 dark:text-[#FAFAFA]">
        0&nbsp;
        <span className="text-[#6c757d] italic">uint256</span>
      </div>
    ),
  },
  {
    title: "10. seasonClaimedByTokenId",
    children: (
      <div className="flex flex-col gap-[6.5px] text-xs text-dark900 dark:text-[#FAFAFA]">
        <div className="flex flex-col gap-[13px]">
          <span>{"<input> (uint256)"}</span>
          <input
            placeholder="<input> (uint256)"
            className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
          />
        </div>
        <div className="flex flex-col gap-[13px]">
          <span>{"<input> (uint256)"}</span>
          <input
            placeholder="<input> (uint256)"
            className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
          />
        </div>
        <button className="bg-[#f8f9fa] dark:bg-gray700 !border border-[#e9ecef] dark:!border-gray600 rounded-lg py-1 px-2 w-fit">
          Query
        </button>
        <span className="text-[#6c757d] italic">bool</span>
      </div>
    ),
  },
  {
    title: "11. symbol",
    children: (
      <div className="flex flex-col gap-[13px] text-[10px] text-dark900 dark:text-[#FAFAFA] italic">
        Returns the symbol of the token, usually a shorter version of the name.
        <span className="text-[12px]">
          AGLD&nbsp;
          <span className="text-[12px] text-[#6c757d]">string</span>
        </span>
      </div>
    ),
  },
  {
    title: "12. tokenIdEnd",
    children: (
        <div className="flex flex-col gap-[13px] text-[12px] text-black font-bold">
        {`function ownerClaim(uint256 tokenId) public nonReentrant onlyOwner { require(tokenId > 7777 && tokenId < 8001, "Token ID invalid"); _safeMint(owner(), tokenId); }`}
        <span className="text-[12px] text-dark900 dark:text-[#FAFAFA] font-normal">
          8000&nbsp;
          <span className="text-[12px] text-[#6c757d]">uint256</span>
        </span>
      </div>
    ),
  },
  {
    title: "13. tokenIdStart",
    children: (
        <div className="flex flex-col gap-[13px] text-[12px] text-black font-bold">
        {`function claim(uint256 tokenId) public nonReentrant { require(tokenId > 0 && tokenId < 7778, "Token ID invalid"); _safeMint(_msgSender(), tokenId); }`}
        <span className="text-[12px] text-dark900 dark:text-[#FAFAFA] font-normal">
          1&nbsp;
          <span className="text-[12px] text-[#6c757d]">uint256</span>
        </span>
      </div>
    ),
  },
  {
    title: "14. totalSupply",
    children: (
        <div className="flex flex-col gap-[13px] text-[10px] text-dark900 dark:text-[#FAFAFA] italic">
        Returns the address of the current owner.
        <div className="text-[12px] text-[#6c757d] italic">
          <Link
            href={"/coming-soon"}
            className="text-[#3498db] hover:text-[#1d6fa5] hover:underline not-italic"
          >
            77310001000000000000000000
          </Link>
          &nbsp;uint256
        </div>
      </div>
    ),
  },
];

export const ReadContact = () => {
  return (
    <div className="flex flex-col gap-[13px]">
      <MoreInfo />
      <div className="flex gap-1 items-center border border-[#e9ecef] px-2 py-1 rounded-md text-xs text-dark900 dark:text-[#FAFAFA] w-fit">
        <div className="w-3 h-3 rounded-full bg-[#dc3545]" />
        Connect to Web3
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs">
          <FileLineIcon />
          Read Contract Information
        </div>
        <div className="flex gap-1 items-center">
          <Link href="/coming-soon" className="text-xs text-[#3498db]">
            [Expand all]
          </Link>
          <Link href="/coming-soon" className="text-xs text-[#3498db]">
            [Reset]
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {ReadContractInfo.map((item, index) => (
          <ContractInfo key={index} title={item.title}>
            {item.children}
          </ContractInfo>
        ))}
      </div>
    </div>
  );
};
