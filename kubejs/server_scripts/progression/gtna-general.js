ServerEvents.recipes(e => {
    e.replaceOutput({ output: '#forge:nuggets/aluminum' }, '#forge:nuggets/aluminum', '#forge:nuggets/aluminium')

    e.remove({id: 'gtceu:shaped/minecart_steel'})

    removeBlockNuggetRecipes(e, 'minecraft', 'netherite')
    e.remove({id: '/bloodmagic:.*/.*_netherite_.*/'})

})