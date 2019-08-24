import React from "react"
import File from "./../../../file/File"

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
					borderBottom: name === current ? "1px solid tomato" : "0px",
					marginRight: "1px",
					padding: " .3rem 2rem .3rem .3rem",
					height: "100%",
					cursor: "pointer",
					display: "block-inline"
				}}
			>
				<File
					defaultBackground={"#0000"}
					selectedBackground={"#0000"}
					fileName={name}
					key={name}
					isCurrent={name === current}
				/>
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
