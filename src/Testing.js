import React, { useState } from 'react'
import {motion, useMotionValue, useTransform} from "framer-motion";

function Testing() {

    const x = useMotionValue(0)
    const background = useTransform(
        x,
        [-100, 0, 100],
        ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
    )

  return (
    <motion.nav
        style={background}
        drag
        dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
        }}
        initial={{scale: 2}}
        transition={{duration: 3}}
        whileTap={{
            scale: [1, 3, 3, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"]
        }}
    >        
    <div className="bruh"></div>
    </motion.nav>
  )

}

export default Testing
