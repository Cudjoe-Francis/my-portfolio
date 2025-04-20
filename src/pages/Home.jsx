import React, { Profiler } from "react";
import "../css/Home.css";
import Introduction from "../components/Introduction";
import ProjectSummary from "../components/ProjectSummary";
import Testimonials from "../components/Testimonials";
import SocialIcons from "../components/SocialIcons";

function Home() {
  return (
    <div className="home-container">
    <Introduction />
    <ProjectSummary />
    <Testimonials />
    <SocialIcons />

    </div>
  );
}

export default Home;
