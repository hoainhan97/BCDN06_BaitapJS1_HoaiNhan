// Mô hình 3 khối 
/**
 * Khối 1: Input
 *  Giá USD: 23.500 VND 
 * 
 * Khối 2: 
 *  B1: Khai báo biến và lưu giá trị input
 *  B2: Công thức tính toán
 *        1USD = 23.500 VND
 * 
 * Khối 3:
 * Quy đổi và xuất ra số tiền.
 */

//? B1
var VND = 235000;
var USD = 2;
var quyDoi = 0;

// ?B2
quyDoi = USD * VND;

// ?B3
console.log("Quy đổi USD:" + quyDoi);