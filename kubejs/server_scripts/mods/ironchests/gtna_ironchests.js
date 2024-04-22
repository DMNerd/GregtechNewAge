ServerEvents.recipes(e => {

    const materials =[
        ["copper", "double_plates", "copper"],
        ["iron", "double_plates", "iron"],
        ["gold", "double_plates", "gold"],
        ["diamond", "dense_plates", "diamond"],
        ["obsidian", "dense_plates", "diamond"],
        ["netherite", "dense_plates", "netherite"],
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
            .itemInputs(['#forge:barrelss', '4x #forge:' + material[1] + '/' + material[0]])
            .itemOutputs('ironchests:' + material[0] + '_barrel')
            .circuit(2)
            .duration(1560)
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

    materials.forEach(material => {
        ironchestrecipe(material)
    });
})