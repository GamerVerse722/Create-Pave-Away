import crafttweaker.api.item.IItemStack;

val air = <item:minecraft:air> as IItemStack;

craftingTable.addShaped("creative_fluid_tank", <item:create:creative_fluid_tank>, [
    [<item:mekanism:ultimate_control_circuit>, <item:mekanism:pellet_antimatter>, <item:mekanism:ultimate_control_circuit>],
    [<item:electrodynamics:tankhsla>, <item:tfmg:steel_fluid_tank>, <item:industrialforegoing:supreme_black_hole_tank>],
    [<item:mekanism:ultimate_control_circuit>, <item:mekanism:pellet_antimatter>, <item:mekanism:ultimate_control_circuit>]
]);

craftingTable.addShaped("create_connected_creative_fluid_vessel", <item:create_connected:creative_fluid_vessel>, [
    [<item:create:creative_fluid_tank>]
]);

craftingTable.addShaped("create_connected_creative_fluid_tank", <item:create:creative_fluid_tank>, [
    [<item:create_connected:creative_fluid_vessel>]
]);

craftingTable.addShaped("iron_horse_armor", <item:minecraft:iron_horse_armor>, [
    [air, air, <item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>, <item:minecraft:saddle>, <item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>, air, <item:minecraft:iron_ingot>]
]);

craftingTable.addShaped("gold_horse_armor", <item:minecraft:golden_horse_armor>, [
    [air, air, <item:minecraft:gold_ingot>],
    [<item:minecraft:gold_ingot>, <item:minecraft:saddle>, <item:minecraft:gold_ingot>],
    [<item:minecraft:gold_ingot>, air, <item:minecraft:gold_ingot>]
]);

craftingTable.addShaped("diamond_horse_armor", <item:minecraft:diamond_horse_armor>, [
    [air, air, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:saddle>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, air, <item:minecraft:diamond>]
]);

craftingTable.addShaped("saddle", <item:minecraft:saddle>, [
    [<item:minecraft:leather>, <item:minecraft:leather>, <item:minecraft:leather>],
    [<item:minecraft:leather>, <item:createaddition:iron_wire>, <item:minecraft:leather>]
]);

craftingTable.addShaped("chest", <item:minecraft:chest> * 4, [
    [<tag:items:minecraft:logs>, <tag:items:minecraft:logs>, <tag:items:minecraft:logs>],
    [<tag:items:minecraft:logs>, air, <tag:items:minecraft:logs>],
    [<tag:items:minecraft:logs>, <tag:items:minecraft:logs>, <tag:items:minecraft:logs>]
]);

craftingTable.addShaped("steel_tank", <item:tfmg:steel_fluid_tank> * 2, [
    [<item:tfmg:steel_ingot>],
    [<item:alexscaves:metal_barrel>],
    [<item:tfmg:steel_ingot>]
]);

craftingTable.addShaped("diamond_shard_to_diamond", <item:minecraft:diamond>, [
    [<item:create_dd:diamond_shard>, <item:create_dd:diamond_shard>, <item:create_dd:diamond_shard>],
    [<item:create_dd:diamond_shard>, <item:create_dd:diamond_shard>, <item:create_dd:diamond_shard>],
    [<item:create_dd:diamond_shard>, <item:create_dd:diamond_shard>, <item:create_dd:diamond_shard>]
]);

craftingTable.addShaped("dying_amber", <item:cataclysm:dying_ember>, [
    [<item:supplementaries:ash_bricks>, <item:minecraft:fire_charge>, <item:supplementaries:ash_bricks>],
    [<item:minecraft:fire_charge>, <item:advancednetherite:netherite_gold_ingot>, <item:minecraft:fire_charge>],
    [<item:supplementaries:ash_bricks>, <item:minecraft:fire_charge>, <item:supplementaries:ash_bricks>]
]);