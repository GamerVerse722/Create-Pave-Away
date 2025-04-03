import crafttweaker.api.item.IItemStack;

val air = <item:minecraft:air> as IItemStack;

# Readded recipes that removed by quark.
craftingTable.addShaped("planks_to_chest", <item:minecraft:chest>, [
    [<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>],
    [<tag:items:minecraft:planks>, air, <tag:items:minecraft:planks>],
    [<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>]
]);

craftingTable.addShaped("planks_to_bookshelf", <item:minecraft:bookshelf>, [
    [<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>],
    [<item:minecraft:book>, <item:minecraft:book>, <item:minecraft:book>],
    [<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>]
]);