import React, { Component } from "react";
import Header from "../../header/Header";
import NavigationLeft from "../../nav/NavigationLeft";
import { Paper } from "@material-ui/core";

class Analyics extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <NavigationLeft />
        <div className="content">
          {localStorage.setItem("page", "Analytics")}
          <Header />
          <div style={styles.chartContainer}>
            <Paper elevation={3} style={styles.chart}>
              <img
                style={styles.img}
                width="300px"
                height="250px"
                src="https://www.datapine.com/blog/wp-content/uploads/2017/05/sales-target-datapine.png"
                alt="chart for sales"
              />
              <h2>Sales</h2>
            </Paper>
            <Paper elevation={3} style={styles.chart}>
              <img
                style={styles.img}
                width="300px"
                height="250px"
                src="https://heap.io/wp-content/uploads/2017/11/features_graphs_main-1.png"
                alt="chart for sign ups"
              />
              <h2>Sign Ups</h2>
            </Paper>
            <Paper elevation={3} style={styles.chart}>
              <img
                style={styles.img}
                width="300px"
                height="250px"
                src="https://www.juniper.net/techpubs/images/bti/s005201.png"
                alt="chart for events"
              />
              <h2>Events</h2>
            </Paper>
            <Paper elevation={3} style={styles.chart}>
              <img
                style={styles.img}
                width="300px"
                height="250px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiZXVppUkYE_0fVfy8zX-p0JPJAc1fitH4fYvwZtc77iwnrhXz8A&s"
                alt="chart for views"
              />
              <h2>Views</h2>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default Analyics;

const styles = {
  container: {},
  chart: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "60%",
    backgroundColor: "lightGray",
    padding: "1rem",
    margin:'auto',
    marginTop:'2rem',
  },
  img: {
    marginTop: "2rem"
  },
  chartContainer:{
    display:'grid',
    gridTemplateColumns:'repeat(2,1fr)',
  }
};
