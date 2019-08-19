import React, { Component } from "react"
import { withStyles } from "@material-ui/styles"

import CssBaseline from "@material-ui/core/CssBaseline"

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"

import Editor from "./editor/Editor"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import MenuBar from "./menuBar/MenuBar"

import edu from "./../data/educationalExp"
import pro from "./../data/proffisionalExp"
import proj from "./../data/projets"

const drawerWidth = 220

const allFiles = [edu, pro, proj]

const theme = createMuiTheme({
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

const styles = () => ({
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
})

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileOpen: false
        }
    }
    render() {
        const handleDrawerToggle = () => {
            this.setState({ mobileOpen: !this.state.mobileOpen })
        }

        const { classes } = this.props

        return (
            <MuiThemeProvider theme={theme}>
                <div className={classes.main}>
                    <CssBaseline />

                    <Header
                        classes={classes}
                        handleDrawerToggle={handleDrawerToggle}
                    />

                    <MenuBar
                        open={this.state.mobileOpen}
                        theme={theme}
                        classes={classes}
                        handleDrawerToggle={handleDrawerToggle}
                        allFiles={allFiles}
                    />

                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Editor value={` {"teste" : "teste"} `} />
                    </main>
                </div>

                <div className={classes.footer}>
                    <Footer />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default withStyles(styles)(App)
