import videojs from "video.js";
import { VideoJS } from "./VideoJS";
import { useRef } from "react";

export const Teaser = () => {
  const playerRef = useRef(null);

  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://vimeo.com/1027667756",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />;
};
