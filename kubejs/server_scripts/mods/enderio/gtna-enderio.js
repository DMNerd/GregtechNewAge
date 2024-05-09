ServerEvents.recipes(e => {
    e.replaceInput({input: '#forge:silicon' }, '#forge:silicon', '#forge:ingots/silicon')

    e.replaceInput({output: 'enderio:void_chassis' }, 'enderio:grains_of_infinity', 'enderio:basic_capacitor')
    e.replaceInput({output: 'enderio:void_chassis' }, 'minecraft:iron_ingot', '#forge:plates/steel')
    e.replaceInput({output: 'enderio:void_chassis' }, 'minecraft:iron_bars', 'gtceu:dark_steel_frame')
    
    e.replaceInput({output: 'enderio:ensouled_chassis' }, 'minecraft:quartz', 'enderio:double_layer_capacitor')
    e.replaceInput({output: 'enderio:ensouled_chassis' }, 'gtceu:soularium_ingot', '#forge:plates/soularium')
    e.replaceInput({output: 'enderio:ensouled_chassis' }, 'enderio:soul_chain', 'gtceu:soularium_frame')
    e.replaceInput({output: 'enderio:glider_wing' }, '#forge:ingots/dark_steel', '#forge:rods/long/dark_steel')

    const endermats = ['copper_alloy', 'redstone_alloy', 'conductive_alloy', 'energetic_alloy', 'vibrant_alloy', 'pulsating_alloy', 'soularium', 'dark_steel', 'end_steel']
    endermats.forEach(material => {
        removeVanillaMetalurgy(e, 'enderio', material)
    });

    e.remove({ id: "enderio:staff_of_travelling" });
    e.shaped(`enderio:staff_of_travelling`, ["  P", " R ", "R  "], {
      R: "#forge:rods/dark_steel",
      P: "enderio:ender_crystal",
    });
    e.remove({ id: "enderio:travel_anchor" });
    e.shaped(`enderio:travel_anchor`, ["SGS", "GPG", "SGS"], {
      S: "#forge:plates/dark_steel",
      G: "enderio:pulsating_crystal",
      P: "ender_pearl",
    });
    e.remove({output: /enderio:coordinate_selector/})
    e.shaped(`enderio:coordinate_selector`, ["ACA", "BDB", "ACA"], {
      A: "#forge:plates/dark_steel",
      B: "#forge:plates/pulsating_alloy",
      C: "enderio:ender_crystal",
      D: "minecraft:compass"
    });
    e.remove({output: /enderio:vacuum_chest/})
    e.shaped(`enderio:coordinate_selector`, ["ABA", "BCB", "ABA"], {
      A: "#forge:dense_plates/obsidian",
      B: "minecraft:hopper",
      C: "#forge:plates/diamond",
    });

    e.remove({output: /enderio:.*capacitor/})
    e.remove({output: /enderio:.*magnet/})
    e.remove({id: /enderio:.*gear.*/})
    e.remove({output: /enderio:.*conduit/})

})