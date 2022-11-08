import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "../../assets/images/logo.svg";
import logoAltername from "../../assets/images/logoAlt.svg";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function NavBar({navBarAlt=false}) {
  const router = useRouter();
  console.log(router.pathname);
  console.log(navBarAlt)
  return (
    <Box sx={{ position: "relative" }}>
      <AppBar position="absolute" color="transparent" elevation={0}>
        <Toolbar className={styles.navbar}>
          <Box width={navBarAlt ? 180 : 120}>
            <>{navBarAlt ? <Image src={logoAltername}/> : <Image src={logo} />}</>
          </Box>

          <Stack direction="row" spacing={5}>
            <Link href="/">
              <Typography
                className={
                  router.pathname == "/" ? styles.active : navBarAlt ? styles.inactiveAlt : styles.inactive
                }
              >
                Home
              </Typography>
            </Link>
            {/* <Link href="/">
              <Typography
                className={
                  router.pathname == "/services"
                    ? styles.active
                    : styles.inactive
                }
              >
                Services
              </Typography>
            </Link> */}
            <Link href="/">
              <Typography
                className={
                  router.pathname == "/how-we-work"
                    ? styles.active
                    : navBarAlt ? styles.inactiveAlt : styles.inactive
                }
              >
                How we work
              </Typography>
            </Link>
            <Link href="/">
              <Typography
                className={
                  router.pathname == "/about-us"
                    ? navBarAlt ? styles.activeAlt : styles.active 
                    : navBarAlt ? styles.inactiveAlt : styles.inactive
                }
              >
                About Us
              </Typography>
            </Link>

            <Link href="/portfolio">
              <Typography
                className={
                  router.pathname == "/portfolio" || router.pathname == "/portfolio/casestudy"
                    ? navBarAlt ? styles.activeAlt : styles.active 
                    : navBarAlt ? styles.inactiveAlt : styles.inactive
                }
              >
                Portfolio
              </Typography>
            </Link>
            <Link href="/portfolio">
              <Typography
                className={
                  router.pathname == "/contact-us"
                    ? styles.active
                    : navBarAlt ? styles.inactiveAlt : styles.inactive
                }
              >
                Contact Us
              </Typography>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
