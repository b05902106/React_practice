const a = [5, 1, 3]
console.log(a.filter(({ }, index) => { return index !== 2 }))
console.log(a)
