ServerEvents.recipes(e => {

    e.replaceInput({ mod: 'create' }, 'minecraft:dried_kelp_block', '#forge:storage_blocks/polytetrafluoroethylene')
    e.replaceInput({ mod: 'create' }, 'minecraft:copper_block', 'gtceu:steam_machine_casing')
    e.replaceInput({ mod: 'create'}, 'minecraft:iron_nugget', '#forge:rods/iron')
    e.replaceInput({ id: '/createapplied.*:.*silicon/' }, '#forge:dusts/silicon', '#forge:plates/silicon')
    e.replaceInput({ id: '/createapplied.*:.*processor_print$/' }, '#ae2:all_certus_quartz', '#forge:plates/certus_quartz')
    e.replaceInput({ id: '/createapplied.*:.*processor_print$/' }, 'minecraft:diamond', '#forge:plates/diamond')

    e.replaceInput({ id: '/create:.*steam_engine$/' }, '#forge:plates/gold', '#forge:plates/andesite_alloy')
    e.replaceInput({ id: '/create:.*steam_engine$/' }, '#forge:ingots/andesite_alloy', '#forge:pistons')
    e.replaceInput({ id: 'create:crafting/kinetics/hand_crank' }, '#forge:ingots/andesite_alloy', '#forge:rods/andesite_alloy')
    e.replaceInput({ id: 'create:crafting/kinetics/hand_crank' }, '#minecraft:planks', '#minecraft:wooden_slabs')

    e.replaceInput({ id: '/create_connected:crafting/palettes/copycat.*/' }, '#forge:ingots/zinc', '#forge:double_plates/zinc')

    e.remove({ id: '/createapplied.*:.*processor$/' })
    e.remove({ id: 'createdeco:industrial_iron_sheet_metal' })

    const materials = ['zinc', 'brass']
    materials.forEach(material => {
        removeVanillaMetalurgy(e, 'create', material)
    });
    e.remove({id: 'create_dd:smoking/rubber' })
    e.remove({id: '/create_dd:crafting/industrial_iron.*/' })
    e.remove({id: '/create_dd:compacting/steel.*/' })
    e.remove({output: 'create:chromatic_compound' })
    e.remove({output: 'create_dd:copycat_block' })
    e.remove({output: 'create_dd:copycat_slab' })
    e.replaceInput({ id: 'create:sequenced_assembly/precision_mechanism' }, 'minecraft:iron_nugget', '#forge:small_gears/iron')

    e.shapeless('4x create:experience_nugget',['oreberriesreplanted:essence_berry']).id('gtna:shapeless/create/essenceberry_conversion')
    
    e.remove({ id: '/create:industrial_iron_block.*_stonecutting$/' })
    e.remove({id: 'create:crafting/kinetics/shaft'})
    e.replaceInput({ id: 'create:cutting/andesite_alloy' }, '#forge:ingots/andesite_alloy', '#forge:rods/long/andesite_alloy')
    e.shaped('8x create:shaft', ['B', 'A', 'A'], {
        A: '#forge:rods/long/andesite_alloy', 
        B: '#forge:tools/hammers'
    }).id('gtna:shaped/create_shaft')
    e.remove({ id: 'create:crafting/kinetics/large_cogwheel' })
    e.replaceInput({ output: 'create:cogwheel' }, '#minecraft:planks', '#forge:gears/wood')
    e.replaceInput({ output: 'create:large_cogwheel' }, '#minecraft:planks', '#forge:gears/wood')
    e.remove({ id: '/create:crafting/materials/andesite_alloy.*/' })
    e.shapeless('2x gtceu:andesite_alloy_dust',['2x #forge:dusts/iron', '2x #forge:dusts/andesite']).id('gtna:shapeless/create/andesite_alloy_dust')
    e.shaped('#forge:dusts/andesite', ['A', 'B'], {
        A: '#chipped:andesite', 
        B: '#forge:tools/mortars'
    }).id('gtna:shaped/andesite_dust_mortar')
    e.remove({ output: 'create:fluid_tank' })
    e.shaped('create:fluid_tank', ['BCB', 'DAE', 'BCB'], {
        A: 'gtceu:tempered_glass', 
        B: '#forge:screws/copper',
        C: '#forge:plates/copper',
        D: '#forge:tools/wrench',
        E: '#forge:tools/screwdrivers'
    }).id('gtna:shaped/create/basic_fluid_tank')
    e.remove({ output: 'railways:fuel_tank' })
    e.shaped('railways:fuel_tank', ['BCB', 'DAE', 'BCB'], {
        A: 'gtceu:bronze_drum', 
        B: '#forge:screws/brass',
        C: '#forge:plates/obsidian', 
        D: '#forge:tools/wrench',
        E: '#forge:tools/screwdrivers'
    }).id('gtna:shaped/railways/basic_fuel_tank')
    e.remove({ output: 'create:flywheel' })
    e.shaped('create:flywheel', ['CBC', 'BAB', 'CBC'], {
        A: 'create:shaft', 
        B: '#forge:rods/brass',
        C: '#forge:plates/brass'
    }).id('gtna:shaped/create/flywheel')

})