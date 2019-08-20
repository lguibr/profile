import React from "react"

import { withStyles } from "@material-ui/styles"

import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"

const drawerWidth = 200

const styles = theme => ({
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0
		}
	}
})

const ResponsiveNav = props => {
	const { classes, drawer, handleDrawerToggle, open } = props
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

export default withStyles(styles)(ResponsiveNav)
