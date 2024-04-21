ServerEvents.recipes(e => {

    let botaniaMats = ['manasteel', 'terrasteel', 'elementium']
    botaniaMats.forEach(material => {
        replaceMetalInCrafting(e,'botania', material)
    });
    replaceMetalInCrafting(e,'mythicbotany', 'alfsteel')
    replaceMetalInCrafting(e,'botanicpledge', 'yggdralium')
})