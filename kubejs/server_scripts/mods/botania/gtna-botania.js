ServerEvents.recipes(e => {


    e.replaceInput({ mod: 'mechanicalbotania' }, '#forge:ingots/andesite_alloy', '#forge:double_plates/andesite_alloy')
    e.replaceInput({ mod: 'mechanicalbotania' }, 'minecraft:lapis_block', '#forge:plates/manasteel')
    e.replaceInput({ mod: 'mechanicalbotania' }, 'minecraft:redstone', '#morered:red_alloy_wires')
    e.replaceInput({ id: 'botania:mana_pylon' }, '#forge:ingots/manasteel', '#forge:double_plates/manasteel')
    e.replaceInput({ id: 'botania:mana_pylon' }, 'minecraft:gold', '#forge:double_plates/gold')

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

    botanicpledgeRital(e, 'botanicpledge:marias_core', ['botania:terra_sword', 'forge:ingots/yggdralium', 'botania:terra_sword', 'forge:ingots/yggdralium', 'forge:ingots/yggdralium', 'botania:terra_sword', 'forge:ingots/yggdralium', 'botania:terra_sword'], 'botanicpledge:yggd_ramus', 1000000, false)
    botanicpledgeRital(e, 'botanicpledge:ritual_pedestal', ['forge:stones/livingrock', 'forge:ingots/yggdralium', 'forge:stones/livingrock', 'forge:ingots/yggdralium', 'forge:ingots/yggdralium', 'forge:stones/livingrock', 'forge:ingots/yggdralium', 'forge:stones/livingrock'], 'botanicpledge:modification_altar', 1000000, false)

})