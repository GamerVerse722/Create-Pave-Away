ServerEvents.recipes(event => {
	event.remove({type: 'create:splashing', input: 'minecraft:sand'})
	event.remove({type: 'create:cutting', input: 'minecraft:birch_log'})
})

ServerEvents.recipes(event => {
    event.custom({
        'type': 'create:compacting',
        'ingredients': [{
            'item': 'create:crushed_raw_zinc'
        }, {
            'item': 'create:crushed_raw_zinc'
        }, {
            'item': 'minecraft:gravel'
        }, {
            'amount': 100,
            'fluid': 'minecraft:lava',
            'nbt': {}
        }],
        'results': [{
            'item': 'create:asurine'
        }]
    });
    event.custom({
        'type': 'create:haunting',
        'ingredients': [{
            'item': 'minecraft:tuff'
        }],
        'results': [{
            'item': 'minecraft:basalt'
        }]
    });
    event.custom({
        'type': 'create:cutting',
        'ingredients': [{
            'item': 'minecraft:birch_log'
        }],
        'processingTime': 50,
        'results': [{
            'item': 'minecraft:stripped_birch_log'
        }, {
            'chance': 0.75,
            'count': 2,
            'item': 'minecraft:paper'
        }]
    });
    event.custom({
        'type': 'create:compacting',
        'ingredients': [{
            'item': 'minecraft:flint'
        }, {
            'item': 'minecraft:flint'
        }, {
            'item': 'minecraft:bone_block'
        }, {
            'amount': 100,
            'fluid': 'minecraft:lava',
            'nbt': {}
        }],
        'results': [{
            'item': 'minecraft:calcite'
        }]
    });
    event.custom({
        'type': 'create:haunting',
        'ingredients': [{
            'item': 'minecraft:apple'
        }],
        'results': [{
            'item': 'minecraft:chorus_fruit'
        }]
    });
    event.custom({
        'type': 'create:compacting',
        'heatRequirement': 'heated',
        'ingredients': [{
            'item': 'minecraft:charcoal'
        }],
        'results': [{
            'item': 'minecraft:coal',
            'count': 1
        }]
    });
    event.custom({
        'type': 'create:compacting',
        'ingredients': [{
            'item': 'create:crushed_raw_iron'
        }, {
            'item': 'create:crushed_raw_iron'
        }, {
            'item': 'minecraft:gravel'
        }, {
            'amount': 100,
            'fluid': 'minecraft:lava',
            'nbt': {}
        }],
        'results': [{
            'item': 'create:crimsite'
        }]
    });
    event.custom({
        'type': 'create:compacting',
        'ingredients': [{
            'item': 'minecraft:flint'
        }, {
            'item': 'minecraft:flint'
        }, {
            'item': 'minecraft:tuff'
        }, {
            'amount': 200,
            'fluid': 'minecraft:lava',
            'nbt': {}
        }],
        'results': [{
            'item': 'minecraft:cobbled_deepslate'
        }]
    });
    event.custom({
        'type': 'create:compacting',
        'heatRequirement': 'superheated',
        'ingredients': [{
            'item': 'minecraft:coal_block'
        }, {
            'item': 'minecraft:coal_block'
        }, {
            'item': 'minecraft:coal_block'
        }, {
            'item': 'minecraft:coal_block'
        }, {
            'item': 'minecraft:coal_block'
        }, {
            'item': 'minecraft:coal_block'
        }, {
            'item': 'minecraft:coal_block'
        }, {
            'item': 'minecraft:coal_block'
        }],
        'results': [{
            'item': 'minecraft:coal_block'
        }, {
            'chance': 0.33,
            'item': 'minecraft:diamond'
        }]
    });
    event.custom({
        'type': 'create:compacting',
        'ingredients': [{
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }, {
            'tag': 'minecraft:saplings'
        }],
        'results': [{
            'item': 'minecraft:dirt'
        }]
    });
    event.custom({
        'type': 'create:compacting',
        'ingredients': [{
            'item': 'minecraft:flint'
        }, {
            'item': 'minecraft:flint'
        }, {
            'item': 'minecraft:dirt'
        }, {
            'amount': 100,
            'fluid': 'minecraft:water',
            'nbt': {}
        }],
        'results': [{
            'item': 'minecraft:dripstone_block'
        }]
    });
    event.custom({
        'type': 'create:mixing',
        'heatRequirement': 'heated',
        'ingredients': [{
            'item': 'minecraft:apple'
        }, {
            'item': 'minecraft:gold_block'
        }, {
            'item': 'minecraft:gold_block'
        }, {
            'item': 'minecraft:gold_block'
        }, {
            'item': 'minecraft:gold_block'
        }, {
            'item': 'minecraft:gold_block'
        }, {
            'item': 'minecraft:gold_block'
        }, {
            'item': 'minecraft:gold_block'
        }, {
            'item': 'minecraft:gold_block'
        }, {
            'item': 'create:experience_block'
        }],
        'results': [{
            'item': 'minecraft:enchanted_golden_apple'
        }]
    });
    event.custom({
        'type': 'create:haunting',
        'ingredients': [{
            'item': 'minecraft:smooth_basalt'
        }],
        'results': [{
            'item': 'minecraft:end_stone'
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:fire_resistance'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:fire_resistance'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:long_fire_resistance'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:long_fire_resistance'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:harming'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:harming'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:strong_harming'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:strong_harming'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:healing'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:healing'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:strong_healing'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:strong_healing'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:invisibility'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:invisibility'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:long_invisibility'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:long_invisibility'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'create:cinder_flour'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:water_breathing'
            }
        }],
        'results': [{
            'item': 'minecraft:lapis_lazuli'
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:leaping'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:leaping'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:long_leaping'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:long_leaping'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:strong_leaping'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:strong_leaping'
            }
        }]
    });
    event.custom({
        'type': 'create:compacting',
        'ingredients': [{
            'item': 'minecraft:flint'
        }, {
            'item': 'minecraft:flint'
        }, {
            'item': 'minecraft:cobblestone'
        }, {
            'amount': 100,
            'fluid': 'minecraft:lava',
            'nbt': {}
        }],
        'results': [{
            'item': 'create:limestone'
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:luck'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:luck'
            }
        }]
    });
    event.custom({
        'type': 'create:compacting',
        'heatRequirement': 'heated',
        'ingredients': [{
            'item': 'minecraft:stone'
        }, {
            'amount': 100,
            'fluid': 'minecraft:lava',
            'nbt': {}
        }],
        'results': [{
            'item': 'minecraft:magma_block'
        }]
    });
    event.custom({
        'type': 'create:compacting',
        'heatRequirement': 'superheated',
        'ingredients': [{
            'item': 'minecraft:nether_bricks'
        }, {
            'item': 'minecraft:nether_bricks'
        }, {
            'item': 'minecraft:nether_bricks'
        }, {
            'item': 'minecraft:nether_bricks'
        }, {
            'item': 'minecraft:nether_bricks'
        }, {
            'item': 'minecraft:nether_bricks'
        }, {
            'item': 'minecraft:nether_bricks'
        }, {
            'item': 'minecraft:nether_bricks'
        }, {
            'amount': 100,
            'fluid': 'minecraft:lava',
            'nbt': {}
        }],
        'results': [{
            'item': 'minecraft:netherite_scrap',
            'count': 1,
            'chance': 0.33
        }]
    });
    event.custom({
        'type': 'create:haunting',
        'ingredients': [{
            'item': 'minecraft:clay'
        }],
        'results': [{
            'item': 'minecraft:netherrack'
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:night_vision'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:night_vision'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:long_night_vision'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:long_night_vision'
            }
        }]
    });
    event.custom({
        'type': 'create:compacting',
        'ingredients': [{
            'item': 'create:crushed_raw_gold'
        }, {
            'item': 'create:crushed_raw_gold'
        }, {
            'item': 'minecraft:gravel'
        }, {
            'amount': 100,
            'fluid': 'minecraft:lava',
            'nbt': {}
        }],
        'results': [{
            'item': 'create:ochrum'
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:poison'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:poison'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:long_poison'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:long_poison'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:strong_poison'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:strong_poison'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:quartz'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:strength'
            }
        }],
        'results': [{
            'item': 'create:rose_quartz'
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:regeneration'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:regeneration'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:long_regeneration'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:long_regeneration'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:strong_regeneration'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:strong_regeneration'
            }
        }]
    });
    event.custom({
        'type': 'create:compacting',
        'heatRequirement': 'heated',
        'ingredients': [{
            'item': 'minecraft:gold_ingot'
        }, {
            'item': 'create:cinder_flour'
        }, {
            'amount': 100,
            'fluid': 'minecraft:lava',
            'nbt': {}
        }],
        'results': [{
            'item': 'minecraft:blaze_rod',
            'count': 1
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:rotten_flesh'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:regeneration'
            }
        }],
        'results': [{
            'item': 'minecraft:leather'
        }]
    });
    event.custom({
        'type': 'create:splashing',
        'ingredients': [{
            'item': 'minecraft:sand'
        }],
        'results': [{
            'chance': 0.25,
            'item': 'minecraft:clay_ball'
        }, {
            'chance': 0.125,
            'item': 'create:copper_nugget'
        }]
    });
    event.custom({
        'type': 'create:splashing',
        'ingredients': [{
            'item': 'minecraft:red_sandstone'
        }],
        'results': [{
            'item': 'minecraft:red_sand'
        }, {
            'chance': 0.05,
            'item': 'minecraft:nautilus_shell'
        }]
    });
    event.custom({
        'type': 'create:splashing',
        'ingredients': [{
            'item': 'minecraft:sandstone'
        }],
        'results': [{
            'item': 'minecraft:sand'
        }, {
            'chance': 0.025,
            'item': 'minecraft:nautilus_shell'
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:slow_falling'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:slow_falling'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:long_slow_falling'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:long_slow_falling'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:slowness'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:slowness'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:long_slowness'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:long_slowness'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:strong_slowness'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:strong_slowness'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:strength'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:strength'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:long_strength'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:long_strength'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:strong_strength'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:strong_strength'
            }
        }]
    });
    event.custom({
        'type': 'create:mixing',
        'heatRequirement': 'heated',
        'ingredients': [{
            'amount': 50,
            'fluid': 'create:honey'
        }],
        'results': [{
            'item': 'minecraft:sugar'
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:swiftness'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:swiftness'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:long_swiftness'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:long_swiftness'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:strong_swiftness'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:strong_swiftness'
            }
        }]
    });
    event.custom({
        'type': 'create:compacting',
        'heatRequirement': 'superheated',
        'ingredients': [{
            'item': 'minecraft:iron_nugget'
        }, {
            'item': 'minecraft:iron_nugget'
        }, {
            'item': 'minecraft:iron_nugget'
        }, {
            'item': 'minecraft:quartz'
        }, {
            'amount': 100,
            'fluid': 'minecraft:lava',
            'nbt': {}
        }],
        'results': [{
            'item': 'minecraft:amethyst_shard',
            'count': 1,
            'chance': 0.33
        }]
    });
    event.custom({
        'type': 'create:compacting',
        'heatRequirement': 'superheated',
        'ingredients': [{
            'item': 'create:copper_nugget'
        }, {
            'item': 'create:copper_nugget'
        }, {
            'item': 'create:copper_nugget'
        }, {
            'item': 'minecraft:quartz'
        }, {
            'amount': 100,
            'fluid': 'minecraft:water',
            'nbt': {}
        }],
        'results': [{
            'item': 'minecraft:emerald',
            'count': 1,
            'chance': 0.33
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:awkward'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:awkward'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:mundane'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:mundane'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:thick'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:thick'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:water'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:water'
            }
        }]
    });
    event.custom({
        'type': 'create:compacting',
        'ingredients': [{
            'item': 'minecraft:flint'
        }, {
            'item': 'minecraft:flint'
        }, {
            'item': 'minecraft:andesite'
        }, {
            'amount': 100,
            'fluid': 'minecraft:lava',
            'nbt': {}
        }],
        'results': [{
            'item': 'minecraft:tuff'
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:turtle_master'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:turtle_master'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:long_turtle_master'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:long_turtle_master'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:strong_turtle_master'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:strong_turtle_master'
            }
        }]
    });
    event.custom({
        'type': 'create:compacting',
        'ingredients': [{
            'item': 'create:crushed_raw_copper'
        }, {
            'item': 'create:crushed_raw_copper'
        }, {
            'item': 'minecraft:gravel'
        }, {
            'amount': 100,
            'fluid': 'minecraft:lava',
            'nbt': {}
        }],
        'results': [{
            'item': 'create:veridium'
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:water_breathing'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:water_breathing'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:long_water_breathing'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:long_water_breathing'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:weakness'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:weakness'
            }
        }]
    });
    event.custom({
        'type': 'create:filling',
        'ingredients': [{
            'item': 'minecraft:arrow'
        }, {
            'amount': 25,
            'fluid': 'create:potion',
            'nbt': {
                'Bottle': 'REGULAR',
                'Potion': 'minecraft:long_weakness'
            }
        }],
        'results': [{
            'item': 'minecraft:tipped_arrow',
            'nbt': {
                'Potion': 'minecraft:long_weakness'
            }
        }]
    });
    event.custom({
        'type': 'create:splashing',
        'ingredients': [{
            'item': 'minecraft:mud'
        }],
        'results': [{
            'chance': 0.125,
            'count': 3,
            'item': 'create:zinc_nugget'
        }, {
            'chance': 0.05,
            'item': 'minecraft:mangrove_roots'
        }]
    });
})