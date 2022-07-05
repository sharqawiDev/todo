import React from "react";
import "./style.scss";
const TabsBar = ({ tabs, activeTab, changeTab }) => {
    return (
        <div className="tabs">
            {tabs.map((tab, index) => (
                <div
                    key={tab}
                    className={activeTab === index ? "active-tab" : "tab"}
                    onClick={() => changeTab(index)}
                >
                    {activeTab === index ? <h4>{tab}</h4> : <p>{tab}</p>}
                    {activeTab === index && <span className="border" />}
                </div>
            ))}
        </div>
    );
};

export default TabsBar;
