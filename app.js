const startMoney = 12000;
const rate = 0.07;
const housePrice = 13500;
const depositLengt = 24;

const resultSum = startMoney * (1 + rate / 12) ** depositLengt;



if (resultSum > housePrice) {
    console.log(`Вы накопили: ${resultSum}, остаток - ${resultSum - housePrice}`);
} else {
    console.log(`Вы накопили: ${resultSum}, необходимо еще накопить: ${resultSum - housePrice}`);
}
