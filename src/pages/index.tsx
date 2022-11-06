import styles from "../styles/home.module.css";
import { Box, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";

import CustomButton from "../components/CustomButton";
import SectionTitle from "../components/SectionTitle";
import NavBar from "../components/NavBar";
import ServiceCard from "../components/ServiceCard";

import ColoredRect1 from "../assets/images/hero.svg";
import flow from "../assets/images/flow.svg";
import Vector1 from "../assets/images/girl-illustration.svg";
import slide from "../assets/images/slide.svg";

import { industries, services, technologies } from "../Utils/data";
import TechnologyCard from "../components/TechnologyCard";
import IndustryCard from "../components/IndustryCard";
import ContactForm from "../components/ContactForm";

const Home: NextPage = () => {
  return (
    <Box className={styles.container}>
      <NavBar />
      {/*Hero Section*/}
      <div className={styles.hero}>
        <div className={styles.heroleft}>
          <div>
            <p className={styles.heroTag}><span className={styles.heroSubheading}>We help you</span>
              <span className={styles.heroHeading}>Conceptualize</span>
              <span className={styles.heroHeading}>Build & Deploy</span>
            </p>
            <p className={styles.subTag}>
              <span>Custom Software Solutions</span> | <span>Minimum Viable Product</span> | <span>Proof of Concepts</span>
            </p>
            <div className={styles.heroactions}>
              <CustomButton type={"filled"} title={"Get a Quote"} arrow />
              <CustomButton type={"outlined"} title={"See Portfolio"} arrow />
            </div>
          </div>
        </div>
        <div className={styles.heroright} style={{background : "url(/hero.svg)",backgroundRepeat: "no-repeat",backgroundPositionX : "right",backgroundPositionY : "top",backgroundSize : "contain"}}>
          {/* <Image src={ColoredRect1} className={styles.heroImage} /> */}
        </div>
      </div>
      {/*Service Section*/}
      <div className={styles.services}>
        <SectionTitle title="Our Services" type={"secondary"} watermark={"Services"} />
        <Grid container justifyContent={"space-evenly"} className={styles.servicescontainer}>
          {services.map((item, i) => <div className={styles.servicecards}><ServiceCard service={item} key={i} /></div>)}
        </Grid>
      </div>
      {/*Technologies Section*/}
      <div className={styles.technologies}>
        <SectionTitle title="Technologies" type={"primary"} />
        <Grid container justifyContent={"space-evenly"} sx={{ mt: "114px" }} rowGap={"1.5em"} spacing={8}>
          {technologies.map((item, i) => <div><TechnologyCard technology={item} key={i} /></div>)}
        </Grid>
        <div style={{ marginTop: "114px" }}>
          <CustomButton type={"filled"} title={"Find out more"} arrow />
        </div>
      </div>
       {/*Industries Section*/}
       <div className={styles.services}>
        <SectionTitle title="Industries" type={"secondary"} />
        <Grid container justifyContent={"space-evenly"} className={styles.servicescontainer}>
          {industries.map((item, i) => <div className={styles.industrycards}><IndustryCard industry={item} key={i} /></div>)}
        </Grid>
      </div>
       {/*Call Section*/}
       <div className={styles.ideas}>
        <div className={styles.ideasLeft}>
          <div style={{display:"flex",flexDirection : "column",justifyContent:"center"}}>
            <p className={styles.ideasTag}><span className={styles.ideasSubheading}>Do you have a <span style={{color:"#3A0CA3",fontWeight:'700',borderBottom : "solid 8px #F72585"}}>Product Idea?</span></span>
              <span className={styles.ideasHeading}>Lets bring your</span>
              <span className={styles.ideasHeading}><span style={{color :"#F72585"}}>ideas</span> to life</span>
              <span className={styles.ideasHeading}>together</span>
            </p>
            <div className={styles.ideasAction}>
              <CustomButton type={"filled"} title={"Book a call"} arrow />
            </div>
          </div>
        </div>
        <div style={{height : '100vh',position:"relative"}}>
          <div style={{position : "absolute",height : "100%", width: "100%",top: 0,background:"#26076C",transform: "rotate(-7.44deg)",right: "-10%",borderRadius : "90px"}}></div>
          <Image src={flow}/>
        </div>
      </div>
       {/*contact Section*/}
       <div className={styles.ideas}>
       <div style={{height : '100vh',position:"relative"}}>
          <div style={{position : "absolute",height : "100%", width: "100%",top: 0,background:"#26076C",transform: "rotate(-7.44deg);",left: "-10%",borderRadius : "90px"}}></div>
          <Image src={flow}/>
        </div>
        <div className={styles.ideasLeft}>
          <div style={{display:"flex",flexDirection : "column",justifyContent:"center"}}>
            <p className={styles.ideasTag}><span className={styles.ideasSubheading}>Do you have a <span style={{color:"#3A0CA3",fontWeight:'700',borderBottom : "solid 8px #F72585"}}>Product Idea?</span></span>
              <span className={styles.ideasHeading}>Lets bring your</span>
              <span className={styles.ideasHeading}><span style={{color :"#F72585"}}>ideas</span> to life</span>
              <span className={styles.ideasHeading}>together</span>
            </p>
            <div className={styles.ideasAction}>
              <CustomButton type={"filled"} title={"Book a call"} arrow />
            </div>
          </div>
        </div>
      
      </div>
      {/* <Box className={styles.footer}></Box> */}
    </Box>
  );
};

export default Home;
