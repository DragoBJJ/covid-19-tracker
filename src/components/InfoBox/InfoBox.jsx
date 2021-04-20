import React from "react";
import { CardContent, Typography } from "@material-ui/core";
import { StyledCard, StyledTotal, StyledCases } from "./StyledInfoBox";

const InfoBox = ({ title, cases, total, active, isRed, isDeath, onClick }) => {
  return (
    <StyledCard
      onClick={onClick}
      active={active}
      isRed={isRed}
      isDeath={isDeath}
    >
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary">
          {title}
        </Typography>
        <StyledCases isDeath={isDeath} isRed={isRed}>
          Today: {cases}
        </StyledCases>
        <StyledTotal>Total: {total}</StyledTotal>
      </CardContent>
    </StyledCard>
  );
};

export default InfoBox;
