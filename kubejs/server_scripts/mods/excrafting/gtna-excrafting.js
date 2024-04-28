ServerEvents.recipes(e => {
    const excrafting = e.recipes.extendedcrafting;

    const materials = ['black_iron', 'redstone', 'enhanced_redstone', 'ender', 'enhanced_ender', 'crystaltine', 'luminessence']
    const components = [
        ['basic', 'iron'], 
        ['advanced', 'gold'], 
        ['elite', 'diamond'], 
        ['ultimate', 'emerald'], 
        ['redstone', 'red_alloy'], 
        ['enhanced_redstone', 'redstone_alloy'],
        ['ender', 'end_steel'],
        ['enhanced_ender', 'enderium'],
        ['crystaltine', 'crystaltine'],
    ]

    e.remove({output: 'extendedcrafting:black_iron_slate'})
    e.replaceInput({ mod: 'packagedauto'}, 'minecraft:iron_ingot', '#forge:double_plates/steel')

    materials.forEach(material => {
        removeVanillaMetalurgy(e, 'extendedcrafting', material)
    });
    replaceMetalTagsInCrafting(e, 'extendedcrafting', 'crystaltine')
    excrafting.shaped_table("2x gtceu:crystaltine_ingot", ['DLLLLLD', 'DGINIGD', 'DGINIGD', 'DLLLLLD'], {D: '#forge:plates/diamond', L: '#forge:plates/lapis', N: '#forge:plates/nether_star', I: '#forge:double_plates/iron', G: '#forge:double_plates/iron'}).tier(4).id('gtna:excrafting/crystaltine');

    components.forEach(component => {
        e.replaceInput({ id: 'extendedcrafting:' + component[0] + '_component'}, '/.*:.*(?:ingot|diamond|emerald).*/', '#forge:plates/' + component[1])
        e.replaceInput({ id: 'extendedcrafting:' + component[0] + '_component'}, '#forge:plates/dark_steel', '#forge:double_plates/dark_steel')
    });
})