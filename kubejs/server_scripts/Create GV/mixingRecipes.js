ServerEvents.recipes(event => {
	event.recipes.create.mixing('minecraft:ink_sac', [Fluid.of('create_enchantment_industry:ink', 50), 'minecraft:lapis_lazuli'])
	event.recipes.create.mixing(['create_enchantment_industry:experience_rotor', 'supplementaries:bomb_blue'], ['create_enchantment_industry:experience_rotor', 'create:experience_block'])
	
	event.recipes.create.mixing('minecraft:skeleton_skull', '8x minecraft:bone',).heated()
	event.recipes.create.mixing('minecraft:leather', '4x createaddition:biomass').heated()
	event.recipes.create.mixing('morered:red_alloy_ingot', ['#morered:red_alloyable_ingots', 'minecraft:redstone']).heated()
	
	event.recipes.create.mixing('minecraft:wither_skeleton_skull', ['minecraft:skeleton_skull', '8x minecraft:coal']).superheated()
})