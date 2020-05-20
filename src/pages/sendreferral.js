import React, { useEffect } from "react";
import ReferralForm from "./../components/Custom/ReferralForm";
import { useAuth } from "./../util/auth.js";
import { useRouter } from "./../util/router.js";

function SendAReferral(props) {
    const auth = useAuth();
    const router = useRouter();
  
    // Redirect to signin
    // if not signed in.
    useEffect(() => {
      if (auth.user === false) {
        router.push("/auth/signin");
      }
    }, [auth, router]);
  
    return (
        <>
      <ReferralForm />

      </>
    );
  }
  
  export default SendAReferral