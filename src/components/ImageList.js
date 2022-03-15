import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = (props) => {
  let imageList = props.element.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{imageList}</div>;
};

export default ImageList;
