import React,{useState,useEffect} from 'react'
import "./Feed.css";
import TweetBox from './TweetBox';
import Post from './Post';
import { onSnapshot } from 'firebase/firestore';
import colRef from './Firebase';




function Feed() {
      const [posts,setPosts]=useState([]);

    useEffect(()=>{
        onSnapshot(colRef,(snapshot)=>(
            setPosts(snapshot.docs.map(doc=>doc.data()))
        ))
    },[])
  return (
    <div className="feed">
        <div className="feedHeader">
            <h2>Home</h2>
        </div>

        <TweetBox />
        {posts.map(post =>(
        <Post
        displayName={post.displayName}
        Username={post.Username}
        TimeStamp={post.TimeStamp}
        Text={post.Text}
        Media={post.Media}
        avatar={post.avatar}
        verified={post.verified}
        />
        ))}

        <Post />
        <Post />
        <Post />
        <Post />
        <Post />


    </div>
  );
}

export default Feed