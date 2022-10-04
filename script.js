// ==> 3-dars Array <== //

// => 1-masala <=//
// {
//   let n=+prompt("n sonini kiriting: ");
//   let array=[];
//   for(let i=0; i<n; i++){
//     array[i]=Math.random()*10+1;
//     array[i]=Math.round(array[i]);
//   }
//   console.log(array);
// }

// => 2-masala <=//
// {
//     let n=+prompt("n sonini kiriting: ");
//   let array=[];
//    for(let i=0; i<n; i++){
//     array[i]=Math.pow(2,i+1);
//    }
//    console.log(array);
// }

// => 3-masala <=//
// {
//   let n=+prompt("n massiv elementlari sonini kiriting: ");
//   let array=[],sum=0;
//   for(let i=0; i<n; i++){
//     array[i]=Math.random()*10+1;
//     array[i]=Math.round(array[i]);
//     sum+=array[i];
//   }
//   console.log(`Massiv elementlari: ${array}`);
//   console.log(`Massiv elementlari yig'indisi: ${sum}`);
// }

// => 4-masala <=//
// {
//   let array=[];
//   let sum1= 0,sum2= 0;
//   array[0]=0;
//   for(let i=1; i<=10; i++){
//     array[i]=i*10;
//   }
// for(let i=0; i<=10; i++){
//   if(i%2==1){
//     sum1+=array[i];
//   } 
//   else if(i%2==0){
//     sum2-=array[i];
//   }
// }
//   console.log(`Massiv elementlari: ${array}`);
//   console.log(`Toq indekslardagi elementlar yig'indisi: ${sum1}`);
//   console.log(`Juft indekslardagi elementlar ayirmasi: ${sum2}`);
// }

// => 5-masala <=//
// {
//   let n=+prompt("Massiv elementlarisonini kiriting:");
//   let array=[],s=0;
//   for(let i=0; i<n; i++){
//     array[i]=+prompt(`${i+1} - elementni kiriting:`);
//     s+=array[i];
//   }
//   console.log(`Masssiv elementlari: ${array}`);
//   console.log(`Massiv elementlari yig'indisi: ${s}`);
// }

// => 6-masala <=//
// {
//   let n=+prompt("Massiv elementlarisonini kiriting:");
//   let array=[],Array=[];
//   for(let i=0; i<n; i++){
//     array[i]=Math.random()*10+1;
//     array[i]=Math.round(array[i]);
//   }
//   console.log(`Massiv elementlari: ${array}`);
//   for(let i=0; i<n; i++){
//   Array[i]=array[n-i-1];
//   array.pop();
//   }
//   console.log(`Indekslari kamayish tartibidagi massiv elementlari: ${Array}`);
// }

// => 8-masala <=//
// {
//   let n=+prompt("Massiv elementlari sonini kiriting: ");
//   let k=+prompt("k-indeksni kiriting:");
//   let l=+prompt("n-indeksni kiriting(n>k):");
//   let array=[],s=0;
//   for(let i=0; i<n; i++){
//    array[i]=Math.random()*10+1;
//    array[i]=Math.round(array[i]);
//    if(i>=k && i<=l){
//     s+=array[i];
//    } 
//    }
//    console.log(`Massiv elementlari: ${array}`);
//    console.log(`${k} chi va ${l} chi indekslari oasidagi elementlar yig'indisi: ${s}`);
// }

// => 9-masala <=//
// {
//   let n=+prompt(`Massiv elementlari sonini kiriting:`);
//   let array=[],max;
//   for(let i=0; i<n; i++){
// array[i]=Math.random()*100+1;
// array[i]=Math.round(array[i]);
//   }
//   console.log(`Massiv elementlari: ${array}`);
//   for(let i=2; i<n; i+=2){
//     max=Math.max(array[i-2],array[i]);
//   }
//   console.log(`Massivning juft indekslardagi eng katta elementi: ${max}`);
// }

// => 10-masala <=//
// {
//   let n=+prompt(`Massiv elementlari sonini kiriting:`);
//   let array=[],min;
//   for(let i=0; i<n; i++){
// array[i]=Math.random()*100+1;
// array[i]=Math.round(array[i]);
//   }
//   console.log(`Massiv elementlari: ${array}`);
//   for(let i=2; i<n; i+=2){
//     min=Math.min(array[i-2],array[i]);
//   }
//   console.log(`Massivning juft indekslardagi eng kichigi elementi: ${min}`);
// }

// => 11-masala <=//
// {
//   let n=+prompt(`Massiv elementlari sonini kiriting:`);
//   let array=[],max;
//   for(let i=0; i<n; i++){
// array[i]=Math.random()*100+1;
// array[i]=Math.round(array[i]);
//   }
//   console.log(`Massiv elementlari: ${array}`);
//   for(let i=3; i<n; i+=2){
//     max=Math.max(array[i-2],array[i]);
//   }
//   console.log(`Massivning toq indekslardagi eng katta elementi: ${max}`);
// }

// => 12-masala <=//
// {
//   let n=+prompt(`Massiv elementlari sonini kiriting:`);
//   let array=[], sum=0,A;
//   for(let i=0; i<n; i++){
// array[i]=Math.random()*100+1;
// array[i]=Math.round(array[i]);
// sum+=array[i];
//   }
//   console.log(`Massiv elementlari: ${array}`);
//   A=sum/n;
//   console.log(`Massivning o'rta arifmetigi: ${A}`);
// }

// => 13-masala <=//

