import crafttweaker.api.item.IItemStack;

val air = <item:minecraft:air> as IItemStack;

craftingTable.addShaped("lectern", <item:minecraft:lectern>, [
    [<tag:items:minecraft:wooden_slabs>, <tag:items:minecraft:wooden_slabs>, <tag:items:minecraft:wooden_slabs>],
    [air, <tag:items:forge:bookshelves>, air],
    [air, <tag:items:minecraft:wooden_slabs>, air]
]);

val id_list as string[] = [
    "aether:skyroot_chest",
    "aether:aether_saddle",
    "aether:skyroot_note_block",
    "aether:skyroot_crafting_table",
    "aether:skyroot_cartography_table",
    "aether:skyroot_fletching_table",
    "aether:skyroot_smithing_table",
    "aether:skyroot_grindstone",
    "aether:skyroot_loom",
    "aether:skyroot_jukebox",
    "aether:skyroot_gravitite_jukebox",
    "aether:skyroot_beehive",
    "minecraft:lectern",
    "aether:skyroot_lectern",
    "aether:skyroot_piston",
];

recipes.removeByName(id_list);