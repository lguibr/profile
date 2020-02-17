import React from 'react'
import Text from 'app/components/core/Text'

import { useTree } from 'app/hooks/tree'

import Git from 'app/components/core/Icons/Git'
import File from 'app/components/core/Icons/File'

import {Container, Sections, Resizable, TreeContainer, FilePointer } from './styled'

export type SideBarProps = {handleEditorValue : ()=>void}

const SideBar: React.FC<SideBarProps> = ({handleEditorValue}) => {
  const { tree } = useTree()
  console.log(tree)

  const buildNode = (node) =>
    Object.entries(node).map(([key, { name, path, children }]) =>
        (
        <FilePointer key={path}>
        <Text variant="filePointer" onClick={()=>handleEditorValue(path)}>
          {name}
        </Text>
        {children.length > 0 &&  buildNode(children)}
        </FilePointer>
      )

  return (
    <Container>
    <Sections>
      <File height={36} />
      <Git height={36}/>

    </Sections>
    <Resizable min={100} initial={250} max={600} direction="horizontal">
      <TreeContainer>
      {buildNode(tree)}
      </TreeContainer>

    </Resizable>
    </Container>
  )
}

export default SideBar
