import styles from "../styles/Home.module.css";
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
import NavToggler from "../components/NavToggle";
import { motion } from "framer-motion";

const heroVariant = {
  initial: {
    translateY: "10%", opacity: 0,
    transition: {
      duration: 2
    }
  },
  animate: { translateY: "0%", opacity: 1 }
}

const heroImageVariant = {
  initial: {
    translateX: "10%", opacity: 0,
    transition: {
      duration: 15
    }
  },
  animate: { translateX: "0%", opacity: 1 }
}

const Home: NextPage = () => {
  return (
    <Box className={styles.container}>
      <NavToggler />
      {/*Hero Section*/}
      <div className={styles.hero}>
        <div className={styles.heroleft}>
          <div>
            <motion.p variants={heroVariant} initial={"initial"} animate={"animate"} exit={"initial"} transition={{ type: "spring" }} className={styles.heroTag}>
              <span className={styles.heroSubheading}>We help you</span>
              <span className={styles.heroHeading}>Conceptualize</span>
              <span className={styles.heroHeading}>Build & Deploy</span>
            </motion.p>
            <p className={styles.subTag}>
              <span>Custom Software Solutions</span> | <span>Minimum Viable Product</span> | <span>Proof of Concepts</span>
            </p>
            <div className={styles.heroactions}>
              <CustomButton type={"filled"} title={"Get a Quote"} arrow />
              <CustomButton type={"outlined"} title={"See Portfolio"} arrow />
            </div>
          </div>
        </div>
        <motion.div className={styles.heroright}
          style={{ background: "url(/hero.svg)", backgroundRepeat: "no-repeat", backgroundPositionX: "right", backgroundPositionY: "top", backgroundSize: "contain" }}
          variants={heroImageVariant}
          initial={"initial"}
          animate={"animate"}
          exit={"initial"}
          transition={{ type: "just" }}
        >
          {/* <Image src={ColoredRect1} className={styles.heroImage} /> */}
        </motion.div>
      </div>
      {/*Service Section*/}
      <div className={styles.services}>
        <SectionTitle title="Our Services" type={"secondary"} watermark={"Services"} />
        <Grid container justifyContent={"space-evenly"} className={styles.servicescontainer}>
          {/* <motion.div  transition={{staggerChildren : 1}} style={{display:"flex"}}> */}
          {services.map((item, i) => <motion.div initial={{ translateY: `${10 * 3}%` }} whileInView={{
            translateY: 0,
            transition: {
              type: "spring",
              delay: 0.1 * i
            }
          }} className={styles.servicecards} key={i}><ServiceCard service={item} key={i} /></motion.div>)}
          {/* </motion.div> */}
        </Grid>
      </div>
      {/*Technologies Section*/}
      <div className={styles.technologies}>
        <SectionTitle title="Technologies" type={"primary"} />
        <Grid container justifyContent={"space-evenly"} sx={{ mt: "114px" }} rowGap={"1.5em"} spacing={8}>
          {technologies.map((item, i) => <motion.div initial={{ scale: 0.5 }} whileInView={{
            scale: 1,
            transition: {
              type: "spring",
              delay: 0.1 * i
            }
          }} key={i}><TechnologyCard technology={item} key={i} /></motion.div>)}
        </Grid>
        <div style={{ marginTop: "114px" }}>
          <CustomButton type={"filled"} title={"Find out more"} arrow />
        </div>
      </div>
      {/*Industries Section*/}
      <div className={styles.services}>
        <SectionTitle title="Industries" type={"secondary"} />
        <Grid container justifyContent={"space-evenly"} className={styles.servicescontainer}>
          {industries.map((item, i) => <motion.div initial={{ translateY: `${10 * 3}%` }} whileInView={{
            translateY: 0,
            transition: {
              type: "spring",
              delay: 0.1 * i
            }
          }} className={styles.industrycards} key={i}><IndustryCard industry={item} key={i} /></motion.div>)}
        </Grid>
      </div>
      {/*Call Section*/}
      <div className={styles.ideas}>
        <div className={styles.ideasLeft}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
            <p className={styles.ideasTag}>
              <span className={styles.ideasSubheading}>Do you have a <span style={{ color: "#3A0CA3", fontWeight: '700', borderBottom: "solid 8px #F72585" }}>Product Idea?</span></span>
              <motion.span initial={{ translateX: -100 }} whileInView={{ translateX: 0 }} className={styles.ideasHeading}>Lets bring your</motion.span>
              <motion.span initial={{ translateX: -100 }} whileInView={{ translateX: 0 }} className={styles.ideasHeading}><span style={{ color: "#F72585" }}>ideas</span> to life</motion.span>
              <motion.span initial={{ translateX: -100 }} whileInView={{ translateX: 0 }} className={styles.ideasHeading}>together</motion.span>
            </p>
            <div className={styles.ideasAction}>
              <CustomButton type={"filled"} title={"Book a call"} arrow />
            </div>
          </div>
        </div>
        <div style={{ height: '100vh', position: "relative", marginTop: "2em" }}>
          <div style={{ position: "absolute", height: "100%", aspectRatio: 1, top: 0, transform: "rotate(-7.44deg)", background: "#26076C", right: "-10%", borderRadius: "90px" }}
          ></div>
          <div style={{left : "20% !important",maxWidth : "85% !important",transform : "translateX(20%)"}}>
            <Image src={flow}/>
          </div>
        </div>
      </div>
      {/*contact Section*/}
      <div className={styles.contactform}>
        <div style={{ height: '100vh', position: "relative", width: "100%", display: "flex", alignItems: "center" }}>
          <p className={styles.watermark} style={{ zIndex: 1, position: "absolute", top: "50%", transform: "translateY(-40%)", color: "#2B0978" }} >
            <span>Kickstart your</span>
            <span>Product Idea</span>
            <span>today</span>

          </p>
          <p style={{ position: "relative", zIndex: 1, transform: "translateY(20%)" }} className={styles.contacttag}>
            <motion.span initial={{ translateX: -100 }} whileInView={{ translateX: 0 }} className={styles.contactTagHeading}>Kickstart your</motion.span>
            <motion.span initial={{ translateX: -100 }} whileInView={{ translateX: 0 }} className={styles.contactTagHeading}>Product Idea</motion.span>
            <motion.span initial={{ translateX: -100 }} whileInView={{ translateX: 0 }} className={styles.contactTagHeading}><span style={{ color: "#F72585" }}>today</span> </motion.span>
          </p>
          <div style={{ position: "absolute", zIndex: 0, height: "100%", aspectRatio: 1, top: "10%", background: "#26076C", transform: "rotate(-7.44deg)", left: "-10%", borderRadius: "90px" }}></div>
        </div>
        <div className={styles.contactFormLeft}>
          <ContactForm />
        </div>

      </div>
      <Box className={styles.footer}></Box>
    </Box>
  );
};

export default Home;
