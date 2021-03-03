import {motion} from "framer-motion";
import React from 'react'

function Example({setCount, count}) {

    return (
        <motion.div
            onClick={() => setCount(count + 1)}
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            initial={{scale: 0}}
            transition={{ duration: 2 }}
        >
        </motion.div>
    )
}

export default Example
