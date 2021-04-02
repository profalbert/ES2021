let a = 1
let b = 42

// старый способ
if (a) {
  a = b
}
if (!a) {
  a = b
}
if (a === null || a === undefined) {
  a = b
}

// обычный способ
a && (a = b)
a || (a = b)
a ?? (a = b)

// новый способ
a &&= b
a ||= b
a ??= b

console.log(a)
