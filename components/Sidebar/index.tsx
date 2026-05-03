import React, {useState} from "react";
import { Drawer } from "@material-ui/core";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../Logo";
import { makeStyles } from "@material-ui/core";
import NoSsr from '@material-ui/core/NoSsr';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import styles from "./Sidebar.module.css"


const useStyles = makeStyles(theme => ({
    root: {
      "& .MuiTypography-body1": {
        fontFamily: "DailyNews",
        fontSize: "2.2em",
        letterSpacing: "5px",
        color: "white"

      },
      "& .MuiPaper-root": {
        height: "460px",
        marginTop: "16px",
        padding: "18px",
        backgroundColor: "#161616",
        borderRadius: "8px",
        boxShadow: "3px 3px 3px #1a1c1a"
      },
      "& .MuiDrawer-paperAnchorDockedLeft": {
        borderRight: '0px solid black',
      },
      "& .MuiDrawer-paperAnchorLeft":{
        left: "unset",
        marginLeft: "3%"
      }
    },
    customMenu: {
      "& .MuiMenu-list": {
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        fontFamily: "DailyNews",
        fontSize: "2em",
        background: "#F3DFC1"
      },
      "& .MuiMenuItem-root" : {
        fontFamily: "DailyNews",
        fontSize: "0.8em",
        letterSpacing: "5px",
        fontWeight: "bold"

      }
    }
  }));

export default function Sidebar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
    const classes = useStyles();

  return (
    <NoSsr>
      <div className={classes.root}>        
      <Drawer  variant="permanent" anchor="left">
        <div style={{ padding: "10px", textAlign: "center" }}>
          <img src="/assets/images/nova_badge.svg" alt="Nova Syndicate Badge" style={{ width: "60px", marginBottom: "5px", filter: "drop-shadow(0 0 10px #00FFFF)" }} />
        </div>
        <Logo />
        <List>
        <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="https://nostracity.gitbook.io/nostracity/additional-details/get-started-tutorial"
              target="_blank"
            >
              <ListItemText primary="Get Started" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="https://nostracity.gitbook.io/"
              target="_blank"
            >
              <ListItemText primary="Docs" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#"
              target="_blank"
            >
              <ListItemText primary="Buy $STARDUST" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="button"  onClick={handleClick}>
              <ListItemText primary="Socials" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
     
      </div>
      <Menu
      className={classes.customMenu}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem component="a" href="#" target="_blank" onClick={handleClose}>Twitter</MenuItem>
        <MenuItem component="a" href="#" target="_blank" onClick={handleClose}>Discord</MenuItem>
        <MenuItem component="a" href="#" target="_blank" onClick={handleClose}>Telegram</MenuItem>
        <MenuItem component="a" href="#" target="_blank" onClick={handleClose}>Medium</MenuItem>

      </Menu>
    </NoSsr>
  );
}
