import React from "react"
import { withStyles } from "@material-ui/styles"
import DevicesIcon from "@material-ui/icons/Devices"
import CallSplitIcon from "@material-ui/icons/CallSplit"
import { Typography } from "@material-ui/core"
const styles = theme => ({
	footerContainer: {
		width: "100%",
		position: "fixed",
		backgroundColor: "#0289c7",
		bottom: "0px",
		zIndex: "1400",
		padding: "0.5em 1em 0.5em 1em",
		fontSize: 10,
		height: 20,
		display: "flex",
		justifyContent: "space-between"
	}
})
const Footer = props => {
	const { classes } = props
	return (
		<div className={classes.footerContainer}>
			<Typography variant={"inherit"}>
				<CallSplitIcon fontSize={"inherit"} />
				master*
			</Typography>
			<DevicesIcon fontSize={"inherit"} />
			<Typography variant={"inherit"}>Tab Size: 2 UTF-8 JSON</Typography>
		</div>
	)
}
export default withStyles(styles)(Footer)
