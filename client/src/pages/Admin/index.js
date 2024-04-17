import React, { useEffect } from "react";
import AboutHeader from "../../components/AdminHeader";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import AdminSkills from "./AdminSkills";
import AdminExperience from "./AdminExperiences";
import { useSelector } from "react-redux";
const { TabPane } = Tabs;

function Admin() {
  const { portfolioData } = useSelector((state) => state.root);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/Admin-login";
    }
  }, []);

  return (
    <div className="aura-container">
      <div className="aura"></div>
      <AboutHeader />
      <div className="flex justify-end px-6">
        <h1
          className="underline text-black cursor-pointer"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-login";
          }}
        >
          Logout
        </h1>
      </div>
      {portfolioData && (
        <div className="mt-5 p-5">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Intro" key="1">
              <AdminIntro />
            </TabPane>

            <TabPane tab="About" key="2">
              <AdminAbout />
            </TabPane>

            <TabPane tab="Skills" key="3">
              <AdminSkills />
            </TabPane>

            <TabPane tab="Experience" key="4">
              <AdminExperience />
            </TabPane>
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default Admin;
