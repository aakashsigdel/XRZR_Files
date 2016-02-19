const fs = require('fs')

const linkName = process.argv[2]
const files = fs.readdirSync('./' + linkName)
const uri = 'http://aakashsigdel.github.io/XRZR_Files/' + linkName +'/'
files.map((file) => {
  console.log(uri + encodeURIComponent(file))
})
