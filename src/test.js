arr = [5, 12, 6, 23]
obj = { d: '332', a: 12, subobj: { q: 'gg' } }
obj_n = { n: 12345 }

obj2 = Object.assign({}, obj)

obj2.subobj.q = 'aa'
obj2.d = 'zz'

obj3 = JSON.parse(JSON.stringify(obj))

console.log(obj3)