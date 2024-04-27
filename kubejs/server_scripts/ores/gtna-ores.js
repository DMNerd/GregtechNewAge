GTCEuServerEvents.oreVeins(e => {
    e.add("gtna:elementium_vein", v => {
        v.layer("alfheim_gtceu")

        v.weight(200) 
        v.clusterSize(40) 
        v.density(0.25) 
        v.discardChanceOnAirExposure(0)

        v.heightRangeUniform(-60, 40)
        v.layeredVeinGenerator(gen => gen
            .buildLayerPattern(pat => pat
                .layer(l => l.weight(2).mat(GTMaterials.Gold).size(2, 2))
                .layer(l => l.weight(3).mat(GTMaterials.get('elementium')).size(1, 1))
                .layer(l => l.weight(3).block(() => Block.getBlock('mythicbotany:dragonstone_ore').size(1, 1)))
            )
        )
        v.surfaceIndicatorGenerator(ind => ind 
            .surfaceRock(GTMaterials.get('elementium'))
            .placement("surface")
            .density(0.4)
            .radius(5)
        )
    })
})