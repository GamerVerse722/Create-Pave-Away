<recipetype:create:crushing>.addRecipe("rose_quartz_block_to_chunk", [<item:biomesoplenty:rose_quartz_chunk> * 3, <item:biomesoplenty:rose_quartz_chunk> % 50], <item:biomesoplenty:rose_quartz_block>);

<recipetype:create:crushing>.addRecipe("scorchia_to_coal_piece", [
    <item:create_dd:coal_piece>,
    <item:create_dd:coal_piece> % 50,
    <item:create_dd:coal_piece> % 25,
    <item:create_dd:coal_piece> % 15,
    <item:create:cinder_flour> % 4,
    <item:minecraft:emerald> % 40
], <item:create:scorchia>);

<recipetype:create:crushing>.addRecipe("magma_block_to_netherack", [
    <item:minecraft:netherrack>,
    <item:minecraft:netherrack> % 25,
    <item:create_dd:coal_piece> % 15,
    <item:minecraft:magma_cream> % 5
], <item:minecraft:magma_block>);