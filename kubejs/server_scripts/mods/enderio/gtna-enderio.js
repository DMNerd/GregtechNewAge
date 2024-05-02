ServerEvents.recipes(e => {
    e.replaceInput({input: '#forge:silicon' }, '#forge:silicon', '#forge:ingots/silicon')

    e.replaceInput({output: 'enderio:void_chassis' }, 'enderio:grains_of_infinity', 'enderio:basic_capacitor')
    e.replaceInput({output: 'enderio:void_chassis' }, 'minecraft:iron_ingot', '#forge:plates/steel')
    e.replaceInput({output: 'enderio:void_chassis' }, 'minecraft:iron_bars', 'gtceu:dark_steel_frame')
    
    e.replaceInput({output: 'enderio:ensouled_chassis' }, 'minecraft:quartz', 'enderio:double_layer_capacitor')
    e.replaceInput({output: 'enderio:ensouled_chassis' }, 'gtceu:soularium_ingot', '#forge:plates/soularium')
    e.replaceInput({output: 'enderio:ensouled_chassis' }, 'enderio:soul_chain', 'gtceu:soularium_frame')
    
    const endermats = ['copper_alloy', 'redstone_alloy', 'conductive_alloy', 'energetic_alloy', 'vibrant_alloy', 'pulsating_alloy', 'soularium', 'dark_steel', 'end_steel']
    endermats.forEach(material => {
        removeVanillaMetalurgy(e, 'enderio', material)
    });

    e.remove({output: /enderio:.*capacitor/})
    e.remove({id: /enderio:.*gear.*/})
})