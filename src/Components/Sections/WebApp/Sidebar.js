import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';  
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import SidebarList from "./SidebarList.json"; 
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// displaying the sidebar for the web app. It contains three fields for now ===> Dashboard, Add Player, Settings (update information of the admin)
// Optimized for both desktop and mobile view. 

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // appBar: {
  //   [theme.breakpoints.up('sm')]: {
  //     width: `calc(100% - ${drawerWidth}px)`,
  //     marginLeft: drawerWidth,
  //   },
  // },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  //   [theme.breakpoints.up('sm')]: {
  //     display: 'none',
  //   },
  // },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  // content: {
  //   flexGrow: 1,
  //   padding: theme.spacing(3),
  // },
}));



function Sidebar({text}) {

//   const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getIcon = (icon) => {
    switch(icon) {
        case "dashboard":
            return <RiIcons.RiDashboardLine size="25px" color="red" />;
        case "addPlayers":
            return <AiIcons.AiOutlineUserAdd size="25px" color="red" />;
        case "settings":
            return <RiIcons.RiUserSettingsLine size="25px" color="red" />
        default:
            return null;
        }
    }

  const data = SidebarList.SidebarItems;

  const drawer = (
    <div className="sideBarWrapper">
      <Link to="/dashboard" style={{textDecoration:"none", color:"white"}}><div className="header"> FClub </div></Link>
      {/* <Divider /> */}
      <List>
        {data.map((item, index) => (
          <Link to={item.link} key={index} style={{textDecoration:"none"}}>
            <ListItem button>
                  <div className="sideBarIcons">
                      <ListItemIcon className="icon">{getIcon(item.icon)}</ListItemIcon>
                      {/* <ListItemText className="text">{item.title}</ListItemText> */}
                      <div className="text">{item.title}</div>
                  </div>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" style={{backgroundColor:"#13151C"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        {/* <DndProvider backend={HTML5Backend}> */}
        <div className={classes.toolbar} />
            {text}
        {/* </DndProvider> */}
      </main>
    </div>
  );
}


export default Sidebar;























// import React, {useState, useEffect} from 'react';
// import {Link} from "react-router-dom";
// import * as RiIcons from "react-icons/ri";
// import * as BiIcons from "react-icons/bi";
// import * as AiIcons from "react-icons/ai";
// import * as GrIcons from "react-icons/gr";
// import SidebarList from "./SidebarList.json"; 
// import {
//     ProSidebar,
//     Menu,
//     MenuItem,
//     SidebarHeader,
//     SidebarFooter,
//     SidebarContent,
//   } from "react-pro-sidebar";


// function SideBar() {

//     const getIcon = (icon) => {
//         switch(icon) {
//             case "dashboard":
//                 return <RiIcons.RiDashboardLine size="20px" color="red" />;
//             case "addPlayers":
//                 return <AiIcons.AiOutlineUserAdd size="20px" color="red" />;
//             case "settings":
//                 return <RiIcons.RiUserSettingsLine size="20px" color="red" />
//             default:
//                 return null;
//         }
//     }

//     const data = SidebarList.SidebarItems;

//     const [menuCollapse, setMenuCollapse] = useState(false)

//     // const menuIconClick = () => {
//     //     //condition checking to change state from true to false and vice versa
//     //     menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
//     //   };

//     return (
//         <div className="sideDrawerWrapper" id="header">
//             <ProSidebar collapsed={menuCollapse} toggled={true} breakPoint="xs" onToggle={() => {setMenuCollapse(menuCollapse => !menuCollapse)}}>
//                 <SidebarHeader>
//                     <div className="headerTitle">
//                         S
//                     </div>
//                 </SidebarHeader>
//                 <SidebarContent>
//                     <Menu iconShape="square">
//                         <Link to="/dashboard"><MenuItem active={true} icon={<RiIcons.RiDashboardLine size="20px" color="red" />}> Dashboard </MenuItem></Link>
//                         <Link to="/dashboard"><MenuItem icon={<RiIcons.RiDashboardLine size="20px" color="red" />}> Add Players </MenuItem></Link>
//                         <Link to="/dashboard"><MenuItem icon={<RiIcons.RiDashboardLine size="20px" color="red" />}> Settings </MenuItem></Link>
//                     </Menu>
//                 </SidebarContent>   
//             </ProSidebar>
//         </div>
//     )
// }

// export default SideBar
