let gold = 0
let goldElem = document.getElementById("gold")

let heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100,
        lv: 1,
        maxhealth: 100
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 50,
        lv: 1,
        maxhealth: 50
    }
]


let boss = {
    health: 100,
    damage: 5,
    level: 1,
    maxHealth: 100,
  }

function drawHeroes(){
  let heroesElem = document.getElementById("Heroes")
  let template = ''
  heroes.forEach(hero => {
    template += `
    <div class="col-3">
        <div class="container-fluid myCard">
          <div class="row">
            <div class=" d-flex">
              <div class="col-6">
                <div class="row">
                  <div class="col-12 mt-3">${hero.name}</div>
                  <div class="col-12 mt-7">HP: ${hero.health}</div>
                  <div class="col-12 mt-1">LV: ${hero.lv}</div>
                  <div class="col-12 mt-1">DMG: ${hero.damage}</div>
                </div>
              </div>
              <div class="col-6">
                <div class="row">
                  <div class="col-12 d-flex justify-content-end"><img src="//via.placeholder.com/50x100" alt="" class="img-fluid"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  })
  heroesElem.innerHTML = template
}

function drawGold(){
  goldElem.innerText = `GOLD: ${gold.toString()}`
}

function drawMonster(){
let health = boss.health
let healthElem = document.getElementById("monster-health")
healthElem.innerText = `HP: ${health.toString()}`
}


function damageHeroes(){
heroes.forEach(hero =>{
  hero.health -= boss.damage
  if(hero.health < 0){
    hero.health = 0
  }
})
drawHeroes()
}
function damageMonster(){
let damage = 0

heroes.forEach(hero => {
  if(hero.health > 0){
    damage += hero.damage
  }
})

boss.health -= damage
if(boss.health < 0){
  boss.health = 0
}
drawMonster()
}



function reviveMonster(){
  let goldElem = document.getElementById("gold")
if(boss.health == 0){
  boss.level++
  boss.maxHealth = Math.floor(boss.level * 100)
  boss.damage = (boss.level * 2)
  boss.health = boss.maxHealth
  gold += (boss.level * 10)
  heroes.forEach(hero =>{
    hero.lv++
    hero.damage = Math.floor(hero.damage * 1.2)
    hero.maxhealth = Math.floor(hero.maxhealth * 1.1)
    hero.health = hero.maxhealth
  })
}
drawGold()
drawMonster()
drawHeroes()
}





function buyPotion(){
  if(gold >= 20){
heroes.forEach(hero =>{
    hero.health += 15
    if(hero.health > hero.maxhealth && hero.health > 0){
      hero.health = hero.maxhealth
    }
  })
  gold -= 20
  }
drawGold()
drawHeroes()
}
function buySam(){
  let sam = {
    name: 'Samantha Dison',
    type: 'human',
    damage: 20,
    health: 200,
    lv: 1,
    maxhealth: 200
  }
  if(gold >= 50){
    gold -= 50
    heroes.push(sam)
  }

}
function buyJake(){
  let jake = {
    name: 'Jake Overall',
    type: 'human',
    damage: 100,
    health: 500,
    lv: 1,
    maxhealth: 500
  }
  if(gold >= 1000){
    gold -= 1000
    heroes.push(jake)
  }

}



function resetGame(){
 heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100,
        lv: 1,
        maxhealth: 100
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 50,
        lv: 1,
        maxhealth: 50
    }
]
 boss = {
  health: 100,
  damage: 5,
  level: 1,
  maxHealth: 100,
}
 gold = 0
drawMonster()
drawHeroes()
}

setInterval(damageHeroes, 2500)

setInterval(reviveMonster, 1000)

drawHeroes()
drawMonster()
drawGold()