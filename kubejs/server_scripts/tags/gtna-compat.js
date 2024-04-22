ServerEvents.tags('item', e => {
    
    e.add('forge:shards/flint', 'notreepunching:flint_shard')
    e.add('occultism:tools/knives', '#forge:tools/butchery_knives')
    e.add('travelersbackpack:sleeping_bags', '#comforts:sleeping_bags')

    const flours = ['create:wheat_flour', 'enderio:flour']
    flours.forEach(flour => {
        e.add('forge:dusts', flour)
        e.add('forge:dusts/wheat', flour)
    });

    e.add('forge:milk', 'gtceu:milk_bucket')
    //Create
    e.add('forge:ingots/andesite_alloy', 'create:andesite_alloy')
    e.add('forge:ingots/refined_radiance', 'create:refined_radiance')
    e.add('forge:ingots/shadow_steel', 'create:shadow_steel')

    //Stargate Journey
    let sgmats = ['naquadah', 'naquadah_alloy']
    sgmats.forEach(material => {
        addMetalTags(e, 'sgjourney', material)
    });
    //Mythic Botany
    addMetalTags(e, 'mythicbotany', 'alfsteel')

    //Botanic Pledge
    addMetalTags(e ,'botanicpledge', 'yggdralium')
    e.add('forge:gems', 'botanicpledge:yggdralium_shard')
    e.add('forge:gems/yggdralium_shard', 'botanicpledge:yggdralium_shard')

    let netherstar_inputs = ['minecraft:netherstar', '#forge:dusts/nether_star']
    netherstar_inputs.forEach(input => {
        e.add('gtna:netherstar_inputs', input)
    });

    //Twilight
    e.add('twilightforest:sorting_logs', '#twilightforest:sortwood_logs')
    e.add('twilightforest:transformation_logs', '#twilightforest:transwood_logs')
    e.add('twilightforest:time_logs', '#twilightforest:timewoodwood_logs')
    e.add('twilightforest:dark_logs', '#twilightforest:darkwoodwood_logs')


})

