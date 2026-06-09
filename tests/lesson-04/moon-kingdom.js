/*Bài 1: Tạo hàm createCharacters:
● Khai báo mảng các object: characters có các thuộc tính: name, level, health.
● Sử dụng hàm map để tạo ra mảng mới: charactersPowerUp:
○ thuộc tính name: UPPERCASE của name gốc
○ level: x2 của level gốc
○ health: x3 của health gốc
● Sử dụng hàm filter để lọc ra các phần tử có chỉ số health > 1000. Đặt tên
mảng mới lọc được này là “possibleWinners” */

//khai bao ham
function createCharacters() {
    //khai bao mang
    const characters = [
        { name: "Mario", level: 5, health: 200 },
        { name: "Luigi", level: 3, health: 150 },
        { name: "Peach", level: 4, health: 300 },
        { name: "Bowser", level: 6, health: 1100 }
    ];

    //su dung ham map de tao ra mang moi
    const charactersPowerUp = characters.map(character => {
        return {
            name: character.name.toUpperCase(),
            level: character.level * 2,
            health: character.health * 3
        }
    });
    //filter ra cac phan tu co chi so health > 1000
    const possibleWinners = charactersPowerUp.filter(character => character.health > 1000);
    
    return possibleWinners;
}
// Gọi hàm để chạy thử
console.log("Possible Winners:", createCharacters());
/* Bài 2: Tạo hàm printLeaderboard:
● Nhận vào tham số: players là mảng các object: [{name: "Mario", score:
1000}, ...]
● Sắp xếp mảng người chơi theo thứ tự score từ cao đến thấp.
● In ra bảng xếp hạng. Lưu ý: với 3 vị trí 1, 2, 3, hãy thêm huy chương phía
trước (🥇, 🥈, 🥉) */
function printLeaderboard(players)  {
    //sap xep mang nguoi choi theo thu tu score tu cao den thap
    players.sort((a, b) => b.score - a.score);
    
    //in ra bang xep hang
    
    let medal = "";
    players.forEach((player, index) => {
        switch (index) {
            case 0:
                medal = medal + "🥇" + `${index+1}. ${player.name}: ${player.score}\n`;
                break;
            case 1:
                medal = medal + "🥈" + `${index+1}. ${player.name}: ${player.score}\n`;
                break;
            case 2:
                medal = medal + "🥉" + `${index+1}. ${player.name}: ${player.score}\n`;
                break;
            default:
                medal = medal + `${index+1}. ${player.name}: ${player.score}\n`;
        }
    });

    return medal;
}
// Gọi hàm để chạy thử
const players = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 800 },
    { name: "Peach", score: 1200 },
    { name: "Khanh", score: 900 },
    { name: "Thinh", score: 900 },
    { name: "Minh", score: 900 }
];
console.log(printLeaderboard(players));