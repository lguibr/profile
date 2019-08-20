import React from "react"
import Editor from "./editor/Editor"
import MenuBar from "./menuBar/MenuBar"
import { Typography } from "@material-ui/core"
import { withStyles } from "@material-ui/styles"
const styles = () => ({
	main: {
		display: "flex",
		height: "calc(100vh-200)",
		width: "100vw"
	},
	content: {
		height: "calc(100vh - 80px)",
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
		current
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
				<div style={{ minHeight: 36 }} />
				<div
					style={{
						height: "24px"
					}}
				>
					<Typography variant="subtitle1">
						{Object.values(files).map((e, i) => {
							let name = Object.keys(e)[0]
							let value = Object.values(e)[0]
							return value ? name : null
						})}
					</Typography>
				</div>
				<Editor current={current} value={` {"teste" : "teste"} `} />
			</main>
		</div>
	)
}
export default withStyles(styles)(Main)
