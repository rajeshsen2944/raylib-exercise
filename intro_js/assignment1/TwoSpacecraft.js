function Aurora(ship) {
  return Ember;
}
function Ember(ship) {
  return Nebula;
}
function Nebula(ship) {
  return Rift;
}
function Rift(ship) {
  if (ship == "ship1") return Aurora;
  return Obsidian;
}
function Obsidian(ship) {
  return Eclipse;
}
function Eclipse(ship) {
  return Ember;
}

function meet(gate1, gate2) {
  if (gate1 === gate2) return 0;

  gate1 = gate1("ship1");
  gate2 = gate2("ship2");
  return 1 + meet(gate1, gate2);
}

console.log(meet(Aurora, Eclipse));
