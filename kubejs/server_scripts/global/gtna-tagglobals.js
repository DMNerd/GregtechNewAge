function addMetalTags(event, modid, metal){
    event.add('forge:raw_materials/' + metal, modid + ':raw_' + metal )
    event.add('forge:nuggets', modid + ':' + metal + '_nugget')
    event.add('forge:nuggets/' + metal, modid + ':' + metal + '_nugget')
    event.add('forge:ingots', modid + ':' + metal + '_ingot')
    event.add('forge:ingots/' + metal, modid + ':' + metal + '_ingot')
    event.add('forge:storage_blocks', modid + ':' + metal + '_block')
    event.add('forge:storage_blocks/' + metal, modid + ':' + metal + '_block')
    event.add('forge:plates', '/' + modid + ':' + metal + '_(?:plate|sheet)/')
    event.add('forge:plates/' + metal, '/' + modid + ':' + metal + '_(?:plate|sheet)/')
}

function addMetalUnificationTags(event, modid, metal, unifyTo){
    addMetalTags(event, modid, metal)
    event.add('forge:raw_materials/' + unifyTo, modid + ':raw_' + metal )
    event.add('forge:nuggets/' + unifyTo, modid + ':' + metal + '_nugget')
    event.add('forge:ingots/' + unifyTo, '/' + modid + ':' + metal + '_(?:ingot)/')
    event.add('forge:storage_blocks/' + unifyTo, modid + ':' + metal + '_block')
    event.add('forge:plates/' + unifyTo, '/' + modid + ':' + metal + '_(?:plate|sheet)/')
    event.add('forge:rods/' + unifyTo, modid + ':' + metal + '_rod')
}