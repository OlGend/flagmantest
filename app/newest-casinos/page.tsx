import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredCasinos from "@/components/casinos//FilteredCasinos";
import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import NewestCasinos from "@/components/casinos/NewestCasinos";

export const metadata: Metadata = {
  title: "Newest Casinos | New Brand",
  description: "Generated by create next app",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <NewestCasinos />
      {/* <TopBrands /> */}
      <FilteredCasinos />
      <GuideSlotsPage />
    </div>
  );
}