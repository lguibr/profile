import React from "react"

import AppBar from "@material-ui/core/AppBar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"

import InboxIcon from "@material-ui/icons/Inbox"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import MailIcon from "@material-ui/icons/BookmarkBorder"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import MenuRoundedIcon from "@material-ui/icons/MenuRounded"
import {
    makeStyles,
    useTheme,
    createMuiTheme,
    MuiThemeProvider
} from "@material-ui/core/styles"

import Editor from "./editor/Editor"
import Footer from "./footer/Footer"

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            light: "#757ce8",
            main: "#252526",
            dark: "#002884"
        },
        secondary: {
            main: "#000000"
        }
    }
})

const drawerWidth = 220

const useStyles = makeStyles(theme => ({
    main: {
        display: "flex",
        backgroundColor: "blue",
        height: "100vh",
        width: "100vw"
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    menuButton: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    toolbar: {
        minHeight: 36
    },
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        height: "calc(100vh - 56px)",
        width: "100vw"
    },
    footer: {
        width: "100%",
        height: "20px",
        position: "absolute",
        backgroundColor: "#007acc",
        bottom: "0px",
        zIndex: "1400",
        paddingLeft: "1rem"
    }
}))

function App(props) {

    
    const { container } = props
    
    const classes = useStyles()
    
    const theme = useTheme()
    
    const [mobileOpen, setMobileOpen] = React.useState(false)
    

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} />

            <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map(
                    (text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                )}
            </List>

            <Divider />
        </div>
    )

    return (
        <MuiThemeProvider theme={darkTheme}>
            <div className={classes.main}>
                <CssBaseline />

                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar style={{ minHeight: "36px" }} variant="dense">
                        <MenuRoundedIcon
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        />

                        <Typography variant="h6" noWrap>
                            Developer Profile
                        </Typography>
                    </Toolbar>
                </AppBar>

                <nav className={classes.drawer} aria-label="mailbox folders">
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor={
                                theme.direction === "rtl" ? "right" : "left"
                            }
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            ModalProps={{
                                keepMounted: true // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>

                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>

                <main className={classes.content}>
                    <div className={classes.toolbar} />

                    <Editor
                        value={` {
    "teste" : "teste",
    "segundoTeste" : "Segunda string bem maior pra compensar hahahaha"
} `}
                    />
                </main>
            </div>

            <div className={classes.footer}>
                <Footer />
            </div>
        </MuiThemeProvider>
    )
}

export default App
