import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ThumbsUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'

function Post({profilePic, image, username, timestamp, message}) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar className="post__avatar" src={profilePic} />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </div>
      </div>
      <div className="post__bottom">{message}</div>
      <div className="post__image">
        <image src={image} alt={`Image from ${username}`} />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbsUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlined /> 
        </div>
      </div>
    </div>
  );
}

export default Post
