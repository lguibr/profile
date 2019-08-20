import React from "react"

import AceEditor from "react-ace"
import "brace/mode/json"
import "./../../../assets/tomorrow_night_nineties"

import personal from "../../../data/personal"
import education from "../../../data/education"
import professional from "../../../data/professional"
import projects from "../../../data/projects"

const Editor = props => {
	const { current } = props
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
				return "//default"
		}
	}

	return (
		<AceEditor
			placeholder="//Loading..."
			mode="json"
			theme="tomorrow_night_nineties"
			onChange={onEditorChange}
			onLoad={onEditorLoad}
			name="aceEditor"
			fontSize={"0.9rem"}
			showPrintMargin={false}
			wrapEnabled={true}
			width="100%"
			height="100%"
			value={getFileByCurrent()}
			highlightActiveLine={false}
			editorProps={{ $blockScrolling: true }}
			setOptions={{
				showLineNumbers: true,
				tabSize: 2,
				fontFamily: "'Roboto Mono','Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback'"
			}}
		/>
	)
}
export default Editor
