ServerEvents.recipes(event => {
	event.recipes.create.crushing(['create_dd:coal_piece',
									Item.of('create_dd:coal_piece').withChance(.5),
									Item.of('create_dd:coal_piece').withChance(.25),
									Item.of('create_dd:coal_piece').withChance(.15), 
									Item.of('create:cinder_flour').withChance(.04),
									Item.of('minecraft:emerald').withChance(.4)
								],'create:scorchia')

	event.recipes.create.crushing(['minecraft:netherrack',
									Item.of('minecraft:netherrack').withChance(.25),
									Item.of('create_dd:coal_piece').withChance(.15), 
									Item.of('minecraft:magma_cream').withChance(.05),
									// Item.of('create_things_and_misc:crushed_magma').withChance(.1)
								],'minecraft:magma_block')
})