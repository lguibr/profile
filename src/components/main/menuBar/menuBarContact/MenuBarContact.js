import React from "react"
import { Typography } from "@material-ui/core"
import { withStyles } from "@material-ui/styles"

const drawerWidth = 220
const styles = theme => ({
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0
		}
	}
})
const MenuBarContact = props => {
	const { open, drawerWidth } = props
	return (
		<div
			style={{
				width: drawerWidth - 50,
				backgroundColor: "#28282a",
				marginTop: !open ? 36 : 0
			}}
		>
			<div
				style={{
					minHeight: "2em",
					display: "flex",
					justifyContent: "center",
					padding: "0.25em"
				}}
			>
				<Typography variant="caption">CONTATOS</Typography>
			</div>
			<div style={{ minHeight: "5em" }}>
				<div
					style={{
						backgroundColor: "#393939",
						minHeight: "1.5em",
						display: "flex",
						justifyContent: "center",
						padding: "0.25em"
					}}
				>
					<Typography
						style={{ fontWeight: "bolder" }}
						variant="caption"
					>
						EMAIL
					</Typography>
				</div>
				<div
					style={{
						display: "flex",
						padding: "0px 10px",
						width: "100%",
						cursor: "pointer"
					}}
				>
					<div>
						<Typography>lgpelin92@gmail.com</Typography>
					</div>
				</div>
			</div>
		</div>
	)
}

export default withStyles(styles)(MenuBarContact)
