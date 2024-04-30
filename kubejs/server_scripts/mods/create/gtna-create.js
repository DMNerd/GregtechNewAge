ServerEvents.recipes(e => {

    e.replaceInput({ mod: 'create' }, 'minecraft:dried_kelp_block', '#forge:storage_blocks/polytetrafluoroethylene')
    e.replaceInput({ mod: 'create' }, 'minecraft:copper_block', 'gtceu:steam_machine_casing')
    e.replaceInput({ id: '/createapplied.*:.*silicon/' }, '#forge:dusts/silicon', '#forge:plates/silicon')
    e.replaceInput({ id: '/createapplied.*:.*processor_print$/' }, '#ae2:all_certus_quartz', '#forge:plates/certus_quartz')
    e.replaceInput({ id: '/createapplied.*:.*processor_print$/' }, 'minecraft:diamond', '#forge:plates/diamond')

    e.replaceInput({ mod: 'create_new_age' }, 'create_new_age:copper_circuit', '#gtceu:circuits/lv')
    e.replaceInput({ mod: 'create_new_age' }, 'minecraft:redstone_block', '#forge:double_plates/redstone_alloy')
    e.replaceInput({ id: '/create_new_age:.*/', input:  'minecraft:iron_nugget'}, 'minecraft:iron_nugget', '#forge:rods/iron')
    e.replaceInput({ id: '/create_new_age:shaped/.*/' }, '#forge:ingots/magnetic_iron', '#forge:plates/magnetic_iron')
    e.replaceInput({ id: '/create_new_age:shaped/.*/' }, '#forge:ingots/magnetic_gold', '#forge:plates/magnetic_gold')
    e.replaceInput({ id: '/create_new_age:shaped/.*/' }, 'minecraft:netherite_scrap', '#forge:plates/netherite')
    e.replaceInput({ id: '/create_new_age:thorium/.*/' }, '#forge:plates/iron', '#forge:plates/lead')
    e.replaceInput({ id: '/create_new_age:thorium/.*/' }, '#forge:plates/iron', '#forge:plates/lead')
    e.replaceInput({ id: '/create_new_age:reactor/.*/' }, '#forge:plates/gold', '#forge:plates/lead')

    e.replaceInput({ id: '/create:.*steam_engine$/' }, '#forge:plates/gold', '#forge:plates/andesite_alloy')
    e.replaceInput({ id: '/create:.*steam_engine$/' }, '#forge:ingots/andesite_alloy', '#forge:pistons')
    e.replaceInput({ id: 'create:crafting/kinetics/hand_crank' }, '#forge:ingots/andesite_alloy', '#forge:rods/andesite_alloy')
    e.replaceInput({ id: 'create:crafting/kinetics/hand_crank' }, '#minecraft:planks', '#minecraft:wooden_slabs')

    e.replaceInput({ id: '/create_connected:crafting/palettes/copycat.*/' }, '#forge:ingots/zinc', '#forge:double_plates/zinc')

    e.remove({ mod: 'create_new_age', id: '/create_new_age:energising/gold.*/' })
    e.remove({ mod: 'create_new_age', id: '/create_new_age:energising/iron.*/' })
    e.remove({ mod: 'create_new_age', id: '/create_new_age:energising/diamond.*/' })
    e.remove({ mod: 'create_new_age', id: '/create_new_age:.*circuit/' })
    e.remove({ mod: 'create_new_age', output: '/create_new_age:radioactive_thorium/' })

    e.remove({ output: 'create_new_age:nuclear_fuel' })
    e.remove({ id: '/create_new_age:energising/gold.*/' })
    e.remove({ id: '/createapplied.*:.*processor$/' })

    const materials = ['zinc', 'brass']
    materials.forEach(material => {
        removeVanillaMetalurgy(e, 'create', material)
    });
    const woodtypes = ['smoked', 'rose', 'spirit', 'rubber']
    woodtypes.forEach(wood => {
        hardenWoodenRecipes(e, 'create_dd', wood)
        hardenPPRecipes(e, 'create_dd', wood)
        hardenButtonRecipes(e, 'create_dd', wood)
    });
    const ddmaterials = ['bronze', 'chromatic', 'mithril', 'lapis_alloy', 'shadow_steel']
    ddmaterials.forEach(material => {
        replaceMetalTagsInCrafting(e, 'create_dd', material)
        removeVanillaMetalurgy(e, 'create_dd', material)
    });
    e.remove({id: 'create_dd:smoking/rubber' })
    e.remove({output: 'create:chromatic_compound' })
    e.remove({output: 'create_dd:copycat_block' })
    e.replaceInput({ id: 'create_dd:spectral_ruby' }, 'minecraft:amethyst_shard', '#forge:gems/ruby')
    e.replaceInput({ input: 'create_dd:chromatic_compund' }, 'create_dd:chromatic_compund', '#forge:ingots/chromatic')
    e.replaceOutput({id: 'create_dd:mixing/chromatic_compound'}, 'gtceu:chromatic_ingot', 'gtceu:chromatic_dust')
    e.replaceOutput({id: 'create_dd:mixing/raw_rubber'}, 'create_dd:raw_rubber', 'gtceu:sticky_resin')
    e.replaceOutput({output: 'create_dd:shadow_steel'}, 'create_dd:shadow_steel', '#forge:ingots/shadow_steel')

    e.shapeless('4x create:experience_nugget',['oreberriesreplanted:essence_berry']).id('gtna:shapeless/create/essenceberry_conversion')
    
    e.remove({ id: '/create:industrial_iron_block.*_stonecutting$/' })
    e.remove({id: 'create:crafting/kinetics/shaft'})
    e.replaceInput({ id: 'create:cutting/andesite_alloy' }, '#forge:ingots/andesite_alloy', '#forge:rods/long/andesite_alloy')
    e.shaped('8x create:shaft', ['B', 'A', 'A'], {
        A: '#forge:rods/long/andesite_alloy', 
        B: '#forge:tools/hammers'
    }).id('gtna:shaped/create_shaft')

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

})