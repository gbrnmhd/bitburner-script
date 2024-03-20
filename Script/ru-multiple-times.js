/** @param {NS} ns */
export async function main(ns) {
  //run run-multiple-times.js [n] [script] [target]
    for(let i = 0; i < ns.args[0]; i++){
      ns.run(ns.args[1], 1, ns.args[2]);
    }
  }