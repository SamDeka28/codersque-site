import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";

import NavBar from "../components/NavBar";
import ColoredRect1 from "../assets/images/colored-rect-1.png";
import Vector1 from "../assets/images/vector-1.png";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Box className={styles.container}>
      <NavBar />
      <Box className={styles.coloredRect1}>
        <Image src={ColoredRect1} />
      </Box>
      <Grid container spacing={2} paddingTop="18vw">
        <Grid xs={6}>
          <Typography variant="h4" color="primary">
            We help you
          </Typography>
          <Typography variant="h2" color="primary">
            Conceptualize
          </Typography>
          <Typography variant="h2" color="primary">
            Build & Deploy
          </Typography>
          <Typography sx={{ marginTop: 8 }}>
            Engineers united in novel ways to turn your Vision into Reality.
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Box className={styles.vector1}>
            <Image src={Vector1} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
