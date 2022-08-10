// __dirname - path to current directory
// __filename - file name
// require    - function to use modules(common js)
// modules    - info about current module(files)
// process    - info about env where the program is beging executede

// Node uses commonJS Module, every file in node is a module (by default)
// modules =  Encapsulated code (only share minimum)

const student = (nam1, nam2) => {
  console.log(
    `We have two students in this class and their names are ${nam1} and ${nam2}`
  );
};

module.exports = student;
