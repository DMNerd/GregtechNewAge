ServerEvents.recipes(e => {

    function addTank(tier, material){
        e.remove({id: 'portabletanks:' + tier + '_portable_tank'})
        e.shaped('portabletanks:' + tier + '_portable_tank', ['CDC', 'BAB', 'FDE'], {
            A: 'create:fluid_tank', 
            B: '#forge:glass_panes',
            C: '#forge:screws/' + material,
            D: '#forge:double_plates/' + material,
            E: '#forge:tools/screwdrivers',
            F: '#forge:tools/hammers'
        }).id('gtna:shaped/portable_tanks/' + tier)
        e.recipes.gtceu.assembler('gtna:gtceu/assembler/portable_tank_' + tier)
            .itemInputs(['create:fluid_tank', '#forge:double_plates/' + material])
            .inputFluids(Fluid.of('gtceu:glass', 144))
            .itemOutputs('portabletanks:' + tier + '_portable_tank')
            .circuit(4)
            .duration(120)
            .EUt(GTValues.V[GTValues.LV])
    }
    addTank('basic', 'iron') 
    addTank('advanced', 'gold') 
    addTank('expert', 'diamond') 
    addTank('ultimate', 'netherite') 
})