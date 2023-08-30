import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredCountriesCasino from "@/components/country/FilteredCountriesCasino";

import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import Canada from "@/components/country/Canada";

export const metadata: Metadata = {
  title: "Canadian Casino | New Brand",
  description: "Generated by create next app",
};

export default async function Bonuses() {
  return (
    <div className="page-bonuses">
      <Canada />
      {/* <TopBrands /> */}
      <FilteredCountriesCasino />

      <GuideSlotsPage />
    </div>
  );
}