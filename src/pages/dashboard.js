import React, { useEffect } from "react";
import DashboardPlaceholder from "./../components/DashboardPlaceholder";
import { useAuth } from "./../util/auth.js";
import { useRouter } from "./../util/router.js";

function DashboardPage(props) {
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
    <DashboardPlaceholder
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="Dashboard"
      subtitle="Zenith Rooofing Services Referral Rewards Dashboard"
    ></DashboardPlaceholder>
  );
}

export default DashboardPage;
