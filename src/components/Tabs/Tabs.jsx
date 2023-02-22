import React from "react";
import "./Tabs.css";

const Tabs = ({ tabs = {} }) => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const tabAction = (index) => {
    setTabIndex(index);
  };
  return (
    <div>
      <div className="tabs__body">
        {tabs.length === 0 ? (
          <div>No tabs</div>
        ) : (
          <div className="tab__label">
            {tabs.map((tab, index) => (
              <label
                key={index}
                className={index === tabIndex ? "active-tab" : "tab"}
                onClick={() => tabAction(index)}
              >
                {tab.name}
                {console.log(index)}
              </label>
            ))}
          </div>
        )}
        <div className="tab__content">
          <div className="tab__img">
            <img src={tabs[tabIndex].img} alt="" />
          </div>
          <div className="tab__text">
            <h2>{tabs[tabIndex].heading}</h2>
            <p>{tabs[tabIndex].para}</p>
            <button>{tabs[tabIndex].btn}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
