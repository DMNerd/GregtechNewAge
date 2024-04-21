ServerEvents.tags('item', e => {
    
    e.add('forge:shards/flint', 'notreepunching:flint_shard')
    e.add('occultism:tools/knives', '#forge:tools/butchery_knives')

    const flours = ['create:wheat_flour', 'enderio:flour']
    flours.forEach(flour => {
        e.add('forge:dusts', flour)
        e.add('forge:dusts/wheat', flour)
    });

    e.add('forge:milk', 'gtceu:milk_bucket')

    //Mythic Botany
    addMetalTags(e, 'mythicbotany', 'alfsteel')

    //Botanic Pledge
    addMetalTags(e ,'botanicpledge', 'yggdralium')
    e.add('forge:gems', 'botanicpledge:yggdralium_shard')
    e.add('forge:gems/yggdralium_shard', 'botanicpledge:yggdralium_shard')

})

