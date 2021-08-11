// DEPENDENCIES
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// IMAGES
import background from "../images/background.jpg";

export default function Background() {
  return (
    <div className="main-container">
      <AnimatePresence exitBeforeEnter>
        <motion.img
          animate={{ scale: 1.1 }}
          transition={{
            duration: 20,
          }}
          className="background-image"
          src={background}
          alt=""
        />
      </AnimatePresence>
    </div>
  );
}
