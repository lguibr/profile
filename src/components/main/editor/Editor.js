import React from "react"
import AceEditor from "react-ace"
import "brace/mode/json"
import "brace/mode/markdown"
import "./../../../assets/tomorrow_night_nineties"
import personal from "../../../data/personal"
import education from "../../../data/education"
import professional from "../../../data/professional"
import projects from "../../../data/projects"
import TabFiles from "./tabFiles/TabFiles"
const Editor = props => {
	const { current, files, setCurrent, mode } = props
	const onEditorLoad = editorObject => {
		// console.log(editorObject)
	}
	const onEditorChange = newValue => {
		// console.log(newValue)
	}
	const getFileByCurrent = () => {
		switch (current) {
			case "personal":
				return JSON.stringify(personal, null, "\t")
			case "education":
				return JSON.stringify(education, null, "\t")
			case "professional":
				return JSON.stringify(professional, null, "\t")
			case "projects":
				return JSON.stringify(projects, null, "\t")
			default:
				return "error"
		}
	}
	return (
		current && (
			<>
				<div style={{ minHeight: 36 }} />
				<div style={{ minHeight: 36 }}>
					<div />
					<TabFiles
						setCurrent={setCurrent}
						current={current}
						files={files}
					/>
				</div>
				<AceEditor
					placeholder="//Loading..."
					mode={mode}
					theme="tomorrow_night_nineties"
					onChange={onEditorChange}
					onLoad={onEditorLoad}
					name="aceEditor"
					fontSize={"0.9rem"}
					showPrintMargin={false}
					wrapEnabled={true}
					width="100%"
					height="calc(100vh - 92px)"
					value={getFileByCurrent()}
					highlightActiveLine={false}
					editorProps={{ $blockScrolling: true }}
					setOptions={{
						showLineNumbers: true,
						tabSize: 2,
						fontFamily:
							"'Roboto Mono','Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback'"
					}}
				/>
			</>
		)
	)
}
export default Editor
