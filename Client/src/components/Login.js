import React ,{useState} from "react";
import Grid from "@mui/material/Grid";
import { TextField, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import { Link } from "react-router-dom";

function Login({isSigninVisible,islogin}) {
    var a,b,c,d;
    // console.log(isSigninVisible)
    // console.log(islogin)
  const inputStyle = {
    fontSize: "1rem",
    color: "black",
    width: "120%",
    borderColor: "white",
    backgroundColor: "white",
  };
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
 //console.log(email);
  const [password,setPassword] = useState("");
  const[confirmPass,setConfirmPass]=useState("");
  const[samePassword,notSamePassword]=useState("");

  function passmatch(password,samePassword){
    if(password===samePassword){
        console.log(password+"==="+samePassword)
        setConfirmPass("")
        a=1;

     }
    else{
        
        setConfirmPass(<p style={{color:'white'}}>Password is not matching</p>)
    }

  }
  const handlePasswordChange=(e)=>{
  const set=e.target.value;
  setPassword(set)
  console.log(password);

  }

  const handleConfirmPass=(e)=>{
    //const passChange2=e.target.value;
    notSamePassword(e.target.value);
    //notSamePassword(passChange2);
    console.log(samePassword)
    
  }

//   if(!passmatch(password,samePassword)){
//     console.log(0)
//     setConfirmPass(<p style={{color:'white'}}>Password is not matching</p>)
//  }
//  else{
//     setConfirmPass("")
//  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (!validateEmail(emailValue)) {
      setEmailError(<p style={{color:'white'}}>Invalid email format.</p>);
    } else {
      setEmailError("");
      b=1;
    }
  


  };
  const handleSubmit=()=>{
    passmatch(password,samePassword)
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      mt="10%"
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
      {/* ... */}
      {!islogin &&(
        <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <PersonIcon
            style={{ fontSize: "2rem", color: "white", width: "2em" }}
          />
        </div>
        <div>
          <TextField
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            InputProps={{ style: inputStyle }}
          />
        </div>
      </div>
      )
}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <EmailIcon
            style={{ fontSize: "2rem", color: "white", width: "2em" }}
          />
        </div>
        <div>
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value={email}
            onChange={handleEmailChange}
            error={Boolean(emailError)} //change color into red
            helperText={emailError} //he helperText prop of the TextField component
            // provides additional context or guidance below the input field. 
            InputProps={{ style: inputStyle }}
          />
        </div>
      </div>
      {/* ... */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <LockOpenRoundedIcon
            style={{ fontSize: "2rem", color: "white", width: "2em" }}
          />
        </div>
        <div>
          <TextField
            label="Password"
            margin="normal"
            type="password"
            required
            value={password}
            onChange={handlePasswordChange}
            InputProps={{ style: inputStyle }}
          />
        </div>
      </div>
      {!islogin &&(
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <HttpsRoundedIcon
            style={{ fontSize: "2rem", color: "white", width: "2em" }}
          />
        </div>
        <div>
          <TextField
            label="Re-enter Password"
            variant="outlined"
            margin="normal"
            type="password"
            required
            value={samePassword}
            onChange={handleConfirmPass}
            helperText={confirmPass}
            InputProps={{ style: inputStyle }}
          />
        </div>
      </div>
      )}
      {/* <Link to="/home" style={{ width: "100%", textAlign: "center" }}> */}
        <Button
        onClick={handleSubmit}
          sx={{
            color: "white",
            borderColor: "white",
            marginTop: "6%",
            marginLeft: "12%",
            ":hover": {
              boxShadow: 6,
              borderColor: "white",
              backgroundColor: "white",
              color: "#d32f2f",
            },
            width: "30%",
          }}
          size="large"
          variant="outlined"
          color="warning"
        >
          
          {islogin ? "LOGIN" : "SIGNUP"}
          
        </Button>
      {/* </Link> */}
    </Grid>
  );
}

export default Login;


