ServerEvents.recipes(e => {
    e.remove({ id: '/sgjourney:.*/' })
    hardenArmorRecipes(e, 'sgjourney', 'naquadah')

})