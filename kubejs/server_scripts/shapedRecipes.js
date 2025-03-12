ServerEvents.recipes(event => {
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