function skillsMember() {
  var skills = ['HTML', 'CSS', 'JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'MongoDB', 'Express', 'Ruby', 'Rails', 'Java', 'C#', 'C++', 'C', 'PHP', 'Swift', 'Go', 'Rust', 'Kotlin', 'Scala', 'Perl', 'Haskell', 'Elixir', 'R', 'Clojure', 'Erlang', 'Dart', 'Lua', 'Groovy', 'TypeScript', 'CoffeeScript', 'Shell', 'Bash', 'PowerShell', 'Objective-C', 'Assembly', 'Vimscript', 'Emacs Lisp', 'MATLAB', 'Julia', 'Visual Basic', 'Racket', 'F#', 'OCaml', 'Scheme', 'Pascal', 'D', 'Ada', 'Prolog', 'Lisp', 'Smalltalk', 'Fortran', 'Haxe', 'Rust', 'Erlang', 'Elixir', 'Julia', 'Haskell', 'Lisp', 'OCaml', 'Racket', 'Scheme', 'Smalltalk', 'Fortran', 'Ada', 'Prolog', 'Perl', 'Python', 'Ruby', 'JavaScript', 'Java', 'C', 'C++', 'C#', 'Swift', 'Objective-C', 'Go', 'PHP', 'SQL', 'R', 'Scala', 'Kotlin', 'TypeScript', 'CoffeeScript', 'Lua', 'Clojure', 'Groovy', 'Shell', 'Bash', 'PowerShell', 'Vimscript', 'Emacs Lisp', 'MATLAB', 'Visual Basic', 'F#', 'D', 'Pascal', 'Haxe', 'Assembly'];
  var memberSkills = [];
  for (var i = 0; i < 5; i++) {
    var randomIndex = Math.floor(Math.random() * skills.length);
    memberSkills.push(skills[randomIndex]);
    skills.splice(randomIndex, 1);
  }
  return memberSkills;
}