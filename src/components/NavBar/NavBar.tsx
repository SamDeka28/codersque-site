import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "../../assets/images/logo-name.png";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { Stack } from "@mui/material";

export default function NavBar() {
  return (
    <Box sx={{ position: "relative" }}>
      <AppBar position="absolute" color="transparent" elevation={0}>
        <Toolbar className={styles.navbar}>
          <Box width={120}>
            <Image src={logo} />
          </Box>

          <Stack direction="row" spacing={5}>
            <Typography>Home</Typography>
            <Typography>Services</Typography>
            <Typography>How we work</Typography>
            <Typography>About Us</Typography>
            <Typography>Contact Us</Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
