import React from "react";

import { Avatar, CardHeader, Button, Card } from "@mui/material";
import { red } from "@mui/material/colors";

const PopularUserCard = () => {
  return (
    <div>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={<Button size="small">Follow</Button>}
        title="Vivek"
        subheader="@Vivek12jul"
      />
    </div>
  );
};

export default PopularUserCard;
