ServerEvents.recipes(e => {

    e.replaceInput({ mod: 'create' }, 'minecraft:dried_kelp_block', '#forge:storage_blocks/polytetrafluoroethylene')

    e.replaceInput({ mod: 'create_new_age' }, 'create_new_age:copper_circuit', '#gtceu:circuits/lv')
    e.replaceInput({ id: '/create_new_age:.*/', input:  'minecraft:iron_nugget'}, 'minecraft:iron_nugget', '#forge:rods/iron')
    e.replaceInput({ id: '/create_new_age:.*/', input:  'create_new_age:radioactive_thorium'}, 'create_new_age:radioactive_thorium', '#forge:pure_dusts/plutonium')
    e.replaceInput({ id: '/create_new_age/shaped/.*/' }, '#forge:ingots/magnetic_iron', '#forge:plates/magnetic_iron')
    e.replaceInput({ id: '/create_new_age/shaped/.*/' }, '#forge:ingots/magnetic_gold', '#forge:plates/magnetic_gold')

    e.remove({ mod: 'create_new_age', id: '/create_new_age:energising/gold.*/' })
    e.remove({ mod: 'create_new_age', id: '/create_new_age:energising/iron.*/' })
    e.remove({ mod: 'create_new_age', id: '/create_new_age:.*circuit/' })
    
    e.remove({ id: '/create_new_age:energising/gold.*/' })


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
        C: '#forge:rings/copper',
        D: '#forge:tools/wrench',
        E: '#forge:tools/screwdrivers'
    }).id('gtna:shaped/create/basic_fluid_tank')
    e.shaped('railways:fuel_tank', ['BCB', 'DAE', 'BCB'], {
        A: 'gtceu:tempered_glass', 
        B: '#forge:screws/brass',
        C: '#forge:plates/obsidian', 
        D: '#forge:tools/wrench',
        E: '#forge:tools/screwdrivers'
    }).id('gtna:shaped/railways/basic_fuel_tank')



})