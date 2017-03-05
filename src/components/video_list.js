import React from 'react';
import VideoListItem from './video_list_item.js';

const VideoList = (props) =>{
  const videoitems = props.videos.map((video)=>{
    return <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag} video={video} />
  });
  return (<ul className=" list-group">
             {videoitems}
          </ul>
        );
}

export default VideoList;
