import React from "react"
import { withStyles } from "@material-ui/styles"
import CallSplitRoundedIcon from "@material-ui/icons/CallSplitRounded"
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined"
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined"
import BugReportOutlinedIcon from "@material-ui/icons/BugReportOutlined"
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg"
const styles = theme => ({
	iconContainer: {
		display: "flex",
		justifyContent: "center",
		marginBottom: "1.2em"
	}
})
const TabItem = props => {
	const { name, tab, setTab, classes } = props

	const getIcon = () => {
		switch (name) {
			case "explorer":
				return <FileCopyOutlinedIcon />
			case "contact":
				return <PermPhoneMsgIcon />
			case "repo":
				return <CallSplitRoundedIcon />
			case "about":
				return <BugReportOutlinedIcon />
			case "dash":
				return <DashboardOutlinedIcon />
			default:
				return "opa?"
		}
	}

	return (
		<div
			className={classes.iconContainer}
			onClick={() => {
				setTab(name)
			}}
			style={{
				color: tab === name ? "#fff" : "#ccc"
			}}
		>
			{getIcon()}
		</div>
	)
}

export default withStyles(styles)(TabItem)
