import React from "react"
import AceEditor from "react-ace"

import "brace/mode/json"
import "brace/theme/gruvbox"

const Editor = props => {
    const onEditorLoad = editorObject => {
        // console.log(editorObject)
    }
    const onEditorChange = newValue => {
        console.log(newValue)
    }
    return (
        <AceEditor
            placeholder="//Loading..."
            mode="json"
            theme="gruvbox"
            onChange={onEditorChange}
            onLoad={onEditorLoad}
            name="aceEditor"
            fontSize={16}
            showPrintMargin={false}
            wrapEnabled={true}
            width="100%"
            height="100%"
            value={props.value}
            highlightActiveLine={false}
            editorProps={{ $blockScrolling: true }}
            setOptions={{
                showLineNumbers: true,
                tabSize: 2
            }}
        />
    )
}
export default Editor
