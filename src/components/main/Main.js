import React from "react"
import Editor from "./editor/Editor"
import MenuBar from "./menuBar/MenuBar"
import { withStyles } from "@material-ui/styles"

const styles = theme => ({
	main: {
		display: "flex",
		height: "calc(100vh)",
		width: "100vw",
		maxWidth: "100vw"
	},
	content: {
		height: "calc(100vh)",
		width: "100vw"
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
		setCurrent
	} = props
	return (
		<div className={classes.main}>
			<MenuBar
				open={open}
				current={current}
				handleDrawerToggle={handleDrawerToggle}
				setOpenedFiles={setOpenedFiles}
				files={files}
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
