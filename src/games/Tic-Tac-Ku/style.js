import { makeStyles } from "@material-ui/core/styles";

const usestyles = makeStyles(theme => ({
  square: {
    background: "#fff",
    height: "50px",
    width: "50px",
    border: "1px solid #999",
    fontSize: "20px",
    fontWeight: "bold",
    lineHeight: "34px",
    textAlign: "center",
    padding: "0",
    float: "left",
    marginRight: "-1px",
    marginTop: "-1px"
  },
  board: {
    display: "inline-block",
    border: "1.5px solid"
  },
  bigBoardRow: {
    lineHeight: "0px"
    // display: "inline-block"
  }
}));

export default usestyles;
