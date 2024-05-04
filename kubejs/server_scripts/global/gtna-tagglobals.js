function addMetalTags(event, modid, metal){
    event.add('forge:raw_materials' + metal, modid + ':raw_' + metal )
    event.add('forge:raw_materials/' + metal, modid + ':raw_' + metal )
    event.add('forge:storage_blocks/raw_' + metal, modid + ':raw_' + metal + '_block')
    event.add('forge:nuggets', modid + ':' + metal + '_nugget')
    event.add('forge:nuggets/' + metal, modid + ':' + metal + '_nugget')
    event.add('forge:ingots', modid + ':' + metal + '_ingot')
    event.add('forge:ingots/' + metal, modid + ':' + metal + '_ingot')
    event.add('forge:storage_blocks', modid + ':' + metal + '_block')
    event.add('forge:storage_blocks/' + metal, modid + ':' + metal + '_block')
    event.add('forge:plates', '/' + modid + ':' + metal + '_(?:plate$|sheet$)/')
    event.add('forge:plates/' + metal, '/' + modid + ':' + metal + '_(?:plate$|sheet$)/')
    event.add('forge:dusts', '/' + modid + ':' + metal + '_dust/')
    event.add('forge:dusts/' + metal, '/' + modid + ':' + metal + '_dust/')
}

function addMetalUnificationTags(event, modid, metal, unifyTo){
    addMetalTags(event, modid, metal)
    event.add('forge:raw_materials/' + unifyTo, modid + ':raw_' + metal )
    event.add('forge:nuggets/' + unifyTo, modid + ':' + metal + '_nugget')
    event.add('forge:ingots/' + unifyTo, '/' + modid + ':' + metal + '_(?:ingot$|compound$)/')
    event.add('forge:storage_blocks/' + unifyTo, '/' + modid + ':' + metal + '_(?:block$|ingot_block$)/')
    event.add('forge:plates/' + unifyTo, '/' + modid + ':' + metal + '.*_(?:plate$|sheet$)/')
    event.add('forge:rods/' + unifyTo, modid + ':' + metal + '_rod')
    event.add('forge:dusts/' + unifyTo, modid + ':' + metal + '_dust')

}
function addGemTags(event, modid, gem){
    event.add('forge:gems', modid + ':' + gem )
    event.add('forge:gems/' + gem, modid + ':' + gem)
}

function addStoneTags(event, modid, stone){
    event.add('forge:stone', modid + ':' + stone )
    event.add('forge:stone/' + stone, modid + ':' + stone)
}

function addHeavyAlloyTags(event, modid, tier){
    event.add('forge:heavy_ingots', modid + ':heavy_ingot_' + tier)
    event.add('forge:heavy_ingots/' + tier, modid + ':heavy_ingot_' + tier)
    event.add('forge:heavy_plates', modid + ':heavy_plate_' + tier)
    event.add('forge:heavy_plates/' + tier, modid + ':heavy_plate_' + tier)
}