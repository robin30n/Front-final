import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    url:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEV4UqnaHyCoAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=',
    caption: "online shop",
  },
  {
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcqm_Zm1qtIXycrzQQuORhoCDObs-H5DHdDg&usqp=CAU",
    caption: "online shop",
  },
  {
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jOWrofJlUpxvr8CvkbGFJ_jZYc9_ArUdPw&usqp=CAU",
    caption: "online shop",
  },
];

const Hero = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})`,objectFit:'contain' }}
            >
              
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Hero;
