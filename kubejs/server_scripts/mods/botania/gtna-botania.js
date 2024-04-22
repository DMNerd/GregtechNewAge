ServerEvents.recipes(e => {

    const botaniaMats = ['manasteel', 'terrasteel', 'elementium']
    botaniaMats.forEach(material => {
        replaceMetalInCrafting(e,'botania', material)
        removeBlockNuggetRecipes(e, 'botania', material)
    });
    e.replaceInput({ id: 'botania:glass_pickaxe' }, 'gtceu:manasteel_ingot', '#forge:plates/manasteel')

    hardenToolRecipes(e, 'botania', 'manasteel', 'botania:livingwood_twig')
    hardenArmorRecipes(e, 'botania', 'manasteel')
    hardenArmorRecipes(e, 'botania', 'terrasteel')
    e.replaceInput({ id: 'botania:terra_pick' }, 'botania:terrasteel_ingot', '#forge:plates/terrasteel')

    replaceMetalInCrafting(e,'mythicbotany', 'alfsteel')
    replaceMetalInCrafting(e,'botanicpledge', 'yggdralium')
    removeBlockNuggetRecipes(e, 'botanicpledge', 'yggdralium')
})