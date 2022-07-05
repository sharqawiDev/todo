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
            {tabs.map((tab) => (
                <p key={tab}>{tab}</p>
            ))}
        </div>
    );
};

export default TabsBar;
