ServerEvents.recipes(e => {

    const materials = ['black_iron', 'redstone', 'enhanced_redstone', 'ender', 'enhanced_ender', 'crystaltine']

    materials.forEach(material => {
        removeVanillaMetalurgy(e, 'extendedcrafting', material)
    });
    replaceMetalTagsInCrafting(e, 'extendedcrafting', 'crystaltine')

})