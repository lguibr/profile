import React, { useState } from "react"
import { withStyles } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import Footer from "./footer/Footer"
import Main from "./main/Main"
import Header from "./header/Header"

const theme = createMuiTheme({
	palette: {
		type: "dark",
		primary: {
			light: "#353535",
			main: "#212121",
			dark: "#181818"
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

	toolbar: {
		minHeight: 36
	},

	content: {
		height: "calc(100vh - 80px)",
		width: "100vw"
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
			return Object.keys(f)[0] === file ? { [file]: true } : f
		})
		setFiles(newFiles)
		setCurrent(file)
	}

	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />

			<Header handleDrawerToggle={handleDrawerToggle} />

			<Main
				current={current}
				classes={classes}
				theme={theme}
				open={mobileOpen}
				handleDrawerToggle={handleDrawerToggle}
				setOpenedFiles={setOpenFile}
				files={files}
			/>

			<Footer />
		</MuiThemeProvider>
	)
}

export default withStyles(styles)(App)
