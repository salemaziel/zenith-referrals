import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import FaqPage from "./faq";
import DashboardPage from "./dashboard";
import SettingsPage from "./settings";
import AuthTypePage from "./authtype";
import SendAReferral from './sendreferral'
import { Switch, Route, Router } from "./../util/router.js";
import Footer from "./../components/Footer";
import { ProvideAuth } from "./../util/auth.js";
import '../css/main.css'


function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <NavbarCustom
            bg="white"
            variant="light"
            expand="md"
            logo="https://res.cloudinary.com/dexdumfqy/image/upload/v1586498978/zenithroofing/logo/logo-vertical-dark-500x410_t74nkw.png"
          ></NavbarCustom>

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/faq" component={FaqPage} />

            <Route exact path="/dashboard" component={DashboardPage} />

            <Route exact path="/settings" component={SettingsPage} />

            <Route exact path="/sendreferral" component={SendAReferral} />

            <Route exact path="/auth/:type" component={AuthTypePage} />

            <Route
              component={({ location }) => {
                return (
                  <div
                    style={{
                      padding: "50px",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    The page <code>{location.pathname}</code> could not be
                    found.
                  </div>
                );
              }}
            />
          </Switch>

          <Footer
            bg=""
            textColor="light"
            size="sm"
            bgImage=""
            bgImageOpacity={1}
            description="Zenith Roofing Services Referral Rewards"
            copyright="© 2020 Zenith Roofing Services"
            logo="https://res.cloudinary.com/dexdumfqy/image/upload/v1586498978/zenithroofing/logo/logo-vertical-dark-500x410_t74nkw.png"
          ></Footer>
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
