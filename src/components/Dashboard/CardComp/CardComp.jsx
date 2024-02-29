import React from "react";
import styles from "./CardComp.module.css";
import { Card, CardContent, Typography } from "@mui/material";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";

const CardComp = () => {
  return (
    <div className={styles["card-container"]}>
      <Card
        sx={{ maxWidth: 345, boxShadow: 5 }}
        className={styles["confirmed-card"]}
      >
        <CardContent className={styles["card-content"]}>
          <Typography gutterBottom variant="h5" component="div">
            Confirmed Cases
          </Typography>
          <Typography variant="body2">Real Data</Typography>
          <Typography variant="body2">Date</Typography>
          <Typography variant="body2">
            Number of confirmed cases in COVID 19
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{ maxWidth: 345, boxShadow: 5 }}
        className={styles["recovered-card"]}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Recovered Cases
          </Typography>
          <Typography variant="body2">Real Data</Typography>
          <Typography variant="body2">Date</Typography>
          <Typography variant="body2">
            Number of recovered cases in COVID 19
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{ maxWidth: 345, boxShadow: 5 }}
        className={styles["deceased-card"]}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Deceased Cases
          </Typography>
          <Typography variant="body2">Real Data</Typography>
          <Typography variant="body2">Date</Typography>
          <Typography variant="body2">
            Number of deceased cases in COVID 19
          </Typography>
        </CardContent>
      </Card>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
        <Button size="small" startIcon={<FavoriteIcon />}>
          Favorite
        </Button>
        <Button size="small" startIcon={<ShareIcon />}>
          Share
        </Button>
      </CardActions> */}
    </div>
  );
};

export default CardComp;
