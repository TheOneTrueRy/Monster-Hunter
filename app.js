
const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 50
    }
]


const boss = {
    health: 100,
    damage: 5,
    level: 1,
    maxHealth: 100,
  }

function drawHeroes(){

}
function drawMonster(){
let health = boss.health
let healthElem = document.getElementById("monster-health")
healthElem.innerText = `HP: ${health.toString()}`
}


function damageHeroes(){

}
function damageMonster(){
let damage = 0

heroes.forEach(hero => {
  damage += hero.damage
})

boss.health -= damage
if(boss.health < 0){
  boss.health = 0
}
drawMonster()
}



function reviveMonster(){

}





function buyPotion(){
console.log("Potion get")
}
function buySam(){
  console.log("Sam get")

}
function buyJake(){
  console.log("Jake get")

}



function resetGame(){

}

drawHeroes()
drawMonster()