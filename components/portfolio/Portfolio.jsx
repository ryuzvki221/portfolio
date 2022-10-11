import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Portfolio() {
  return (
    <>
      <section id="featured-work-section" className="portfolio-section">
        <div className="container">
          <div className="row">
            <div className="col s12 section-title">
              <h2>featured work</h2>
            </div>
            <div className="col s12">
              <Tabs className="col s12 section-content pd-0">
                <TabList className="portfolio-tab-list">
                  <Tab>All</Tab>
                  <Tab>Web Apps</Tab>
                  <Tab>Desktop apps</Tab>
                  <Tab>Mobile Apps</Tab>
                </TabList>
                <div className="portfolio-tab-content">
                  <TabPanel>
                    <ul className="portfolio-items">
                      <li className="portfolio-content">all</li>
                    </ul>
                  </TabPanel>
                  {/* End All Project */}
                  <TabPanel>
                    <ul className="portfolio-items">
                      <li className="portfolio-content">web apps</li>
                    </ul>
                  </TabPanel>
                  {/* End Web Apps Project */}
                  <TabPanel>
                    <ul className="portfolio-items">
                      <li className="portfolio-content">Desktop apps</li>
                    </ul>
                  </TabPanel>
                  {/* End Desktop Apps Project */}
                  <TabPanel>
                    <ul className="portfolio-items">
                      <li className="portfolio-content">mobile apps</li>
                    </ul>
                  </TabPanel>
                  {/* End Mobile Apps Project */}
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
