const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');

GTCEuStartupEvents.registry('gtceu:material', e => {
    GTMaterials.Obsidian.setProperty(PropertyKey.INGOT, new $IngotProperty());  
    GTMaterials.Copper.addFlags(GTMaterialFlags.GENERATE_BOLT_SCREW)

    //Botania
    e.create('manasteel')
        .ingot()
        .element('manasteel')
        .color(0x3389FF).secondaryColor(0x003D90)
        .blastTemp(2600, 'high')
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING)
    e.create('terrasteel')
        .ingot()
        .element('terrasteel')
        .color(0x5CFF12).secondaryColor(0x297C00)
        .blastTemp(3200, 'high')
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING)
    e.create('alfsteel')
        .ingot()
        .element('alfsteel')
        .color(0xFFA10B).secondaryColor(0x863E04)
        .blastTemp(4000, 'high')
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING)
        //BloodMagic
    e.create('hellforged')
        .ingot()
        .element('demonite')
        .color(0xBAEFE7).secondaryColor(0x77CBBC)
        .blastTemp(4200, 'high')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW)
    //Occultism
    e.create('iesnium')
        .ingot()
        .element('iesnium')
        .color(0x8FD1DD).secondaryColor(0xCFF4FA)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW)
    //AE2
    e.create('pure_skystone')
        .dust()
        .color(0x7D7D7D)
        .iconSet(GTMaterialIconSet.METALLIC)
        .element('skystone')
    e.create('sky_steel')
        .ingot()
        .color(0x303031).secondaryColor(0x3a4447)
        .components('2x black_steel', '1x pure_skystone', 'certus_quartz')
        .blastTemp(4000, 'high')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME)
    //Twilight Forrest
    e.create('liveroot')
        .dust()
        .color(0x806655).secondaryColor(0xB8D949)
        .iconSet(GTMaterialIconSet.WOOD)
        .components('1x carbon', '1x emerald')
        .flags(GTMaterialFlags.MORTAR_GRINDABLE)
    e.create('ironwood')
        .ingot()
        .color(0x82764A)
        .components('9x iron', '1x gold', '9x liveroot')
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING)
    e.create('knightmetal')
        .ingot()
        .color(0xC3D5AD)
        .components('2x steel', '1x manganese')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING)

})
