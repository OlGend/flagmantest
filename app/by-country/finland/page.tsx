import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredCountriesCasino from "@/components/country/FilteredCountriesCasino";

import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import Finland from "@/components/country/Finland";

export const metadata: Metadata = {
  title: "Finnish Casinos | New Brand",
  description: "Generated by create next app",
};

export default async function Bonuses() {
  return (
    <div className="page-bonuses">
      <Finland />
      {/* <TopBrands /> */}
      <FilteredCountriesCasino />

      <GuideSlotsPage />
    </div>
  );
}
