import React, { useContext, useState } from "react";
import { LayoutContext } from "../../contexts/layout";
import AboutUs from "../AboutUs";
import Community from "../Community";
import Legal from "../Legal";
import MadeIn from "../MadeIn";
import AppList from "../AppList"
import SocialSite from "../SocialSite"
import RelateSite from "../RelateSite"

const SideBar = () => {
    return(
        <div className="sidemenu">
            <div className="sidemenu-close"></div>
            <div className="sidemenu-content">
                <AboutUs classVal="sidemenu-item footer-content side-content d-flex flex-column" imageDisplay="none" />
                <Community classVal="sidemenu-item footer-content side-content d-flex flex-column" imageDisplay="none" />
                <Legal classVal="sidemenu-item footer-content side-content d-flex flex-column" imageDisplay="none" />
                <MadeIn classVal="sidemenu-item footer-content d-flex flex-column justify-content-start made-in" />
                <div className="sidemenu-item d-flex justify-content-center">
                    <AppList classVal="" />
                </div>
                <div className="sidemenu-item">
                    <SocialSite classVal="social-list" />
                </div>
                <div className="sidemenu-item d-flex justify-content-center">
                    <RelateSite classVal="" />
                </div>
                <p className="copyright-text">
                    © 2022 QuickTutor, LLC. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};
export default SideBar;