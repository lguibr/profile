import React, { useState } from "react"
import List from "@material-ui/core/List"

import { withStyles } from "@material-ui/styles"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"

import MenuBarExplorer from "./menuBarExplorer/MenuBarExplorer"
import TabSelector from "./tabSelector/TabSelector"
import ContentBox from "./contentBox/ContentBox"
import contacts from "./../../../data/contacts"

const drawerWidth = 250

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
		overflow: "hidden",
		width: "100%",
		backgroundColor: "#28282a"
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
		handleDrawerToggle,
		ghRepos
	} = props
	const [tab, setTab] = useState("explorer")

	const drawer = (
		<div className={classes.drawerContainer}>
			{/* opa */}
			<div className={classes.drawerLeftBar}>
				<List>
					{["explorer", "contact", "repo"].map(name => (
						<TabSelector
							open={open}
							key={name}
							setTab={setTab}
							tab={tab}
							name={name}
						/>
					))}
				</List>
			</div>
			{tab === "explorer" && (
				<MenuBarExplorer
					files={files}
					setOpenedFiles={setOpenedFiles}
					current={current}
					drawerWidth={drawerWidth}
				/>
			)}
			<div
				style={{
					display: "flex",
					maxWidth: 200,
					flexDirection: "column",
					overflow: "auto",
					marginBottom: "1rem"
				}}
			>
				{tab === "contact" && (
					<div>
						<p>teste</p>
						{contacts.map((contact, i) => {
							return <ContentBox key={i} content={contact} />
						})}
					</div>
				)}

				{tab === "repo" && (
					<div>
						<p>teste</p>
						{ghRepos.map((repo, i) => {
							return <ContentBox key={i} content={repo} />
						})}
					</div>
				)}
			</div>
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
