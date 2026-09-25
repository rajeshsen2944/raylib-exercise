const Aurora="Aurora";
const Ember="Ember";
const Nebula="Nebula";
const Rift="Rift";
const Obsidian="Obsidian";
const Eclipse="Eclipse";

function firstShipPath(gateName) {
    if(gateName === Aurora) return Ember;
    if(gateName === Ember) return Nebula;
    if(gateName === Nebula) return Rift;
    if(gateName === Rift) return Aurora;
}

function secondShipPath(gateName) {
    if(gateName === Ember) return Nebula;
    if(gateName === Nebula) return Rift;
    if(gateName === Rift) return Obsidian;
    if(gateName === Obsidian) return Eclipse;
    if(gateName === Eclipse) return Ember;
}

function meet(firstShipGate,secondShipGate) {
    if(firstShipGate === secondShipGate){
        return 0;
    }

    return 1+meet(firstShipPath(firstShipGate),secondShipPath(secondShipGate));
}
console.log(meet(Aurora, Ember));
console.log(meet(Nebula, Eclipse));

