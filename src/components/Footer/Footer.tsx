import { Box, Typography } from "@mui/material";
import React from "react";
import { footerLinks } from "../../Utils/data";
import styles from "../../styles/footer.module.css";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import email from "../../assets/images/email.svg";
import phone from "../../assets/images/phone.svg";

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Box>
        <Grid container spacing={4} rowGap={2} width="100%" padding="5vw">
          {footerLinks.map((section, index) => {
            return (
              <Grid
                key={`section-${index}`}
                xs={12}
                sm={6}
                md={2.4}
                // className={styles.section}
              >
                <Grid container spacing={2} direction="column">
                  <Grid xs={12}>
                    <Typography className={styles.title}>
                    {section.title}
                  </Typography>
                </Grid>
                  {section.links.map((link, indx) => {
                    return (
                      <Grid
                        key={`link-${index}`}
                        xs={12}
                        // className={styles.section}
                      >
                        <Box display="flex">
                          {index === 4 && indx === 0 && (
                            <Box className={styles.icon}>
                              <Image src={email} />
                            </Box>
                          )}
                          {index === 4 && indx === 1 && (
                            <Box className={styles.icon}>
                              <Image src={phone} />
                            </Box>
                          )}

                          <Typography className={styles.links}>
                            {link}
                          </Typography>
                        </Box>
                      </Grid>
                    );
                  })}
                  <Grid xs={12} className={styles.section}>
                    {![0, 4].includes(index) && (
                      <Typography className={styles.explore}>
                        ...explore more
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box className={styles.bottomBar}>
        <Typography className={styles.bottomText}>
          Copyright 2022 ?? Codersque Technologies Pvt Ltd. All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
