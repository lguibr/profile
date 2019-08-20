import React, { useState } from "react"
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
const fileNames = [
	{ personal: true },
	{ education: false },
	{ professional: false },
	{ projects: false }
]
const App = props => {
	const [mobileOpen, setMobileOpen] = useState(false)
	const [files, setFiles] = useState(fileNames)
	const [current, setCurrent] = useState("personal")
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}
	const setOpenFile = file => {
		const newFiles = files.map(f => {
			let fileName = Object.keys(f)[0]
			return fileName === file ? { [file]: true } : f
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
				open={mobileOpen}
				handleDrawerToggle={handleDrawerToggle}
				setOpenedFiles={setOpenFile}
				setCurrent={setCurrent}
				files={files}
			/>

			<Footer />
		</MuiThemeProvider>
	)
}
export default App
