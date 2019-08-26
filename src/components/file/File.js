import React from "react"
import { withStyles } from "@material-ui/styles"
import { Typography } from "@material-ui/core"
import SvgIcon from "@material-ui/core/SvgIcon"


const styles = theme => ({
	elementContainer: {
		display: "flex",
		backgroundColor: props =>
			props.isCurrent
				? props.selectedBackground
				: props.defaultBackground,
		width: "100%",
		cursor: "pointer",
		marginRight: 2,
		"&:hover": {
			backgroundColor: props => props.selectedBackground
		}
	},
	icon: {
		margin: ".5em",
		color: "#f7df1e",
		fontSize: "1em",
		borderRadius: "10%"
	}
})
const File = props => {
	// eslint-disable-next-line

	const { fileName, classes, setOpenedFiles = () => null } = props
	return (
		<div
			onClick={() => setOpenedFiles(fileName)}
			className={classes.elementContainer}
		>
			<SvgIcon viewBox="0 0 32 32" className={classes.icon}>
				<path d="M0 0h32v32h-32v-32zM29.379 24.368c-0.233-1.46-1.184-2.687-4.004-3.831-0.981-0.46-2.072-0.78-2.396-1.52-0.121-0.44-0.14-0.68-0.061-0.94 0.2-0.861 1.22-1.12 2.020-0.88 0.52 0.16 1 0.56 1.301 1.2 1.379-0.901 1.379-0.901 2.34-1.5-0.36-0.56-0.539-0.801-0.781-1.040-0.84-0.94-1.959-1.42-3.779-1.379l-0.94 0.119c-0.901 0.22-1.76 0.7-2.28 1.34-1.52 1.721-1.081 4.721 0.759 5.961 1.82 1.36 4.481 1.659 4.821 2.94 0.32 1.56-1.16 2.060-2.621 1.88-1.081-0.24-1.68-0.781-2.34-1.781l-2.44 1.401c0.28 0.64 0.6 0.919 1.080 1.479 2.32 2.341 8.12 2.221 9.161-1.339 0.039-0.12 0.32-0.94 0.099-2.2l0.061 0.089zM17.401 14.708h-2.997c0 2.584-0.012 5.152-0.012 7.74 0 1.643 0.084 3.151-0.184 3.615-0.44 0.919-1.573 0.801-2.088 0.64-0.528-0.261-0.796-0.621-1.107-1.14-0.084-0.14-0.147-0.261-0.169-0.261l-2.433 1.5c0.407 0.84 1 1.563 1.765 2.023 1.14 0.68 2.672 0.9 4.276 0.54 1.044-0.301 1.944-0.921 2.415-1.881 0.68-1.24 0.536-2.76 0.529-4.461 0.016-2.739 0-5.479 0-8.239l0.005-0.075z" />
			</SvgIcon>
			<Typography noWrap>{fileName}.js</Typography>
		</div>
	)
}

export default withStyles(styles)(File)
