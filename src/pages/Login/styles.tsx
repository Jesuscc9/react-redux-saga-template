import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "98%",
    position: "relative",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    width: 500,
    maxWidth: "100%"
  },
	image: {
		minWidth: "5rem",
		minHeight: "5rem",
    margin: "auto",
	},
  button: {
    marginTop: "2rem !important",
  }
}));