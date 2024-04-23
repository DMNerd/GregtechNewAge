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
        E: '#forge:rings/steel'
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