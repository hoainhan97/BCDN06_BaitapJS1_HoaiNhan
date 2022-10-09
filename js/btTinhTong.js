// Mô hình 3 khối 
/**
 * Khối 1: Input
 * Số tự nhiên có 2 chữ số (77), num, ten, unit
 * 
 * Khối 2: 
 *  B1:Khai báo biến và lưu giá trị
 *  B2: Lập công thức tính toán
 *  + lấy hàng chục: int 7 = 77 / 10;
 * +lấy hàng đơn vị: int 7 = 77 % 10;
 * 
 *  B3: thông báo kết quả
 * 
 *  
 * Khối 3:
 * Tổng hai kí số 77 (=14)
 */

// ?B1
var num = 70;
var ten = 0;
var unit = 0;
var toTal = 0;

// ?B2
ten = num / 10;
unit = num % 10;
toTal = ten + unit;

// ?B3
console.log("Tổng 2 kí số:" + toTal);
