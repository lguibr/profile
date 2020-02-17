import { useState, useEffect } from 'react'

export const useFile = (path: string) => {
  const [file, setFile] = useState('Loading')

  const filePath = `https://api.github.com/repos/lguibr/profile/contents/${path}?ref=master`

  const fetchFile = async () => {
    const res = await fetch(filePath)
    const data = await res.json()
    console.log(data)

    const rawFile = decodeURIComponent(escape(window.atob(data.content)))

    setFile(rawFile)
  }

  useEffect(() => {
    fetchFile()
  }, [path])
  return { file }
}

export default useFile
