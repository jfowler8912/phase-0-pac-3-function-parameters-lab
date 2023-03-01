function introduction(name = "Josh"){
    return(`Hi, my name is ${name}.`)
}
function introductionWithLanguage(name = "Josh",language = "Java"){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
function introductionWithLanguageOptional(name = "Josh",language = "JavaScript"){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
function logTwoValues(value1, value2) {
  console.log(`The two values are ${value1} and ${value2}.`);
}