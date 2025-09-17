
import{HiOutlineBars3} from "react-icons/hi2";
import {Link} from "react-router-dom";
import{
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";
import WaterDropTwoToneIcon from '@mui/icons-material/WaterDropTwoTone';
import React, { useState } from "react";


import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';





const Navbar=()=>{
  const [openMenu,setOpenMenu]=useState(false);
  const menuOptions=[
    {
      text:"Home",
      icon:<HomeIcon/>,
      path:"/",
    },
    {
      text:"Query",
      icon:<QuestionAnswerIcon/>,
      path:"/query",
    },
    {
      text:"About",
      icon:<InfoIcon/>,
      path:"/about",
    },
    
  ]
  

  return (
    <nav>
      <div className="nav-logo-container">
        <Link to="/" className="nav-link">
      <h3><WaterDropTwoToneIcon/> AquaIntel</h3></Link>

      </div>
      <div className="navbar-links-container">
        <Link to="/" className="nav-link">Home</Link>
        
        <Link to="/query" className="nav-link">Query</Link>
        <Link to="/about" className="nav-link">About</Link>
        
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={()=> setOpenMenu(true)}/>
      </div>
      <Drawer open={openMenu} onClose={()=>setOpenMenu(false)}
      anchor="right">
        <Box
         
         sx={{width:250}}
         role="presentation"
         onClick={()=>setOpenMenu(false)}
         onKeyDown={()=>setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item)=>(
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to ={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
         
      </Drawer>
    </nav>
  )
}


export default Navbar;