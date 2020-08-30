import React, { useState, useEffect } from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from "./MessageSender";
import Post from './Post'
import db from './firebase'

function Feed() {
  const [posts, setPosts] = useState([])

  /**
   * Firebase snapshot will listen for changes and re-refresh data 
   * if new objects are pushed to the associated collection 
   */
  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    })
  }, [])

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      { posts.map(post => (
          <Post key={post.id} 
            image={post.data.image} 
            timestamp={post.data.timestamp} 
            message={post.data.message} 
            profilePic={post.data.profilePic} 
            username={post.data.username} 
          /> 
      ))}
    </div>
  );
}


export default Feed