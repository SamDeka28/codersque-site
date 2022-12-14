import { Grid, Box, Typography, Button } from "@mui/material";
import type { NextPage } from "next";
import styles from "../../styles/portfolio.module.css";
import { FIRST_TAGLINE, CONTENT_DETAILS } from "../../Utils/portfolioContent";
import Image from "next/image";
import ProjectDesc from "../../components/PortfolioProjectDesc";
import NavToggler from "../../components/NavToggle";
import { useEffect } from "react";
import { motion } from "framer-motion"

const Portfolio: NextPage = () => {
  useEffect(() => { }, []);
  return (
    <Grid container item xs={12} className={styles.container}>
      <Grid item xs={12}>
        <NavToggler darkBg={true} />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        xl={12}
        className={styles.taglineContainer}
      >
        <Typography variant='h6' className={styles.secondaryText}><div className={styles.back} />We don&apos;t just build</Typography>
        <Typography variant="h4" className={styles.secondLine}>
          We deliver <div className={styles.colorText1}>
            <div className={styles.animated}>
              <span>excellence</span>
              <span>Quality</span>
              <span>Innovation</span></div>.
          </div>
        </Typography>
        <Typography variant="h6" className={styles.firstLine}>
          {FIRST_TAGLINE}
        </Typography>
      </Grid>
      {CONTENT_DETAILS.map((item, key) => (
        <Grid
          container
          item
          key={key}
          xs={12}
          md={12}
          lg={12}
          xl={12}
          className={styles.portfolioDetails}
          spacing={3}
        >
          <Grid item xs={12} md={6} xl={6}>
            {key % 2 !== 0 ? (
              <Box className={styles.backgroundDesRev}>
                <div className={styles.leftControl}>
                  <Image
                    src={item.image}
                    width="700px"
                    className={styles.backgroundImg}
                    alt="desktop"
                  />
                </div>
              </Box>
            ) : (
              <ProjectDesc
                type={item.type}
                name={item.name}
                project={item.project}
                content={item.content}
                button_text={item.button_text}
                alignText={true}
                image={item.image}
              />
            )}
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            {key % 2 == 0 ? (
              <Box className={styles.backgroundDes}>
                <div className={styles.rightControl}>
                  <Image
                    src={item.image}
                    width="700px"
                    className={styles.backgroundImg}
                    alt="desktop"
                  />
                </div>
              </Box>
            ) : (
              <ProjectDesc
                type={item.type}
                name={item.name}
                project={item.project}
                content={item.content}
                button_text={item.button_text}
                alignText={false}
                image={item.image}
              />
            )}
          </Grid>
        </Grid>
      ))}
      <Grid
        container
        item
        xs={12}
        md={12}
        lg={12}
        xl={12}
        className={styles.buttonDiv}
        spacing={3}
      >
        <Button
          variant="outlined"
          color="primary"
          className={styles.buttonDesLoad}
        >
          Load More
        </Button>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
