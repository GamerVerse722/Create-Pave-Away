// priority: 0

// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server scripts)')
ServerEvents.recipes(event => {
	event.remove({ output: 'morered:red_alloy_ingot' })
	event.remove({ id: 'create:crushing/crimsite_recycling' })
	event.remove({ id: 'create:crushing/asurine_recycling' })
	event.remove({ id: 'createdieselgenerators:compacting/plant_oil'})
})

ServerEvents.recipes(event => {
	event.custom({
		type: 'create:mixing',
		heatRequirement: "heated",
		ingredients: [
			{
				tag: 'morered:red_alloyable_ingots'
			},

			{
				item: 'minecraft:redstone'
			}

		],
		results: [
			{ item: 'morered:red_alloy_ingot' }
		]
	})

	event.shaped(
		Item.of('minecraft:iron_horse_armor', 1),
		[
			'  I',
			'ISI', // arg 2: the shape (array of strings)
			'I I'
		], {
		I: 'minecraft:iron_ingot',
		S: 'minecraft:saddle',
	})

	event.shaped(
		Item.of('minecraft:golden_horse_armor', 1),
		[
			'  I',
			'ISI', // arg 2: the shape (array of strings)
			'I I'
		], {
		I: 'minecraft:gold_ingot',
		S: 'minecraft:saddle',
	})

	event.shaped(
		Item.of('minecraft:diamond_horse_armor', 1),
		[
			'  I',
			'ISI', // arg 2: the shape (array of strings)
			'I I'
		], {
		I: 'minecraft:diamond',
		S: 'minecraft:saddle',
	})

	event.shaped(
		Item.of('minecraft:saddle', 1),
		[
			'   ',
			'LLL', // arg 2: the shape (array of strings)
			'  I'
		], {
		L: 'minecraft:leather',
		I: 'createaddition:iron_wire',
	})

	event.shaped(
		Item.of('minecraft:chest', 4),
		[
			'LLL',
			'L L', // arg 2: the shape (array of strings)
			'LLL'
		], {
		L: '#minecraft:logs',
	})

	event.shaped(
		Item.of('minecraft:stick', 16),
		[
			' L',
			' L',
		], {
		L: '#minecraft:logs',
	})

	event.shapeless(
		Item.of('minecraft:cookie', 8), // arg 1: output
		[
			'minecraft:cocoa_beans',
			'#forge:dough'
		]
	)

	event.shapeless(
		Item.of('createcasing:brass_depot', 1), // arg 1: output
		[
			'create:brass_ingot',
			'create:brass_casing'
		]
	)

	event.shapeless(
		Item.of('createcasing:copper_depot', 1), // arg 1: output
		[
			'minecraft:copper_ingot',
			'create:copper_casing'
		]
	)

	event.shapeless(
		Item.of('createcasing:railway_depot', 1), // arg 1: output
		[
			'create:sturdy_sheet',
			'create:railway_casing'
		]
	)

	event.shapeless(
		Item.of('createcasing:industrial_iron_depot', 1), // arg 1: output
		[
			'minecraft:iron_ingot',
			'create:industrial_iron_block'
		]
	)

	let converting = (output) => {
		event.shaped("3x " + output, [
			'WW',
			'WW'
		], {
			W: output.slice(0, -3) + 'wood'
		})

		let stripped = output.split(":")
		event.shaped("3x " + stripped[0] + ":stripped_" + stripped[1], [
			'WW',
			'WW'
		], {
			W: stripped[0] + ":stripped_" + stripped[1].slice(0,-3) + 'wood'
		})
	}

	converting('minecraft:oak_log')
	converting('minecraft:spruce_log')
	converting('minecraft:birch_log')
	converting('minecraft:jungle_log')
	converting('minecraft:acacia_log')
	converting('minecraft:dark_oak_log')
	converting('minecraft:mangrove_log')
	converting('minecraft:cherry_log')
	converting('alexscaves:pewen_log')
	converting('alexscaves:thornwood_log')
	converting('biomesoplenty:fir_log')
	converting('biomesoplenty:redwood_log')
	converting('biomesoplenty:mahogany_log')
	converting('biomesoplenty:jacaranda_log')
	converting('biomesoplenty:palm_log')
	converting('biomesoplenty:willow_log')
	converting('biomesoplenty:dead_log')
	converting('biomesoplenty:magic_log')
	converting('biomesoplenty:umbran_log')
	converting('biomesoplenty:hellbark_log')
})