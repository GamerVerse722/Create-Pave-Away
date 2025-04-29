import mods.foregoing_tweaker.laser_drill.LaserDrillRarityBuilder;

var rarity1 = new LaserDrillRarityBuilder().addBiomeToBlacklist("the_end").setDepthMax(30).setDepthMin(-58).setWeight(2).build();

<recipetype:industrialforegoing:laser_drill_ore>.addRecipe('amethyst_shard', <item:minecraft:amethyst_shard>, <item:industrialforegoing:laser_lens10>, rarity1);