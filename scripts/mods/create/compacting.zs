<recipetype:create:compacting>.addRecipe("hyper_experience", <constant:create:heat_condition:superheated>, [<fluid:create_enchantment_industry:hyper_experience> * 250], [<item:minecraft:nether_star>]);
<recipetype:create:compacting>.addRecipe("netherite_scrap", <constant:create:heat_condition:superheated>, [<item:minecraft:netherite_scrap> % 33], [<item:minecraft:nether_bricks> * 8, <item:create:powdered_obsidian> * 8, <item:minecraft:gold_nugget> * 8]);

<recipetype:create:compacting>.removeByName("create_automation:minerals/netherite_scrap");