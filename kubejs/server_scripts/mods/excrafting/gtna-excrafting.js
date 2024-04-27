ServerEvents.recipes(e => {
    const excrafting = e.recipes.extendedcrafting;

    const materials = ['black_iron', 'redstone', 'enhanced_redstone', 'ender', 'enhanced_ender', 'crystaltine']

    materials.forEach(material => {
        removeVanillaMetalurgy(e, 'extendedcrafting', material)
    });
    replaceMetalTagsInCrafting(e, 'extendedcrafting', 'crystaltine')
    excrafting.shaped_table("2x gtceu:crystaltine_ingot", ['DLLLLLD', 'DGINIGD', 'DGINIGD', 'DLLLLLD'], {D: '#forge:plates/diamond', L: '#forge:plates/lapis', N: '#forge:plates/nether_star', I: '#forge:double_plates/iron', G: '#forge:double_plates/iron'}).tier(4).id('gtna:excrafting/crystaltine');

})