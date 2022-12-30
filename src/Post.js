import React from 'react'
import VerifiedUser from "@mui/icons-material/VerifiedUser"
import "./Post.css";
import { Avatar } from '@mui/material';
import ChatBubbleOutline from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import RepeatOutlined from "@mui/icons-material/RepeatOutlined"

function Post({displayName,Username,TimeStamp,Text,Media,avatar,verified}) {
  return (
    <div className="post">
        <div className="postAvatar">
        <Avatar src={avatar} />
        </div>
        <div className="postBody">
            <div className='postHeader'>
                <div className="postHeaderText">
                    <h3>
                     {displayName}{" "}
                    <span className="postheaderSpecial">
                        {verified && <VerifiedUser className="PostBadge"/>}@{Username} -{TimeStamp}h
                    </span>
                    </h3>
                <div className='postHeaderDescription'>
                    {Text}
                </div>
                </div>
            <img src={Media} alt=""/>
            <div className="postFooter">
                <h1>
                <ChatBubbleOutline fontSize="medium" />

                </h1>
                <h2>
                <FavoriteBorder fontSize="medium"  />

                </h2>
                <h3>
                <RepeatOutlined fontSize='medium'/>

                </h3>
                </div>  

        </div>
    </div>
    </div>
  );
  }
export default Post