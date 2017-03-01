import React from 'react';

const VideoListItem = ({video}) =>{
  //extracting video data from props

const imgurl = video.snippet.thumbnails.default.url;
  return(
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgurl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>);
}

export default VideoListItem;