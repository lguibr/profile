import React from 'react'
import AceEditor from 'react-ace'
import { useFile } from 'app/hooks/file'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-tomorrow_night'

import { Container } from './styled'

export type EditorProps = { value: string }

const Editor: React.FC<EditorProps> = ({ value }) => {
  console.log(value)

  const { file } = useFile(value)
  const onChange = (newValue: string) => {
    console.log('change', newValue)
  }

  return (
    <Container>
      <AceEditor
        width="100%"
        height="100%"
        mode="javascript"
        value={file}
        theme="tomorrow_night"
        onChange={onChange}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
      />
    </Container>
  )
}

export default Editor
