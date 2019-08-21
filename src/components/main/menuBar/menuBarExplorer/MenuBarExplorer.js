import React from "react"
import FolderOpen from "@material-ui/icons/FolderOpen"
import FolderIcon from "@material-ui/icons/Folder"
import { Typography } from "@material-ui/core"
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
const MenuBarExplorer = props => {
	const { setOpenedFiles, files, current, open, drawerWidth } = props
	return (
		<div
			style={{
				width: drawerWidth - 50,
				backgroundColor: "#28282a",
				marginTop: !open ? 36 : 0
			}}
		>
			<div
				style={{
					minHeight: "2em",
					display: "flex",
					justifyContent: "center",
					padding: "0.25em"
				}}
			>
				<Typography variant="caption">EXPLORER</Typography>
			</div>
			<div>
				<div
					style={{
						backgroundColor: "#393939",
						minHeight: "1.5em",
						display: "flex",
						justifyContent: "center",
						padding: "0.25em"
					}}
				>
					<Typography
						style={{ fontWeight: "bolder" }}
						variant="caption"
					>
						OPEN EDITORS
					</Typography>
				</div>
				{files.map((file, fileIndex) => {
					const fileName = Object.keys(file)[0]
					const fileValue = Object.values(file)[0]
					return (
						fileValue && (
							<div
								onClick={() => setOpenedFiles(fileName)}
								style={{
									display: "flex",
									padding: "0px 10px",
									backgroundColor:
										fileName === current
											? "#34353a"
											: "#0000",
									width: "100%",
									cursor: "pointer"
								}}
								key={fileIndex}
							>
								<Typography noWrap>
									{fileName !== current && (
										<FolderIcon
											style={{
												marginRight: ".5em"
											}}
											fontSize={"inherit"}
										/>
									)}
									{fileName === current && (
										<FolderOpen
											style={{
												marginRight: ".5em"
											}}
											fontSize={"inherit"}
										/>
									)}
									{fileName}
								</Typography>
							</div>
						)
					)
				})}
			</div>
			<div>
				<div
					style={{
						backgroundColor: "#3a3a3a",
						minHeight: "1.5em",
						display: "flex",
						justifyContent: "center",
						padding: "0.25em"
					}}
				>
					<Typography
						style={{ fontWeight: "bolder" }}
						variant="caption"
					>
						PROFILE
					</Typography>
				</div>
				{files.map((file, fileIndex) => {
					const fileName = Object.keys(file)[0]
					return (
						<div
							onClick={() => setOpenedFiles(fileName)}
							style={{
								display: "flex",
								padding: "0px 10px",
								backgroundColor:
									fileName === current ? "#34353a" : "#0000",
								width: "100%",
								cursor: "pointer"
							}}
							key={fileIndex}
						>
							<Typography noWrap>
								{fileName !== current && (
									<FolderIcon
										style={{
											marginRight: ".5em"
										}}
										fontSize={"inherit"}
									/>
								)}
								{fileName === current && (
									<FolderOpen
										style={{
											marginRight: ".5em"
										}}
										fontSize={"inherit"}
									/>
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
