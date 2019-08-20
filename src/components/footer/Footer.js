import React from "react"
import { withStyles } from "@material-ui/styles"

const styles = props => ({
	footerContainer: {
		width: "100%",
		height: "20px",
		position: "fixed",
		backgroundColor: "#007acc",
		bottom: "0px",
		zIndex: "1400",
		paddingLeft: "1rem"
	}
})

const Footer = props => {
	const { classes } = props

	return (
		<div className={classes.footerContainer}>
			<div>
				<h1> Mega Teste </h1>
			</div>
		</div>
	)
}

export default withStyles(styles)(Footer)
