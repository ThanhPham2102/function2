// Bài 1: Viết chương trình cộng hai số (Sử dụng Return)

// function num(){
// let a = Number(prompt(`nhap a`));
// let b = Number(prompt(`nhap b`));

// let sum = a+b;
// return sum;
// }
// let sum = num()
// console.log( `tong La ${sum} `);


// bai2 tinh tong cac so le

// let arr = [1,2,3,4,5,6,7,8,9,10];
//  function tinhTong (array){
//     let tong = 0;
//     for (i=0;i<=array.length-1;i=i+1){
// if ( array[i]%2===1){
//     tong = tong +i
// }
//     }
//     return tong;
//  }
//  let tong =tinhTong(arr);
//  console.log(`tong la ${tong}`);





// // cach2
// function tinhTong (){
//  let arr = [1,2,3,4,5,6,7,8,9,10];

//    let  tong = 0;
//     for (i=0;i <= arr.length-1;i=i+1){
// if ( arr[i]%2===1){
//     tong = tong +i;
// }
//     }
//     return tong;
//  }
//  let tong = tinhTong();
//  console.log(tong);




// bai3:Bài 3: Tạo hàm nhận vào hai tham số. 
// Nếu giá trị của tham số thứ nhất lớn hơn
// tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng.
// Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai,
// trả về tổng của hai tham số.




// function tinhTong(){
//     let a =Number(prompt(`nhap x`));
// let b = Number(prompt(`nhap y`));
//     if ( a>b){
//         console.log( ' so a lon hon so b , moi nhap lai');
//     }else {
//         let tong = a+b;
//         console.log(tong);
//     }
// } tinhTong();




// (phan nay bi loi dang de kiem tra lai)
// function tinhTong(a,b){
//     if ( a>b){
//         console.log( ' so a lon hon so b , moi nhap lai');
//     }else {
//         let tong = a+b;
//         console.log(tong);
//     }
// } 
// tinhTong(x,y);
// let x =Number(prompt(`nhap x`));
// let y = Number(prompt(`nhap y`));



// bai4:


// function addNumbers(){
//     firstNum = 4;
//     secondNum = 8;
//     result = firstNum + secondNum;
//     //alert(result);
//     return result;

// }

// addNumbers();
// alert(result);








// bai5:
// 5.1
// function footToMeter (foot){
//     let meter = 0.305*foot;
//     return meter;
// } 
// let foot = prompt(`nhap foot`);
// let meter = footToMeter(foot);
// console.log(`${foot} foot = ${meter} meter`)

// // 5.2
// function meterToFoot (meter){
//     let foot = 3.279*meter;
//     return foot;
// } 
// let meter = prompt(`nhap meter`);
// let foot = meterToFoot(meter);
// console.log(`${meter} meter = ${foot} foot`)






// bai6: tim so nguyen to:

// 6.1
//  function soNguyenTo(){
// let n = Number(prompt(`moi nhap so n :`));
// if ( n > 1 && Number.isInteger(n)){
//     if( n===2){
//         console.log(` 2 la so nguyen to `);
//     } else {
//         let A=0;
//         for( i=2;i<n;i=i+1){
//             if(n%i===0){
//                 A=A+1;
//                 break;

//             }
//         }
//         if ( A>0){
//             console.log(`${n} la khong phai so nguyen to `)
//         } else {
//             console.log(`${n} la so nguyen to`)
//         }
//     }
// } else {console.log(`${n} la khong phai so nguyen to `)}
//}
// soNguyenTo();




// // // 6.2
// let n = Number(prompt(`moi nhap so n :`));
// let arr = [];
// for (j = 2; j <= n; j = j + 1) {
   
//     let A = 0;
//     for (i = 2; i < j; i = i + 1) {
//         if (j % i === 0) {
//             A = A + 1;
//             break;
//         }
//     }
//     if (A===0){
//         arr.push(j);
//     }
// }
// console.log(arr)


