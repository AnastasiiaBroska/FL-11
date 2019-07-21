'use strict';
const MAX_SUCCESS_ATTACK_PROBABILITY = 100;

class Fighter {
    constructor(fighter) {
        let _name = fighter.name;
        let _damage = fighter.damage;
        let _health = fighter.hp;
        let _agility = fighter.agility;
        let _win = 0;
        let _loss = 0;

        this.getName = () => _name;
        this.getDamage = () => _damage;
        this.getHealth = () => _health;
        this.getAgility = () => _agility;
        this.getWin = () => _win;
        this.getLoss = () => _loss;

        this.dealDamage = (damage) => {
            _health = _health - damage;
            if (_health < 0) {
                _health = 0;
            }
        };

        this.heal = (amountOfHealing) => {
            _health = _health + amountOfHealing;
        };

        this.addWin = () => _win++;
        this.addLoss = () => _loss++;
    }

    attack(defender) {
        if (!(defender instanceof Fighter)) {
            console.error("Fighter can't attack unknown object!");
            return;
        }
        let successProbability = MAX_SUCCESS_ATTACK_PROBABILITY - defender.getAgility();
        let randomNumber = Math.floor(Math.random() * (MAX_SUCCESS_ATTACK_PROBABILITY + 1));
        if (randomNumber <= successProbability) {
            console.log(`${this.getName()} make ${this.getDamage()} damage to ${defender.getName()}`);
            defender.dealDamage(this.getDamage());
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }

    logCombatHistory() {
        console.log(`Name: ${this.getName()}, Wins: ${this.getWin()}, Losses: ${this.getLoss()}`);
    }

    isDead() {
        return this.getHealth() <= 0;
    }

    isAlive() {
        return !this.isDead();
    }

    canFight() {
        if (this.isDead()) {
            console.log(`${this.getName()} is dead and can't fight.`);
            return false;
        }
        return true;
    }
}

function battle(firstFighter, secondFighter) {
    let firstFighterCanFight = firstFighter.canFight();
    let secondFighterCanFight = secondFighter.canFight();
    if (!(firstFighterCanFight && secondFighterCanFight)) {
        return;
    }
    while (firstFighter.isAlive() && secondFighter.isAlive()) {
        firstFighter.attack(secondFighter);
        if (secondFighter.isAlive()) {
            secondFighter.attack(firstFighter);
        }
    }
    if (firstFighter.isAlive()) {
        firstFighter.addWin();
        secondFighter.addLoss();
    } else {
        firstFighter.addLoss();
        secondFighter.addWin();
    }
}