/** @param {NS} ns */
export async function main(ns) {
  var target = ns.args[0];
  var exist = ns.serverExist;
  var ports = ns.getServerNumPortsRequired(target);

  while(exist)
  {
    if(ns.hasRootAccess(target) == false)
    {
      if(ports == 0)
      {
        await ns.nuke(target);
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
      if(ns.getServerSecurityLevel(target) > ns.getServerMinSecurityLevel(target) * 3 - 1)
      {
        for(i = 0; i < 10; i++)
        {
          await ns.weaken(target);
        }
      }
      else if(ns.getServerMoneyAvailable(target) < ns.getServerMaxMoney(target) / 100)
      {
        for(i = 0; i < 2; i++)
        {
          await ns.grow(target);
        }
      }
      else
      {
        for(i = 0; i < 10; i++)
        {
          await ns.hack(target);
        }
      }
    }
  }
}