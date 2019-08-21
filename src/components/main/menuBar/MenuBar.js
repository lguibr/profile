import React, { useState } from "react"
import List from "@material-ui/core/List"

import { withStyles } from "@material-ui/styles"

import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import MenuBarExplorer from "./menuBarExplorer/MenuBarExplorer"
import MenuBarContact from "./menuBarContact/MenuBarContact"
import MenuBarRepo from "./menuBarRepo/MenuBarRepo"
import MenuBarDash from "./menuBarDash/MenuBarDash"
import MenuBarAbout from "./menuBarAbout/MenuBarAbout"
import TabItem from "./tabItem/TabItem"

const drawerWidth = 220

const styles = theme => ({
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0
		}
	},
	drawerContainer: {
		marginTop: props => (props.open ? 0 : 36),
		display: "flex",
		overflow: "hidden"
	},
	drawerLeftBar: {
		minHeight: "100vh",
		width: 50,
		backgroundColor: "#393939"
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
		<div className={classes.drawerContainer}>
			{/* opa */}
			<div className={classes.drawerLeftBar}>
				<List>
					{["explorer", "contact", "repo", "about", "dash"].map(
						name => (
							<TabItem
								open={open}
								key={name}
								setTab={setTab}
								tab={tab}
								name={name}
							/>
						)
					)}
				</List>
			</div>
			{tab === "explorer" && (
				<MenuBarExplorer
					files={files}
					setOpenedFiles={setOpenedFiles}
					current={current}
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
