ServerEvents.recipes(e => {

    const woodtypes = ['glacian', 'aeronos', 'strophar']
    woodtypes.forEach(wood => {
        hardenWoodenRecipes(e, 'ad_astra', wood)
    });
    const redstone = ['glacian', 'calorite', 'ostrum', 'iron_plating', 'steel_plating']
    redstone.forEach(material => {
        hardenPPRecipes(e, 'ad_astra', material)
        hardenButtonRecipes(e, 'ad_astra', material)
    });
    hardenLadderRecipes(e, 'ad_astra', 'aeronos')
    hardenLadderRecipes(e, 'ad_astra', 'strophar')

    e.remove({ id: '/ad_astra:steel_ingot.*/' })
    e.remove({ id: '/ad_astra_rocketed:nasa_workbench.*/' })

    e.remove({ id: 'ad_astra:nasa_workbench' })
    e.shaped('ad_astra:nasa_workbench', ['AAA', 'BCB', 'EDE'], {
        A: 'gtceu:hv_robot_arm', 
        B: '#gtceu:circuits/iv',
        C: 'computercraft:monitor_normal',
        D: 'gtceu:hv_assembler',
        E: 'gtceu:solid_machine_casing'
    })
    e.replaceInput({ id: 'ad_astra_giselle_addon:crafting/automation_nasa_workbench' }, '#ad_astra:steel_plates', 'gtceu:assembly_line_casing')
    e.replaceInput({ id: 'ad_astra_giselle_addon:crafting/automation_nasa_workbench' }, 'minecraft:redstone', '#gtceu:circuits/iv')
    e.replaceInput({ id: 'ad_astra_giselle_addon:crafting/automation_nasa_workbench' }, 'minecraft:hopper', 'gtceu:iv_coneyor_module')

})