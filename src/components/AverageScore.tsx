import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  avgscore: number;
}

const AverageScore = ({ avgscore }: Props) => {
  let color = avgscore > 80 ? "green" : avgscore > 60 ? "yellow" : "red";
  return (
    <Badge fontSize={"14px"} padding={1} colorScheme={color}>
      {avgscore}
    </Badge>
  );
};

export default AverageScore;
