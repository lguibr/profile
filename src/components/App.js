import React, { Component } from "react"

import { withStyles } from "@material-ui/styles"

import CssBaseline from "@material-ui/core/CssBaseline"

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"

import Footer from "./footer/Footer"

import Main from "./main/Main"

const drawerWidth = 220

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
        height: "calc(100vh-200)",
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
        position: "fixed",
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
                <CssBaseline />

                <Main
                    classes={classes}
                    theme={theme}
                    open={this.state.mobileOpen}
                    handleDrawerToggle={handleDrawerToggle}
                />
                <div className={classes.footer}>
                    <Footer />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default withStyles(styles)(App)
