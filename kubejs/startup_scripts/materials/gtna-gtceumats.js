const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');

GTCEuStartupEvents.registry('gtceu:material', e => {
    GTMaterials.Obsidian.setProperty(PropertyKey.INGOT, new $IngotProperty());  
    e.create('sky_steel')
        .ingot()
        .color(0x303031).secondaryColor(0x3a4447)
        .iconSet(GTMaterialIconSet.METALLIC)
        .dust()
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME)
    //AE2
    //Twilight Forrest
    e.create('liveroot')
        .dust()
        .color(0x806655).secondaryColor(0xB8D949)
        .element('liverootium')
    e.create('ironwood')
        .ingot()
        .color(0x82764A)
        .components('9x iron', '1x gold', '9x liveroot')
        .iconSet(GTMaterialIconSet.DULL)
        .dust()
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING)
    e.create('knightmetal')
        .ingot()
        .color(0xC3D5AD)
        .components('2x steel', '1x manganese')
        .iconSet(GTMaterialIconSet.METALLIC)
        .dust()
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING)
    

})
