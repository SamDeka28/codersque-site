import { Grid, Box, Typography, Button } from "@mui/material";
import NavBar from "../../components/NavBar";
import type { NextPage } from "next";
import styles from "../../styles/portfolio.module.css";
import { FIRST_TAGLINE, CONTENT_DETAILS } from "../../Utils/portfolioContent";
import Image from "next/image";
import ProjectDesc from "../../components/PortfolioProjectDesc";

const Home: NextPage = () => {
  return (
    <Grid container item xs={12} className={styles.container}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={10}
        xl={7}
        className={styles.taglineContainer}
      >
        <Typography variant="h6" className={styles.firstLine}>
          {FIRST_TAGLINE}
        </Typography>
        <Typography variant="h4" className={styles.secondLine}>
          {" "}
          Some Priceless <span className={styles.colorText1}>Possessions.</span>
        </Typography>
        <Typography variant="h6" className={styles.content}>
          Glide through some of the{" "}
          <span className={styles.colorText2}>awesomeness</span> created by{" "}
          <span className={styles.colorText1}>our team.</span> Each project is a
          work of art with the mix of{" "}
          <span className={styles.colorText1}>Technology</span> and{" "}
          <span className={styles.colorText1}>Innovation</span> serving the
          world as a solution to comonly faced{" "}
          <span className={styles.colorText2}>problems</span>
        </Typography>
      </Grid>
      {CONTENT_DETAILS.map((item, key) => (
        <Grid
          container
          item
          xs={12}
          md={12}
          lg={12}
          xl={12}
          className={styles.portfolioDetails}
          spacing={3}
          key={`item-${key}`}
        >
          <Grid item xs={12} md={6} xl={6}>
            {key % 2 !== 0 ? (
              <Box className={styles.backgroundDesRev}>
                <Image
                  src={item.image}
                  width="700px"
                  className={styles.backgroundImg}
                  alt="desktop"
                />
              </Box>
            ) : (
              <ProjectDesc
                type={item.type}
                name={item.name}
                project={item.project}
                content={item.content}
                button_text={item.button_text}
                alignText={true}
              />
            )}
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            {key % 2 == 0 ? (
              <Box className={styles.backgroundDes}>
                <Image
                  src={item.image}
                  width="700px"
                  className={styles.backgroundImg}
                  alt="desktop"
                />
              </Box>
            ) : (
              <ProjectDesc
                type={item.type}
                name={item.name}
                project={item.project}
                content={item.content}
                button_text={item.button_text}
                alignText={false}
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

export default Home;
