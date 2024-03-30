import React from "react";
import "./VideoPlayer.css";
import video from "../../assets/video.mp4";

function VideoPlayer({ playState, setPlayState }) {
  return (
    <div className={`video-player ${playState ? "" : "hide"}`}>
      <video src={video} autoPlay muted control></video>
    </div>
  );
}
export default VideoPlayer;
