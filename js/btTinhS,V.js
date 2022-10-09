// Mô hình 3 khối 
/**
 * Khối 1: Input
 * giá trị 2 chiều dài và chiều rộng
 * 
 * Khối 2: 
 *  B1:Khai báo biến và lưu giá trị
 *  B2: Lập công thức tính toán
 *  dienTich = chieuDai * chieuRong;
 *  chuVi = (chieuDai + chieuRong) * 2;
 * Khối 3:
 * Tính ra giá trị diện tích, chu vi
 */

// ?B1
var chieuDai = 10;
var chieuRong = 25;
var dienTich = 0;
var chuVi = 0;

// ?B2
dienTich = chieuDai * chieuRong;
chuVi = (chieuDai + chieuRong) * 2;

// ?B3
console.log("Diện tích: " + dienTich);
console.log("Chu vi:" + chuVi);