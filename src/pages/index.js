import React from "react";
import HeroSection from "./../components/HeroSection";
import ClientsSection from "./../components/ClientsSection";
import FeaturesSection from "./../components/FeaturesSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import NewsletterSection from "./../components/NewsletterSection";
import { useRouter } from "./../util/router.js";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1586552626/zenithroofing/brown-concrete-roofs-1920x1280_oegikw.jpg"
        bgImageOpacity={1}
        title="Zenith Roofing Referral Rewards"
        subtitle="Get Rewarded for Referring Clients to Zenith Roofing Services"
        buttonText="Login"
        buttonColor="#0d4879"
        image="https://res.cloudinary.com/dexdumfqy/image/upload/v1586498978/zenithroofing/logo/logo-vertical-dark-500x410_t74nkw.png"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/auth/signin");
        }}
      ></HeroSection>
     {/*<ClientsSection
        bg="light"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      ></ClientsSection>
      <FeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
      ></FeaturesSection>
      <TestimonialsSection
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
     ></TestimonialsSection> */}
      <NewsletterSection
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      ></NewsletterSection>
    </>
  );
}

export default IndexPage;
