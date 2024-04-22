ServerEvents.recipes(e => {
    e.replaceOutput({ output: '#forge:nuggets/aluminum' }, '#forge:nuggets/aluminum', '#forge:nuggets/aluminium')
    e.replaceInput({ input: 'engineersdecor:metal_bar' }, 'engineersdecor:metal_bar', '#forge:plates/steel')

    e.remove({id: 'gtceu:shaped/minecart_steel'})
    e.remove({id: 'engineersdecor:metal_bar'})

    removeBlockNuggetRecipes(e, 'minecraft', 'netherite')
    e.remove({id: '/bloodmagic:.*/.*_netherite_.*/'})


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
    e.remove({id: 'engineersdecor:fluid_barrel'})
    e.shaped('engineersdecor:fluid_barrel', ['BAB', 'BCB', 'BDB'], {
        A: '#forge:rings/steel', 
        B: '#forge:plates/steel',
        C: 'create:fluid_tank',
        D: '#forge:tools/hammers'
    }).id('gtna:edecor/fluid_barrel')
    e.remove({id: 'engineersdecor:metal_rung_ladder'})
    e.shaped('engineersdecor:metal_rung_ladder', ['ADA', 'ABA', 'A A'], {
        A: '#forge:rods/steel', 
        B: '#forge:plates/steel',
        C: 'create:fluid_tank',
        D: '#forge:tools/hammers'
    }).id('gtna:edecor/metal_rung_ladder')
    e.shaped('engineersdecor:metal_rung_steps', ['AB', 'BA', 'AB'], {
        A: '#forge:rings/steel', 
        B: '#forge:plates/steel',
    }).id('gtna:edecor/metal_rung_steps')

})