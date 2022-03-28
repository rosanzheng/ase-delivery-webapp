import React from "react";
import { Typography } from "../components";
import "../assets/css/LoadingScreen.css";

export const LoadingScreen = (): JSX.Element => (
  <div className="wrapper">
    <div className="body">
      <div className="front wheel" />
      <div className="back wheel" />
    </div>
    <div className="cover">
      <div className="path" />
    </div>
    <Typography color="dark" variant="h3" classes="mt-4 fst-italic">
      ASEDelivery
    </Typography>
  </div>
);
