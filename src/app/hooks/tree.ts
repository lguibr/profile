import { useState, useEffect } from 'react'

type TreeRawData = { path: string }
type Tree =
  | [
      {
        path: string
        children: Tree
      },
    ]
  | []

export const useTree = () => {
  const shaMaster = '53335d6a1f14ac92964df8359316d8ca265cba1c'
  const threePath = `https://api.github.com/repos/lguibr/profile/git/trees/${shaMaster}?recursive=1`
  const [tree, setTree] = useState([])

  let paths = [
    'About.vue',
    'Categories/Index.vue',
    'Categories/Demo.vue',
    'Categories/Flavors.vue',
    'Categories/teste/Types/Index.vue',
    'Categories/Types/poi/Other.vue',
  ]

  const buildTree = (rawTree: []) => {
    const tree: Tree = []
    let level = { tree }
    rawTree.forEach((item: TreeRawData) => {
      const path: string = item.path
      path.split('/').reduce((predecessor, name: string) => {
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

    return tree
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
