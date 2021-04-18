import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";

import baigtas from "../images/Baigtas.png";
import baigtas2 from "../images/Baigtas2.png";
import baigtas3 from "../images/Baigtas3.png";
import baigtas4 from "../images/Baigtas4.png";
import baigtas5 from "../images/Baigtas5.png";
import baigtas6 from "../images/Baigtas6.png";
import baigtas7 from "../images/Baigtas7.png";
import baigtas8 from "../images/Baigtas8.png";
import baigtas9 from "../images/Baigtas9.png";
import baigtas10 from "../images/Baigtas10.png";
import baigtas11 from "../images/Baigtas11.png";
import baigtas12 from "../images/Baigtas12.png";
import baigtas13 from "../images/Baigtas13.png";
import baigtas14 from "../images/Baigtas14.png";

import { motion, usePresence } from "framer-motion";

import Container from "@material-ui/core/Container";
import { isBrowser } from "react-device-detect";

export default function Book({ open }) {
  const [page, setPage] = useState(0);

  return (
    <div className="book">
      <Container maxWidth="xl">
        <motion.div
          animate={{
            x: isBrowser && page === 0 ? -300 : page === 13 ? 300 : 0,
          }}
          transition={{ type: "tween", ease: "easeOut" }}
          className="book"
        >
          <HTMLFlipBook
            width={700}
            height={850}
            size="stretch"
            minWidth={315}
            minHeight={200}
            maxWidth={700}
            maxHeight={850}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            getPageCount={console.log("hrey")}
            onFlip={(page) => setPage(page.data)}
          >
            <img src={baigtas} alt="" />
            <img src={baigtas2} alt="" />
            <img src={baigtas3} alt="" />
            <img src={baigtas4} alt="" />
            <img src={baigtas5} alt="" />
            <img src={baigtas6} alt="" />
            <img src={baigtas7} alt="" />
            <img src={baigtas8} alt="" />
            <img src={baigtas9} alt="" />
            <img src={baigtas10} alt="" />
            <img src={baigtas11} alt="" />
            <img src={baigtas12} alt="" />
            <img src={baigtas13} alt="" />
            <img src={baigtas14} alt="" />
          </HTMLFlipBook>
        </motion.div>
      </Container>
    </div>
  );
}
