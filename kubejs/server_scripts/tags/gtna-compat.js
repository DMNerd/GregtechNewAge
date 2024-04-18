ServerEvents.tags('item', e => {

    e.add('occultism:tools/knives', '#forge:tools/butchery_knives')

    const flours = ['create:wheat_flour', 'enderio:flour']
    flours.forEach(flour => {
        e.add('forge:dusts', flour)
        e.add('forge:dusts/wheat', flour)
    });

    e.add('forge:milk', 'gtceu:milk_bucket')


})