// {
//   let n=+prompt(`Massiv elementlari sonini kiriting:`);
//   let array=[],Array=[];
//   for(let i=0; i<n; i++){
// array[i]=Math.random()*100+1;
// array[i]=Math.round(array[i]);
// if(i%2===1){
// Array.push(array[i]);
// }
//   }
//   console.log(`Massiv elementlari: ${array}`);
//   console.log(`Toq indeksdagi elementlari: ${Array}`);
// }

// => 14-masala <=//
// {
// function Murakkab(a){
//   for(let i=2; i<=a/2; i++){
//     if(a%i===0){
//       return a;
//       break;
//     }
//   }
// }

//   let n=+prompt(`Massiv elementlari sonini kiriting:`);
//   let array=[],Array=[],s;
//     for(let i=0; i<n; i++){
// array[i]=Math.random()*100+1;
// array[i]=Math.round(array[i]);
// if(array[i]==Murakkab(array[i])){
//   s=Murakkab(array[i]);
// Array.push(s);
// }
//     }
//     console.log(`Massiv elementlari: ${array}`);
//     console.log(`Massivdagi murakkab sonlar: ${Array}`)
// }

// => 15-masala <=//
// {
// function toq(a){
//   if(a%2===1){
//     return a;
//   }
// }

//   let n=+prompt(`Massiv elementlari sonini kiriting:`);
//   let array=[],Array=[],s;
//     for(let i=0; i<n; i++){
// array[i]=Math.random()*100+1;
// array[i]=Math.round(array[i]);
// if(array[i]==toq(array[i])){
//   s=toq(array[i]);
// Array.push(s);
// }
//     }
//     console.log(`Massiv elementlari: ${array}`);
//     console.log(`Massivdagi toq elementlari: ${Array}`)
// }

// => 16-masala <=//
// {
//   function strings(a){
//     if(typeof(a)==typeof('a')){
//       return a;
//     }
//   }
  
//     let array=['BMW',12,'11',true,"mers",'w',false],Array=[],s;
//       for(let i=0; i<array.length; i++){
//   if(array[i]==strings(array[i])){
//     s=strings(strings[i]);
//   Array.push(array[i]);
//   }
//       }
//       console.log(`Massiv elementlari: ${array}`);
//       console.log(`Massivdagi string elementlari: ${Array}`)
//   }

// => 17-masala <=//
// {
//   let n=+prompt("Massivlar elementlari sonini kiriting:");
//   let a=[], b=[],array=[];
//   for(let i=0; i<n; i++){
//     a[i]=Math.random()*10;
//     a[i]=Math.round(a[i]);
//   }
//   for(let i=0; i<n; i++){
//     b[i]=Math.random()*10;
//     b[i]=Math.round(b[i]);
//   }
//   for(let i=0; i<n; i++){
//     for(let j=0; j<n; j++){
//       if((b[j]==a[i]))
//       array.push(a[i]); 

//          }
//   }

//   console.log(`a massiv elementlar: ${a}`);
//   console.log(`b massiv elementlar: ${b}`);
//   console.log(`2 la massivda hambor elementlar: ${array}`);

// }

// => 18-masala <=//
// {
//     let  n= +prompt("Massiv elementlari sonini kiriting.");
//     let a=[];
//     for(let i=0; i<n; i++){
//       a[i]=+prompt(`${i+1} - massiv elementini kiriting:`);
//     }
//     console.log(`Massiv elementlari: ${a}`);
//   }

// => 19-masala <=//
// {
//   let  n= +prompt("Massiv elementlari sonini kiriting.");
//   let a=[],s=0;
//   for(let i=0; i<n; i++){
//     a[i]=+prompt(`${i+1} - massiv elementini kiriting:`);
//     s+=a[i];
//   }
//   console.log(`Massiv elementlari: ${a}`);
//   console.log(`Massiv elementlari yig'indisi: ${s}`);

// }

// => 20-masala <=//
// {
//   let  n= +prompt("Massiv elementlari sonini kiriting.");
//   let a=[],s=0,array=[];
//   for(let i=0; i<n; i++){
//     a[i]=+prompt(`${i+1} - massiv elementini kiriting:`);
//     s+=a[i];
//   }
//   console.log(`Massiv elementlari: ${a}`);
//   let juftToq = prompt(`Juft indekslari chiqishini xohlaysizmi yoki toq indekdagilarinimi`);
//   if(juftToq=="juft"){
//     for(i=0; i<n; i+=2){
//       array.push(a[i]);
//     }
//     console.log(`Juft indeksdagi elementlar: ${array}`)
//   }
//   if(juftToq=="toq"){
//     for(i=1; i<n; i+=2){
//       array.push(a[i]);
//     }
//     console.log(`Toq indeksdagi elementlar: ${array}`)
//   }
// }

// => 21-masala <=//
// {
//   let n=+prompt("Massiv elementlar sonini kiriting: ");
//   let array=[];
//   for(let i=0; i<n; i++){
//     array[i]=Math.random()*10;
//     array[i]=Math.round(array[i]);
//   }
//   console.log(`Massiv elementlari: ${array}`);
//   console.log(`Massivning oxirgi elementi: ${array[n-1]}`);

// }

// => 22-masala <=// =>Savol
// {
//   let n=+prompt("Massiv elementlar sonini kiriting: ");
//   let array=[];
//   for(let i=0; i<n; i++){
//     array[i]=Math.random()*10;
//     array[i]=Math.round(array[i]);
//   }
//   console.log(`Massiv elementlari: ${array}`);


// }
