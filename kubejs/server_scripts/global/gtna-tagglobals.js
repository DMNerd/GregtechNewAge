function addMetalTags(event, modid, metal){
    event.add('forge:nuggets', modid + ':' + metal + '_nugget')
    event.add('forge:nuggets/' + metal, modid + ':' + metal + '_nugget')
    event.add('forge:ingots', modid + ':' + metal + '_ingot')
    event.add('forge:ingots/' + metal, modid + ':' + metal + '_ingot')
    event.add('forge:storage_blocks', modid + ':' + metal + '_block')
    event.add('forge:storage_blocks/' + metal, modid + ':' + metal + '_block')
}