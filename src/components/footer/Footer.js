import React from "react"
import { withStyles } from "@material-ui/styles"
import DevicesIcon from "@material-ui/icons/Devices"
import CallSplitIcon from "@material-ui/icons/CallSplit"
import { Typography } from "@material-ui/core"
const styles = props => ({
	footerContainer: {
		width: "100%",
		position: "fixed",
		backgroundColor: "#0289c7",
		bottom: "0px",
		zIndex: "1400",
		padding: "0.5em 5em 0.5em 5em",
		fontSize: 10,
		height: 20
	}
})
const Footer = props => {
	const { classes } = props
	return (
		<div className={classes.footerContainer}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between"
				}}
			>
				<Typography variant={"inherit"}>
					<CallSplitIcon fontSize={"inherit"} />
					master*
				</Typography>
				<DevicesIcon fontSize={"inherit"} />
				<Typography variant={"inherit"}>
					Tab Size: 2 UTF-8 JSON
				</Typography>
			</div>
		</div>
	)
}
export default withStyles(styles)(Footer)
