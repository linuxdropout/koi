export async function readFile(file: File) {
  const reader = new FileReader()

  const res = await new Promise<string | ArrayBuffer>((resolve, reject) => {
    reader.onerror = err => {
      reject(err)
    }
    reader.onload = () => {
      if (!reader.result) {
        reject(new Error('Not parsed'))
        return
      }
      resolve(reader.result)
    }
    reader.readAsArrayBuffer(file)
  })

  return res
}
