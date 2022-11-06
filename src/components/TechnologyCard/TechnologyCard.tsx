import { Box, css, Paper, Stack, styled, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const MyCard = styled(Paper)(
  ({ theme }) => css`
    background-color: white;
    width: 7rem;
    height: 7rem;
    padding: 2rem;
    border-radius: 20px;
    position: relative;
    background-color: #4361ee;
    z-index: 20;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index : 1;
    box-shadow : 0px 4px 50px 39px rgba(33,8,90,.30);
    ${theme.breakpoints.down('md')}{
      width : 6.5rem;
      box-shadow : 0px 4px 10px 20px rgba(33,8,90,.30);
    }
  `
);

interface IProps {
  technology: { name: string; icon: any };
}

const TechnologyCard: React.FC<IProps> = ({ technology }) => {
  return (
    <MyCard>
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
            src={technology.icon}
          />
        </Box>
        <Typography sx={{ fontSize: "20px", margin: "10px 0" }}>
          {technology.name}
        </Typography>
      </Box>
    </MyCard>
  );
};

export default TechnologyCard;
