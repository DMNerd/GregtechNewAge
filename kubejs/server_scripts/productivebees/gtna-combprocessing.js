ServerEvents.recipes(e => {
    
    function combCentrifugeDust(material) {
        e.recipes.gtceu.centrifuge('gtna:gtceu/centrifuge/' + material + '_comb')
        .itemInputs(Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:' + material +'"}}').strongNBT())
        .chancedOutput('gtceu:' + material + '_dust', 9000, 10)
        .outputFluids(Fluid.of('minecraft:honey', 50))
        .circuit(2)
        .duration(240)
        .EUt(80)
	}
    
   
})