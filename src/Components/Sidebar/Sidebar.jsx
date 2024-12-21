import React from 'react';
import "./Sidebar.css";
import { categoryArr, subscribedArr } from '../../data';

const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
        <div className="sortcut-links">
            {/* <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
                <img src={home_icon} alt="home image" /><p>Home</p>
            </div> */}
            {
                categoryArr.map((item, index) => {
                    return (
                        <div key={index} className={`side-link ${category === item.categoryId ? 'active' : ''}`} onClick={() => setCategory(item.categoryId)}>
                            <img src={item.categoryIcon} alt="icon image" /><p>{item.categoryName}</p>
                        </div>
                    )
                })
            }
            <hr />
        </div>
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            {/* <div className="side-link">
                <img src={tseries_image} alt="Tseries image" /><p>Tseries</p>
            </div> */}
            {
                subscribedArr.map((item, index) => {
                    return (
                        <div key={index} className="side-link">
                            <img src={item.channelIcon} alt="channel image" /><p>{item.channelName}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Sidebar;