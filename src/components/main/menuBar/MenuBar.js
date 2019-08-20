import React from "react"

import List from "@material-ui/core/List"

import CallSplitRoundedIcon from "@material-ui/icons/CallSplitRounded"
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded"
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined"
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined"
import BugReportOutlinedIcon from "@material-ui/icons/BugReportOutlined"
import FolderOpen from "@material-ui/icons/FolderOpen"
import FolderIcon from "@material-ui/icons/Folder"

import ResponsiveNav from "./responsiveNav/ResponsiveNav"
import { Link, Typography } from "@material-ui/core"

const MenuBar = props => {
	const { theme, open, classes, setOpenedFiles, files, current } = props
	const handleDrawerToggle = props.handleDrawerToggle

	const drawer = (
		<div
			style={{
				display: "flex",
				overflow:"hidden"
			}}
		>
			<div
				style={{
					minHeight: "100vh",
					width: "50px",
					backgroundColor: "#393939"
				}}
			>
				<div className={classes.toolbar} />
				<List>
					<div align="center" style={{ marginBottom: "1.2em" }}>
						<FileCopyOutlinedIcon />
					</div>
					<div align="center" style={{ marginBottom: "1.2em" }}>
						<SchoolRoundedIcon />
					</div>
					<div align="center" style={{ marginBottom: "1.2em" }}>
						<CallSplitRoundedIcon />
					</div>
					<div align="center" style={{ marginBottom: "1.2em" }}>
						<DashboardOutlinedIcon />
					</div>
					<div align="center" style={{ marginBottom: "1.2em" }}>
						<BugReportOutlinedIcon />
					</div>
				</List>
			</div>

			<div style={{width:150}}>
				<div className={classes.toolbar} />
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
									padding: 0,
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
		</div>
	)

	return (
		<ResponsiveNav
			theme={theme}
			open={open}
			handleDrawerToggle={handleDrawerToggle}
			drawer={drawer}
		/>
	)
}

export default MenuBar
