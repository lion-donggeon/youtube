import React from "react";
import SearchHeader from "../seach_header/search_header";
import VideoSearch from "../seach_header/search_header";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = (props) => (
  <ul className={styles.videos}>
    {props.videos.map((video) => (
      <VideoItem key={video.id} video={video} />
    ))}
  </ul>
);

export default VideoList;
