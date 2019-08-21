import React from "react"

export default function MenuBarAbout(props) {
	const { open, drawerWidth } = props
	return (
		<div
			style={{
				width: drawerWidth - 50,
				backgroundColor: "#28282a",
				marginTop: !open ? 36 : 0
			}}
		>
			<p>About</p>
		</div>
	)
}
