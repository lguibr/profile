import React from "react"
import { withStyles } from "@material-ui/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import SvgIcon from "@material-ui/core/SvgIcon"

const styles = theme => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1
	},
	menuButton: {
		marginRight: theme.spacing(1),
		[theme.breakpoints.up("sm")]: {
			display: "none"
		}
	},
	logo:{
		display:"none",
		[theme.breakpoints.up("sm")]: {
			display: "block"
		}
	},
	toolbar: {
		minHeight: "36px"
	},
	titleElement: {
		marginLeft: 16,
		color:"white",
	}
})


const Header = props => {
	const { classes } = props
	const handleDrawerToggle = props.handleDrawerToggle
	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar
				className={classes.toolbar}
				variant="dense"
			>
			<SvgIcon
					onClick={handleDrawerToggle}
					className={classes.menuButton}
			>
				<path fill="#0e92cc" d="M32 3.333v25.333l-8 3.333-24-7.333v-0.748l24 2.060v-25.979zM1.333 17.481l4.513-4.148-4.513-4.148 1.891-1.103 4.58 3.451 8.196-7.533 4 1.941v14.784l-4 1.941-8.196-7.533-4.579 3.452zM10.192 13.333l5.808 4.377v-8.755z"></path>
			</SvgIcon>				
			<SvgIcon
					className={classes.logo}
			>
				<path fill="#0e92cc" d="M32 3.333v25.333l-8 3.333-24-7.333v-0.748l24 2.060v-25.979zM1.333 17.481l4.513-4.148-4.513-4.148 1.891-1.103 4.58 3.451 8.196-7.533 4 1.941v14.784l-4 1.941-8.196-7.533-4.579 3.452zM10.192 13.333l5.808 4.377v-8.755z"></path>
			</SvgIcon>				
				<Typography
					className={classes.titleElement}
					variant="h6"
					noWrap
				>
					Developer Profile
				</Typography>
			</Toolbar>
		</AppBar>
	)
}
export default withStyles(styles)(Header)
