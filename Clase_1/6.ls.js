const fs = require('node:fs')

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error al leer el directorio')
    return
  }
  files.forEach((file) => {
    console.log(file)
  })
})

// Otra forma de hacerlo, con try catch para manejar el error
/*
const fs = require('node:fs/promises')

fs.readdir('.')
  .then(files => {
    files.forEach(file => {
      console.log(file)
    })
  })
  .catch(err => {
    if (err) {
      console.error('Error al leer el directorio: ', err)
      return;
    }
  })
*/
