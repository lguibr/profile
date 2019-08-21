import React, { useState } from "react"
import List from "@material-ui/core/List"
import CallSplitRoundedIcon from "@material-ui/icons/CallSplitRounded"
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined"
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined"
import BugReportOutlinedIcon from "@material-ui/icons/BugReportOutlined"
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg"
import { withStyles } from "@material-ui/styles"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import MenuBarExplorer from "./menuBarExplorer/MenuBarExplorer"
import MenuBarContact from "./menuBarContact/MenuBarContact"
import MenuBarRepo from "./menuBarRepo/MenuBarRepo"
import MenuBarDash from "./menuBarDash/MenuBarDash"
import MenuBarAbout from "./menuBarAbout/MenuBarAbout"
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
	const {
		open,
		classes,
		setOpenedFiles,
		files,
		current,
		handleDrawerToggle
	} = props
	const [tab, setTab] = useState("explorer")
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
					backgroundColor: "#393939",
					marginTop: open ? 0 : 36
				}}
			>
				<List>
					<div
						align="center"
						onClick={() => {
							setTab("explorer")
						}}
						style={{
							marginBottom: "1.2em",
							color: tab === "explorer" ? "#fff" : "#ccc"
						}}
					>
						<FileCopyOutlinedIcon />
					</div>
					<div
						align="center"
						onClick={() => {
							setTab("contact")
						}}
						style={{
							marginBottom: "1.2em",
							color: tab === "contact" ? "#fff" : "#ccc"
						}}
					>
						<PermPhoneMsgIcon />
					</div>
					<div
						align="center"
						onClick={() => {
							setTab("repo")
						}}
						style={{
							marginBottom: "1.2em",
							color: tab === "repo" ? "#fff" : "#ccc"
						}}
					>
						<CallSplitRoundedIcon />
					</div>
					<div
						onClick={() => {
							setTab("about")
						}}
						align="center"
						style={{
							marginBottom: "1.2em",
							color: tab === "about" ? "#fff" : "#ccc"
						}}
					>
						<BugReportOutlinedIcon />
					</div>
					<div
						onClick={() => {
							setTab("dash")
						}}
						align="center"
						style={{
							marginBottom: "1.2em",
							color: tab === "dash" ? "#fff" : "#ccc"
						}}
					>
						<DashboardOutlinedIcon />
					</div>
				</List>
			</div>
			{tab === "explorer" && (
				<MenuBarExplorer
					open={open}
					files={files}
					setOpenedFiles={setOpenedFiles}
					current={current}
					drawerWidth={drawerWidth}
				/>
			)}
			{tab === "contact" && (
				<MenuBarContact drawerWidth={drawerWidth} open={open} />
			)}
			{tab === "repo" && (
				<MenuBarRepo drawerWidth={drawerWidth} open={open} />
			)}
			{tab === "about" && (
				<MenuBarAbout drawerWidth={drawerWidth} open={open} />
			)}
			{tab === "dash" && (
				<MenuBarDash drawerWidth={drawerWidth} open={open} />
			)}
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
