
import Image from "next/image";
import Link from 'next/link';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import PackagesSection from "./components/PackagesSection";
import GallerySection from "./components/GallerySection";
import PhotographyJourney from "./components/PhotographyJourney";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import MaternityHighlightSection from "./components/MaternityHighlightSection";
import MaternityWhyWeExcel from "./components/MaternityWhyWeExcel";
import MaternityPricingJustification from "./components/MaternityPricingJustification";
import UnderstandingPrices from "./components/understandingprices";
import Button from "./components/Button";


export default function MaternityPhotography() {
  return (
    <>
        
       <Navbar/>
      <HeroSection/>
        <WhyChooseUs/>
        <MaternityHighlightSection/>
        <MaternityWhyWeExcel/>
        <PackagesSection/>
        <MaternityPricingJustification/>
        <ServicesSection/>
        <Button/>
        <UnderstandingPrices/>
        <GallerySection/>
        <PhotographyJourney/>
       <Contact/>
      <Footer/>
    </>
  );
}