ServerEvents.recipes(event => {
//	event.replaceInput({ output: 'tfmg:heavy_plate'}, '#ad_astra_platform:steel_ingots', 'tfmg:steel_ingot')
	event.replaceInput({ output: 'ad_astra:steel_plate'}, '#ad_astra_platform:steel_ingots', 'ad_astra:steel_ingot')
	event.replaceInput({ output: 'create_dd:steel_block'}, 'ad_astra:steel_ingot', 'create_dd:steel_ingot')
	event.replaceInput({ output: 'ad_astra:steel_block'}, '#forge:ingots/steel', 'ad_astra:steel_ingot')
})