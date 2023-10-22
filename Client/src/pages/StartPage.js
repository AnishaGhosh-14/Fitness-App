import React, { useState, useEffect } from "react";
import { Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import banner from "../assets/images/starting-img.jpg";
import "../App.css";
import Login from "../components/Login";

function StartPage({ setUser }) {
  const imageStyle = {
    width:    "100%",
    height:   "100%",
  };

  const [isSigninVisible, setisSigninVisible] = useState(false);
  const [islogin, setlogin] = useState(false);
  const [grid, setGrid] = useState(3);

  const signup = () => {
    setisSigninVisible(true);
  };

  const login = () => {
    setlogin(true)
    setisSigninVisible(true);
  }


  useEffect(() => {
    if (isSigninVisible) {
      const timer = setTimeout(() => {
        setGrid(7);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setGrid(3);
    }
  }, [isSigninVisible]);

  return (
    <Grid
      container
      spacing=  {0}
      position= "relative"
      sx=       {{ backgroundColor: "black" }}
    >
      <Grid item xs={9}>
        <img src={banner} style={imageStyle} alt="" />
      </Grid>
      <Grid
        item
        xs={grid}
        sx={{
          direction:        "flex",
          backgroundColor:  "#d32f2f",
          position:         "absolute",
          right:            0,
          width:            "100%",
          height:           "100%",
          opacity:          0.9,
          zIndex:           12,
          transition:       "all 0.3s ease",
        }}
      >
        {isSigninVisible ? (
          <Login isSigninVisible={isSigninVisible} islogin={islogin} setUser={setUser} />
        ) : (
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            marginTop="40%"
            paddingLeft={3}
          >
            <h1
              style={{
                color: "white",
                fontWeight: "bolder",
                fontSize: "3.2rem",
                letterSpacing: "3px",
                fontFamily: "Poppins",
                lineHeight: 1,
              }}
            >
              BUILD <br /> YOUR
              <br /> BODY
              <br /> STRONG
              <br />
            </h1>
            <p
              style={{
                color: "white",
                fontFamily: "Poppins",
                marginTop: "6%",
                lineHeight: 1,
                textAlign: "justify",
                marginRight: "14%",
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum iure corporis cumque excepturi incidunt adipisci optio
              illo, repudiandae architecto officiis reiciendis voluptatibus
              dolores aut totam sapiente quam pariatur, et porro exercitationem.
            </p>
            <Button
              sx={{
                color: "white",
                borderColor: "white",
                marginTop: "6%",
                ":hover": {
                  boxShadow: 6,
                  borderColor: "white",
                },
                width: "80%",
              }}
              onClick={signup}
              size="large"
              variant="     outlined"
              color="warning"
            >
              Sign Up
            </Button>
            <Button
              sx={{
                borderColor: "white",
                backgroundColor: "white",
                color: "#d32f2f",
                marginTop: "2%",
                ":hover": {
                  boxShadow: 6,
                  borderColor: "white",
                  backgroundColor: "white",
                  color: "#d32f2f",
                },
                width: "80%",
              }}
              onClick={login}
              size="large"
              variant="outlined"
              color="warning"
            >
              Sign In
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default StartPage;
