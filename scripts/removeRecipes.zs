import crafttweaker.api.item.IItemStack;

var delete_both as IItemStack[] = [
    <item:create_dd:item_stockpile>,
    <item:create_dd:fluid_reservoir>,
    <item:create_things_and_misc:crushed_magma>,
];

delete_items(delete_both);

val id_list as string[] = [
    "skilltree:copper_ingot",
    "create_automation:cookie_from_dough",
    "minecraft:cookie",
    "tfmg:crafting/steel_tank",
    "electrodynamics:copper_nuggets_to_copper_ingot",
    "create_dd:crafting/diamond_shard_from_diamond",
    "create_dd:crafting/diamond_from_diamond_shard",
    "createmr:crushing/emerald_from_scorchia",
    "createmr:crushing/lapis_from_diamond",
    "createdieselgenerators:compacting/plant_oil",
    "tfmg:sequenced_assembly/heavy_plate",
    "minecraft:sticky_piston",
    "aether:swet_sticky_piston"
];

recipes.removeByName(id_list);