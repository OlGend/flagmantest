import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredCasinos from "@/components/casinos//FilteredCasinos";
import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import CryptoCasinos from "@/components/casinos/CryptoCasinos";

export const metadata: Metadata = {
  title: "Crypto Casinos | New Brand",
  description: "Generated by create next app",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <CryptoCasinos />
      {/* <TopBrands /> */}
      <FilteredCasinos />
      <GuideSlotsPage />
    </div>
  );
}