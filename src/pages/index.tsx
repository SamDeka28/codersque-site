import styles from "./home.module.css";
import { Box, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";

import CustomButton from "../components/CustomButton";
import SectionTitle from "../components/SectionTitle";
import NavBar from "../components/NavBar";
import ServiceCard from "../components/ServiceCard";

import ColoredRect1 from "../assets/images/backdrop.svg";
import Vector1 from "../assets/images/girl-illustration.svg";
import slide from "../assets/images/slide.svg";

import { industries, services, technologies } from "../Utils/data";
import TechnologyCard from "../components/TechnologyCard";
import IndustryCard from "../components/IndustryCard";

const Home: NextPage = () => {
  return (
    <Box className={styles.container}>
      <NavBar />
      <Box className={styles.coloredRect1}>
        <Image src={ColoredRect1} />
      </Box>

      <Grid container spacing={2} padding="5vw">
        <Grid xs={6} paddingTop="10vw">
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
        <Grid xs={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Box className={styles.vector1}>
            <Image src={Vector1} />
          </Box>
        </Grid>
      </Grid>
      <Box className={styles.sectionContainer} padding="5vw">
        <Typography className={styles.titleBack1}>Services</Typography>
        <SectionTitle title="Our Services" />

        <Grid container>
          {services.map((service, index) => {
            return (
              <Grid key={`service-${index}`} xs={4}>
                <ServiceCard service={service} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box className={styles.sectionContainer}>
        <Box className={styles.coloredRect2}>
          <Image src={slide} />
        </Box>
        <Box padding="5vw" paddingTop="10vw">
          <Typography className={styles.titleBack2}>Technologies</Typography>
          <SectionTitle title="Technologies" />

          <Grid container>
            {technologies.map((technology, index) => {
              return (
                <Grid key={`tech-${index}`} xs={2} spacing={2}>
                  <TechnologyCard technology={technology} />
                </Grid>
              );
            })}
          </Grid>
          <Grid container>
            <Grid xs={2} sx={{ marginTop: 15 }}>
              <CustomButton title="Find out more" type="filled" arrow={true} />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className={styles.sectionContainer} padding="5vw" paddingTop="10vw">
        <Typography className={styles.titleBack3}>Industries</Typography>

        <SectionTitle title="Industries" />

        <Grid container sx={{ width: "100%" }}>
          {industries.map((industry, index) => {
            return (
              <Grid key={`ind-${index}`} xs={3} spacing={2}>
                <IndustryCard industry={industry} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
