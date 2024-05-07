ServerEvents.recipes(e => {


    e.replaceInput({ mod: 'mechanicalbotania' }, '#forge:ingots/andesite_alloy', '#forge:double_plates/andesite_alloy')
    e.replaceInput({ mod: 'mechanicalbotania' }, 'minecraft:lapis_block', '#forge:plates/manasteel')
    e.replaceInput({ mod: 'mechanicalbotania' }, 'minecraft:redstone', '#morered:red_alloy_wires')
    e.replaceInput({ id: 'botania:mana_pylon' }, '#forge:ingots/manasteel', '#forge:double_plates/manasteel')
    e.replaceInput({ id: 'botania:mana_pylon' }, 'minecraft:gold', '#forge:double_plates/gold')
    e.replaceInput({ id: 'botania:alfheim_portal' }, '#forge:nuggets/terrasteel', '#forge:plates/terrasteel')
    e.remove({id: '/botania:mana_tablet.*/'})
    e.remove({id: '/botania:runic_altar.*/'})

    const botaniaMats = ['manasteel', 'terrasteel', 'elementium']
    botaniaMats.forEach(material => {
        replaceMetalTagsInCrafting(e,'botania', material)
        removeVanillaMetalurgy(e, 'botania', material)
        hardenArmorRecipes(e, 'botania', material)
    });
    e.replaceInput({ id: 'botania:glass_pickaxe' }, 'gtceu:manasteel_ingot', '#forge:plates/manasteel')

    hardenToolRecipes(e, 'botania', 'manasteel', 'botania:livingwood_twig')
    hardenToolRecipes(e, 'botania', 'elementium', 'botania:dreamwood_twig')
    e.replaceInput({ id: 'botania:terra_pick' }, 'botania:terrasteel_ingot', '#forge:plates/terrasteel')

    removeVanillaMetalurgy(e, 'botanicpledge', 'yggdralium')
    removeVanillaMetalurgy(e, 'mythicbotany', 'alfsteel')
    replaceMetalTagsInCrafting(e,'botanicpledge', 'yggdralium')
    replaceMetalTagsInCrafting(e,'mythicbotany', 'alfsteel')

    mythicbotanyInfuser(e, ['forge:ingots/elementium', 'forge:gems/dragonstone', 'forge:dusts/pixie'], 'gtceu:alfsteel_ingot', 1, 1500000)

    botanicpledgeRital(e, 'botania:crystal_bow', ['forge:ingots/terrasteel', 'forge:ingots/yggdralium', 'forge:ingots/terrasteel', 'forge:ingots/yggdralium', 'forge:ingots/yggdralium', 'forge:ingots/terrasteel', 'forge:ingots/yggdralium', 'botania:terra_sword'], 'botanicpledge:ull_bow', 1000000, false)
    botanicpledgeRital(e, 'botania:ender_dagger', ['forge:gems/soul_shard', 'forge:exquisite_gems/yggdralium_shard', 'forge:gems/soul_shard', 'forge:exquisite_gems/yggdralium_shard', 'forge:exquisite_gems/yggdralium_shard', 'forge:gems/soul_shard', 'forge:exquisite_gems/yggdralium_shard', 'forge:gems/soul_shard'], 'botanicpledge:soul_slicer', 500000, false)
    botanicpledgeRital(e, 'botania:flight_tiara', ['botania:alfheim_portal', 'forge:storage_blocks/yggdralium', 'botania:alfheim_portal', 'forge:storage_blocks/yggdralium', 'forge:storage_blocks/yggdralium', 'botania:alfheim_portal', 'forge:storage_blocks/yggdralium', 'botania:alfheim_portal'], 'botanicpledge:marinas_core', 400000, false)
    botanicpledgeRital(e, 'botania:flight_tiara', ['forge:storage_blocks/elf_quartz', 'forge:storage_blocks/yggdralium', 'forge:storage_blocks/elf_quartz', 'forge:storage_blocks/yggdralium', 'forge:storage_blocks/yggdralium', 'forge:storage_blocks/elf_quartz', 'forge:storage_blocks/yggdralium', 'forge:storage_blocks/elf_quartz'], 'botanicpledge:marias_core', 400000, false)
    botanicpledgeRital(e, 'botania:gaia_spreader', ['forge:exquisite_gems/yggdralium_shard', 'forge:rods/world_ash', 'forge:exquisite_gems/yggdralium_shard', 'forge:rods/world_ash', 'forge:rods/world_ash', 'forge:exquisite_gems/yggdralium_shard', 'forge:rods/world_ash', 'forge:exquisite_gems/yggdralium_shard'], 'botanicpledge:yggdral_spreader', 1000000, false)
    botanicpledgeRital(e, 'botania:mana_pool', ['forge:storage_blocks/source', 'forge:storage_blocks/yggdralium', 'forge:storage_blocks/source', 'forge:storage_blocks/yggdralium', 'forge:storage_blocks/yggdralium', 'forge:storage_blocks/source', 'forge:storage_blocks/yggdralium', 'forge:storage_blocks/source'], 'botanicpledge:mana_buffer', 1000000, false)
    botanicpledgeRital(e, 'botania:super_travel_belt', ['forge:exquisite_gems/yggdralium_shard', 'forge:ingots/yggdralium', 'forge:exquisite_gems/yggdralium_shard', 'forge:ingots/yggdralium', 'forge:ingots/yggdralium', 'forge:exquisite_gems/yggdralium_shard', 'forge:ingots/yggdralium', 'forge:exquisite_gems/yggdralium_shard'], 'botanicpledge:conquering_sash', 500000, false)
    botanicpledgeRital(e, 'botanicpledge:marias_core', ['botania:terra_sword', 'forge:ingots/yggdralium', 'botania:terra_sword', 'forge:ingots/yggdralium', 'forge:ingots/yggdralium', 'botania:terra_sword', 'forge:ingots/yggdralium', 'botania:terra_sword'], 'botanicpledge:yggd_ramus', 1000000, false)
    botanicpledgeRital(e, 'botanicpledge:ritual_pedestal', ['forge:stone/livingrock', 'forge:ingots/yggdralium', 'forge:stone/livingrock', 'forge:ingots/yggdralium', 'forge:ingots/yggdralium', 'forge:stone/livingrock', 'forge:ingots/yggdralium', 'forge:stone/livingrock'], 'botanicpledge:modification_altar', 1000000, false)
    botanicpledgeRital(e, 'botanicpledge:soul_shard', ['forge:string/magebloom', 'forge:exquisite_gems/yggdralium_shard', 'forge:string/magebloom', 'forge:exquisite_gems/yggdralium_shard', 'forge:exquisite_gems/yggdralium_shard', 'forge:string/magebloom', 'forge:exquisite_gems/yggdralium_shard', 'forge:string/magebloom'], 'botanicpledge:soul_amulet', 500000, false)
    botanicpledgeRital(e, 'botanicpledge:yggd_ramus', ['forge:storage_blocks/yggdralium', 'forge:storage_blocks/yggdralium', 'forge:storage_blocks/yggdralium', 'forge:storage_blocks/yggdralium', 'forge:storage_blocks/yggdralium', 'forge:storage_blocks/yggdralium', 'forge:storage_blocks/yggdralium', 'forge:storage_blocks/yggdralium'], 'botanicpledge:asgard_fractal', 500000, false)
    botanicpledgeRital(e, 'gtceu:terrasteel_block', ['botania:thor_ring', 'forge:exquisite_gems/yggdralium_shard', 'botania:loki_ring', 'forge:exquisite_gems/yggdralium_shard', 'forge:exquisite_gems/yggdralium_shard', 'botania:odin_ring', 'forge:exquisite_gems/yggdralium_shard', 'forge:storage_blocks/nether_star'], 'botanicpledge:aesir_ring', 500000, false)

})