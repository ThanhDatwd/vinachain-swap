import { DownloadFile } from "./DownloadFile";

export const Info = () => {
  return (
    <div>
        <div className="flex flex-col gap-4 p-5 mb-3 rounded-xl bg-theme border border-[#e9ecef] boxShadow text-[14.5px] text-dark900 dark:text-[#F5F5F5]">
        <h3 className="font-bold text-dark900 dark:text-[#F5F5F5]">OVERVIEW</h3>
        <span className="mb-8">
            Adventure Gold is the native ERC-20 token of the Loot non-fungible token
            (NFT) project. Loot is a text-based, randomized adventure gear generated
            and stored on-chain, created by social media network Vine co-founder Dom
            Hofmann.
        </span>
        </div>
        <DownloadFile />
    </div>
  );
};
