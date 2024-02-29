// let num = 7;

// let space = " "

// for (let i = 1; i <= num; i++) {
//     let a = Math.floor(num / 2) + 1; // Calculate the center position

//     let row = ' ';
//     for (let j = 1; j <= num; j++) {
//         if (j === a || i === a) {
//             row += "* ";
//         } else {
//             row += "# "; // Add space for better visualization
//         }
//     }

//     document.write(row + "<br>");

// }

// for (let i = 1; i <= 5 ; i++){
//     row = ''
//     for(let j = 1; j <= 7 ; j++){
// if(i === 1 || i === 5 || j === 1 || j === 7){
//     document.write(" *")
// }else{
//     document.write(" #")
// }
//     }
//     document.write("<br>")
// }

// for (let i = 1; i <= 5 ; i++){
//     for(let j = 1; j <= 5 ; j++){
//         if(i === j || i + j === 5 + 1){
//             document.write("*")
//         }else{
//             document.write("#")
//         }
//     }
//     document.write("<br>")
// }

// let a = 1;
// for(let i = 1; i <= 4; i++){
// for(let j = 1; j <= i ; j++){

//     document.write(a)
//     a += 1
// }
// document.write("<br>")
// }

// for (let i = 1 ; i <= 5 ; i++){
//     let a;
//     if(i % 2 !== 0){
//         a = 1
//     }else{
//         a = 0
//     }

