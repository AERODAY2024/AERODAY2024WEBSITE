import React from "react";
import cx from "clsx";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { ChevronRightRounded } from "@mui/icons-material";
// import "../../../assets/styles/components/Carousel3D.scss";
import { Star } from "./";

const useStyles = styled({
  root: {
    maxWidth: 304,
    width: 400,
    margin: "auto",
    boxShadow: "none",
    borderRadius: 30,
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
});

const CardNews = ({ editionData }) => {
  const styles = useStyles();

  return (
    <Card
      className={cx(styles.root)}
      style={{
        background: `no-repeat center/100% url(${editionData.background})`,
        height: "400px",
      }}
    >
      <CardMedia
        image={
          "https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
        }
      />
      <CardContent className={styles.content}>
        {/* {[...Array(n)].map((e, i) => (
          <span key={i}>
            <Star height="20px" />
          </span>
        ))} */}
        <h1 className="mt-5" style={{ color: "whitesmoke" }}>
          Aeroday <span className="alternate">{editionData.year}</span>
        </h1>
        {/* <p>
          Kayaks crowd Three Sisters Springs, where people and manatees maintain
          controversial coexistence.
        </p> */}

        {/* <Button color={"primary"} fullWidth className={styles.cta}>
          Find Out More <ChevronRightRounded />
        </Button> */}
      </CardContent>
    </Card>
  );
};

export { CardNews };
