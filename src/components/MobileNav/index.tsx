import React, { useState, useEffect } from "react";
import { Drawer, Box, Typography, Button } from "@mui/material";
import styles from "../../styles/navbar.module.css";
import crossIcon from "../../assets/images/cross2.png";
import logo from "../../assets/images/transLogo.png";
import collapseIcon from "../../assets/images/toggler.png";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const TopBarMobile: NextPage = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  // const navigateTo = routePath :any => {
  //   setIsOpen(!isOpen);
  //   // navigate(routePath);
  // };

  return (
    <div className={styles.roofTop}>
      <div className={styles.fixedContent}>
      <Box width={100}>
            <Image src={logo} />
          </Box>
        <Image
          src={collapseIcon}
          width="25px"
          // className={styles.backgroundImg}
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
            // className={styles.backgroundImg}
            alt="crossIcon"
            onClick={toggleDrawer}
          />
        </div>
        <div className={styles.contentDiv}>
          <Link href="/" >
            <Typography className={styles.lineItem} variant="h5" align="left" onClick={toggleDrawer}>
              Home
            </Typography>
          </Link>
          <Link href="/">
            <Typography className={styles.lineItem} variant="h5" align="left" onClick={toggleDrawer}> 
              How we work
            </Typography>
          </Link>
          <Link href="/">
            <Typography className={styles.lineItem} variant="h5" align="left" onClick={toggleDrawer}>
              About Us
            </Typography>
          </Link>
          <Link href="/portfolio">
            <Typography className={styles.lineItem} variant="h5" align="left" onClick={toggleDrawer}>
              Portfolio
            </Typography>
          </Link>
          <Link href="/">
            <Typography className={styles.lineItem} variant="h5" align="left" onClick={toggleDrawer}>
              Contact Us
            </Typography>
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default TopBarMobile;
