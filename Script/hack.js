/** @param {NS} ns */
export async function main(ns) {
  //run hack.js [target]
  var target = ns.args[0];
  var ports = ns.getServerNumPortsRequired(target);

  while(true)
  {
    if(ns.hasRootAccess(target) == false)
    {
      if(ports == 0)
      {
        await ns.nuke(target);
        ns.tprint("server hacked");
      }
      else if(ports == 1)
      {
        await ns.brutessh(target);
        ports--;
      }
      else if(ports == 2)
      {
        await ns.ftpcrack(target);
        ports--;
      }
      else if(ports == 3)
      {
        await ns.relaysmtp(target);
        ports--;
      }
      else if(ports == 4)
      {
        await ns.httpworm(target);
        ports--;
      }
      else if(ports == 5)
      {
        await ns.sqlinject(target);
        ports--;
      }
    }
    else 
    {
      if(ns.getServerSecurityLevel(target) > 
      ns.getServerMinSecurityLevel(target) * 3 - 1)
      {
        for(var i = 0; i < 10; i++)
        {
          await ns.weaken(target);
        }
      }
      else if(ns.getServerMaxMoney(target) < 
      ns.getServerMoneyAvailable(target) / 100)
      {
        for(var i = 0; i < 2; i++)
        {
          await ns.grow(target);
        }
      }
      else
      {
        for(var i = 0; i < 10; i++)
        {
          await ns.hack(target);
        }
      }
    }
  }
}