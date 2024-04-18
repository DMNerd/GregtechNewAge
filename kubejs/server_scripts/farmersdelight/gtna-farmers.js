ServerEvents.recipes(e => {

    e.replaceInput({ input: '#forge:flour/wheat' }, '#forge:flour/wheat', '#forge:dusts/wheat')
    e.replaceInput({ id: '/bucketlib:farmersdelight/wheat/' }, 'minecraft:wheat', '#forge:dusts/wheat')
    e.replaceInput({ input: '#forge:flour/wheat' }, '#forge:flour/wheat', '#forge:dusts/wheat')
    
    e.custom({
        type: "minecraft:crafting_shapeless",
        ingredients: [
        {
            "type": "bucketlib:milk",
        },
        {
            "item": "minecraft:glass_bottle",
            "count": 4
        },
        ],
        result: {
            "item": "farmersdelight:milk_bottle",
            "count": 4
        }
    })

    e.remove({output: 'productivebees:milk_bottle'})
    e.custom({
        type: "productivebees:bottler",
        fluid: {
          "tag": "forge:milk",
          "amount": 250
        },
        input: {
          "item": "minecraft:glass_bottle"
        },
        output: {
          "item": "farmersdelight:milk_bottle"
        }
    }).id('gtna:bottler/milk_compat')
})