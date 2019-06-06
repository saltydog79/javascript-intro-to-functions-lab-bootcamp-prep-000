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

function sayHiToGrandma(string) {
if (string === string.toLowerCase()) {return 'I can\'t hear you!';}
}

function sayHiToGrandma(string) {
if  (string === string.toUpperCase()) {return string ('Yes indeed!').toUpperCase();}
}

function sayHiToGrandma(string){
  if (string === 'I love you, Grandma.') {return 'I love you, too.';}
}
