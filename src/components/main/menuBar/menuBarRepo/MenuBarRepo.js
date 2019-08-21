import React from "react"

export default function MenuBarRepo(props) {
	const { open, drawerWidth } = props
	return (
		<div
			style={{
				width: drawerWidth - 50,
				backgroundColor: "#28282a",
				marginTop: !open ? 36 : 0
			}}
		>
			<p>repo</p>
		</div>
	)
}
