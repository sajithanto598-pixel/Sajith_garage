import { motion } from "framer-motion";

function ImageCard({ image }) {
  return (
    <motion.div 
      className="card"
      whileHover={{ scale: 1.05 }}
    >
      <img src={image.url} alt={image.title} />
      <h3>{image.title}</h3>
      <p>{image.desc}</p>
    </motion.div>
  );
}

export default ImageCard;