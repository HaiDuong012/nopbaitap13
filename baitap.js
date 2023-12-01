//Baì tập trên lớp.
//bài tập cơ bản
//1, viết 1 hàm js để tính tổng 2 số.
// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(2, 3));
//
//
//2, viết 1 hàm js nhận vào 1 mảng số nguyên và trả về tổng của các số đó

// const a = [2, 3, 5, 6, 9];
// let x = 0;
// const sum = (a) => {
//   for (let i = 0; i < a.length; i++) {
//     x += a[i];
//   }
//   return x;
// };
// console.log(sum(a));

//3,viết 1 hàm js xem 1 số  có phải só nguyên tố ko
//
//
let x = parseInt(prompt("moi nhap:"));
const prime = (a) => {
  let check = true;
  for (let i = 2; i < Math.sqrt(x); i++) {
    if (x % i === 0) {
      check = false;

      break;
    }
  }
  if (check) {
    console.log(`${x} la so nt`);
  } else {
    console.log(`${x} ko phai so nt`);
  }
  return x;
};
console.log(prime(x));
//4, viết 1 hàm js để đảo ngược 1 chuỗi
//

//bài tập nâng cao
// 5. Viết một hàm JavaScript nhận vào một mảng các số và trả về một mảng mới chỉ
//chứa số chẵn.

// 6. Viết một hàm JavaScript nhận vào một chuỗi và trả về số lượng từ trong chuỗi.

// 7. Viết một hàm JavaScript nhận vào một mảng các chuỗi và trả về một mảng mới chỉ
// chứa các chuỗi đã được viết hoa.

// 8,Viết một hàm JavaScript nhận vào một mảng số và trả về mảng mới
// chứa các số đã được sắp xếp theo thứ tự tăng dần.

// 9, Viết một hàm JavaScript nhận vào một số nguyên dương và trả về mảng các số nguyên
// tố nhỏ hơn số đó.

//bai 5
// let a = [1, 2, 3, 4, 5, 6, 7];
// const arrayOdd = (a) => {
//   const oddArray = [];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 == 0) {
//       oddArray.push(a[i]);
//     }
//   }
//   return oddArray;
// };
// console.log(arrayOdd(a));

//   return a.filter((number) => number % 2 == 0);  //ham filter loc chan le

//bai 6:Viết một hàm JavaScript nhận vào một chuỗi và trả về số lượng từ trong chuỗi.

// const b = "tao,le,cam,quyt,oi";
// const quantity = (b) => {
//   return b.length;
// };
// console.log(quantity(b));

//bai 7: Viết một hàm JavaScript nhận vào một mảng các chuỗi và trả về một mảng mới
//chỉ chứa các chuỗi đã được viết hoa
//cach 1
// const a = ["tao", "le", "cam", "quyt", "oi"];

// const toUpperCase = (a) => {
//   const arraytoUpperCase = [];
//   for (let i = 0; i < a.length; i++) {
//     const fake = a[i].toUpperCase();
//     arraytoUpperCase.push(fake);
//   }
//   return arraytoUpperCase;
// };
// console.log(toUpperCase(a));
//cach 2:
//   let x = a.toString();
//   let y = x.toUpperCase();
//   const arraytoUpperCase = [];
//   arraytoUpperCase.push(y);
//   return arraytoUpperCase;

//bai 8: Viết một hàm JavaScript nhận vào một mảng số và trả về mảng mới
// chứa các số đã được sắp xếp theo thứ tự tăng dần.

// const a = [5, 6, 3, 8, 0, 9, 1, 4];

// const upto = (a) => {
//   a.sort();
//   return a;
// };
// console.log(upto(a));
// cach 2:
// const upto = (a) => {
//   for (let i = 0; i < a.length; i++) {
//     let tg;
//     for (let j = i + 1; j < a.length; j++) {
//       if (a[i] > a[j]) {
//         tg = a[i];
//         a[i] = a[j];
//         a[j] = tg;
//       }
//     }
//   }
//   return a;
// };
// console.log(upto(a));

// 9, Viết một hàm JavaScript nhận vào một số nguyên dương và trả về mảng các số nguyên
// tố nhỏ hơn số đó.
// const a = parseInt(prompt("nhap a"));
// const prime = (a) => {
//   const b = [];
//   for (let i = 1; i < a; i++) {
//     let check = true;

//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j == 0) {
//         check = false;
//         break;
//       }
//     }
//     if (check) {
//       b.push(i);
//     }
//   }
//   return b;
// };
// console.log("ham b la:", prime(a));
