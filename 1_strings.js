const string = `
  JavaScript is the best language in the world. 
  Lets learn JavaScript together
`

// старый способ
console.log(string.replace(/JavaScript/g, 'Java'))
// новый способ
console.log(string.replaceAll('JavaScript', 'Java'))
