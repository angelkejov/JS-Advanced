function solve(n) {
  let stringSquare = '';
  for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
      stringSquare += ' *';
    }
    stringSquare += '\n';
  }

  console.log(stringSquare);
}

solve(10);