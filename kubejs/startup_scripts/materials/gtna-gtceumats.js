const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');

GTCEuStartupEvents.registry('gtceu:material', e => {
    
    GTMaterials.Obsidian.setProperty(PropertyKey.INGOT, new $IngotProperty());  
    GTMaterials.Andesite.setProperty(PropertyKey.DUST, new $DustProperty());  
    GTMaterials.Diamond.addFlags(GTMaterialFlags.GENERATE_DENSE)
    GTMaterials.Andesite.addFlags(GTMaterialFlags.MORTAR_GRINDABLE)
    GTMaterials.Copper.addFlags(GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_RING)
    GTMaterials.Amethyst.addFlags(GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_DENSE)
    
    GTMaterials.get("andesite_alloy").addFlags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)

    e.create('soul_sand')
        .dust()
        .components('1x silicon', '1x saltpeter', '1x coal')
        .color(0x765F51).secondaryColor(0x2F1F15)
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    e.create('netherite_scrap')
        .dust()
        .element('netherite')
        .color(0x654740)
        .iconSet(GTMaterialIconSet.METALLIC)
    e.create('netherite')
        .dust()
        .components('4x netherite_scrap', '4x gold')
        .color(0x4B4243)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE)
    e.create('magnetic_gold')
        .ingot()
        .components('1x rose_gold', '1x iron')
        .color(0xEFDADC)
        .iconSet(GTMaterialIconSet.MAGNETIC)
        .flags(GTMaterialFlags.IS_MAGNETIC, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE , GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING)
    e.create('enderium')
        .ingot()
        .color(0x2CA9AE).secondaryColor(0x0B3056)
        .components('1x lead', '1x platinum', '4x ender_pearl')
        .blastTemp(2200, 'low', GTValues.VA[GTValues.MV], 2000) 
        .fluidPipeProperties(15000, 320, true, true, true, true)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING)  
    //Botania
    e.create('manasteel')
        .ingot()
        .element('manasteel')
        .color(0x3389FF).secondaryColor(0x003D90)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_LENS)
    e.create('terrasteel')
        .ingot()
        .element('terrasteel')
        .color(0x5CFF12).secondaryColor(0x297C00)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FRAME)  
    e.create('gaia')
        .element('gaia')
    e.create('alfsteel')
        .ingot()
        .element('alfsteel')
        .color(0xFFA10B).secondaryColor(0x863E04)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FRAME)
    e.create('yggdralium_shard')
        .gem()
        .element('yggdralium')
        .color(0xCAF4FF).secondaryColor(0x3F52B4)
        .iconSet(GTMaterialIconSet.QUARTZ)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    e.create('yggdralium')
        .ingot()
        .components('1x terrasteel', '4x gaia', '4x yggdralium_shard')
        .color(0xCAF4FF).secondaryColor(0x00C7FF)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FRAME)
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
    e.create('fluix')
        .gem()
        .fluid()
        .color(0x9A63C5).secondaryColor(0x3a4447)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.NO_WORKING, GTMaterialFlags.GENERATE_LENS)
        .components('1x redstone', '1x certus_quartz')
    e.create('pfstalloy')
        .ingot()
        .fluid()
        .color(0xA532FF).secondaryColor(0x604FAA)
        .cableProperties(GTValues.V[GTValues.LuV], 16, 0, true)
        .components('2x platinum', '1x fluix', '1x tin', '2x titanium')
        .blastTemp(6200, 'higher', GTValues.VA[GTValues.IV], 10000)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_FINE_WIRE)
    e.create('sky_steel')
        .ingot()
        .color(0x303031).secondaryColor(0x3a4447)
        .components('2x black_steel', '1x pure_skystone', 'certus_quartz')
        .blastTemp(4000, 'high')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME)
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
        .flags(GTMaterialFlags.GENERATE_PLATE)
    e.create('knightmetal')
        .ingot()
        .color(0xC3D5AD)
        .components('2x steel', '1x manganese')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE)
    e.create('fiery')
        .ingot()
        .color(0x191313).secondaryColor(0xFFA500)
        .element('fierium')
        .blastTemp(2200, 'low', GTValues.VA[GTValues.MV], 2000) 
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE)
    //Enderio
    e.create('copper_alloy')
        .ingot()
        .components('1x copper', '1x silicon')
        .color(0xB87D07).secondaryColor(0x7B5405)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING)
    e.create('redstone_alloy')
        .ingot()
        .fluid()
        .components('1x redstone', '1x silicon', '1x coal')
        .color(0xE44949).secondaryColor(0x8F2121)
        .cableProperties(GTValues.V[GTValues.LV], 1, 2, false)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.SOLDER_MATERIAL_GOOD ,GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_FINE_WIRE,)
    e.create('conductive_alloy')
        .ingot()
        .components('1x redstone_alloy', '1x iron', '1x silver')
        .color(0xDDB2AC).secondaryColor(0xCAA99F)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.IS_MAGNETIC)
    e.create('energetic_alloy')
        .ingot()
        .components('1x conductive_alloy', '1x gold', '1x black_steel')
        .color(0xFFDC8B).secondaryColor(0xE9A300)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING)
    e.create('vibrant_alloy')
        .ingot()
        .components('1x energetic_alloy', '1x ender_pearl', '1x nichrome')
        .color(0xE9FE77).secondaryColor(0xD5EE68)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING)
    e.create('pulsating_alloy')
        .ingot()
        .components('1x redstone_alloy', '1x ender_pearl', '1x iron')
        .color(0x9CEEAF).secondaryColor(0x62B873)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING)
    e.create('soularium')
        .ingot()
        .components('4x soul_sand', '1x gold', '1x coal')
        .color(0x6D5B35).secondaryColor(0x5C4323)
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FRAME)
    e.create('dark_steel')
        .ingot()
        .blastTemp(1800, 'low')
        .components('3x steel', '1x obsidian', '1x coal', '1x nickel')
        .color(0x7F7F7F).secondaryColor(0x3C3C3C)
        .fluidPipeProperties(2750, 260, true, false, true, false)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME)
    e.create('end_steel')
        .ingot()
        .blastTemp(3200, 'mid')
        .components('1x dark_steel', '1x endstone', '1x tungsten')
        .fluidPipeProperties(3680, 280, true, true, false, true)
        .color(0xFFF59D).secondaryColor(0xB2A855)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME)
    e.create('stellar_alloy')
        .ingot()
        .blastTemp(4500, 'mid', GTValues.VA[GTValues.EV], 5000)
        .cableProperties(GTValues.V[GTValues.ZPM], 4, 0)
        .components('1x end_steel', '1x nether_star', '1x naquadah', '1x ender_eye')
        .color(0xBAD4FF)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME)
})
