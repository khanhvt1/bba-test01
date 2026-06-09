/**“Hãy đếm và in ra có bao nhiêu cặp số từ 1 tới
100 có tổng chia hết cho 17. Xem format ở hình dưới”.
Ví dụ:
(1, 16), (2, 15), (3, 14)... là cặp số hợp lệ vì có tổng chia hết cho 17 */

//cap so khong bao gom chinh no
function countPairs() {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        for (let j = i + 1; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                console.log(`(${i}, ${j})`);
                count++;
            }
        }
    }
    return count;
}
// Gọi hàm để chạy thử
console.log("Total pairs:", countPairs());

//cap so bao gom chinh no
function countPairs1() {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        for (let j = 1; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                console.log(`(${i}, ${j})`);
                count++;
            }
        }
    }
    return count;
}
// Gọi hàm để chạy thử
console.log("Total pairs:", countPairs1());