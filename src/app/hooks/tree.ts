import { useState, useEffect } from 'react'

type Path = string
type File = {
  path: string
  [name: string]: string | File
}

export const useTree = () => {
  const shaMaster = 'eb0980092b445a4b9da9d843ada8d61cd0644dc8'
  const threePath = `https://api.github.com/repos/lguibr/profile/git/trees/${shaMaster}?recursive=1`
  const [tree, setTree] = useState([])

  const buildTree = (rawTree: []) => {
    const initialTree = []
    let level = { tree: initialTree }
    rawTree.forEach((file: File) => {
      const path: string = file.path

      path.split('/').reduce((predecessor, name) => {
        if (!predecessor[name]) {
          predecessor[name] = { tree: [] }
          predecessor.tree.push({
            name,
            children: predecessor[name].tree,
            path: path,
          })
        }

        return predecessor[name]
      }, level)
    })

    return initialTree
  }

  const fetchTree = async () => {
    const res = await fetch(threePath)
    const data = await res.json()
    const rawTree = data.tree
    const tree = buildTree(rawTree)

    setTree(tree)
  }

  useEffect(() => {
    fetchTree()
  }, [])
  return { tree: tree }
}

export default useTree
