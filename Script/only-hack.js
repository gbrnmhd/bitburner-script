/** @param {NS} ns */
export async function main(ns) {
  //run only-hack.js [target]
  while(true){
    await ns.hack(ns.args[0]);
  }
}