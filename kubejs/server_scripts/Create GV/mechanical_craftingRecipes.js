ServerEvents.recipes(event => {
	event.recipes.create.mechanical_crafting('cataclysm:burning_ashes', [
		'    M    ',
		'   MLM   ',
		'  MLALM  ',
		' MLANALM ',
		'MLANSNALM',
		' MLANALM ',
		'  MLALM  ',
		'   MLM   ',
		'    M    ',
	], {
		'A': 'supplementaries:ash_bricks',
		'N': 'advancednetherite:netherite_gold_ingot',
		'L': 'minecraft:lava_bucket',
		'S': 'minecraft:nether_star',
		'M': 'create_dd:experience_mass'
	})
})