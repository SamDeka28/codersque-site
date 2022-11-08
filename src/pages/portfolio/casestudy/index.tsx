import React from "react";
import NavBar from "../../../components/NavBar";
import { Grid } from "@mui/material";
import styles from "../../../styles/casestudy.module.css";
import CaseStudyMobView1 from "../../../assets/images/CaseStudyMobView1.svg";
import AboutTheProject from "../../../assets/images/ABOUT THE PROJECT.svg";
import AboutTheProjectSeparator from "../../../assets/images/ATPSeparator.svg";
import Image from "next/image";

type Props = {
  title: string;
  tagline?: string;
  image1: any;
  image2: any;
};

function CaseStudy({ title, tagline, image1, image2 }: Props) {
  return (
    <>
      <Grid container item xs={12} className={styles.mainContainer}>
        <Grid item xs={12}>
          <NavBar navBarAlt={true} />
        </Grid>
        <Grid item xs={12} className={styles.titleContainer}>
          <div className={styles.titleText}>DBS Bank</div>
          <div className={styles.taglineText}>
            Digitalization of Transaction
          </div>
          <Grid container className={styles.shortDescriptionContainer}>
            <Grid item lg={3} md={4} sm={6} xs={6}>
              <div className={styles.shortDescriptionTitleText}>Services:</div>
              <div style={{ marginTop: 10 }}>
                Ideation, Design, Development and Deployment
              </div>
            </Grid>
            <Grid item lg={3} md={3} sm={4} xs={6}>
              <div className={styles.shortDescriptionTitleText}>Industry:</div>
              <div style={{ marginTop: 10 }}>Finance</div>
            </Grid>
          </Grid>
        </Grid>
        <div className={styles.image1}>
          <Image src={CaseStudyMobView1} alt="desktop" />
        </div>
        <div className={styles.image2}>
          <Image src={CaseStudyMobView1} alt="desktop" />
        </div>
      </Grid>
      <Grid container className={styles.secondContainer}>
        <Grid xs={5} style={{ marginTop: 150 }}>
          <Image src={AboutTheProject} alt="About the Project" />
        </Grid>
        <Grid xs={2}>
          <Image
            src={AboutTheProjectSeparator}
            alt="About the Project"
            width="100px"
          />
        </Grid>
        <Grid xs={5} style={{ marginTop: 150, fontSize: 16 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
        </Grid>
      </Grid>
    </>
  );
}

export default CaseStudy;
