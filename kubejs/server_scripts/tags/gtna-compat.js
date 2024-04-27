ServerEvents.tags('item', e => {
    
    e.add('forge:dusts/ender', 'ae2:ender_dust')
    e.add('forge:shards/flint', 'notreepunching:flint_shard')
    e.add('occultism:tools/knives', '#forge:tools/butchery_knives')
    e.add('travelersbackpack:sleeping_bags', '#comforts:sleeping_bags')

    const flours = ['create:wheat_flour', 'enderio:flour']
    flours.forEach(flour => {
        e.add('forge:dusts', flour)
        e.add('forge:dusts/wheat', flour)
    });
    e.add('forge:cheeses', '/casualness_delight:cheese.*slice$/')
    e.add('forge:cheeses', 'ad_astra:cheese')
    e.add('forge:dusts/silicon', '#forge:silicon')
    e.add('forge:milk', 'gtceu:milk_bucket')

    //Create

    e.add('forge:ingots/andesite_alloy', 'create:andesite_alloy')
    e.add('forge:ingots/refined_radiance', 'create:refined_radiance')
    e.add('forge:ingots/shadow_steel', 'create:shadow_steel')
    e.add('forge:plates/andesite', '#forge:plates/andesite_alloy')
    e.add('forge:rods/andesite', '#forge:rods/andesite_alloy')
    e.add('forge:rods/industrial_iron', '#forge:rods/wrought_iron')
    e.add('forge:screws/industrial_iron', '#forge:screws/wrought_iron')


    addMetalUnificationTags(e, 'create', 'industrial_iron', 'wrought_iron')
    addMetalUnificationTags(e, 'createdeco', 'industrial_iron', 'wrought_iron')
    
    e.add('forge:gems/pulsating_crystal', 'create_new_age:overcharged_diamond')
    e.add('forge:ingots/magnetic_gold', 'create_new_age:overcharged_gold')
    e.add('forge:ingots/magnetic_iron', 'create_new_age:overcharged_iron')
    e.add('forge:plates/magnetic_gold', 'create_new_age:overcharged_golden_sheet')
    e.add('forge:plates/magnetic_iron', 'create_new_age:overcharged_iron_sheet')
    e.add('forge:raw_materials/thorium', 'create_new_age:thorium')

    addMetalTags(e, 'vintagedelight', 'salt')
    e.add('forge:rods/metal', '#forge:rods/steel')
    e.add('forge:salt', '#forge:dusts/salt')
    e.add('forge:ingots/bronze', 'gtceu:bronze_ingot')

    //Botany
    addMetalTags(e, 'mythicbotany', 'elementium')

    //Ars
    e.add('ars_nouveau:golem/shard', ['minecraft:amethyst_shard', 'ae2:certus_quartz_crystal'])

    //Stargate Journey
    const sgmats = ['naquadah', 'naquadah_alloy']
    sgmats.forEach(material => {
        addMetalTags(e, 'sgjourney', material)
    });
    //Mythic Botany
    addMetalTags(e, 'mythicbotany', 'alfsteel')

    //Botanic Pledge
    addMetalTags(e ,'botanicpledge', 'yggdralium')
    e.add('forge:gems', 'botanicpledge:yggdralium_shard')
    e.add('forge:gems/yggdralium_shard', 'botanicpledge:yggdralium_shard')

    const netherstar_inputs = ['minecraft:netherstar', '#forge:dusts/nether_star']
    netherstar_inputs.forEach(input => {
        e.add('gtna:netherstar_inputs', input)
    });

    //Blood magic
    e.add('forge:storage_blocks/hellforged', 'bloodmagic:dungeon_metal')

    //Twilight
    e.add('twilightforest:dark_logs', '#twilightforest:darkwood_logs')
    e.add('twilightforest:sorting_logs', '#twilightforest:sortwood_logs')
    e.add('twilightforest:time_logs', '#twilightforest:timewood_logs')
    e.add('twilightforest:transformation_logs', '#twilightforest:transwood_logs')

    //Rocketry
    const tiers = ['t1', 't2', 't3', 't4']
    tiers.forEach(tier => {
        addHeavyAlloyTags(e, 'gtnn', tier)
    });

    e.add('twilightforest:sorting_logs', '#twilightforest:sortwood_logs')

    //EXCrafting
    const materials = [['black_iron', 'dark_steel'], ['redstone', 'red_alloy'], ['enhanced_redstone', 'redstone_alloy'], ['ender', 'end_steel'], ['enhanced_ender', 'enderium']]

    materials.forEach(material => {
        addMetalUnificationTags(e, 'extendedcrafting', material[0], material[1])
    });
    addMetalTags(e, 'extendedcrafting', 'crystaltine')
    addMetalTags(e, 'extendedcrafting', 'the_ultimate')

    //Ironchests
    const chest_tiers = ['blank', 'copper', 'iron', 'gold', 'crystal', 'diamond', 'obsidian', 'netherite']
    chest_tiers.forEach(tier => {
        e.add('ironchests:chests/' + tier, 'ironchests:' + tier + '_chest')
        e.add('ironchests:barrel/' + tier, 'ironchests:' + tier + '_barrel')
        e.add('ironchests:upgrades/' + tier, 'ironchests:' + tier + '_chest_upgrade')
    });
    e.add('ironchests:upgrades/flint', 'ironchests:blank_chest_upgrade')
    
    e.add('drawers:1x1', '/functionalstorage:.*_1/')
    e.add('drawers:1x2', '/functionalstorage:.*_2/')
    e.add('drawers:2x2', '/functionalstorage:.*_4/')

})
ServerEvents.tags('block', e => {
    e.add('forge:relocation_not_supported', [/productivebees:.+/, 'minecraft:beehive', 'minecraft:bee_nest'])
    e.add('ae2:blacklisted/spatial', '#forge:relocation_not_supported')
    e.add('ars_nouveau:golem/budding', ['minecraft:budding_amethyst', 'ae2:damaged_budding_quartz', 'ae2:chipped_budding_quartz', 'ae2:flawed_budding_quartz', 'ae2:flawless_budding_quartz'])
    e.add('ars_nouveau:golem/cluster', ['minecraft:amethyst_cluster', 'ae2:quartz_cluster'])
    e.add('entangled:invalid_targets', ['@megacells','@expatternprovider','@ae2'])
    e.add('gtna:livingrock_ore_replaceables', 'botania:livingrock')
})
ServerEvents.tags('fluid', e => {
    e.remove('minecraft:water',[
      'ad_astra:oil','ad_astra:flowing_oil',
      'ad_astra:cryo_fuel','ad_astra:flowing_cryo_fuel',
      'ad_astra:fuel','ad_astra:flowing_fuel',
      'createaddition:flowing_seed_oil','createaddition:seed_oil',
      'createaddition:bioethanol','createaddition:flowing_bioethanol'])
    e.add('forge:oil', '#forge:crude_oil')
})
ServerEvents.tags('entity_type', e => {
    e.add('ars_nouveau:drygmy_blacklist', /productivebees:.+/)
})