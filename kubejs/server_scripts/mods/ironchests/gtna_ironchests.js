ServerEvents.recipes(e => {

    const materials =[
        ["copper", "double_plates", "copper", 'flint'],
        ["iron", "double_plates", "iron", 'copper'],
        ["gold", "double_plates", "gold", 'iron'],
        ["diamond", "dense_plates", "diamond", 'gold'],
        ["obsidian", "dense_plates", "diamond", 'diamond'],
        ["netherite", "dense_plates", "netherite", 'diamond'],
    ]
    
    function ironchestrecipe(material){
        e.remove({output: 'ironchests:' + material[0] + '_chest'})
        e.shaped('ironchests:' + material[0] + '_chest', ['BAB', 'ACA', 'DAE'], {
            A: '#forge:' + material[1] + '/' + material[0], 
            B: '#forge:screws/' + material[2] ,
            C: '#forge:chests',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers'
        }).id('gtna/ironchests/chest_' + material[0])
        e.remove({output: 'ironchests:' + material[0] + '_barrel'})
        e.shaped('ironchests:' + material[0] + '_barrel', ['BAB', 'ACA', 'DAE'], {
            A: '#forge:' + material[1] + '/' + material[0],
            B: '#forge:screws/' + material[2],
            C: '#forge:barrels',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers'
        }).id('gtna/ironchests/barrel_' + material[0])
        e.recipes.gtceu.assembler('gtna:gtceu/assembler/ironchests_' + material[0] + '_chest')
            .itemInputs(['#forge:chests', '4x #forge:' + material[1] + '/' + material[0]])
            .itemOutputs('ironchests:' + material[0] + '_chest')
            .circuit(2)
            .duration(1560)
            .EUt(GTValues.V[GTValues.MV])
        e.recipes.gtceu.assembler('gtna:gtceu/assembler/ironchests_' + material[0] + '_barrel')
            .itemInputs(['#forge:barrels', '4x #forge:' + material[1] + '/' + material[0]])
            .itemOutputs('ironchests:' + material[0] + '_barrel')
            .circuit(2)
            .duration(1560)
            .EUt(GTValues.V[GTValues.MV])
    }
    function upgraderecipe(material){
        e.remove({output: 'ironchests:' + material[0] + '_chest_upgrade'})
        e.shaped('ironchests:' + material[0] + '_chest_upgrade', ['BAB', 'ACA', 'DAE'], {
            A: '#forge:' + material[1] + '/' + material[0], 
            B: '#forge:screws/' + material[2] ,
            C: '#ironchests:upgrades/' + material[3],
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers'
        }).id('gtna/ironchests/chest_upgrade_' + material[0])
        e.recipes.gtceu.assembler('gtna:gtceu/assembler/ironchests_' + material[0] + '_chest_upgrade')
            .itemInputs(['#forge:plates/' + material[3], '2x #forge:' + material[1] + '/' + material[0]])
            .itemOutputs('ironchests:' + material[0] + '_chest_upgrade')
            .circuit(2)
            .duration(1400)
            .EUt(GTValues.V[GTValues.MV])
    }

    e.remove({output: 'ironchests:crystal_chest'})
    e.shaped('ironchests:crystal_chest', ['BAB', 'ACA', 'DAE'], {
        A: '#forge:dense_plates/amethyst', 
        B: '#forge:screws/amethyst',
        C: 'ironchests:diamond_chest',
        D: '#forge:tools/hammers',
        E: '#forge:tools/screwdrivers'
    }).id('gtna/ironchests/chest_crystal')
    e.remove({output: 'ironchests:crystal_barrel'})
    e.shaped('ironchests:crystal_barrel', ['BAB', 'ACA', 'DAE'], {
        A: '#forge:dense_plates/amethyst', 
        B: '#forge:screws/amethyst',
        C: 'ironchests:diamond_barrel',
        D: '#forge:tools/hammers',
        E: '#forge:tools/screwdrivers'
    }).id('gtna/ironchests/barrel_crystal')
    e.recipes.gtceu.assembler('gtna:gtceu/assembler/ironchests_crystal_chest')
        .itemInputs(['ironchests:diamond_chest', '4x #forge:dense_plates/amethyst'])
        .itemOutputs('ironchests:crystal_chest')
        .circuit(2)
        .duration(1300)
        .EUt(GTValues.V[GTValues.HV])
    e.recipes.gtceu.assembler('gtna:gtceu/assembler/ironchests_crystal_barrel')
        .itemInputs(['ironchests:diamond_barrel', '4x #forge:dense_plates/amethyst'])
        .itemOutputs('ironchests:crystal_barrel')
        .circuit(2)
        .duration(1300)
        .EUt(GTValues.V[GTValues.HV])
    e.remove({output: 'ironchests:crystal_chest_upgrade'})
    e.shaped('ironchests:crystal_chest_upgrade', ['BAB', 'ACA', 'DAE'], {
        A: '#forge:dense_plates/amethyst', 
        B: '#forge:screws/amethyst' ,
        C: '#ironchests:upgrades/diamond',
        D: '#forge:tools/hammers',
        E: '#forge:tools/screwdrivers'
    }).id('gtna/ironchests/chest_upgrade_crystal')
    e.recipes.gtceu.assembler('gtna:gtceu/assembler/ironchests_crystal_chest_upgrade')
        .itemInputs(['#forge:plates/diamond', '2x #forge:dense_plates/amethyst'])
        .itemOutputs('ironchests:crystal_chest_upgrade')
        .circuit(2)
        .duration(1400)
        .EUt(GTValues.V[GTValues.MV])

    const dollies = ['iron', 'diamond']
    dollies.forEach(dolly => {
        e.remove({output: 'ironchests:' + dolly + '_dolly'})
        e.shaped('ironchests:' + dolly + '_dolly', ['CB ', 'CBD', 'EAA'], {
            A: '#forge:plates/' + dolly, 
            B: '#forge:rods/' + dolly,
            C: '#forge:plates/rubber',
            D: '#forge:tools/wrenches',
            E: 'gtceu:iron_minecart_wheels'
        }).id('gtna/ironchests/dolly/' + dolly)
    });


    materials.forEach(material => {
        ironchestrecipe(material)
        upgraderecipe(material)
    });
})