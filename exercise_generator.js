var fs = require('fs')

var files = fs.readdirSync('./Exercises')

var output = {}

files.map((item, index) => {
  var url = 'http://aakashsigdel.github.io/XRZR_Files/Exercises/' + encodeURIComponent(item)
  output[index] = {
    id: index,
    title: item,
    mode: 'time',
    instructor: 1,
    duration: 45,
    videoUri: url
  }
})

console.log(JSON.stringify(output))
