import React, { useContext, useState } from "react";
import { DataContext } from "../Contexts/DataContext";
import FetchData from "./FetchData";
import { v4 as uuid } from "uuid";

function Tabs() {
  const { Data } = useContext(DataContext);
  const [isActive, setActive] = useState(false);
  const [defaulvalue, setDefalutvalue] = useState(0);
  const [storeID, setStoreID] = useState();
  const [seccat, setSecCat] = useState([]);
  const [priccat, setPriCat] = useState({});
  const [pfontsize, setPfontsize] = useState(0);
  const [sfontsize, setsfontsize] = useState(0);
  const [activeTab, setActiveTab] = useState("1");
  const [currentTab, setCurrentTab] = useState(seccat[0]);
  const [url, setUrl] = useState();
  const [color, setColor] = useState();


  const toggleClass = (e, itemp) => {
    // console.log(itemp);
    setActive(!isActive);
    setSecCat(itemp.secondaryCategories);
    setPriCat({
      title: itemp.title,
      primaryBgColor: itemp.primaryBgColor,
      secondaryBgColor: itemp.secondaryBgColor,
    });
    Object.entries(Data).map(([key, value]) => {
      const f = value.fontSizePrimaryCategories;
      const s = value.fontSizeSecondaryCategories;
      const c = value.primaryFontColor;
      
      setColor(c);
      setsfontsize(s);
      setPfontsize(f);
    });
  };
  const homeReturn = () => {
    setActive(!isActive);
    setSecCat([]);
  };

  const handlerClick = (itemId) => {
    setActiveTab(itemId);
    const currentseccat = seccat.filter((item) => item.id === itemId);
    setCurrentTab(currentseccat[0]);
  };
  // console.log(url)
  return (
    <>
      {Data.map((items) => {
        return (
          <>
            <div key={items.id}>
              {" "}
              <h1>Multi Level Categories</h1>
            </div>
            <ul className={isActive ? "displaynone" : "first-level"}>
              {items.primaryCategories.map((itemp, index) => {
                return (
                  <>
                    <li>
                      <button
                        style={{
                          backgroundColor: `${itemp.primaryBgColor}`,
                          color: `${items.primaryFontColor}`,
                          fontSize: `${items.fontSizePrimaryCategories}` + 'px'
                        }}
                        onClick={(e) => toggleClass(e, itemp, index)}
                        key={index}
                      >
                        {itemp.title}
                      </button>
                    </li>
                  </>
                );
              })}
            </ul>
            <button
              className={!isActive ? "displaynone" : "home-btn"}
              onClick={homeReturn}
            >
              <img src="home.png" className="home-icon" />
            </button>

            <div className={isActive ? "displayblock" : "displaynone"}>
              <div
              className="p-title"
                style={{
                  background: priccat.primaryBgColor,
                  fontSize: pfontsize + "px",
                  color: color
                }}
              >
                {priccat.title}
              </div><ul className="tabs" style={{background: priccat.secondaryBgColor}}>
              {seccat.map((items, index) => {
                
                return (
                  
                    <li className="main">
                      <button
                       

                        style={ activeTab === items.id ? { background: priccat.primaryBgColor, color: color, fontSize: sfontsize + "px" } : {background: priccat.secondaryBgColor, fontSize: sfontsize + "px" }}
                        className={activeTab === `${items.id}`? 'active tabs': 'tabs'}
                        id={items.id}
                        onClick={() => handlerClick(items.id)}
                      >
                        {items.title}
                      </button>
                     
                    </li>
                );
              })}
                                </ul>

              <div className="content">
                <FetchData seccat={seccat} activeTab={activeTab} url={url}></FetchData>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Tabs;
