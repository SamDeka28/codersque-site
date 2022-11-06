import { Box, css, Paper, Stack, styled, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const MyCard = styled(Paper)(
  ({ theme }) => css`
    background-color: white;
    width: 10rem;
    height: 10rem;
    padding: 2rem;
    border-radius: 100%;
    position: relative;
    background-color: white;
    z-index: 20;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  `
);

interface IProps {
  industry: { name: string; icon: any };
}

const IndustryCard: React.FC<IProps> = ({ industry }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <MyCard elevation={3}>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "70px",
              }}
            >
              <Image
                // style={{ width: "10px", height: "10px" }}
                src={industry.icon}
              />
            </Box>
          </Box>
        </MyCard>
      </Box>
      <Typography
        sx={{
          fontSize: "20px",
          margin: "20px 0",
          textAlign: "center",
        }}
      >
        {industry.name}
      </Typography>
    </Box>
  );
};

export default IndustryCard;
