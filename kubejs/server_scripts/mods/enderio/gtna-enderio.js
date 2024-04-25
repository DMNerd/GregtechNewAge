ServerEvents.recipes(e => {

    const endermats = ['copper_alloy', 'redstone_alloy', 'conductive_alloy', 'energetic_alloy', 'vibrant_alloy', 'pulsating_alloy', 'soularium', 'dark_steel', 'end_steel']
    endermats.forEach(material => {
        removeVanillaMetalurgy(e, 'enderio', material)
    });


})