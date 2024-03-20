/** @param {NS} ns */
export async function main(ns) {
  // run run.js [script]
  if(ns.hasRootAccess("n00dles") == true)
    ns.run(ns.args[0], 1, 'n00dles');
  if(ns.hasRootAccess("foodnstuff") == true)
    ns.run(ns.args[0], 1, 'foodnstuff');
  if(ns.hasRootAccess("sigma-cosmetics") == true) 
    ns.run(ns.args[0], 1, 'sigma-cosmetics');
  if(ns.hasRootAccess("joesguns") == true) 
    ns.run(ns.args[0], 1, 'joesguns');
  if(ns.hasRootAccess("hong-fang-tea") == true) 
    ns.run(ns.args[0], 1, 'hong-fang-tea');
  if(ns.hasRootAccess("harakiri-sushi") == true) 
    ns.run(ns.args[0], 1, 'harakiri-sushi');
  if(ns.hasRootAccess("iron-gym") == true) 
    ns.run(ns.args[0], 1, 'iron-gym');
  if(ns.hasRootAccess("max-hardware") == true) 
    ns.run(ns.args[0], 1, 'max-hardware');
  if(ns.hasRootAccess("nectar-net") == true) 
    ns.run(ns.args[0], 1, 'nectar-net');
  if(ns.hasRootAccess("zer0") == true) 
    ns.run(ns.args[0], 1, 'zer0');
  if(ns.hasRootAccess("silver-helix") == true) 
    ns.run(ns.args[0], 1, 'silver-helix');
  if(ns.hasRootAccess("phantasy") == true) 
    ns.run(ns.args[0], 1, 'phantasy');
  if(ns.hasRootAccess("neo-net") == true) 
    ns.run(ns.args[0], 1, 'neo-net');
  if(ns.hasRootAccess("omega-net") == true) 
    ns.run(ns.args[0], 1, 'omega-net');
}