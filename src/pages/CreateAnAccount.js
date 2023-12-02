import { useCallback } from "react";
import {
  Checkbox,
  FormControlLabel,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./CreateAnAccount.module.css";

const CreateAnAccount = () => {
  const navigate = useNavigate();

  const onAlreadyAMemberClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onBigButtonContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.createAnAccount}>
      <div className={styles.createAnAccountChild} />
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.titttle}>
            <div className={styles.welcomeToChefmate}>Welcome to Chefmate!</div>
            <div className={styles.createYourAccount}>
              Create your account to start your culinary adventure.
            </div>
          </div>
        </div>
      </div>
      <FormControlLabel
        className={styles.frame2}
        label={`By creating an account, you agree to our
Terms & Conditions and Privacy Policy.  We promise to keep your data safe and yummy!`}
        control={<Checkbox color="error" defaultChecked />}
      />
      <div className={styles.frame3}>
        <div
          className={styles.alreadyAMemberContainer}
          onClick={onAlreadyAMemberClick}
        >
          {`Already a member? `}
          <span className={styles.signInNow}>Sign in now</span>
        </div>
      </div>
      <TextField
        className={styles.frame4}
        color="error"
        label="Enter Name"
        sx={{ width: 323.5 }}
        variant="outlined"
      />
      <TextField
        className={styles.frame5}
        color="error"
        label="Enter Email"
        sx={{ width: 323.5 }}
        variant="outlined"
      />
      <div className={styles.frame6}>
        <div className={styles.bigButton} onClick={onBigButtonContainerClick}>
          <div className={styles.label}>Create my account</div>
          <img
            className={styles.icongeneralarrowRight}
            alt=""
            src="/vuesaxlinearstar2.svg"
          />
        </div>
      </div>
      <div className={styles.createAnAccountItem} />
      <TextField
        className={styles.inputField}
        color="error"
        label="Enter Passwrod"
        sx={{ width: 315 }}
        variant="outlined"
      />
      <TextField
        className={styles.inputField1}
        color="error"
        label="Retype Password"
        sx={{ width: 315 }}
        variant="outlined"
      />
    </div>
  );
};

export default CreateAnAccount;
