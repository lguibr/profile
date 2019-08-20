import React from "react"
import { withStyles } from "@material-ui/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import MenuRoundedIcon from "@material-ui/icons/MenuRounded"
import CodeIcon from "@material-ui/icons/Code"
const styles = theme => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1
	},
	menuButton: {
		marginRight: theme.spacing(1),
		[theme.breakpoints.up("sm")]: {
			display: "none"
		}
	}
})
const Header = props => {
	const { classes } = props
	const handleDrawerToggle = props.handleDrawerToggle
	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar style={{ minHeight: "36px" }} variant="dense">
				<MenuRoundedIcon
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					className={classes.menuButton}
				/>
				<CodeIcon
					style={{
						marginLeft: 16
					}}
				/>
				<Typography
					style={{
						marginLeft: 16
					}}
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