import React, { useContext, useState } from "react";
import { Container, Toolbar, IconButton, Box, List, ListItem, ListItemText, Button, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MobilLeftMenuSlider from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
// import { UserInfoContext } from "../../App";
import { NavBarStyles } from "./NavBarStyle";
import { UserInfoContext } from "../../App";

const NavBar = () => {
  const classes = NavBarStyles();

  //setting the state is side navbar is open or not
  const [open, setOpen] = useState({
    left: false,
  });

  // toggling the nav icon
  const toggleSlider = (slider, isOpen) => {
    setOpen({ ...isOpen, [slider]: isOpen });
  };

  // slide the navbar  in mobile
  const sliderSection = (slider) => (
    <Box className={classes.menuSliderContainer} component="div" onClick={() => toggleSlider(slider, false)}>
      <List className={classes.sliderList}>
        <ListItem button component={Link} to="/">
          <ListItemText className={classes.sliderText} primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/profile">
          <ListItemText className={classes.sliderText} primary="Profile" />
        </ListItem>
        <ListItem button onClick={logoutBtn}>
          <ListItemText className={classes.sliderText} primary="LogOut" />
        </ListItem>
      </List>
    </Box>
  );

  const user = useContext(UserInfoContext);
  const { userInfo, setUserInfo } = user;

  //logOUt btn handler
  const logoutBtn = () => {
    const info = {
      isLogin: false,
      name: "",
      email: "",
      photoURL: "",
    };
    setUserInfo(info);
  };
  return (
    <div className="navSection">
      <header>
        <Container className={classes.NavBarSection}>
          <nav>
            <div className={`${classes.logo}`}>
              <img src="https://i.ibb.co/QmRc640/Group-1329.png" alt="LOGO" />
            </div>
            <div className={`${classes.nav_menu}`}>
              <ul className="desktop">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/donation">
                  <li>Donation</li>
                </Link>
                <Link to="/events">
                  <li>Events</li>
                </Link>
                <Link to="/info">
                  <li>User</li>
                </Link>
                {userInfo.isLogin === false ? (
                  <Link to="/logIn">
                    <Button variant="contained" className={` ${classes.LogIn} `}>
                      Login
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Typography variant="subtitle1" className={classes.userName} gutterBottom>
                      {userInfo.name}
                    </Typography>
                    <Button onClick={logoutBtn} variant="contained" className={` ${classes.LogIn} `}>
                      LogOut
                    </Button>
                  </>
                )}
                <Button variant="contained" className={`${classes.Admin} `}>
                  Admin in
                </Button>
              </ul>
              <Toolbar className={`nav_icon ${classes.mobile}`}>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => toggleSlider("bottom", true)}>
                  <MenuIcon />
                </IconButton>
                <MobilLeftMenuSlider open={open.bottom} anchor="bottom" onClose={() => toggleSlider("bottom", false)}>
                  {sliderSection("bottom")}
                </MobilLeftMenuSlider>
              </Toolbar>
            </div>
          </nav>
        </Container>
      </header>
    </div>
  );
};

export default NavBar;
