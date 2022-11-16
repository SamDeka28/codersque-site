import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../CustomButton";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <Box>
      <Typography sx={{ fontWeight: "bold", margin: "1em 0" }} variant="h4">
        Request a <span style={{ color: "#F72585" }}>Proposal</span>
      </Typography>

      <Stack spacing={2} width="30vw">
        <Box className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            placeholder="Name"
          ></input>
        </Box>
        <Box className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            placeholder="Email Address"
          ></input>
        </Box>

        <Box>
          <Box sx={{ display: "flex" }}>
            <Box className={styles.countryCode}>
              <Box>IN</Box>
              <Box>+91</Box>
            </Box>
            <Box className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                placeholder="Contact Number"
              ></input>
            </Box>
          </Box>
        </Box>

        <Box className={styles.inputContainer}>
          <input
            className={styles.input}
            type="number"
            placeholder="Budget"
          ></input>
        </Box>

        <Box className={styles.textAreaContainer}>
          <textarea style={{width : "95%", height : '88%',border : "none",background:"transparent"}} className={styles.textarea}></textarea>
        </Box>
        <Box width="100%" className={styles.contactAction}>
          <CustomButton title="Attach file" type="outlined" arrow={false}/>
        </Box>
        <Box sx={{ display: "flex" }}>
          <input style={{ marginRight: "10px" }} type="checkbox"></input>
          <Typography variant="h6" fontSize="0.8em">
            Send me acopy of NDA
          </Typography>
        </Box>
        <Box width="100%" className={styles.contactAction}>
          <CustomButton title="Submit" type="filled" arrow={false} />
        </Box>
      </Stack>
    </Box>
  );
};

export default ContactForm;
