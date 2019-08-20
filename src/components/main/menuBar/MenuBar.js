import React from "react"
import List from "@material-ui/core/List"
import CallSplitRoundedIcon from "@material-ui/icons/CallSplitRounded"
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded"
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined"
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined"
import BugReportOutlinedIcon from "@material-ui/icons/BugReportOutlined"
import { withStyles } from "@material-ui/styles"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import MenuBarContent from "./menuBarContent/MenuBarContent"
const drawerWidth = 220
const styles = theme => ({
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0
		}
	}
})
const MenuBar = props => {
	const { open, classes, setOpenedFiles, files, current } = props
	const handleDrawerToggle = props.handleDrawerToggle
	const drawer = (
		<div
			style={{
				display: "flex",
				overflow: "hidden"
			}}
		>
			{/* opa */}
			<div
				style={{
					minHeight: "100vh",
					width: 50,
					backgroundColor: "#393939"
				}}
			>
				<div style={{ minHeight: 36 }} />
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

			<MenuBarContent
				files={files}
				setOpenedFiles={setOpenedFiles}
				current={current}
			/>
		</div>
	)
	return (
		<nav className={classes.drawer} aria-label="mailbox folders">
			<Hidden smUp implementation="css">
				<Drawer
					variant="temporary"
					open={open}
					onClose={handleDrawerToggle}
					classes={{
						paper: classes.drawerPaper
					}}
					ModalProps={{
						keepMounted: true
					}}
				>
					{drawer}
				</Drawer>
			</Hidden>
			<Hidden xsDown implementation="css">
				<Drawer
					classes={{
						paper: classes.drawerPaper
					}}
					variant="permanent"
					open
				>
					{drawer}
				</Drawer>
			</Hidden>
		</nav>
	)
}
export default withStyles(styles)(MenuBar)
