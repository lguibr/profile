import React from "react"

import File from "../../../file/File"
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
	}
})

const MenuBarExplorer = props => {
	const { setOpenedFiles, files, current, classes } = props
	const title = "EXPLORADOR"
	return (
		<div className={classes.container}>
			<div className={classes.title}>
				<Typography variant="caption">{title}</Typography>
			</div>
			<div>
				<div>
					<div className={classes.subTitle}>
						<Typography variant="caption">
							ARQUIVOS ABERTOS
						</Typography>
					</div>
					{files.map((file, fileIndex) => {
						const fileName = Object.keys(file)[0]
						const fileValue = Object.values(file)[0]
						return (
							fileValue && (
								<File
									defaultBackground={"#0000"}
									selectedBackground={"#34353a"}
									setOpenedFiles={setOpenedFiles}
									fileName={fileName}
									key={fileIndex}
									isCurrent={fileName === current}
								/>
							)
						)
					})}
				</div>
			</div>
			<div>
				<div className={classes.subTitle}>
					<Typography variant="caption">ARQUIVOS</Typography>
				</div>
				{files.map((file, fileIndex) => {
					const fileName = Object.keys(file)[0]
					return (
						<File
							defaultBackground={"#0000"}
							selectedBackground={"#34353a"}
							setOpenedFiles={setOpenedFiles}
							key={fileIndex}
							fileName={fileName}
							isCurrent={fileName === current}
						/>
					)
				})}
			</div>
		</div>
	)
}
export default withStyles(styles)(MenuBarExplorer)
