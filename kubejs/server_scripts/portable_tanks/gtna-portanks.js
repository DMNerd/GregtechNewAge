ServerEvents.recipes(e => {

    const tiers = [
        ['basic', 'iron'],
        ['advanced', 'gold'],
        ['expert', 'diamond'],
        ['ultimate', 'netherite']

    ]

    function addTank(tier){
        e.remove({id: 'portabletanks:' + tier[0] + '_portable_tank'})
        e.shaped('portabletanks:' + tier[0] + '_portable_tank', ['CDC', 'BAB', 'FDE'], {
            A: 'create:fluid_tank', 
            B: '#forge:glass_panes',
            C: '#forge:screws/' + tier[1],
            D: '#forge:double_plates/' + tier[1],
            E: '#forge:tools/screwdrivers',
            F: '#forge:tools/hammers'
        }).id('gtna:shaped/portable_tanks/' + tier[0])
        e.recipes.gtceu.assembler('gtna:gtceu/assembler/portable_tank_' + tier[0])
            .itemInputs(['create:fluid_tank', '#forge:double_plates/' + tier[1]])
            .inputFluids(Fluid.of('gtceu:glass', 144))
            .itemOutputs('portabletanks:' + tier[0] + '_portable_tank')
            .circuit(4)
            .duration(120)
            .EUt(GTValues.V[GTValues.LV])
    }

    tiers.forEach(tier => {
        addTank(tier)
    });
})