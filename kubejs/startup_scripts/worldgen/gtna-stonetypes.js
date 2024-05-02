GTCEuStartupEvents.registry('gtceu:tag_prefix', e => {
    e.create('livingrock', 'ore') // 
        .stateSupplier(() => Block.getBlock('botania:livingrock').defaultBlockState()) // 
        .baseModelLocation('botania:block/livingrock') // 
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
    e.create('limestone', 'ore') // 
        .stateSupplier(() => Block.getBlock('create:limestone').defaultBlockState()) // 
        .baseModelLocation('create:block/limestone') // 
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
})