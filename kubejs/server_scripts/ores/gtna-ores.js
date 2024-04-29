GTCEuServerEvents.oreVeins(e => {
    e.add("gtna:elementium", v => {
        v.weight(5) 
        v.clusterSize(20) 
        v.density(0.5) 
        v.discardChanceOnAirExposure(0)
        v.layer("alfheimores")
        v.heightRangeTriangle(-60, 40)
        v.layeredVeinGenerator(gen => gen
            .buildLayerPattern(pat => pat
                .layer(l => l.weight(1).block(() => Block.getBlock('mythicbotany:dragonstone_ore')).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.get("arcane_crystal")).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Gold).size(2, 2))
                .layer(l => l.weight(3).mat(GTMaterials.get("elementium")).size(2, 1))
            )
        )
        v.surfaceIndicatorGenerator(ind => ind 
            .surfaceRock(GTMaterials.get("elementium"))
            .placement("surface")
            .density(0.4)
            .radius(5)
        )
    })
    e.add("gtna:arcane", v => {
        v.weight(200) 
        v.clusterSize(20) 
        v.density(0.5) 
        v.discardChanceOnAirExposure(1)
        v.layer("tf")
        v.heightRangeTriangle(-60, 40)
        v.layeredVeinGenerator(gen => gen
            .buildLayerPattern(pat => pat
                .layer(l => l.weight(1).mat(GTMaterials.get("arcane_crystal")).size(2, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Silver).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.Gold).size(1, 1))
                .layer(l => l.weight(4).block(() => Block.getBlock('ars_nouveau:sourcestone')).size(2, 4))
            )
        )
        v.surfaceIndicatorGenerator(ind => ind 
            .surfaceRock(GTMaterials.get("arcane_crystal"))
            .placement("surface")
            .density(0.4)
            .radius(5)
        )
    })
})