"use client";
import React from "react";
import Image from "next/image";
import Img from "@/public/fastest.png";

const FastWithdrawalCasinos = () => {
  return (
    <div className="bonuses">
      <div className="main__container flex justify-between items-center">
        <div className="flex flex-col basis-[60%]">
          <h1 className="text-white">
          2023&#39;s Swiftest Payout Casino and Betting Platforms
          </h1>
          <p className="text-white mt-5">
          The most advantageous aspect of rapid payout casinos is their swift and unwavering dispensation of your earnings. We&#39;ve meticulously crafted this inventory to aid you in locating the supreme casinos offering expedited withdrawal processes, particularly when your earnings surge swiftly and substantially. Simply initiate a withdrawal and envisage the exhilarating possibilities for allocating those funds!
          </p>
        </div>
        <div className="basis-[40%] flex justify-end">
          <Image src={Img} alt="Beep" width={300} height={300} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default FastWithdrawalCasinos;
