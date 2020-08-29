import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from "./MessageSender";
import Post from './Post'

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
        message="Wow! This works!"
        timestamp="This is a timestamp"
        username="ssssangha"
        image="https://specials-images.forbesimg.com/imageserve/5f302109ffad89f9130e07db/960x0.jpg?cropX1=0&cropX2=4800&cropY1=243&cropY2=2943"
      />
      <Post
        profilePic="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
        message="Wow! This works!"
        timestamp="This is a timestamp"
        username="ssssangha"
      />
      <Post />
      <Post />
      {/* message sender  */}
    </div>
  );
}


export default Feed