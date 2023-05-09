import React, { useContext } from "react";
import { pizzaContext } from "./VideoContext";
import RenderVideo from "./RenderVideo";

const AllVideos = () => {
  const { videoData , loader} = useContext(pizzaContext);
  return (
    <div>
      <h2>All videos</h2>
      {loader && <h3>Loading Videos...</h3>}
      <RenderVideo data={videoData}/>
    </div>
  );
};

export default AllVideos;
