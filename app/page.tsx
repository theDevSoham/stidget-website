import Navbar from "@/components/Navbar";
import { homepageSeo } from "@/seo/seo";
import { Metadata } from "next";
import { homepageContent } from "@/content/homepage";
import Hero from "@/components/Hero";
import Marketing from "@/components/Marketing";
import OurStory from "@/components/OurStory";
import Marketplace from "@/components/Marketplace";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const metadata: Metadata = homepageSeo;

const HomePage = () => {
  return (
    <div>
      <Navbar {...homepageContent.navbar} />
      <Hero {...homepageContent.hero} />
      <Marketing {...homepageContent.marketing} />
      <OurStory {...homepageContent.ourStory} />
      <Marketplace {...homepageContent.marketplace} />
      <Newsletter {...homepageContent.newsletter} />
      <Footer {...homepageContent.footer} />
    </div>
  );
};

export default HomePage;
