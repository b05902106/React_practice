import React from "react";
import Game from "./game";

const App = () => {
  return <Game />;
};

// import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";

// const usestyles = makeStyles(theme => ({
//   root: {
//     background: "#ffd85c",
//     width: "100%",
//     minHeight: "100vh",
//     display: "grid",
//     justifyContent: "center"
//   },
//   wrapper: {
//     background: "red",
//     width: "700px",
//     lineHeight: "50px",
//     border: 1
//   },
//   btn: {
//     background: "white",
//     width: "20px",
//     height: "10%"
//   }
// }));

// const App = () => {
//   const classes = usestyles();
//   return (
//     <div className={classes.root}>
//       <div>Info Board</div>
//       <Grid container className={classes.wrapper}>
//         Tic Tac Ku Main
//       </Grid>
//       <Grid container xs={24} spacing={3}>
//         <Button className={classes.btn} xs={2}>
//           Restart
//         </Button>
//         <Button className={classes.btn} xs={2}>
//           Undo
//         </Button>
//       </Grid>
//     </div>
//   );
// };

export default App;
