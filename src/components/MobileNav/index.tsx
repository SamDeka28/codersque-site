import React, { useState, useEffect } from "react";
import { Drawer, Box, Typography, Button } from "@mui/material";
import styles from "../../styles/navbar.module.css";
import crossIcon from "../../assets/images/cross.svg";
import logo from "../../assets/images/transLogo.png";
import logoColor from "../../assets/images/logo.svg";
import collapseIcon from "../../assets/images/toggler.png";
import collapseIconSec from "../../assets/images/toggler.svg";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const TopBarMobile: NextPage = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
 

  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log("position-doggy",position)
    setScrollHeight(position);
};

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);

  return (
    <div className={scrollHeight>50 ?styles.roofTopScroll : styles.roofTop}>
      <div className={scrollHeight>50?styles.fixedContentScroll: styles.fixedContent}>
        <Box width={100}>
          <Link href="/">
            <Image src={scrollHeight>20 ?logoColor:logo} />
          </Link>
        </Box>
        <Image
          src={scrollHeight>20 ? collapseIconSec:collapseIcon}
          width="25px"
          alt="collapseIcon"
          onClick={toggleDrawer}
        />
      </div>
      <Drawer anchor={"top"} open={isOpen} onClose={toggleDrawer}>
        <div role="presentation" className={styles.drawerDiv}>
          <Image
            src={crossIcon}
            width="25px"
            height="25px"
            alt="crossIcon"
            onClick={toggleDrawer}
          />
        </div>
        <div className={styles.contentDiv}>
          <Link href="/">
            <Typography
              className={styles.lineItem}
              variant="h5"
              align="left"
              onClick={toggleDrawer}
            >
              Home
            </Typography>
          </Link>
          <Link href="/">
            <Typography
              className={styles.lineItem}
              variant="h5"
              align="left"
              onClick={toggleDrawer}
            >
              How we work
            </Typography>
          </Link>
          <Link href="/">
            <Typography
              className={styles.lineItem}
              variant="h5"
              align="left"
              onClick={toggleDrawer}
            >
              About Us
            </Typography>
          </Link>
          <Link href="/portfolio">
            <Typography
              className={styles.lineItem}
              variant="h5"
              align="left"
              onClick={toggleDrawer}
            >
              Portfolio
            </Typography>
          </Link>
          <Link href="/">
            <Typography
              className={styles.lineItem}
              variant="h5"
              align="left"
              onClick={toggleDrawer}
            >
              Contact Us
            </Typography>
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default TopBarMobile;
