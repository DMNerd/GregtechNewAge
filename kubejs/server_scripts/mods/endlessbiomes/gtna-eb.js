ServerEvents.recipes(e => {
    const woodtypes = ['penumbra', 'twisted']
    woodtypes.forEach(wood => {
        hardenWoodenRecipes(e, 'endlessbiomes', wood)
        hardenPPRecipes(e, 'endlessbiomes', wood)
        hardenButtonRecipes(e, 'endlessbiomes', wood)
    });
    hardenPPRecipes(e, 'endlessbiomes', 'polished_arkan')
    hardenButtonRecipes(e, 'endlessbiomes', 'polished_arkan')
   
})