ServerEvents.recipes(e => {


    const component_recipe = [
        ['megacells:cell_component_1m', 'ae2:cell_component_256k', '2x ', '4x ', GTValues.IV ]
    ]

    e.replaceInput({id: '/gregi.*:.*/' }, 'ae2:sky_dust', 'gtceu:pure_skystone_dust')
    e.replaceInput({id: '/megacells:mega_mana.*/' }, 'ae2:sky_dust', '#forge:screws/titanium')
    e.replaceInput({id: '/appbot:mana.*/' }, 'botania:manasteel_ingot', '#forge:plates/manasteel')

    e.remove({ mod: 'aeinfinitybooster' })
    e.remove({ id: '/megacells:inscriber/.*accum.*/' })

    const sizes = ['1m', '4m', '16m', '64m', '256m']
    sizes.forEach(size => {
        e.remove({ id: 'megacells:cells/standard/item_storage_cell_' + size })
        e.shaped('megacells:item_storage_cell_' + size, ['ECF', 'BDB', 'AAA'], {
            A: '#forge:plates/sky_steel', 
            B: '#forge:screws/titanium',
            C: 'ae2:quartz_vibrant_glass',
            D: 'megacells:cell_component_' + size,
            E: '#forge:tools/screwdrivers',
            F: '#forge:tools/wrench'
        }).id('gtna:megacells/cell/' + size)
    });

    component_recipe.forEach(recipe => {
        e.recipes.gtceu.assembler(recipe[0])
            .itemInputs(['4x ' + recipe[1], recipe[2] + 'megacells:accumulation_processor', recipe[3] + '#forge:fine_wires/pfstalloy'])
            .inputFluids(Fluid.of('gtceu:redstone_alloy', 144))
            .itemOutputs(recipe[0])
            .duration(600)
            .EUt(GTValues.V[recipe[4]])
    });


    e.replaceInput({id: '/ae2insertexport_card:.*/' }, 'minecraft:redstone_block', 'gtceu:redstone_alloy_plate')
    
    e.remove({ id: 'megacells:cells/mega_item_cell_housing' })
    e.shaped('megacells:mega_item_cell_housing', ['ECF', 'B B', 'AAA'], {
        A: '#forge:plates/sky_steel', 
        B: '#forge:screws/titanium',
        C: 'ae2:quartz_vibrant_glass',
        E: '#forge:tools/screwdrivers',
        F: '#forge:tools/wrench'
    }).id('gtna:megacells/mega_item_cell_housing')
})