//     for(let j = 1; j<=i; j++){
//         if(a == 0){
//             a = 1
//         }else{
//             a = 0
//         }
//         document.write(a)
//     }
//     document.write("<br>")
// }

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5 - i; j++) {
//         document.write("&nbsp; ");
//     }
//     for (let k = 1; k <= i; k++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// for(let i = 1; i <=4 ; i++){
//     for(let j = 1 ; j <= 4 + 1 - i ; j++){
//         document.write("&nbsp;")
//     }
//     for(let k = 1 ; k <= i ; k++){
//         document.write("*")
//     }
//     for(let l = 1 ; l <= i ; l++){
//         document.write(" &nbsp; ")
//     }
//     document.write("<br>")
// }

// for (let i = 1 ; i <= 6 ; i++){
//     for (let j = 1 ; j <= 6 - i ; j++){
//         document.write("&nbsp ")
//     }
//     for(let k = 1 ; k <= 6 ; k++){
//         document.write("*")
//     }

//     document.write("<br>")
// }

// for (let i = 1 ; i <= 5 ; i++){
//     for (let j = 0 ; j <= 5 - i ; j++){
//         document.write(" &nbsp ")
//     }
//     let charNum = 65
//     for(let k = 1 ; k <= i ; k++){
//         let char = String.fromCharCode(charNum)
// document.write(char)
//         charNum++
//     }

//     document.write("<br>")
// }

// let num = 1
// for(let i = 1 ; i <= 5 ; i++){
//     // let num = 2 * i - 1
// let char = 65
//     for(let k = 1 ; k <= 5 - i ; k++){
//         document.write( "&nbsp " +" &nbsp")
//     }
//     for(let j = 1 ; j <= num   ; j++){
//         let charCode =String.fromCharCode(char)
//         document.write(" " + charCode )
//         char+=1
//     }

//     num+=2
//     // for(let k = 1 ; k <=  ; k++){
//     //     document.write(" s")
//     // }
//     document.write("<br>")
// }

// for(let i  = 1 ; i <= 4 ; i++){
//     for(let k = 1 ; k <= 5 - i ; k++){
//                 document.write("&nbsp " + " &nbsp")
//             }
//     for (let j = 1 ; j <= i ; j++){
// document.write(j + " ")
//     }
//     for(let k = 1 ; k <= i - 1  ; k++){
// document.write(k + " ")
//     }
//     document.write("<br>")
// }

// for(let i  = 1 ; i <= 4 ; i++){

//     let char = 65
//     for(let k = 1 ; k <= 5 - i ; k++){
//                 document.write("&nbsp " + " &nbsp")
//             }
//     for (let j = 1 ; j <= i ; j++){

//         let string = String.fromCharCode(char)
// document.write(string + " ")

// char+= 1
//     }
//     for(let k = 1 ; k <= i - 1  ; k++){
//         let string = String.fromCharCode(char)
// document.write(string + " ")

// char+=1
//     }
//     document.write("<br>")
// }

// diamond

// for (let i = 1; i <= 4; i++) {

//     for(let k = 1; k <= 4 - i; k++){
//         document.write(" #")
//     }
//   for (let j = 1; j <= i * 2 - 1; j++) {
//     document.write(" *")
//   }
  





//   document.write("<br>")
// }

// let rows = 9;

// if (rows % 2 === 0) {
//     rows++; 
//     // Make it odd for a symmetrical diamond
// }

// let midPoint = Math.floor(rows / 2);
// console.log(midPoint)

// let diamaond = Math.abs(midPoint - 4) + Math.abs(midPoint - 4)
// console.log(diamaond)


// for (let i = 0; i < rows; i++) {
//     let row = '';

//     for (let j = 0; j < rows; j++) {
//         if (Math.abs(midPoint - i) + Math.abs(midPoint - j) <= midPoint) {
//             row += '* ';
//         } else {
//             row += '  '; // Add spaces for the empty areas
//         }
//     }

//     console.log(row);
// }

// let counter = 1
// for(let i = 1 ; i < 5 ; i++){
//     let row = "";
   
//     for(let j = 1 ; j < 5 - i  ; j++){
//         row += counter++ + "  "
        
//     }
//     console.log(row)
    
// }



// for(let i = 1 ; i <= 5 ; i++){
// let row = '  '
// for(let j = 1 ; j <= i ; j++){
//     let val = i - j + 1
// // row += val + "    "
// row += val + " "
// }
// console.log(row)

// }


// for( let i = 1 ; i <= 5 ; i++){
// let row = ''
// for(let j = 1 ; j <= 5 ; j++){
//     row += String.fromCharCode(64 + i)
    
// }
// console.log(row)
// document.write("<br>")
// }
// let num = 5;

// for (let i = 1; i <= 9; i++) {
//     let row = "";
//     let count;

//     if (i <= num) {
//         count = i;
//     } else {
//         count = num * 2 - i;
//     }

//     for (let j = 1; j <= count; j++) {
//         row += "*";
//     }

//     console.log(row);
// }

// Specify the number of rows you want in the pattern
// Specify the number of rows you want in the pattern

// let char = 64;
// for(let i = 1 ; i <= 3; i++){
//     char++;
//     let row = ''
//     for(let j = 1 ; j <= i ; j++){
// let alphabetic = String.fromCharCode(char)

// row += alphabetic + " "
// }
// console.log(row )

// }


// for(let i = 1 ; i <= 3 ; i++){
//   let row = ''
//     for(let j = 1 ; j <= 3 ; j++){

//         let from = i + j - 1 + 64
//         let alpha  = String.fromCharCode(from)
//        row += alpha + ' '

//     }
    
// console.log(row)


// }



// let char = 65
// for(let i = 1 ; i <=  4 ; i++){
//     let row = ' '
//     for(let j = 1 ; j <= i ; j++){
// let alpha = String.fromCharCode(char)
// // char++
// // row+= alpha
// row += alpha + ' '

// char++
//     }
//     console.log(row)
// }


//  for(let i = 1 ; i <= 4 ; i++){
//     let row = ' '
//     for(let j = 1 ; j <= i ; j++){
// let char = j - i + 4 + 64 
// let alpha = String.fromCharCode(char)
//         row += alpha + ' '
//     }
//     console.log(row)
//  }



// for(let i = 1 ; i <= 4 ; i++){
                        
// let row = " "
// let char = 65 + 4 - i
// for(let j = 1 ; j <= i ; j++)
// {
//     let alpha = String.fromCharCode(char)
//     row+= alpha + " "

//     char++
// }
// console.log(row)
// }

// for(let i = 1 ; i <= 4 ; i++){
// let row = " "

//     for(let j = 1 ; j <= i  ; j++){
// row += " "
//     }

//     for(let l = 1 ; l <= 4 + 1 - i ; l++){
//         row += "*"
//     }
//     console.log(row)
// }


// for(let i = 1 ; i <= 5 ; i++){


//     for(let j = 1 ; j <= )
// }


// for(let i = 1 ; i <= 4  ; i++){
// let row = ' '
// console.log(i)
// for(let j = 1 ; j <=  i ; j++){
//     row += i

// }

// console.log(row)

// }


// for(let i  = 1 ; i <= 4 ; i++){
// let row = " "
// let space = "  "

// for(let j = 1 ; j <= 4 - i + 1 ; j++){
//     row += space
// }
// for(let k = 1 ; k <= i ; k++){
//     row += k + " "
// }
// for( let l = 1 ; l <= i - 1 ; l++){
//     row += i - l + ' '
// }
// console.log(row)

// }



// Function to print a hollow pyramid with a given height



// for(let i = 1 ; i <= 5 ; i++){
// let row = " "

// for(let j = 1  ; j <= 5 - i + 1 ; j++){
//     document.write("&nbsp &nbsp;")
// }for(let k = 1 ; k <= i*2-1 ; k++){
//   if( k == 1 || i == 5 || k == i*2-1 ){
//     document.write(" a")
//   }else{
//     document.write("&nbsp &nbsp")
//   }
// }

// document.write("<br>")
// }




// hollow box

// for(let i = 1; i <= 6 ; i++){

//     for(let j = 1 ; j <= 9 ; j++){
// if(j == 1 || j == 9 || i == 1 || i == 6){
//     document.write(" *")
// }else{
//     document.write("&nbsp; &nbsp")
// }
//     }
//     document.write("<br>")
// }






// reverse triangle

// let number = 4;

// for (let i = 1; i <= number; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.write(j);
    
//   }

//   document.write("<br>");
// }

// reverse

// let num = 5
// for (let i = 1 ; i <=num ; i++){

// for(let j = 1; j <= num + 1 - i; j++){
//   document.write(j)
// }

// document.write("<br>")
// }


// print odd number

// for (let i = 1 ; i<=5 ; i++){
//     let a = 1


// for(let j = 1 ; j <= i  ; j++){
//     document.write(a + " ")
//     a = a + 2
// }
//     document.write("<br>")
// }



// for practice and maybe nothing
// let pr = prompt("enter your number to print ")

// for(let i = 1 ; i <= pr ; i++){

// for(let j = 1 ; j <= pr ; j++){
//     document.write("1")
// }
//  document.write("<br>")
// }


// basic square print

// let num = 4

// for(let i = 1 ; i <= num; i++){
//     for(let j = 1 ; j <= num; j++){
//         document.write(j + "   ")
//     }
//     document.write("<br>")
// }

// alphabetic 

// for (let i = 1 ; i <= 4 ; i++){
//     document.write("<br>")
//     let num = 65
//     for (let j = 1 ; j <= 4 + 1 - i ; j++){
//       let char = String.fromCharCode(num)    
//       document.write(char)
// num ++
//     }
// }


// basic triangle print

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j < i; j++) {
// document
// .write(j)

//   }
//   document.write("<br>")
// }
