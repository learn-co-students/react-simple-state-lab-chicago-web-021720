
export var pattern1 = [
  ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
  ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
  ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
  ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
  ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
  ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
  ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
  ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
  ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
  ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F']
]

export const defaultPattern = () => {
  const array = []
    for (let i=0; i < 10; i++) {
      const rowArray = []
      for (let i=0; i < 10; i++) {
        rowArray.push('#F00')
      }
      array.push(rowArray)
    }
    return array
}