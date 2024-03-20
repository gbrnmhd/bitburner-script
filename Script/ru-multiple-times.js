/** @param {NS} ns */
export async function main(ns) {
    for(let i = 0; i < ns.args[0]; i++){
      ns.run("run.js", 1, ns.args[1]);
    }
  }