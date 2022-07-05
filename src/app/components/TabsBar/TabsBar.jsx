import React from "react";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeTab } from "../../Redux/tabs";
const TabsBar = () => {
    const [tabs, activeTab] = useSelector((state) => [
        state.tabs.value,
        state.tabs.activeTab,
    ]);
    const dispatch = useDispatch();
    return (
        <div className="tabs">
            {tabs.map((tab, index) => (
                <div
                    key={tab}
                    className={activeTab === index ? "active-tab" : "tab"}
                    onClick={() => dispatch(changeTab(index))}
                >
                    <p>{tab}</p>
                    {activeTab === index && <span className="border" />}
                </div>
            ))}
        </div>
    );
};

export default TabsBar;
