import React from "react"
import { withStyles } from "@material-ui/styles"
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined"
import SvgIcon from "@material-ui/core/SvgIcon"

const styles = theme => ({
	iconContainer: {
		display: "flex",
		justifyContent: "center",
		marginBottom: "1.2em",
		cursor: "pointer",
		color: props => (props.tab === props.name ? "#fff" : "#ccc"),
		"&:hover": {
			color: "#fff"
		}
	}
})
const TabSelector = props => {
	// eslint-disable-next-line
	const { name, tab, setTab, classes } = props
	const getIcon = () => {
		switch (name) {
			case "explorer":
				return <FileCopyOutlinedIcon />
			case "contact":
				return (
					<SvgIcon viewBox="0 0 32 32">
						<path d="M6 0v32h24v-32h-24zM18 8.010c2.203 0 3.99 1.786 3.99 3.99s-1.786 3.99-3.99 3.99-3.99-1.786-3.99-3.99 1.786-3.99 3.99-3.99v0zM24 24h-12v-2c0-2.209 1.791-4 4-4v0h4c2.209 0 4 1.791 4 4v2z"></path>
						<path d="M2 2h3v6h-3v-6z"></path>
						<path d="M2 10h3v6h-3v-6z"></path>
						<path d="M2 18h3v6h-3v-6z"></path>
						<path d="M2 26h3v6h-3v-6z"></path>
					</SvgIcon>
				)
			case "repo":
				return (
					<SvgIcon viewBox="0 0 20 20">
						<path d="M16.4 4c0-1.326-1.074-2.4-2.4-2.4s-2.4 1.074-2.4 2.4c0 0.961 0.568 1.784 1.384 2.167-0.082 1.584-1.27 2.122-3.335 2.896-0.87 0.327-1.829 0.689-2.649 1.234v-4.121c0.825-0.38 1.4-1.209 1.4-2.176 0-1.326-1.074-2.4-2.4-2.4s-2.4 1.074-2.4 2.4c0 0.967 0.576 1.796 1.4 2.176v7.649c-0.825 0.379-1.4 1.208-1.4 2.175 0 1.326 1.074 2.4 2.4 2.4s2.4-1.075 2.4-2.4c0-0.961-0.568-1.784-1.384-2.167 0.082-1.583 1.271-2.122 3.335-2.896 2.030-0.762 4.541-1.711 4.64-4.756 0.829-0.378 1.409-1.21 1.409-2.181zM6 2.615c0.764 0 1.384 0.619 1.384 1.385 0 0.764-0.62 1.385-1.384 1.385s-1.384-0.621-1.384-1.385c0-0.766 0.619-1.385 1.384-1.385zM6 17.385c-0.766 0-1.385-0.621-1.385-1.385 0-0.766 0.619-1.385 1.385-1.385 0.764 0 1.384 0.619 1.384 1.385 0 0.764-0.62 1.385-1.384 1.385zM14 5.385c-0.766 0-1.385-0.621-1.385-1.385 0-0.766 0.619-1.385 1.385-1.385 0.764 0 1.384 0.619 1.384 1.385 0 0.764-0.62 1.385-1.384 1.385z"></path>
					</SvgIcon>
				)
			default:
				return (
					<SvgIcon viewBox="0 0 32 32">
						<path d="M14 9.5c0-0.825 0.675-1.5 1.5-1.5h1c0.825 0 1.5 0.675 1.5 1.5v1c0 0.825-0.675 1.5-1.5 1.5h-1c-0.825 0-1.5-0.675-1.5-1.5v-1z"></path>
						<path d="M20 24h-8v-2h2v-6h-2v-2h6v8h2z"></path>
						<path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
					</SvgIcon>
				)
		}
	}

	return (
		<div className={classes.iconContainer} onClick={() => setTab(name)}>
			{getIcon()}
		</div>
	)
}

export default withStyles(styles)(TabSelector)
