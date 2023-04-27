// Pattern 1 
for (let i:number=1 ; i<= 5 ; i++)
{
    let row:string = "";
    for (let j:number=1 ; j<=i ; j++){
        row += "* ";
    }
    console.log(row);
}

console.log("\n");

// Pattern 2

for (let i = 1; i <= 5; i++) {
    let row:string = "";
  for (let j = i; j <= 5; j++) {
    row += '* ';
  }
  console.log(row);
}

console.log("\n");

// Pattern 3

for (let i = 1; i <= 5; i++) {
    let row:string = "";
  for (let j = i; j <= 5; j++) {
    row += ' ';
  }
  for (let j = 1; j <=i; j++) {
    row += ' *';
  }
  console.log(row);
}

console.log("\n");

// Pattern 4

for (let i = 1; i <= 5; i++) {
    let row:string = "";

  for (let j = 1; j <= i; j++) {
    row += ' ';
  }

  for (let j = i; j <= 5; j++) {
    row += ' *';
  }
  console.log(row);
}

console.log("\n");

// Pattern 5 

for (let i:number=1 ; i<= 5 ; i++)
{
    let row:string = "";
    for (let j:number=1 ; j<=i ; j++){
        row += " "+j;
    }
    console.log(row);
}
