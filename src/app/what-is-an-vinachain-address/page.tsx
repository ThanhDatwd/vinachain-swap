"use client";

import { ArrowUpRightSquareIcon } from "@/assets/icons/ArrowUpRightSquareIcon";
import { BarIcon } from "@/assets/icons/BarIcon";
import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import { MediumIcon } from "@/assets/icons/MediumIcon";
import { RedditIcon } from "@/assets/icons/RedditIcon";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { TwitterIcon } from "@/assets/icons/TwitterIcon";
import { QuestionCard } from "@/components/WhatIsAnVinachainAddress/QuestionCard";
import { QUESTIONS_DATA, getStaticURL } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DateTime } from "luxon";

export default function WhatIsAnVinachainAddressPage() {
  const currentTime = DateTime.now().toFormat("dd MMMM yyyy");
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  return (
    <div>
      <div className="relative px-3 lg:px-[244px] bg-[#141a25]">
        <div className="absolute scale-150 lg:scale-100 -top-[12rem] -right-[12rem] overflow-hidden">
          <Image
            src={`${getStaticURL()}/assets/images/abstract-lines-kb.svg`}
            width={100}
            height={100}
            alt="Abstract Lines"
            className="w-auto h-[40rem]"
          />
        </div>
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Image
                src={`${getStaticURL()}/assets/images/logo_vpc.svg`}
                alt="metamask"
                width={100}
                height={100}
                className="w-[34px] h-auto"
              />
              <h2 className="text-2xl text-white">Vinascan</h2>
            </div>
            <div className="w-[1px] h-[34px] bg-[#e9ecef]" />
            <span className="text-[14.5px] text-white">Information Center</span>
          </div>
          <div
            className="lg:hidden border border-[#e9ecef] p-[6.4px] rounded-lg z-30"
            onClick={() => setShowMenuMobile(!showMenuMobile)}
          >
            <BarIcon />
          </div>
          <div className="hidden lg:flex items-center text-[14.5px] text-[#f8f9fa]">
            <Link
              className="py-4 px-5 hover:text-[#f8f9fa]"
              href="/coming-soon"
            >
              Newsletter
            </Link>
            <Link
              className="py-4 px-5 hover:text-[#f8f9fa]"
              href="/coming-soon"
            >
              Glossary
            </Link>
            <Link
              className="flex items-center gap-2 py-4 px-5 hover:text-[#f8f9fa]"
              href="/coming-soon"
            >
              Go to Etherscan{" "}
              <ArrowUpRightSquareIcon color="#f8f9fa" width={16} height={16} />
            </Link>
          </div>
        </div>

        {showMenuMobile && (
          <div className="flex flex-col gap-1 text-[14.5px] text-[#f8f9fa] pt-4">
            <Link
              className="py-[4.8px] hover:text-[#f8f9fa]"
              href="/coming-soon"
            >
              Newsletter
            </Link>
            <Link
              className="py-[4.8px] hover:text-[#f8f9fa]"
              href="/coming-soon"
            >
              Glossary
            </Link>
            <Link
              className="flex items-center gap-2 py-[4.8px] hover:text-[#f8f9fa]"
              href="/coming-soon"
            >
              Go to Etherscan{" "}
              <ArrowUpRightSquareIcon color="#f8f9fa" width={16} height={16} />
            </Link>
          </div>
        )}

        <div className="py-8">
          <div className="flex items-center gap-[6px] p-4 rounded-lg bg-white">
            <SearchIcon />
            <input
              className="flex-1 text-base text-dark900 outline-none border-none placeholder:text-[#858585]"
              placeholder="Search for a topic here.."
            />

            <div className="hidden w-6 h-6 lg:flex items-center justify-center rounded-md bg-[#11111126] text-white">
              /
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7 px-7 lg:px-[244px] pt-8 pb-12 bg-white">
        <span className="text-[#111b36] text-[14.5px]">
          <Link href={"/"} className="pr-2">
            Home
          </Link>
          /
          <Link href={"/coming-soon"} className="px-2">
            FAQ
          </Link>
          /
          <span className="pl-2 text-[#6c757d]">
            What is an Vinascan Address?
          </span>
        </span>
        <div className="flex flex-col gap-[30px] p-6 border border-[#e9ecef] rounded-xl text-base lg:text-[18.7px] text-dark900 break-words">
          <h2 className="text-[#111b36] text-2xl lg:text-3xl font-medium">
            What is an Ethereum Address?
          </h2>
          <span>
            Most generally, this represents an EOA or contract that can receive
            (destination address) or send (source address) transactions on the
            blockchain. More specifically, it is the right-most 160 bits of a
            Keccak hash of an ECDSA public key.
          </span>
          <span>
            An address is like your identity on the blockchain. It identifies
            whether the address is related to a wallet address, smart contract,
            or transaction hash. There are 2 types of addresses: Externally
            Owned Addresses (basically your wallet address) and Contract
            Addresses.
          </span>
          <h2 className="text-[#111b36] text-2xl lg:text-3xl font-medium">
            Externally Owned Address
          </h2>
          <span>
            Externally Owned Address (EOA), also known as a Wallet Address,
            refers to a public account that holds your funds and is only
            accessible by the private key pairs. Let us take the Ethereum
            address, for example. An Ethereum address is a 42-character
            hexadecimal address derived from the last 20 bytes of the public key
            controlling the account with 0x appended in front. e.g.,
            0x71C7656EC7ab88b098defB751B7401B5f6d8976F.
          </span>
          <span>{`Basically, the Ethereum address is the "public" address that you would need to receive funds from another party through the Ethereum network. This means if the network is on a different network, the fund will not appear in the recipient's wallet address. It is important to make sure that the address supports the fund and the network used to send the fund. Also, to access funds in the address, you must have its private key. Kindly exercise duty of care when handling your private key as they can be used to access all the funds in an address.`}</span>
          <span>
            On the other hand, a wallet is an interface that you may use to
            manage your Ethereum account as well as its public and private key
            pair. To get an Ethereum address/account to send and receive funds,
            kindly visit <Link href={"/coming-soon"}>Etherscan Directory</Link>{" "}
            for a list of available wallets.
          </span>
          <h2 className="text-[#111b36] text-2xl lg:text-3xl font-medium">
            Contract Address
          </h2>
          <span>
            Contract address refers to the address hosting a collection of code
            on the Ethereum blockchain that executes functions. These functions
            of a contract address are executed when a transaction with
            associated input data (contract interaction) is made to it.
          </span>
          <span>
            The contract address is usually created when a contract is deployed
            to the Ethereum Blockchain. Both Externally Owned and Contract
            Addresses share the same format of having 42 hexadecimal characters.
          </span>
          <span>
            Etherscan differentiates between the two by displaying the Contract
            Creation field for Contract Addresses such as below:
          </span>
          <div
            className="w-full h-[82.94px] lg:h-[277.68px]"
            style={{
              backgroundImage: `url(${getStaticURL()}/assets/images/screen-vinachain.png)`,
              backgroundSize: "cover",
            }}
          />

          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full"
              style={{
                backgroundImage: `url(${getStaticURL()}/assets/images/staff-1.jpg)`,
                backgroundSize: "cover",
              }}
            />

            <div className="flex-1 flex flex-col text-[12.6px] text-[#6c757d]">
              <span className="text-[14.5px] text-dark900 font-bold">
                Kaven Choi
              </span>
              <span>{`Last updated: ${currentTime}`}</span>
            </div>
          </div>
        </div>
        <div className="p-6 border border-[#e9ecef] rounded-xl">
          <h2 className="text-[22.5px] text-[#111b36] mb-4">
            Related Articles
          </h2>
          <div className="grid gird-cols-1 lg:grid-cols-2 text-[#246bee]">
            <div className="flex flex-col gap-3">
              <Link href={"/coming-soon"}>
                I accidentally sent funds to a contract address.
              </Link>
              <Link href={"/coming-soon"}>
                How to replace a Pending/Dropped transaction
              </Link>
              <Link href={"/coming-soon"}>What is an ERC-1155 Token?</Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link href={"/coming-soon"}>
                Public Name Tags, Labels & Public Notes
              </Link>
              <Link href={"/coming-soon"}>
                What happens when a Dropped Transaction is replaced by another
                Transaction?
              </Link>
              <Link href={"/coming-soon"}>What is a Private Key?</Link>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#e9ecef] my-5" />
        <div className="flex flex-col gap-4">
          <h2 className="text-[22.5px] text-[#111b36] mb-4">
            Still Have Questions?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {QUESTIONS_DATA.map((item, index) => (
              <QuestionCard
                key={index}
                path={item.path}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="relative flex flex-col lg:flex-row justify-between lg:items-center gap-3 bg-[#12171c] py-6 px-3 lg:px-[244px] text-[14.5px] text-[#f8f9fa] overflow-hidden">
        <Image
          src={`${getStaticURL()}/assets/images/abstract-lines-kb.svg`}
          width={100}
          height={100}
          alt="Abstract Lines"
          className="absolute scale-[2] lg:scale-100 -top-[26rem] -right-[5rem] lg:-right-[20rem] w-auto h-[50rem]"
        />
        <span>© 2023 Etherscan Information Center</span>
        <div className="flex items-center gap-5">
          <Link href={"/coming-soon"}>
            <TwitterIcon />
          </Link>
          <Link href={"/coming-soon"}>
            <FacebookIcon />
          </Link>
          <Link href={"/coming-soon"}>
            <RedditIcon />
          </Link>
          <Link href={"/coming-soon"}>
            <MediumIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
