import React, { useState, useEffect } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import {
	createMuiTheme,
	MuiThemeProvider,
	responsiveFontSizes
} from "@material-ui/core/styles"
import Footer from "./footer/Footer"
import Main from "./main/Main"
import Header from "./header/Header"
let theme = createMuiTheme({
	props: {
		MuiTypography: {
			variantMapping: {
				h1: "h2",
				h2: "h2",
				h3: "h2",
				h4: "h2",
				h5: "h2",
				h6: "h2",
				subtitle1: "h2",
				subtitle2: "h2",
				body1: "span",
				body2: "span",
				strong: "strong"
			}
		}
	},
	palette: {
		type: "dark",
		primary: {
			light: "#353535",
			main: "#212121",
			dark: "#181818"
		},
		secondary: {
			main: "#181818"
		}
	}
})

theme = responsiveFontSizes(theme)

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

	const [ghRepos, setGHRepos] = useState([])

	useEffect(() => {
		const fetchGitHubData = async () => {
			const response = await fetch(
				"https://api.github.com/users/lguibr/repos"
			)
			const data = await response.json()
			const parsedData = data.map(rawRepo => {
				console.log(rawRepo)
				const { id, name, description, homepage, html_url } = rawRepo
				const repo = { id, name, description, homepage, html_url }
				if (repo.description) {
					return repo
				} else {
					return false
				}
			})
			setGHRepos(parsedData)
		}
		fetchGitHubData()
	}, [])

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
				ghRepos={ghRepos}
			/>

			<Footer />
			
		</MuiThemeProvider>
	)
}
export default App
