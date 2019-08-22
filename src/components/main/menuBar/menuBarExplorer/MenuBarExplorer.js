import React from "react"
import FolderOpen from "@material-ui/icons/FolderOpen"
import FolderIcon from "@material-ui/icons/Folder"
import { Typography } from "@material-ui/core"
import { withStyles } from "@material-ui/styles"

const styles = theme => ({
	container: {
		width: props => props.drawerWidth - 50,
		backgroundColor: "#28282a"
	},
	title: {
		minHeight: "2em",
		display: "flex",
		justifyContent: "center",
		padding: "0.25em"
	},
	subTitle: {
		backgroundColor: "#393939",
		maxHeight: "1.5em",
		display: "flex",
		justifyContent: "center",
		padding: "0.25em"
	},
	elementContainer: {
		display: "flex",
		padding: "0px 10px",
		backgroundColor: (current, fileName) =>
			fileName === current ? "#34353a" : "#0000",
		width: "100%",
		cursor: "pointer"
	},
	icon: {
		marginRight: ".5em",
		fontSize: "inherit"
	}
})

const MenuBarExplorer = props => {
	const { setOpenedFiles, files, current, classes } = props
	const title = "EXPLORER"
	return (
		<div className={classes.container}>
			<div className={classes.title}>
				<Typography variant="caption">{title}</Typography>
			</div>
			<div>
				<div className={classes.subTitle}>
					<Typography variant="caption">OPEN EDITORS</Typography>
				</div>
				{files.map((file, fileIndex) => {
					const fileName = Object.keys(file)[0]
					const fileValue = Object.values(file)[0]
					return (
						fileValue && (
							<div
								className={classes.elementContainer}
								key={fileIndex}
							>
								<Typography noWrap>
									{fileName !== current && (
										<FolderIcon className={classes.icon} />
									)}
									{fileName === current && (
										<FolderOpen className={classes.icon} />
									)}
									{fileName}
								</Typography>
							</div>
						)
					)
				})}
			</div>
			<div>
				<div className={classes.subTitle}>
					<Typography variant="caption">PROFILE</Typography>
				</div>
				{files.map((file, fileIndex) => {
					const fileName = Object.keys(file)[0]
					return (
						<div
							onClick={() => setOpenedFiles(fileName)}
							className={classes.elementContainer}
							key={fileIndex}
						>
							<Typography noWrap>
								{fileName !== current && (
									<FolderIcon className={classes.icon} />
								)}
								{fileName === current && (
									<FolderOpen className={classes.icon} />
								)}
								{fileName}
							</Typography>
						</div>
					)
				})}
			</div>
		</div>
	)
}
export default withStyles(styles)(MenuBarExplorer)
