import React, { Component } from "react";
import "./Header.css";
import InfoIcon from "@material-ui/icons/Info";
import { TextField } from "@material-ui/core";
class Header extends Component {
  state = {
    item: [],
    isLoadedItem: true,
    page: ""
  };
  componentWillMount(){
    console.log("inputed")
    this.setState({
      page:localStorage.getItem("page")
    })
  }

  componentDidMount() {
    const isLoadedItem = this.state.isLoadedItem;

    if (isLoadedItem) {
      this.randomUser();
    } else {
      console.log("error");
    }
  }

  randomUser() {
    fetch("https://randomuser.me/api/")
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw Error(res);
      })
      .then(data =>
        data.results.map(user => ({
          fname: `${user.name.first} ${user.name.last}`,
          lname: `${user.name.last}`,
          picture: `${user.picture.large}`
        }))
      )
      .then(item =>
        this.setState({
          item,
          isLoadedItem: false
        })
      )
      .catch(err => console.log("Did not load ", err));
  }

  render() {
    const { isLoadedItem, item } = this.state;
    return (
      <header className="header" style={styles.container}>
        <div style={styles.info}>
          <InfoIcon style={{ fontSize: 30 }}  />
          <h1>{this.state.page}</h1>
        </div>
        <div style={styles.right}>
          <form>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              style={styles.input}
            />
          </form>
          <div style={styles.user}>
            {!isLoadedItem && item.length > 0
              ? item.map((item, index) => {
                  const { picture } = item;
                  return (
                    <img key={index} style={styles.pfp} src={picture} alt="user profile" />
                  );
                })
              : null}
            {!isLoadedItem && item.length > 0
              ? item.map((item, index) => {
                  const { fname } = item;
                  return <p key={index} style={styles.txt}>{fname}</p>;
                })
              : null}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

const styles = {
  container: {
    backgroundColor: "#00CE71",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "8%"
  },
  logo: {
    margin: "auto"
  },
  info: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "2rem"
  },
  right: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  pfp: {
    borderRadius: "5rem",
    width: "40%",
    margin:'0',
    marginTop:'1rem'
  },
  input: {
    backgroundColor: "white",
    marginRight: "10rem",
    width:'100%',
  
  },
  user: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "5rem",
    margin: "1rem",
    fontSize:'.9em',
    fontWeight:'600'
  },
  txt:{
    marginTop:'0'
  }
};
