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
    "create_dd:crafting/multimeter",
    "create_better_motors:crafting/multimeter"
];

recipes.removeByName(id_list);