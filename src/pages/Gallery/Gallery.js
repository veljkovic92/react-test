import bikes from "../Gallery.json";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import classes from './Gallery.module.scss';

const Gallery = () => {
  return (
    <section className={classes.gallery}>
      <h2>Our most sold bikes in 2022</h2>
      {bikes.map((bike, index) => {
        return <GalleryItem key={`bike-${index}`} bike={bike} />;
      })}
    </section>
  );
};

export default Gallery;
