ServerEvents.recipes(e => {
    e.replaceInput({ id: 'littlelogistics:vessel_charger'}, 'minecraft:redstone_block', '#forge:plates/red_alloy')
    e.replaceInput({ id: 'littlelogistics:vessel_charger'}, 'minecraft:iron_ingot', 'gtceu:copper_quadruple_wire')
    e.replaceInput({ id: 'littlelogistics:vessel_charger'}, 'minecraft:gold_ingot', '#forge:plates/copper_alloy')


    e.remove({id: 'littlelogistics:spring'})
    e.shaped('littlelogistics:spring', [' C ', 'ABA'], {
        A: '#forge:rings/steel',
        B: '#forge:springs/steel',
        C: '#forge:tools/wrenches'  
    }).id('gtna/littlelogistics/spring')
    e.remove({id: 'littlelogistics:barge'})
    e.shaped('littlelogistics:barge', [' E ', 'DCD', 'AAA'], {
        A: '#forge:plates/black_steel',
        C: '#forge:chests',
        D: '#forge:rods/steel',
        E: '#forge:tools/hammers'
        
    }).id('gtna/littlelogistics/barge')
    e.remove({id: 'littlecontraptions:contraption_barge'})
    e.shaped('littlecontraptions:contraption_barge', [' E ', 'DCD', 'AAA'], {
        A: '#forge:plates/black_steel',
        C: '#forge:storage_blocks/andesite_alloy',
        D: '#forge:rods/steel',
        E: '#forge:tools/hammers'
        
    }).id('gtna/littlecontraptions/contraption__barge')
    e.remove({id: 'littlelogistics:barrel_barge'})
    e.shaped('littlelogistics:barrel_barge', [' E ', 'DCD', 'AAA'], {
        A: '#forge:plates/black_steel',
        C: '#forge:barrels',
        D: '#forge:rods/steel',
        E: '#forge:tools/hammers'
        
    }).id('gtna/littlelogistics/barrel_barge')
    e.remove({id: 'littlelogistics:fishing_barge'})
    e.shaped('littlelogistics:fishing_barge', [' E ', 'DCD', 'AAA'], {
        A: '#forge:plates/black_steel',
        C: '#forge:tools/fishing_rods',
        D: '#forge:rods/steel',
        E: '#forge:tools/hammers'
        
    }).id('gtna/littlelogistics/fishing_barge')
    e.remove({id: 'littlelogistics:fluid_barge'})
    e.shaped('littlelogistics:fluid_barge', [' E ', 'DCD', 'AAA'], {
        A: '#forge:plates/black_steel',
        C: 'create:fluid_tank',
        D: '#forge:rods/steel',
        E: '#forge:tools/hammers'
        
    }).id('gtna/littlelogistics/fluid_barge')
    e.remove({id: 'littlelogistics:seater_barge'})
    e.shaped('littlelogistics:seater_barge', [' E ', 'DCD', 'AAA'], {
        A: '#forge:plates/black_steel',
        C: '#create:seats',
        D: '#forge:rods/steel',
        E: '#forge:tools/hammers'
        
    })
    e.remove({id: 'littlelogistics:vacuum_barge'})
    e.shaped('littlelogistics:vacuum_barge', [' E ', 'DCD', 'AAA'], {
        A: '#forge:plates/black_steel',
        C: 'gtceu:lv_item_collector',
        D: '#forge:rods/steel',
        E: '#forge:tools/hammers'
        
    }).id('gtna/littlelogistics/vacuum_barge')
    e.remove({id: 'littlelogistics:seater_car'})
    e.shaped('littlelogistics:seater_car', [' C ', 'ADA', 'ABA'], {
        A: '#forge:plates/black_steel',
        B: 'minecraft:minecart',
        C: '#forge:tools/hammers',
        D: '#create:seats'
    }).id('gtna/littlelogistics/seater_car')
    e.remove({id: 'littlelogistics:fluid_car'})
    e.shaped('littlelogistics:fluid_car', ['A', 'B'], {
        A: 'create:fluid_tank',
        B: 'littlelogistics:seater_car',
    }).id('gtna/littlelogistics/fluid_car')
    e.remove({id: 'littlelogistics:steam_locomotive'})
    e.shaped('littlelogistics:steam_locomotive', ['DDE', 'DDC', 'BAB'], {
        A: '#forge:plates/black_steel',
        B: 'gtceu:steel_minecart_wheels',
        C: 'gtceu:hp_steam_solid_boiler',
        D: 'create:fluid_tank',
        E: '#forge:tools/hammers'
    }).id('gtna/littlelogistics/steam_locomotive')
    e.remove({id: 'littlelogistics:energy_locomotive'})
    e.shaped('littlelogistics:energy_locomotive', ['AEA', 'CDC', 'BAB'], {
        A: '#forge:plates/black_steel',
        B: 'gtceu:steel_minecart_wheels',
        C: 'gtceu:mv_electric_motor',
        D: 'gtceu:mv_voltage_coil',
        E: 'littlelogistics:vessel_charger'
    }).id('gtna/littlelogistics/energy_locomotive')
    e.remove({id: 'littlelogistics:steam_tug'})
    e.shaped('littlelogistics:tug', ['DE ', 'DAC', 'AAA'], {
        A: '#forge:plates/black_steel',
        C: 'gtceu:hp_steam_solid_boiler',
        D: 'create:fluid_tank',
        E: '#forge:tools/hammers'
    }).id('gtna/littlelogistics/steam_tug')
    e.remove({id: 'littlelogistics:energy_tug'})
    e.shaped('littlelogistics:energy_tug', [' E ', 'CDC', 'AAA'], {
        A: '#forge:plates/black_steel',
        C: 'gtceu:mv_electric_motor',
        D: 'gtceu:mv_voltage_coil',
        E: 'littlelogistics:vessel_charger'
    }).id('gtna/littlelogistics/energy_tug')
})