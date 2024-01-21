import { useEffect } from "react";
import VisaSideBar from "../components/applyVisaPage/visaSidebar";
import ImageSection from "../components/applyVisaPage/imageSection";
import CountriesSection from "../components/applyVisaPage/countriesSection";
import GuranteeSection from "../components/applyVisaPage/guaranteeSection";
import VisaProcessSteps from "../components/applyVisaPage/visaProcessSteps";
import VisaBenefits from "../components/applyVisaPage/VisaBenefits";
import ConciergeProfile from "../components/applyVisaPage/conciergeSection";
import TestimonialSection from "../components/applyVisaPage/TestimonialSection";
import PartnersSection from "../components/applyVisaPage/PartnersSection";

const ApplyVisaPage = () => {
  useEffect(() => {
    console.log("APPLY VISA RENDERED");
    return () => {
      console.log("APPLY VISA DESTROYED");
    }
  });
  return (
    <div className="md:px-10">
      <div className="relative mx-auto flex max-w-6xl gap-8">
        <main className="flex-1 overflow-auto">
          <ImageSection />
          <CountriesSection />
          <GuranteeSection />
          <VisaProcessSteps />
          <VisaBenefits />
          <ConciergeProfile />
          <TestimonialSection />
          <PartnersSection />
        </main>
        <VisaSideBar />
      </div>
    </div>
  );
}

export default ApplyVisaPage;