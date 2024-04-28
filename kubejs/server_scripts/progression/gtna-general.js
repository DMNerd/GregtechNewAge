ServerEvents.recipes(e => {

    e.remove({id: '/bloodmagic:.*/.*_netherite_.*/'})
    e.remove({id: '/utilitarian:utility/.*doors$/'})
    e.remove({id: 'gtceu:shaped/minecart_steel'})
    e.remove({mod: 'moblassos'})
    e.remove({output: 'extendedcrafting:luminessence'})
    e.replaceInput({input: '#railways:internal/nuggets/zinc_nuggets' }, '#railways:internal/nuggets/zinc_nuggets', '#forge:nuggets/zinc')
    e.replaceOutput({ input: 'leatherprocessing:dried_leather',  output: 'minecraft:book'}, 'leatherprocessing:dried_leather', '#forge:binding_material')
    e.replaceOutput({ output: '#forge:nuggets/aluminum' }, '#forge:nuggets/aluminum', '#forge:nuggets/aluminium')
    removeVanillaMetalurgy(e, 'minecraft', 'netherite')

    const laddersToChange = [
        ['create', 'andesite'],
        ['create', 'brass'],
        ['create', 'copper'],
        ['createdeco', 'industrial_iron'],
        ['createdeco', 'iron'],
        ['createdeco', 'zinc'],
        ['enderio', 'dark_steel'], 
    ]
    const barsToChange = [
        ['createdeco', 'andesite'],
        ['createdeco', 'brass'],
        ['createdeco', 'copper'],
        ['createdeco', 'industrial_iron'],
        ['createdeco', 'zinc'],
        ['enderio', 'dark_steel'],
        ['enderio', 'end_steel'],
    ]
    const doorsToChange = [
        ['createdeco', 'andesite'],
        ['createdeco', 'brass'],
        ['createdeco', 'copper'],
        ['createdeco', 'industrial_iron'],
        ['createdeco', 'zinc'],
        ['enderio', 'dark_steel'],
    ]
    barsToChange.forEach(bar => {
        hardenBarsRecipes(e, bar[0], bar[1])
    });
    laddersToChange.forEach(ladder => {
        hardenMetalLadderRecipes(e, ladder[0], ladder[1])
    });
    doorsToChange.forEach(door => {
        hardenMetalDoorRecipes(e, door[0], door[1])
    });
    e.replaceInput({id: '/create:.*/andesite_door/' }, '#minecraft:wooden_doors', 'createdeco:andesite_door')
    e.replaceInput({id: '/create:.*/brass_door/' }, '#minecraft:wooden_doors', 'createdeco:brass_door')
    e.replaceInput({id: '/create:.*/copper_door/' }, '#minecraft:wooden_doors', 'createdeco:copper_door')
    e.replaceInput({id: '/create:.*/train_door/' }, '#minecraft:wooden_doors', 'minecraft:iron_door')
    e.replaceInput({id: '/create:.*/train_trapdoor/' }, '#minecraft:wooden_trapdoors', 'minecraft:iron_trapdoor')

    removeVanillaMetalurgy(e, 'createdeco', 'industrial_iron')
    removeVanillaMetalurgy(e, 'createdeco', 'netherite')
    removeVanillaMetalurgy(e, 'minecraft', 'copper')

    e.replaceInput({ id: '/design_decor:item_application/industrial_gear.*/' }, '#forge:storage_blocks/wrought_iron', '#forge:double_plates/wrought_iron')
    e.replaceInput({ id: '/design_decor:stonecutting/.*sign$/' }, '#forge:nuggets/zinc', '#forge:plates/zinc')
    e.replaceInput({input: 'create:industrial_iron_block' }, 'create:industrial_iron_block', '#forge:storage_blocks/wrought_iron')
    e.replaceInput({input: 'createdeco:industrial_iron_ingot' }, 'createdeco:industrial_iron_ingot', '#forge:ingots/wrought_iron')
    e.replaceInput({input: 'createdeco:industrial_iron_nugget' }, 'createdeco:industrial_iron_nugget', '#forge:nuggets/wrought_iron')
    e.replaceInput({input: 'createdeco:industrial_iron_sheet' }, 'createdeco:industrial_iron_sheet', '#forge:plates/wrought_iron')
    e.replaceInput({mod: 'createdeco' }, '#forge:sheets/brass', '#forge:plates/brass')

    e.remove({id: '/vintagedelight:salt_block.*/'})
    e.remove({id: 'platforms:wrench'})
    e.remove({id: 'vintagedelight:oat_bread'})
    e.replaceInput({id: 'platforms:platform' }, 'minecraft:iron_ingot', '#forge:plates/steel')
    e.replaceInput({id: 'platforms:wrench' }, '#forge:rods/metal', '#forge:rods/steel')
    e.replaceInput({id: 'platforms:wrench' }, 'minecraft:iron_ingot', '#forge:plates/steel')
    e.replaceInput({id: 'vintagedelight:salt_from_smelting' }, 'minecraft:water_bucket', 'gtceu:salt_water_bucket')
    e.replaceInput({input: '/.*:.*cheese.*slice$/' }, '/.*:.*cheese.*slice$/', '#forge:cheeses')
    e.replaceInput({mod: 'farmersdelight' }, 'vintagedelight:salt', '#forge:dusts/salt')
    replaceMetalTagsInCrafting(e, 'vintagedelight', 'salt')

    //e.remove({ id: "simplemagnets:basicmagnet" });
    //e.shapeless("gtceu:lv_item_magnet", "simplemagnets:basicmagnet").id('gtna:basic_magnet')
    //e.remove({ output: "simplemagnets:advancedmagnet" });
    //e.shapeless("gtceu:hv_item_magnet", "simplemagnets:advancedmagnet").id('gtna:advanced_magnet')

    e.remove({id: "simplemagnets:advanced_demagnetization_coil"})
    e.remove({id: "simplemagnets:basic_demagnetization_coil"})

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
        A: '#forge:bolts/brass', 
        B: 'leatherprocessing:dried_leather',
        C: '#forge:string'
    }).id('gtna:toolbelt/toolbelt_pouch')
    e.remove({id: 'toolbelt:belt'})
    e.shaped('toolbelt:belt', ['CBC', 'B B', 'DED'], {
        B: 'leatherprocessing:dried_leather',
        C: '#forge:string',
        D: 'toolbelt:pouch',
        E: '#forge:rings/gold'
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

    
    hardenWoodenRecipes(e, 'framedblocks', 'framed')
    hardenLadderRecipes(e, 'framedblocks', 'framed')
    e.remove({id : 'framedblocks:framed_cube' })
    e.shaped('framedblocks:framed_cube', ['BAB', 'ACA', 'BAB'], {
        A: '#forge:rods/wood', 
        B: '#minecraft:planks',
        C: 'gtceu:wood_frame'
    })
    e.remove({id : 'framedblocks:framed_chest' })
    e.shaped('framedblocks:framed_chest', ['AAA', 'ABA', 'AAA'], {
        A: 'framedblocks:framed_cube', 
        B: 'minecraft:chest'
    })

    e.remove({ id: '/morered:red_alloy_ingot.*/' })
    e.replaceInput({ mod: 'morered' }, 'minecraft:quartz', '#forge:plates/nether_quartz')
    e.replaceInput({ mod: 'morered' }, 'minecraft:redstone', 'morered:red_alloy_wire')
    e.shaped('computercraft:printed_book', ['BCB', 'ADA'], {
        A: '#forge:string', 
        B: '#forge:binding_material',
        C: 'computercraft:printed_page',
        D: 'gtceu:sticky_resin'
    })

})