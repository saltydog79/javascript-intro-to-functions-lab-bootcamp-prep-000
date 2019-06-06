function shout(hello) {
return hello.toUpperCase()
}

function whisper(hello) {
return hello.toLowerCase()
}

var hello = 'hello'
function logShout(string) {
  console.log(hello)
  return `${hello.toUpperCase()}`
}


var hello = 'hello'
function logWhisper(string) {
  console.log(hello)
  return `${hello}`
}
