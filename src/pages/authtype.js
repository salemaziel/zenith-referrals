import React from "react";
import AuthSection from "./../components/AuthSection";
import AuthSection2 from "./../components/AuthSection2";
import { useRouter } from "./../util/router.js";

function AuthTypePage(props) {
  const router = useRouter();
  const { type } = router.query;

  return (
    <>
      <AuthSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1590004280/zenithroofing/birdseye_neq4yb.jpg"
        bgImageOpacity={0.5}
        inputSize="lg"
        type={type}
        providers={["google"]}
        afterAuthPath="/dashboard"
      ></AuthSection>
      <br></br>
     {/* <AuthSection2
        bg="dark"
        textColor="light"
        size="md"
        bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1590004280/zenithroofing/birdseye_neq4yb.jpg"
        bgImageOpacity={0.8}
        inputSize="lg"
        type="signup"
        providers={["google"]}
        afterAuthPath="/dashboard"
     ></AuthSection2>*/}
    </>
  );
}

export default AuthTypePage;
