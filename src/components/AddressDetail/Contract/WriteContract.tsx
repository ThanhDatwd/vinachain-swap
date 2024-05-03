import { FileLineIcon } from "@/assets/icons/FileLineIcon";
import { MoreInfo } from "./MoreInfo";
import Link from "next/link";
import { ContractInfo } from "./ContractInfo";
import PlusIcon from "@/assets/icons/PlusIcon";
import { THEME } from "@/utils/constants";
import { useTheme } from "@/hooks/useTheme";

export const WriteContract = () => {
  const { theme } = useTheme();

  const WriteContractInfo = [
    {
      title: "1. approve (0x095ea7b3)",
      children: (
        <div className="flex flex-col gap-[6.5px] text-xs text-dark900 dark:text-[#F5F5F5]">
          <span className="text-[10px] italic text-[#6c757d] dark:text-[#bbb]">
            {
              "See {IERC20-approve}. Requirements: - `spender` cannot be the zero address."
            }
          </span>
          <div className="flex flex-col gap-[13px]">
            <span>spender (address)</span>
            <input
              placeholder="spender (address)"
              className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
            />
          </div>
          <div className="flex flex-col gap-[13px]">
            <div className="flex items-end gap-2">
              <span>amount (uint256)</span>
              <div className="bg-[#e9ecef] dark:bg-gray700 dark:border dark:border-gray600 py-[5px] px-[5px] rounded-md">
                <PlusIcon width={14} height={14} color={theme === THEME.DARK ? "#FAFAFA" : "#081D35"} />
              </div>
            </div>
            <input
              placeholder="amount (uint256)"
              className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
            />
          </div>
          <button className="bg-[#0784c3] text-white opacity-[0.65] mt-1 border border-[#e9ecef] rounded-lg py-1 px-2 w-fit">
            Write
          </button>
        </div>
      ),
    },
    {
      title: "2. claimAllForOwner (0xcbf0b276)",
      children: (
        <div className="flex flex-col gap-[13px] text-xs text-dark900 dark:text-[#F5F5F5] font-bold">
          Claim Adventure Gold for all tokens owned by the senderThis function
          will run out of gas if you have too much loot! If this is a concern,
          you should use claimRangeForOwner and claim Adventure Gold in batches.
          <button className="bg-[#0784c3] text-white opacity-[0.65] mt-1 border border-[#e9ecef] rounded-lg py-1 px-2 w-fit">
            Write
          </button>
        </div>
      ),
    },
    {
      title: "3. claimById (0xbecf7741)",
      children: (
        <div className="flex flex-col gap-[6.5px] text-xs text-dark900 dark:text-[#F5F5F5]">
          <span className="text-black font-bold">
            Claim Adventure Gold for a given Loot ID
          </span>
          <div className="flex flex-col gap-[13px]">
            <div className="flex items-end gap-2">
              <span>tokenId (uint256)</span>
              <div className="bg-[#e9ecef] dark:bg-gray700 dark:border dark:border-gray600 py-[5px] px-[5px] rounded-md">
                <PlusIcon width={14} height={14} color={theme === THEME.DARK ? "#FAFAFA" : "#081D35"} />
              </div>
            </div>
            <input
              placeholder="tokenId (uint256)"
              className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
            />
            <span className="text-[#6c757d] dark:text-[#bbb] text-[10px]">
              The tokenId of the Loot NFT
            </span>
          </div>
          <button className="bg-[#0784c3] text-white opacity-[0.65] mt-1 border border-[#e9ecef] rounded-lg py-1 px-2 w-fit">
            Write
          </button>
        </div>
      ),
    },
    {
      title: "4. claimRangeForOwner (0x878e7ea5)",
      children: (
        <div className="flex flex-col gap-[6.5px] text-xs text-dark900 dark:text-[#F5F5F5]">
          <span className="text-black font-bold">
            Claim Adventure Gold for all tokens owned by the sender within a
            given rangeThis function is useful if you own too much Loot to claim
            all at once or if you want to leave some Loot unclaimed. If you
            leave Loot unclaimed, however, you cannot claim it once the next
            season starts.
          </span>
          <div className="flex flex-col gap-[13px]">
            <div className="flex items-end gap-2">
              <span>ownerIndexStart (uint256)</span>
              <div className="bg-[#e9ecef] dark:bg-gray700 dark:border dark:border-gray600 py-[5px] px-[5px] rounded-md">
                <PlusIcon width={14} height={14} color={theme === THEME.DARK ? "#FAFAFA" : "#081D35"} />
              </div>
            </div>
            <input
              placeholder="ownerIndexStart (uint256)"
              className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
            />
          </div>
          <div className="flex flex-col gap-[13px]">
            <div className="flex items-end gap-2">
              <span>ownerIndexEnd (uint256)</span>
              <div className="bg-[#e9ecef] dark:bg-gray700 dark:border dark:border-gray600 py-[5px] px-[5px] rounded-md">
                <PlusIcon width={14} height={14} color={theme === THEME.DARK ? "#FAFAFA" : "#081D35"} />
              </div>
            </div>
            <input
              placeholder="ownerIndexEnd (uint256)"
              className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
            />
          </div>
          <button className="bg-[#0784c3] text-white opacity-[0.65] mt-1 border border-[#e9ecef] rounded-lg py-1 px-2 w-fit">
            Write
          </button>
        </div>
      ),
    },
    {
      title: "5. daoMint (0x62759f6c)",
      children: (
        <div className="flex flex-col gap-[6.5px] text-xs text-dark900 dark:text-[#F5F5F5]">
          <span className="text-black font-bold">
            Allows the DAO to mint new tokens for use within the Loot Ecosystem
          </span>
          <div className="flex flex-col gap-[13px]">
            <div className="flex items-end gap-2">
              <span>amountDisplayValue (uint256)</span>
              <div className="bg-[#e9ecef] dark:bg-gray700 dark:border dark:border-gray600 py-[5px] px-[5px] rounded-md">
                <PlusIcon width={14} height={14} color={theme === THEME.DARK ? "#FAFAFA" : "#081D35"} />
              </div>
            </div>
            <input
              placeholder="amountDisplayValue (uint256)"
              className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
            />
            <span className="text-[#6c757d] dark:text-[#bbb] text-[10px]">
              {`The amount of Loot to mint. This should be input as the display value, not in raw decimals. If you want to mint 100 Loot, you should enter "100" rather than the value of 100 * 10^18.`}
            </span>
          </div>
          <button className="bg-[#0784c3] text-white opacity-[0.65] mt-1 border border-[#e9ecef] rounded-lg py-1 px-2 w-fit">
            Write
          </button>
        </div>
      ),
    },
    {
      title: "6. daoSetAdventureGoldPerTokenId (0x32565c49)",
      children: (
        <div className="flex flex-col gap-[6.5px] text-xs text-dark900 dark:text-[#F5F5F5]">
          <span className="text-black font-bold">
            Allows the DAO to set the amount of Adventure Gold that is claimed
            per token ID
          </span>
          <div className="flex flex-col gap-[13px]">
            <div className="flex items-end gap-2">
              <span>adventureGoldDisplayValue (uint256)</span>
              <div className="bg-[#e9ecef] dark:bg-gray700 dark:border dark:border-gray600 py-[5px] px-[5px] rounded-md">
                <PlusIcon width={14} height={14} color={theme === THEME.DARK ? "#FAFAFA" : "#081D35"} />
              </div>
            </div>
            <input
              placeholder="adventureGoldDisplayValue (uint256)"
              className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
            />
            <span className="text-[#6c757d] dark:text-[#bbb] text-[10px]">
              {`The amount of Loot a user can claim. This should be input as the display value, not in raw decimals. If you want to mint 100 Loot, you should enter "100" rather than the value of 100 * 10^18.`}
            </span>
          </div>
          <button className="bg-[#0784c3] text-white opacity-[0.65] mt-1 border border-[#e9ecef] rounded-lg py-1 px-2 w-fit">
            Write
          </button>
        </div>
      ),
    },
    {
      title: "7. daoSetLootContractAddress (0x32c88204)",
      children: (
        <div className="flex flex-col gap-[6.5px] text-xs text-dark900 dark:text-[#F5F5F5]">
          <span className="text-black font-bold">
            Allows the DAO to set a new contract address for Loot. This is
            relevant in the event that Loot migrates to a new contract.
          </span>
          <div className="flex flex-col gap-[13px]">
            <span>lootContractAddress_ (address)</span>
            <input
              placeholder="lootContractAddress_ (address)"
              className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
            />
            <span className="text-[#6c757d] dark:text-[#bbb] text-[10px]">
              {`The new contract address for Loot`}
            </span>
          </div>
          <button className="bg-[#0784c3] text-white opacity-[0.65] mt-1 border border-[#e9ecef] rounded-lg py-1 px-2 w-fit">
            Write
          </button>
        </div>
      ),
    },
    {
      title: "8. daoSetSeason (0x42e47315)",
      children: (
        <div className="flex flex-col gap-[6.5px] text-xs text-dark900 dark:text-[#F5F5F5]">
          <span className="text-black font-bold">
            Allows the DAO to set a season for new Adventure Gold claims
          </span>
          <div className="flex flex-col gap-[13px]">
            <div className="flex items-end gap-2">
              <span>season_ (uint256)</span>
              <div className="bg-[#e9ecef] dark:bg-gray700 dark:border dark:border-gray600 py-[5px] px-[5px] rounded-md">
                <PlusIcon width={14} height={14} color={theme === THEME.DARK ? "#FAFAFA" : "#081D35"} />
              </div>
            </div>
            <input
              placeholder="season_ (uint256)"
              className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
            />
            <span className="text-[#6c757d] dark:text-[#bbb] text-[10px]">
              {`The season to use for claiming Loot`}
            </span>
          </div>
          <button className="bg-[#0784c3] text-white opacity-[0.65] mt-1 border border-[#e9ecef] rounded-lg py-1 px-2 w-fit">
            Write
          </button>
        </div>
      ),
    },
    {
      title: "9. daoSetSeasonAndAdventureGoldPerTokenID (0x18f510eb)",
      children: (
        <div className="flex flex-col gap-[6.5px] text-xs text-dark900 dark:text-[#F5F5F5]">
          <span className="flex flex-col text-black font-bold">
            Allows the DAO to set the season and Adventure Gold per token ID in
            one transaction. This ensures that there is not a gap where a user
            can claim more Adventure Gold than others
            <span className="font-normal text-[10px] text-[#6c757d] dark:text-[#bbb] italic">
              {`We would save a tiny amount of gas by modifying the season and
              adventureGold variables directly. It is better practice for
              security, however, to avoid repeating code. This function is so
              rarely used that it's not worth moving these values into their own
              internal function to skip the gas used on the modifier check.`}
            </span>
          </span>
          <div className="flex flex-col gap-[13px]">
            <div className="flex items-end gap-2">
              <span>season_ (uint256)</span>
              <div className="bg-[#e9ecef] dark:bg-gray700 dark:border dark:border-gray600 py-[5px] px-[5px] rounded-md">
                <PlusIcon width={14} height={14} color={theme === THEME.DARK ? "#FAFAFA" : "#081D35"} />
              </div>
            </div>
            <input
              placeholder="season_ (uint256)"
              className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
            />
            <span className="text-[#6c757d] dark:text-[#bbb] text-[10px]">
              {`The season to use for claiming loot`}
            </span>
            <div className="flex items-end gap-2">
              <span>adventureGoldDisplayValue (uint256)</span>
              <div className="bg-[#e9ecef] dark:bg-gray700 dark:border dark:border-gray600 py-[5px] px-[5px] rounded-md">
                <PlusIcon width={14} height={14} color={theme === THEME.DARK ? "#FAFAFA" : "#081D35"} />
              </div>
            </div>
            <input
              placeholder="adventureGoldDisplayValue (uint256)"
              className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
            />
            <span className="text-[#6c757d] dark:text-[#bbb] text-[10px]">
              {`The amount of Loot a user can claim. This should be input as the display value, not in raw decimals. If you want to mint 100 Loot, you should enter "100" rather than the value of 100 * 10^18.`}
            </span>
            <button className="bg-[#0784c3] text-white opacity-[0.65] mt-1 border border-[#e9ecef] rounded-lg py-1 px-2 w-fit">
              Write
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "10. daoSetTokenIdRange (0x4da7808a)",
      children: (
        <div className="flex flex-col gap-[6.5px] text-xs text-dark900 dark:text-[#F5F5F5]">
          <span className="flex flex-col text-black font-bold">
            Allows the DAO to set the token IDs that are eligible to claim Loot
            <span className="font-normal text-[10px] text-[#6c757d] dark:text-[#bbb] italic">
              {`This is relevant in case a future Loot contract has a different total supply of Loot`}
            </span>
          </span>
          <div className="flex flex-col gap-[13px]">
            <div className="flex items-end gap-2">
              <span>tokenIdStart_ (uint256)</span>
              <div className="bg-[#e9ecef] dark:bg-gray700 dark:border dark:border-gray600 py-[5px] px-[5px] rounded-md">
                <PlusIcon width={14} height={14} color={theme === THEME.DARK ? "#FAFAFA" : "#081D35"} />
              </div>
            </div>
            <input
              placeholder="tokenIdStart_ (uint256)"
              className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
            />
            <span className="text-[#6c757d] dark:text-[#bbb] text-[10px]">
              {`The start of the eligible token range`}
            </span>
            <div className="flex items-end gap-2">
              <span>tokenIdEnd_ (uint256)</span>
              <div className="bg-[#e9ecef] dark:bg-gray700 dark:border dark:border-gray600 py-[5px] px-[5px] rounded-md">
                <PlusIcon width={14} height={14} color={theme === THEME.DARK ? "#FAFAFA" : "#081D35"} />
              </div>
            </div>
            <input
              placeholder="tokenIdEnd_ (uint256)"
              className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
            />
            <span className="text-[#6c757d] dark:text-[#bbb] text-[10px]">
              {`The end of the eligible token range`}
            </span>
          </div>
          <button className="bg-[#0784c3] text-white opacity-[0.65] mt-1 border border-[#e9ecef] rounded-lg py-1 px-2 w-fit">
            Write
          </button>
        </div>
      ),
    },
    {
      title: "11. decreaseAllowance (0xa457c2d7)",
      children: (
        <div className="flex flex-col gap-[6.5px] text-xs text-dark900 dark:text-[#F5F5F5]">
          <span className="font-normal text-[10px] text-[#6c757d] dark:text-[#bbb] italic">
            {
              "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
            }
          </span>
          <div className="flex flex-col gap-[13px]">
            <span>spender (address)</span>
            <input
              placeholder="spender (address)"
              className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
            />
            <div className="flex items-end gap-2">
              <span>subtractedValue (uint256)</span>
              <div className="bg-[#e9ecef] dark:bg-gray700 dark:border dark:border-gray600 py-[5px] px-[5px] rounded-md">
                <PlusIcon width={14} height={14} color={theme === THEME.DARK ? "#FAFAFA" : "#081D35"} />
              </div>
            </div>
            <input
              placeholder="subtractedValue (uint256)"
              className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
            />
          </div>
          <button className="bg-[#0784c3] text-white opacity-[0.65] mt-1 border border-[#e9ecef] rounded-lg py-1 px-2 w-fit">
            Write
          </button>
        </div>
      ),
    },
    {
      title: "13. tokenIdStart",
      children: (
        <div className="flex flex-col gap-[13px] text-[10px] text-[#6c757d] dark:text-[#bbb] italic">
          {
            "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
          }
          <button className="bg-[#0784c3] text-white opacity-[0.65] mt-1 border border-[#e9ecef] rounded-lg py-1 px-2 w-fit">
            Write
          </button>
        </div>
      ),
    },
    {
      title: "14. transfer (0xa9059cbb)",
      children: (
        <div className="flex flex-col gap-[6.5px] text-xs text-dark900 dark:text-[#F5F5F5]">
          <span className="font-normal text-[10px] text-[#6c757d] dark:text-[#bbb] italic">
            {
              "See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`."
            }
          </span>
          <div className="flex flex-col gap-[13px]">
            <span>recipient (address)</span>
            <input
              placeholder="recipient (address)"
              className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
            />
            <div className="flex items-end gap-2">
              <span>amount (uint256)</span>
              <div className="bg-[#e9ecef] dark:bg-gray700 dark:border dark:border-gray600 py-[5px] px-[5px] rounded-md">
                <PlusIcon width={14} height={14} color={theme === THEME.DARK ? "#FAFAFA" : "#081D35"} />
              </div>
            </div>
            <input
              placeholder="amount (uint256)"
              className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
            />
          </div>
          <button className="bg-[#0784c3] text-white opacity-[0.65] mt-1 border border-[#e9ecef] rounded-lg py-1 px-2 w-fit">
            Write
          </button>
        </div>
      ),
    },
    {
      title: "15. transferFrom (0x23b872dd)",
      children: (
        <div className="flex flex-col gap-[6.5px] text-xs text-dark900 dark:text-[#F5F5F5]">
          <span className="font-normal text-[10px] text-[#6c757d] dark:text-[#bbb] italic">
            {
              "See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`."
            }
          </span>
          <div className="flex flex-col gap-[13px]">
            <span>sender (address)</span>
            <input
              placeholder="sender (address)"
              className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
            />
            <span>recipient (address)</span>
            <input
              placeholder="recipient (address)"
              className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
            />
            <div className="flex items-end gap-2">
              <span>amount (uint256)</span>
              <div className="bg-[#e9ecef] dark:bg-gray700 dark:border dark:border-gray600 py-[5px] px-[5px] rounded-md">
                <PlusIcon width={14} height={14} color={theme === THEME.DARK ? "#FAFAFA" : "#081D35"} />
              </div>
            </div>
            <input
              placeholder="amount (uint256)"
              className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
            />
          </div>
          <button className="bg-[#0784c3] text-white opacity-[0.65] mt-1 border border-[#e9ecef] rounded-lg py-1 px-2 w-fit">
            Write
          </button>
        </div>
      ),
    },
    {
      title: "16. transferOwnership (0xf2fde38b)",
      children: (
        <div className="flex flex-col gap-[6.5px] text-xs text-dark900 dark:text-[#F5F5F5]">
          <span className="font-normal text-[10px] text-[#6c757d] dark:text-[#bbb] italic">
            Transfers ownership of the contract to a new account (`newOwner`).
            Can only be called by the current owner.
          </span>
          <div className="flex flex-col gap-[13px]">
            <span>newOwner (address)</span>
            <input
              placeholder="newOwner (address)"
              className="border border-[#e9ecef] rounded-lg outline-none py-1 px-2"
            />
          </div>
          <button className="bg-[#0784c3] text-white opacity-[0.65] mt-1 border border-[#e9ecef] rounded-lg py-1 px-2 w-fit">
            Write
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-[13px]">
        <div className="flex gap-1 items-center border border-[#e9ecef] px-2 py-1 rounded-md text-xs text-dark900 dark:text-[#F5F5F5] w-fit">
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
        <MoreInfo />
        <div className="flex flex-col gap-3">
          {WriteContractInfo.map((item, index) => (
            <ContractInfo key={index} title={item.title}>
              {item.children}
            </ContractInfo>
          ))}
        </div>
      </div>
    </div>
  );
};
