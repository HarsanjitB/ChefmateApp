import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const onBigButtonContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onBigButtonContainer1Click = useCallback(() => {
    navigate("/create-an-account");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <div className={styles.loginChild} />
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.frame1}>
            <div className={styles.titttle}>
              <div className={styles.hello}>Hello,</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame3}>
        <div className={styles.forgotPassword}>Forgot Password?</div>
      </div>
      <TextField
        className={styles.inputField}
        color="error"
        label="Enter Email"
        sx={{ width: 315 }}
        variant="outlined"
      />
      <TextField
        type="password"
        className={styles.inputField1}
        color="error"
        label="Enter Password"
        sx={{ width: 315 }}
        variant="outlined"
      />
      <div className={styles.bigButton} onClick={onBigButtonContainerClick}>
        <div className={styles.label}>Login</div>
        <img
          className={styles.icongeneralarrowRight}
          alt=""
          src="/icongeneralarrowright2.svg"
        />
      </div>
      <div className={styles.bigButton1} onClick={onBigButtonContainer1Click}>
        <div className={styles.label}>Create an account.</div>
        <img
          className={styles.icongeneralarrowRight}
          alt=""
          src="/icongeneralarrowright3.svg"
        />
      </div>
      <div className={styles.frame4}>
        <div className={styles.frame1}>
          <div className={styles.titttle1}>
            <div className={styles.letsMakeCooking}>
              Let’s make cooking easier.
            </div>
            <div className={styles.signInTo}>
              Sign in to personalize your Chefmate experience. Discover recipes
              tailored to your taste, save your favorites, and join our
              community of cooking enthusiasts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
