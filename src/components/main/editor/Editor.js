import React from "react"

import AceEditor from "react-ace"
import "brace/mode/yaml"
import "brace/theme/gruvbox"

import personal from "../../../data/personal";
import education from "../../../data/education";
import professional from "../../../data/professional";
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
        switch(current){
            case "personal":
                return JSON.stringify(personal,null,4)
            case "education":
                return JSON.stringify(education,null,4)
            case "professional":
                return JSON.stringify(professional,null,4)
            case "projects":
                return JSON.stringify(projects,null,4)
            default:
                return "//default"
        }
    }

    return (
        <AceEditor
            placeholder="//Loading..."
            mode="yaml"
            theme="gruvbox"
            onChange={onEditorChange}
            onLoad={onEditorLoad}
            name="aceEditor"
            fontSize={"1rem"}
            showPrintMargin={false}
            wrapEnabled={true}
            width="100%"
            height="100%"
            value={getFileByCurrent()}
            highlightActiveLine={true}
            editorProps={{ $blockScrolling: true }}
            setOptions={{
                showLineNumbers: true,
                tabSize: 2
            }}
        />
    )
}
export default Editor
