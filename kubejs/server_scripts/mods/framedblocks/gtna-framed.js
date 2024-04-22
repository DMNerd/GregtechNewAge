ServerEvents.recipes(e => {

    hardenWoodenRecipes(e, 'framedblocks', 'framed')
    e.remove({id : 'framedblocks:framed_chest' })
    e.shaped('framedblocks:framed_chest', ['AAA', 'ABA', 'AAA'], {
        A: 'framedblocks:framed_cube', 
        B: 'minecraft:chest'
    })


})