import React, { useContext } from "react";
import { pizzaContext } from "./VideoContext";
import RenderVideo from "./RenderVideo";

const AllVideos = () => {
  const { videoData } = useContext(pizzaContext);
  return (
    <div>
      <h2>All videos</h2>
      <RenderVideo data={videoData}/>
    </div>
  );
};

export default AllVideos;
