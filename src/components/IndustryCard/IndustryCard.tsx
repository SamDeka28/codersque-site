import { Box, css, Paper, Stack, styled, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const MyCard = styled(Paper)(
  ({ theme }) => css`
    background-color: white;
    width: 10rem;
    aspect-ratio : 1;
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
    box-shadow : 0px 4px 30px 59px rgba(204,204,204,.25);
    z-index: 1;
    ${theme.breakpoints.down("md")}{
      padding : 2vw;
      border-radius : 8px;
      box-shadow : 0px 4px 50px 20px rgba(204,204,204,.25);
    }
  `
);

interface IProps {
  industry: { name: string; icon: any };
}

const IndustryCard: React.FC<IProps> = ({ industry }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between",flexDirection: "column",alignItems : "center" }}>
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
          fontFamily: 'Josefin Sans'
        }}
      >
        {industry.name}
      </Typography>
    </Box>
  );
};

export default IndustryCard;
