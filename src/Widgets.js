import React from 'react'
import SearchOutlined from   "@mui/icons-material/SearchOutlined"
import "./Widgets.css";
import {} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
        <div className='widgetsInput'>
            <SearchOutlined className="SearchIcon" fontSize='large'/>
            <input placeholder='Search Twitter' type ="text"></input>
        </div>
        <div className="widgetsContainer">
            <h2>
                What's Happening
            </h2>
        </div>
    </div>
  )
}

export default Widgets