/*
Khai báo:
○ Biến powerUp có giá trị là “mushroom”.
○ Sử dụng câu điều kiện if...else để xác định tên hiệu ứng tương ứng với
các powerUp:
■ mushroom: "Mario becomes Super!"
■ flower: "Mario can shoot fireballs!"
■ star: "Mario is invincible!"
■ none: "Mario is normal"
■ Khác: "Unknown power-up"
○ In ra ngoài console hiệu ứng tên hiệu ứng
 */
let powerUp = "mushroom";
let effect ={
    "mushroom": "Mario becomes Super!",
    "flower": "Mario can shoot fireballs!",
    "star": "Mario is invincible!",
    "none": "Mario is normal"
}
if(effect[powerUp]){
    console.log(effect[powerUp]);
}else{
    console.log("Unknown power-up");
}
