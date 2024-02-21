const myObj = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    // console.log(`${key} is the file extension of ${myObj[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
//    console.log(key, ':-', programming[key])
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('FR', "France")

for (const key in map) {
    console.log(key)
}