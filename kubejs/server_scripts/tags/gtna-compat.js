ServerEvents.tags('item', e => {

    function addMetalTags(modid, metal){
        e.add('forge:nuggets', modid + ':' + metal + '_nugget')
        e.add('forge:nuggets/' + metal, modid + ':' + metal + '_nugget')
        e.add('forge:ingots', modid + ':' + metal + '_ingot')
        e.add('forge:ingots/' + metal, modid + ':' + metal + '_ingot')
        e.add('forge:storage_blocks', modid + ':' + metal + '_block')
        e.add('forge:storage_blocks/' + metal, modid + ':' + metal + '_block')
    }

    e.add('occultism:tools/knives', '#forge:tools/butchery_knives')

    const flours = ['create:wheat_flour', 'enderio:flour']
    flours.forEach(flour => {
        e.add('forge:dusts', flour)
        e.add('forge:dusts/wheat', flour)
    });

    e.add('forge:milk', 'gtceu:milk_bucket')

    //Botanic Pledge
    addMetalTags('botanicpledge', 'yggdralium')
    e.add('forge:gems', 'botanicpledge:yggdralium_shard')
    e.add('forge:gems/yggdralium_shard', 'botanicpledge:yggdralium_shard')

})

