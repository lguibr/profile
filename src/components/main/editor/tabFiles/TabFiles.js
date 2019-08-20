import React from "react"
const TabFiles = props => {
	const { files, current, setCurrent } = props
	const tabs = files.map((e, i) => {
		let name = Object.keys(e)[0]
		let value = Object.values(e)[0]
		return value ? (
			<div
				key={i}
				onClick={() => {
					setCurrent(name)
				}}
				style={{
					backgroundColor: name === current ? "#232323" : "#292929",
					borderRight: "1px solid #0000",
					borderBottom:
						name === current ? "1px solid tomato" : "0px",
					marginRight: "1px",
					padding: ".6em",
					height: "100%",
					cursor: "pointer"
				}}
			>
				<p>{name}</p>
			</div>
		) : (
			""
		)
	})
	return (
		<div
			style={{
				display: "flex",
				height: "100%",
				backgroundColor: "#262626"
			}}
		>
			{tabs}
		</div>
	)
}
export default TabFiles
