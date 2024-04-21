ServerEvents.recipes(e => {
    removeBlockNuggetRecipes(e, 'minecraft', 'netherite')
    e.remove({id: '/bloodmagic:.*/.*_netherite_.*/'})
})