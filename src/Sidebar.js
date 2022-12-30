import React from "react";
import './Sidebar.css';
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home"
import SearchIcon from "@mui/icons-material/Search";
import AccountIcon from "@mui/icons-material/AccountBox";
import NotificationIcon from "@mui/icons-material/Notifications"
import Button from "@mui/material/Button";
function Sidebar()
{
    return(
    <div className="Sidebar">
        
            {/*icon*/}
            <TwitterIcon className="TwitterIcon"/>
            <SidebarOption active text="Home" Icon={HomeIcon}/>
            <SidebarOption text="Search" Icon={SearchIcon}/>
            <SidebarOption text="Notifications" Icon={NotificationIcon}/>
            <SidebarOption text ="Account" Icon={AccountIcon}/>
            <Button variant ="outlined" className="sidebarButton" >
                Tweet
                </Button>
            
            
        
    </div>
    );
}
export default Sidebar;