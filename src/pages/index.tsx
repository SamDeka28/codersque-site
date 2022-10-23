import { Box, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";

import NavBar from "../components/NavBar";
import ColoredRect1 from "../assets/images/colored-rect-1.png";
import Vector1 from "../assets/images/vector-1.png";
import styles from "../styles/Home.module.css";
import CustomButton from "../components/CustomButton";
import SectionTitle from "../components/SectionTitle";
import { services } from "../Utils/data";
import ServiceCard from "../components/ServiceCard";

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
          <Grid container width={"80%"} paddingTop="5rem">
            <Grid xs={6} sx={{ paddingLeft: 0 }}>
              <CustomButton title="Get a Quote" type="filled" arrow={true} />
            </Grid>
            <Grid xs={6}>
              <CustomButton
                title="See Portfolio"
                type="outlined"
                arrow={true}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={6}>
          <Box className={styles.vector1}>
            <Image src={Vector1} />
          </Box>
        </Grid>
      </Grid>
      <Box className={styles.sectionContainer}>
        <SectionTitle title="Our Services" />

        <Grid container>
          {services.map((service) => {
            return (
              <Grid xs={4}>
                <ServiceCard service={service} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box className={styles.sectionContainer}>
        <SectionTitle title="Technologies" />
      </Box>
      <Box className={styles.sectionContainer}>
        <SectionTitle title="Industries" />
      </Box>
    </Box>
  );
};

export default Home;
