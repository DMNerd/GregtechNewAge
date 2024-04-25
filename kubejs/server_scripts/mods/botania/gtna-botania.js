ServerEvents.recipes(e => {

    const botaniaMats = ['manasteel', 'terrasteel', 'elementium']
    botaniaMats.forEach(material => {
        replaceMetalTagsInCrafting(e,'botania', material)
        removeBlockNuggetRecipes(e, 'botania', material)
        hardenArmorRecipes(e, 'botania', material)
    });
    e.replaceInput({ id: 'botania:glass_pickaxe' }, 'gtceu:manasteel_ingot', '#forge:plates/manasteel')

    hardenToolRecipes(e, 'botania', 'manasteel', 'botania:livingwood_twig')
    hardenToolRecipes(e, 'botania', 'elementium', 'botania:dreamwood_twig')
    e.replaceInput({ id: 'botania:terra_pick' }, 'botania:terrasteel_ingot', '#forge:plates/terrasteel')

    replaceMetalTagsInCrafting(e,'mythicbotany', 'alfsteel')
    replaceMetalTagsInCrafting(e,'botanicpledge', 'yggdralium')
    removeBlockNuggetRecipes(e, 'botanicpledge', 'yggdralium')
})