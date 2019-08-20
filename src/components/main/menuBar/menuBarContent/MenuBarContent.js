import React from "react"
import FolderOpen from "@material-ui/icons/FolderOpen"
import FolderIcon from "@material-ui/icons/Folder"
import { Link, Typography } from "@material-ui/core"
import { withStyles } from "@material-ui/styles"
const drawerWidth = 220
const styles = theme => ({
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0
		}
	}
})
const MenuBarContent = props => {
	const { setOpenedFiles, files, current } = props

	return (
		<div style={{ width: drawerWidth - 50 }}>
			<div style={{ minHeight: 36 }} />
			{files.map((file, fileIndex) => {
				const fileName = Object.keys(file)[0]
				const fileValue = Object.values(file)[0]
				return (
					<div
						style={{
							display: "flex",
							margin: "0px 10px"
						}}
						key={fileIndex}
					>
						<Link
							component="button"
							variant="caption"
							onClick={() => setOpenedFiles(fileName)}
							color="inherit"
							underline="none"
							style={{
								padding: 0
							}}
						>
							<Typography noWrap>
								{fileValue && " * "}
								{fileName !== current && (
									<FolderIcon fontSize={"inherit"} />
								)}
								{fileName === current && (
									<FolderOpen fontSize={"inherit"} />
								)}
								{fileName}
							</Typography>
						</Link>
					</div>
				)
			})}
		</div>
	)
}
export default withStyles(styles)(MenuBarContent)
