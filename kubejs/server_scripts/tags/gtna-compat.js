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

    e.add('forge:binding_material', 'leatherprocessing:dried_leather')
    e.add('forge:binding_material', 'gtceu:treated_wood_plate')

    //Create
    e.add('forge:ingots/andesite_alloy', 'create:andesite_alloy')
    e.add('forge:ingots/chromatic', 'create:chromatic_compound')
    e.add('forge:ingots/refined_radiance', 'create:refined_radiance')
    e.add('forge:ingots/shadow_steel', 'create:shadow_steel')
    e.add('forge:plates/andesite', '#forge:plates/andesite_alloy')
    e.add('forge:screws/andesite', '#forge:screws/andesite_alloy')
    e.add('forge:rods/andesite', '#forge:rods/andesite_alloy')
    e.add('forge:rods/industrial_iron', '#forge:rods/wrought_iron')
    e.add('forge:screws/industrial_iron', '#forge:screws/wrought_iron')
    
    addMetalUnificationTags(e, 'create', 'industrial_iron', 'wrought_iron')
    addMetalUnificationTags(e, 'createdeco', 'industrial_iron', 'wrought_iron')

    addMetalTags(e, 'vintagedelight', 'salt')
    e.add('forge:rods/metal', '#forge:rods/steel')
    e.add('forge:salt', '#forge:dusts/salt')
    e.add('forge:ingots/bronze', 'gtceu:bronze_ingot')

    e.add('forge:nuggets/experience', 'create:experience_nugget')
    e.add('forge:blocks/experience', 'create:experience_block')

    e.add('forge:nuggets/experience', 'sfm:xp_shard')
    e.add('forge:blocks/experience', 'sfm:xp_goop')

    e.add('forge:dusts/endstone', '#forge:dusts/end_stone')

    e.add('forge:dusts/ender_pearl', 'enderio:powdered_ender_pearl')

    //Stargate Journey
    const sgmats = ['naquadah', 'naquadah_alloy']
    sgmats.forEach(material => {
        addMetalTags(e, 'sgjourney', material)
    });

    //Ars
    e.add('ars_nouveau:golem/shard', ['minecraft:amethyst_shard', 'ae2:certus_quartz_crystal'])
    e.add('forge:string/magebloom', 'ars_nouveau:magebloom_fiber')

    //Botany
    addStoneTags(e, 'botania', 'livingrock')
    e.add('botania:alfheim_portal', 'botania:alfheim_portal')
    e.add('botania:loki_ring', 'botania:loki_ring')
    e.add('botania:odin_ring', 'botania:odin_ring')
    e.add('botania:terra_sword', 'botania:terra_sword')
    e.add('botania:thor_ring', 'botania:thor_ring')
    e.add('forge:dusts/pixie', 'botania:pixie_dust')
    e.add('forge:rods/dreamwood', 'botania:dreamwood_twig')
    e.add('forge:rods/livingwood', 'botania:livingwood_twig')
    e.add('forge:storage_blocks/elf_quartz', 'botania:elf_quartz')
    e.remove('forge:storage_blocks/quartz', 'botania:elf_quartz')

    //Mythic Botany
    addMetalTags(e, 'mythicbotany', 'alfsteel')
    addMetalTags(e, 'mythicbotany', 'elementium')
    
    //Botanic Pledge
    addMetalTags(e ,'botanicpledge', 'yggdralium')
    addGemTags(e, 'botanicpledge', 'yggdralium_shard')
    addGemTags(e, 'botanicpledge', 'soul_shard')
    e.add('forge:rods/world_ash', 'botanicpledge:world_ash_branch')

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
    e.add('forge:plates/dark_steel', 'extendedcrafting:black_iron_slate')
    e.add('forge:dusts/luminessence', 'extendedcrafting:luminessence')

    //Ironchests
    const chest_tiers = ['blank', 'copper', 'iron', 'gold', 'crystal', 'diamond', 'obsidian', 'netherite']
    chest_tiers.forEach(tier => {
        e.add('ironchests:chests/' + tier, 'ironchests:' + tier + '_chest')
        e.add('ironchests:barrel/' + tier, 'ironchests:' + tier + '_barrel')
        e.add('ironchests:upgrades/' + tier, 'ironchests:' + tier + '_chest_upgrade')
    });
    e.add('ironchests:upgrades/flint', 'ironchests:blank_chest_upgrade')

})
ServerEvents.tags('block', e => {
    e.add('forge:relocation_not_supported', [/productivebees:.+/, 'minecraft:beehive', 'minecraft:bee_nest'])
    e.add('ae2:blacklisted/spatial', '#forge:relocation_not_supported')
    e.add('ars_nouveau:golem/budding', ['minecraft:budding_amethyst', 'ae2:damaged_budding_quartz', 'ae2:chipped_budding_quartz', 'ae2:flawed_budding_quartz', 'ae2:flawless_budding_quartz'])
    e.add('ars_nouveau:golem/cluster', ['minecraft:amethyst_cluster', 'ae2:quartz_cluster'])
    e.add('entangled:invalid_targets', ['@megacells','@expatternprovider','@ae2'])
    e.add('gtna:livingrock_ore_replaceables', 'botania:livingrock')
    e.add('forge:grasses', '/minecraft:.*grass$/')
    e.add('forge:grasses', '/minecraft:.*fern$/')
    e.add('blockrunner:very_quick_blocks', '/.*:.*asphalt.*/')
    e.add('blockrunner:quick_blocks', '/.*:.*path.*/')
    e.add('blockrunner:quick_blocks', '/.*:.*concrete.*/')

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