ServerEvents.recipes(e => {
    e.replaceOutput({ output: '#forge:nuggets/aluminum' }, '#forge:nuggets/aluminum', '#forge:nuggets/aluminium')

    e.remove({id: 'gtceu:shaped/minecart_steel'})

    removeBlockNuggetRecipes(e, 'minecraft', 'netherite')
    e.remove({id: '/bloodmagic:.*/.*_netherite_.*/'})

    const bars_tochange = [
        ['createdeco', 'andesite'],
        ['createdeco', 'brass'],
        ['createdeco', 'copper'],
        ['createdeco', 'zinc'],
        ['createdeco', 'industrial_iron'],
        ['enderio', 'dark_steel'],
        ['enderio', 'end_steel'],
    ]
    bars_tochange.forEach(bar => {
        hardenBarsRecipes(e, bar[0], bar[1])
    });
    removeBlockNuggetRecipes(e, 'createdeco', 'industrial_iron')
    e.replaceInput({input: 'createdeco:industrial_iron_ingot' }, 'createdeco:industrial_iron_ingot', '#forge:ingots/wrought_iron')
    e.replaceInput({input: 'createdeco:industrial_iron_nugget' }, 'createdeco:industrial_iron_nugget', '#forge:nuggets/wrought_iron')
    e.replaceInput({input: 'createdeco:industrial_iron_sheet' }, 'createdeco:industrial_iron_sheet', '#forge:plates/wrought_iron')
    e.replaceInput({input: 'create:industrial_iron_block' }, 'create:industrial_iron_block', '#forge:storage_blocks/wrought_iron')
    e.replaceInput({mod: 'createdeco' }, '#forge:sheets/brass', '#forge:plates/brass')
    
    e.replaceInput({mod: 'platforms' }, '#forge:rods/metal', '#forge:rods/steel')
    e.replaceInput({id: 'platforms:platform' }, 'minecraft:iron', '#forge:plates/steel')
    e.remove({id: 'platforms:wrench'})

    e.remove({id: 'minecraft:bread'})
    e.remove({id: 'vintagedelight:oat_bread'})


    //e.remove({ id: "simplemagnets:basicmagnet" });
    //e.shapeless("gtceu:lv_item_magnet", "simplemagnets:basicmagnet").id('gtna:basic_magnet')
    //e.remove({ output: "simplemagnets:advancedmagnet" });
    //e.shapeless("gtceu:hv_item_magnet", "simplemagnets:advancedmagnet").id('gtna:advanced_magnet')

    e.remove({id: "simplemagnets:basic_demagnetization_coil"})
    e.remove({id: "simplemagnets:advanced_demagnetization_coil"})

    e.replaceInput({ id: 'travelersbackpack:hose' }, '#forge:dyes/green', 'gtceu:polytetrafluoroethylene_tiny_fluid_pipe')
    e.replaceInput({ id: 'travelersbackpack:hose_nozzle' }, 'minecraft:gold_ingot', 'gtceu:gold_normal_fluid_pipe')
    e.replaceInput({ id: 'travelersbackpack:hose_nozzle' }, 'minecraft:iron_ingot', '#forge:plates/iron')

    e.remove({ mod: "elevatorid" });
    e.shaped("elevatorid:elevator_gray", ["PPP", "GFG", "PPP"], {
        P: "#forge:plates/steel",
        G: "#forge:small_gears/steel",
        F: "#forge:frames/steel",
    }).id('gtna:steel_elevator')
    e.remove({id: 'toolbelt:pouch'})
    e.shaped('toolbelt:pouch', ['A A', 'B B', 'CBC'], {
        A: '#forge:bolts/gold', 
        B: 'leatherprocessing:dried_leather',
        C: '#forge:string'
    }).id('gtna:toolbelt/toolbelt_pouch')
    e.remove({id: 'toolbelt:belt'})
    e.shaped('toolbelt:belt', ['CBC', 'B B', 'DED'], {
        B: 'leatherprocessing:dried_leather',
        C: '#forge:string',
        D: 'toolbelt:pouch',
        E: '#forge:rings/brass'
    }).id('gtna:toolbelt/toolbelt_belt')
    e.remove({id: 'travelersbackpack:standard'})
    e.shaped('travelersbackpack:standard', ['BDB', 'CAC', 'FEF'], {
        A: 'ironchests:iron_chest', 
        B: 'leatherprocessing:dried_leather',
        C: 'create:fluid_tank',
        D: '#forge:plates/aluminium',
        E: '#travelersbackpack:sleeping_bags',
        F: 'toolbelt:pouch'
    }).id('gtna:travelersbackpack/standard')


})