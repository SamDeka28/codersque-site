import React from "react";
import NavBar from "../../../components/NavBar";
import { Grid } from "@mui/material";
import styles from "../../../styles/casestudy.module.css";
import CaseStudyMobView1 from "../../../assets/images/CaseStudyMobView1.svg";
import AboutTheProject from "../../../assets/images/ABOUT THE PROJECT.svg";
import AboutTheProjectSeparator from "../../../assets/images/ATPSeparator.svg";
import collectivePic from "../../../assets/images/collectivePic.svg";
import Image from "next/image";

type Props = {
  title: string;
  tagline?: string;
  image1: any;
  image2: any;
  collectivePics: any;
  techChallenge: string;
  solution: any;
};

function CaseStudy({
  title,
  tagline,
  image1,
  image2,
  collectivePics,
  techChallenge,
  solution,
}: Props) {
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
        <Grid xs={12} sm={5} md={2} style={{ marginTop: 150 }}>
          <Image
            src={AboutTheProject}
            alt="About the Project"
            width="300px"
            height="100px"
          />
        </Grid>
        <Grid xs={12} sm={5} md={2} className={styles.separator}>
          <Image
            src={AboutTheProjectSeparator}
            alt="About the Project"
            width="100px"
          />
        </Grid>
        <Grid xs={12} sm={5} md={2} style={{ marginTop: 0, fontSize: 16 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
        </Grid>
      </Grid>
      <div
        style={{
          backgroundColor: "#D2E1F1",
          height: "600px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image src={collectivePic} height="600px" />
      </div>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "100px 100px 100px 160px",
          }}
        >
          <Grid container>
            <Grid item xs={12} style={{ marginBottom: 30 }}>
              <span
                style={{
                  color: "#26076C",
                  marginRight: 20,
                  fontWeight: 700,
                  fontSize: 48,
                }}
              >
                TECHNICAL
              </span>{" "}
              <span style={{ color: "#F72585", fontWeight: 700, fontSize: 48 }}>
                CHALLENGE
              </span>
            </Grid>
            <Grid item xs={12}>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                est a, mattis tellus. Sed dignissim, metus nec fringilla
                accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
                sed risus. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                lacus, ut interdum tellus elit sed risus. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
                accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
                sed risus.
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "100px 100px 100px 160px",
            backgroundColor: "#F8F8F8",
          }}
        >
          <Grid container>
            <Grid item xs={12} style={{ marginBottom: 30 }}>
              <span
                style={{
                  color: "#26076C",
                  marginRight: 20,
                  fontWeight: 700,
                  fontSize: 48,
                }}
              >
                SOLUTION
              </span>{" "}
            </Grid>
            <Grid item xs={12}>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                est a, mattis tellus. Sed dignissim, metus nec fringilla
                accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
                sed risus. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                lacus, ut interdum tellus elit sed risus. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
                accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
                sed risus.
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div style={{ height: 600, backgroundColor: "#26076C" }}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 70,
          paddingBottom: 70,
        }}
      >
        <div
          style={{
            backgroundImage: "linear-gradient(#43CBFF,#9708CC)",
            height: 400,
            width: "80%",
            borderRadius: 50,
          }}
        ></div>
      </div>
      <div style={{ height: 200, backgroundColor: "#3A0CA3" }}></div>
    </>
  );
}

export default CaseStudy;
