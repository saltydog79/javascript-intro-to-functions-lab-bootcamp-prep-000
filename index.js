function shout(hello) {
return hello.toUpperCase()
}

function whisper(hello) {
return hello.toLowerCase()
}

var string = 'hello'
function logShout(string) {
  console.log(string)
  return string.toUpperCase()
}

logShout('hello')

var hello = 'hello'
function logWhisper(string) {
  console.log(hello)
  return `${hello}`
}
