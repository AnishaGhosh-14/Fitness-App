import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import { TextField, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";

function Login({ islogin, setUser }) {
  const navigate = useNavigate();

  const inputStyle = {
    fontSize:         "1rem",
    color:            "black",
    width:            "120%",
    borderColor:      "white",
    backgroundColor:  "white",
  };

  const [formData, setFormData] = useState({
    name:       "",
    email:      "",
    password:   "",
  });

  const [emailError, setEmailError] =       useState("");
  const [confirmPass, setConfirmPass] =     useState("");
  const [samePassword, notSamePassword] =   useState("");

  const passmatch = (password, samePassword) => {
    if (password === samePassword) {
      setConfirmPass("")
    } else {
      setConfirmPass(<p style={{ color: 'white' }}>Password is not matching</p>)
    }

  }

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const handleSubmit = async () => {
    const { name, email, password } = formData;

    if (!validateEmail(email)) {
      setEmailError(<p style={{ color: 'white' }}>Invalid email format.</p>);
    } else {
      setEmailError("");
    }

    passmatch(password, samePassword);
    
    const data = {
      name:     name,
      email:    email,
      password: password, 
    };

    // console.log("-----Data, ", data);

    try {
      var url = islogin ? 'http://localhost:3090/auth/signin' : 'http://localhost:3090/auth/signup';

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, options);

      if (response.ok) {
        const responseData = await response.json();

        if (responseData) {
          setUser(responseData);
        } else {
          console.log('login bro');
        }
    
        navigate('/home');
      }     
    } catch (error) {
      console.log("------Network Error: ", error);
    }
  }

  return (
    <Grid
      container
      direction=      "column"
      justifyContent= "center"
      alignItems=     "center"
      mt=             "10%"
    >
      <h2
        style={{
          fontFamily: "Poppins",
          fontSize: "3rem",
          color: "white",
          marginLeft: "8%",
        }}
      >
        {islogin ? "LOGIN USER" : "SIGNUP USER"}
      </h2>


      {!islogin && (
        <div
          style={{
            display:        "flex",
            flexDirection:  "row",
            alignContent:   "center",
            alignItems:     "center",
          }}
        >
          <div>
            <PersonIcon
              style={{ fontSize: "2rem", color: "white", width: "2em" }}
            />
          </div>
          <div>
            <TextField
              label=      "Name"
              variant=    "outlined"
              margin=     "normal"
              fullWidth
              required
              value=      {formData.name}
              onChange=   {(e) => setFormData({ ...formData, name: e.target.value })}
              InputProps= {{ style: inputStyle }}
            />
          </div>
        </div>
      )}


      <div
        style={{
          display:        "flex",
          flexDirection:  "row",
          alignContent:   "center",
          alignItems:     "center",
        }}
      >
        <div>
          <EmailIcon
            style={{ fontSize: "2rem", color: "white", width: "2em" }}
          />
        </div>
        <div>
          <TextField
            label=      "Email"
            variant=    "outlined"
            margin=     "normal"
            fullWidth
            required
            value=      {formData.email}
            onChange=   {(e) => setFormData({ ...formData, email: e.target.value })}
            error=      {Boolean(emailError)} //change color into red
            helperText= {emailError}     // the helperText prop of the TextField component
            // provides additional context or guidance below the input field. 
            InputProps= {{ style: inputStyle }}
          />
        </div>
      </div>
      

      <div
        style={{
          display:        "flex",
          flexDirection:  "row",
          alignContent:   "center",
          alignItems:     "center",
        }}
      >
        <div>
          <LockOpenRoundedIcon
            style={{ fontSize: "2rem", color: "white", width: "2em" }}
          />
        </div>
        <div>
          <TextField
            label=      "Password"
            margin=     "normal"
            type=       "password"
            required
            value=      {formData.password}
            onChange=   {(e) => setFormData({ ...formData, password: e.target.value })}
            InputProps= {{ style: inputStyle }}
          />
        </div>
      </div>


      {!islogin && (
        <div
          style={{
            display:        "flex",
            flexDirection:  "row",
            alignContent:   "center",
            alignItems:     "center",
          }}
        >
          <div>
            <HttpsRoundedIcon
              style={{ fontSize: "2rem", color: "white", width: "2em" }}
            />
          </div>
          <div>
            <TextField
              label=      "Re-enter Password"
              variant=    "outlined"
              margin=     "normal"
              type=       "password"
              required
              value=      {samePassword}
              onChange=   {(e) => {notSamePassword(e.target.value)}}
              helperText= {confirmPass}
              InputProps= {{ style: inputStyle }}
            />
          </div>
        </div>
      )}
      

      <Button
        onClick=  {handleSubmit}
        sx={{
          color:        "white",
          borderColor:  "white",
          marginTop:    "6%",
          marginLeft:   "12%",
          ":hover": {
            boxShadow:        6,
            borderColor:      "white",
            backgroundColor:  "white",
            color:            "#d32f2f",
          },
          width:        "30%",
        }}
        size=     "large"
        variant=  "outlined"
        color=    "warning"
      >
        {islogin ? "LOGIN" : "SIGNUP"}
      </Button>
    </Grid>
  );
}

export default Login;


