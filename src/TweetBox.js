import { Avatar, Button } from '@mui/material';
import "./TweetBox.css";
import React,{useState} from 'react'
import colRef from './Firebase';
import { addDoc } from 'firebase/firestore';




function TweetBox() {
    const [tweet,setTweet] =useState("");
    const [tweetMedia,setTweetmedia]=useState("");
    const sendTweet=e=>{
        e.preventDefault(); 
        addDoc(colRef,{
            displayName:"User",
            Username:"user101",
            verified:true,
            Text:tweet,
            Media:tweetMedia,
            timeStamp:"now",
            avatar:"https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"

        });
        setTweet("");
        setTweetmedia("");
    }


  return (
    <div className="TweetBox">
        <form>
            <div className='TweetBoxInput'>
                <Avatar src="C:\Users\KIIT\Downloads\user.png"/>
                <input 
                onChange={(e)=>setTweet(e.target.value)}
                value={tweet}
                placeholder="What's Happening?"
                type="text"
                />
            </div>
            <div className="TweetImage">
                <input onChange={(e)=>setTweetmedia(e.target.value)}
                value={tweetMedia}
                placeholder="Enter Image Url"
                type="text"
                />
            </div>
            <Button onClick ={sendTweet} className="TweetBoxButton">
                Tweet
            </Button>
        </form>
    </div>
  );
}

export default TweetBox