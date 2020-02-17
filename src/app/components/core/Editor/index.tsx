import React from 'react'
import AceEditor from 'react-ace'
import get from 'lodash/get'
import last from 'lodash/last'
import { useFile } from 'app/hooks/file'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-markdown'
import 'ace-builds/src-noconflict/mode-yaml'
import 'ace-builds/src-noconflict/mode-typescript'
import 'ace-builds/src-noconflict/mode-text'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/mode-dockerfile'
import 'ace-builds/src-noconflict/theme-dracula'
import { Container } from './styled'

export type EditorProps = { path: string }

const fileExt = {
  md: 'markdown',
  ts: 'typescript',
  tsx: 'typescript',
  js: 'javascript',
  jsx: 'javascript',
  html: 'javascript',
  json: 'javascript',
  Dockerfile: 'dockerfile',
}

const Editor: React.FC<EditorProps> = ({ path }) => {
  console.log(path)

  const { file } = useFile(path)
  const extension: string = last(path.split('.')) || ''
  console.log(extension)

  const getMode = (ext: string): string => get(fileExt, ext, 'markdown')

  const onChange = (newValue: string) => {
    console.log('change', newValue)
  }

  return (
    <Container>
      <AceEditor
        width='100%'
        height='100%'
        mode={getMode(extension)}
        showPrintMargin={false}
        value={file}
        theme='dracula'
        onChange={onChange}
        name='code-editor'
        editorProps={{ $blockScrolling: true }}
      />
    </Container>
  )
}

export default Editor
