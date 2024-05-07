ServerEvents.recipes(e => {

    e.replaceInput({ input: 'create:electron_tube'}, 'create:electron_tube', 'gtceu:vacuum_tube')
    e.replaceInput({ mod: 'create' }, 'minecraft:copper_block', 'gtceu:steam_machine_casing')
    e.replaceInput({ mod: 'create' }, 'minecraft:dried_kelp_block', '#forge:storage_blocks/polytetrafluoroethylene')
    e.replaceInput({ mod: 'create'}, 'minecraft:iron_nugget', '#forge:rods/iron')

    e.replaceInput({ id: '/create:.*basin.*/' }, '#forge:ingots/andesite_alloy', '#forge:plates/andesite_alloy')
    e.replaceInput({ id: '/create:.*deployer$/' }, 'create:electron_tube', 'ulvcovm:ulv_electric_piston')
    e.replaceInput({ id: '/create:.*mechanical_arm$/' }, 'create:precision_mechanism', 'ulvcovm:ulv_robot_arm')
    e.replaceInput({ id: '/create:.*smart_fluid_pipe$/' }, 'create:electron_tube', 'ulvcovm:ulv_fluid_regulator')
    e.replaceInput({ id: '/create:.*steam_engine$/' }, '#forge:ingots/andesite_alloy', 'ulvcovm:ulv_electric_piston')
    e.replaceInput({ id: '/create:.*steam_engine$/' }, '#forge:plates/gold', '#forge:plates/andesite_alloy')
    e.replaceInput({ id: '/create:crafting/kinetics/cart_assembler.*/' }, '#forge:ingots/andesite_alloy', '#forge:plates/andesite_alloy')
    e.replaceInput({ id: '/create:crafting/kinetics/cart_assembler.*/' }, 'minecraft:redstone', '#forge:plates/redstone')
    e.replaceInput({ id: '/create:crafting/kinetics/fluid_pipe.*/' }, 'minecraft:copper_ingot', 'gtceu:copper_normal_fluid_pipe')
    e.replaceInput({ id: '/create:crafting/kinetics/fluid_valve.*/' }, '#ad_astra:iron_plates', '#create:valve_handles')
    e.replaceInput({ id: '/create:crafting/kinetics/linear_chassis.*/' }, '#forge:ingots/andesite_alloy', '#forge:plates/andesite_alloy')
    e.replaceInput({ id: '/create:crafting/kinetics/mechanical_crafter.*/' }, 'create:electron_tube', 'ulvcovm:ulv_conveyor_module')
    e.replaceInput({ id: '/create:crafting/kinetics/mechanical_harvester.*/' }, '#forge:ingots/andesite_alloy', 'gtceu:gears/andesite_alloy')
    e.replaceInput({ id: '/create:crafting/kinetics/mechanical_press.*/' }, 'minecraft:iron_block', '#forge:plates/andesite_alloy')
    e.replaceInput({ id: '/create:crafting/kinetics/mechanical_pump.*/' }, 'create:cogwheel', 'ulvcovm:ulv_electric_pump')
    e.replaceInput({ id: '/create:crafting/kinetics/radial_chassis.*/' }, '#forge:ingots/andesite_alloy', '#forge:plates/andesite_alloy')
    e.replaceInput({ id: '/create:crafting/kinetics/mechanical_drill.*/' }, '#forge:ingots/andesite_alloy', '#forge:plates/andesite_alloy')
    e.replaceInput({ id: '/create:crafting/kinetics/gantry_shaft.*/' }, '#forge:ingots/andesite_alloy', 'create:shaft')
    e.replaceInput({ id: '/create:crafting/kinetics/rope_pulley.*/' }, '#minecraft:wool', '#forge:rope')
    e.replaceInput({ id: '/create:crafting/kinetics/rose_quartz_lamp.*/' }, '#forge:ingots/zinc', '#forge:plates/zinc')
    e.replaceInput({ id: '/create:crafting/kinetics/rose_quartz_lamp.*/' }, 'minecraft:redstone', 'create:electron_tube')
    e.replaceInput({ id: '/create:crafting/kinetics/smart_chute.*/' }, 'create:electron_tube', 'ulvcovm:ulv_conveyor_module')
    e.replaceInput({ id: '/create:crafting/kinetics/spout.*/' }, 'minecraft:dried_kelp', 'gtceu:copper_normal_fluid_pipe')
    e.replaceInput({ id: '/create:crafting/logistics/brass_tunnel.*/' }, 'create:electron_tube', 'ulvcovm:ulv_conveyor_module')
    e.replaceInput({ id: '/create:crafting/logistics/hose_pulley.*/' }, '#forge:plates/copper', 'ulvcovm:ulv_electric_pump')
    e.replaceInput({ id: '/create_enchantment_industry:crafting/printer.*/' }, 'minecraft:dried_kelp', '#forge:plates/polytetrafluoroethylene')
    e.replaceInput({ id: '/create_connected:crafting/palettes/copycat.*/' }, '#forge:ingots/zinc', '#forge:double_plates/zinc')
    e.replaceInput({ id: '/createapplied.*:.*processor_print$/' }, '#ae2:all_certus_quartz', '#forge:plates/certus_quartz')
    e.replaceInput({ id: '/createapplied.*:.*processor_print$/' }, 'minecraft:diamond', '#forge:plates/diamond')
    e.replaceInput({ id: '/createapplied.*:.*silicon/' }, '#forge:dusts/silicon', '#forge:plates/silicon')
    e.replaceInput({ id: '/createchanges:.*deployer$/' }, 'create:electron_tube', 'ulvcovm:ulv_electric_piston')
    e.replaceInput({ id: '/createchanges:fluid_pipe.*/' }, 'minecraft:copper_block', 'gtceu:copper_huge_fluid_pipe')
    e.replaceInput({ id: '/createchanges:spout.*/' }, 'minecraft:dried_kelp', 'gtceu:copper_normal_fluid_pipe')
   
    e.remove({ id: '/createapplied.*:.*processor$/' })
    e.remove({ id: 'createdeco:industrial_iron_sheet_metal' })
    e.remove({id: '/create_dd:compacting/steel.*/' })
    e.remove({id: '/create_dd:crafting/industrial_iron.*/' })
    e.remove({id: 'create_dd:smoking/rubber' })
    e.remove({output: 'create:chromatic_compound' })
    e.remove({output: 'create_dd:copycat_block' })
    e.remove({output: 'create_dd:copycat_slab' })

    const materials = ['zinc', 'brass']
    materials.forEach(material => {
        removeVanillaMetalurgy(e, 'create', material)
    });

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
    e.remove({ output: 'create:hand_crank' })
    e.shaped('create:hand_crank', ['C  ', 'AAA', '  C'], {
        A: '#minecraft:wooden_slabs', 
        B: '#forge:gears/andesite_alloy',
        C: '#forge:rods/andesite_alloy'
    }).id('gtna:shaped/create/hand_crank')
    e.remove({ output: 'create:precision_mechanism' })

})