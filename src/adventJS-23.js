export const canReconfigure = (from, to) => {

  // REFACTOR VEMOS QUE NO SE NECESITA
  // if(from === undefined) throw new Error("from is required")
  if(typeof from !== "string") throw new Error("from must be a string")
  if(typeof to !== "string") throw new Error("to must be a string")

  const isSameLength = from.length === to.length
  if(!isSameLength) return false

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if(!hasSameUniqueLetters) return false

  const transformations = {}
  
  for( let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storedLetter = transformations[fromLetter]
    if(storedLetter && storedLetter !== toLetter) return false

    transformations[fromLetter] = toLetter
  }

  return true
}