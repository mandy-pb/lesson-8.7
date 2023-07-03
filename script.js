var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];

for (var language of programmingLanguages) {
  console.log(`I want to learn ${language}!`);
}

programmingLanguages.forEach(function (language, index) {
  console.log(`${index + 1}. ${language.toUpperCase()}`);
});

var updatedLanguages = programmingLanguages.filter(function (language) {
  return language.includes("y");
});
console.log(updatedLanguages);
