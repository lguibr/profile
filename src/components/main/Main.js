import React from "react"
import Editor from "./editor/Editor"
import MenuBar from "./menuBar/MenuBar"
import { withStyles } from "@material-ui/styles"

const styles = theme => ({
	main: {
		display: "grid",
		gridTemplateColumns: "auto 100%",
		height: "calc(100vh)",
		width: "100%",
		maxWidth: "100%"
	},
	content: {
		height: "calc(100vh)",
		maxWidth: "100%",
		[theme.breakpoints.up("sm")]: {
			maxWidth: "calc(100% -  250px)"
		}
	}
})
const Main = props => {
	const {
		classes,
		handleDrawerToggle,
		open,
		setOpenedFiles,
		files,
		current,
		setCurrent,
		ghRepos
	} = props

	return (
		<div className={classes.main}>
			<MenuBar
				open={open}
				current={current}
				handleDrawerToggle={handleDrawerToggle}
				setOpenedFiles={setOpenedFiles}
				files={files}
				ghRepos={ghRepos}
			/>

			<main className={classes.content}>
				<Editor
					mode={"json"}
					setCurrent={setCurrent}
					current={current}
					files={files}
				/>
			</main>
		</div>
	)
}
export default withStyles(styles)(Main)
