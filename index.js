let nomeHeroi = "Aspas";
let xp = 999;
let nivel;

if (xp >= 0 && xp <= 1000){
    nivel = "Ferro";
} else if (xp > 1000 && xp <= 2000){
    nivel = "Bronze";
} else if (xp > 2000 && xp <= 4000){
    nivel = "Prata";
} else if (xp > 4000 && xp <= 6000){
    nivel = "Ouro";
} else if (xp > 6000 && xp <= 7000){
    nivel = "Platina"
} else if (xp > 7000 && xp <= 8000){
    nivel = "Diamante";
} else if (xp > 8000 && xp <= 9000){
    nivel = "Ascendente";
} else if (xp > 9000 && xp < 10000){
    nivel = "Imortal";
} else if (xp >= 10000){
    nivel = "Radiante";
} else {
     nivel = "Não Encontrado"
}

console.log("O Herói " + nomeHeroi + " está no nível " + nivel + ".");

