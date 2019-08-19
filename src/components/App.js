import React, { useState } from "react"
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

const fileNames = [
    { personal: true },
    { education: false },
    { professional: false },
    { projects: false }
]

const App = props => {
    const { classes } = props

    const [mobileOpen, setMobileOpen] = useState(false)

    const [files, setFiles] = useState(fileNames)

    const [current, setCurrent] = useState("personal")

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const setOpenFile = file => {
        const newFiles = files.map(f => {
            return Object.keys(f)[0] === file
                ? { [file]: true }
                : f
        })
        setFiles(newFiles)
        setCurrent(file)
    }

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />

            <Main
                current={current}
                classes={classes}
                theme={theme}
                open={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
                setOpenedFiles={setOpenFile}
                files={files}
            />
            <div className={classes.footer}>
                <Footer />
            </div>
        </MuiThemeProvider>
    )
}

export default withStyles(styles)(App)
