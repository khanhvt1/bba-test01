/*Bài 1: Tạo nhánh feat/cloud-kingdom và thực hiện yêu cầu sau:
● Tạo file tests/lesson-04/cloud-kingdom.js
● Khai báo:
○ Biến playerName có giá trị là “Mario”.
○ Biến currentLives có giá trị là 3.
○ Các hằng số lưu coins theo level:
■ Level 1: 25;
■ Level 2: 30;
■ Level 3: 45;
○ Tính tổng coin của 3 level, sau đó tính giá trị trung bình (tổng / 3)
○ In ra số coin dư khi chia tổng số coin cho 3
● Commit kết quả với message: “feat: add solution for challenge 03”*/
let playerName = 'Mario';
let currentLives = 3;
const coins = {
  level1: 25,
  level2: 30,
  level3: 45
};
const totalCoins = coins.level1 + coins.level2 + coins.level3;
const averageCoins = totalCoins / 3;
const remainingCoins = totalCoins % 3;
console.log(`Remaining Coins after dividing by 3: ${remainingCoins}`);