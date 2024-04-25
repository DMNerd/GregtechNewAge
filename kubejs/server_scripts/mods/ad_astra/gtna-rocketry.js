ServerEvents.recipes(e => {


    e.replaceInput({ output: 'gtnn:heavy_ingot_t2' }, 'gtnn:heavy_ingot_t1', 'gtnn:heavy_plate_t1')
    e.replaceInput({ output: 'gtnn:heavy_ingot_t3' }, 'gtnn:heavy_ingot_t2', 'gtnn:heavy_plate_t2')
    e.replaceInput({ output: 'gtnn:heavy_ingot_t4' }, 'gtnn:heavy_ingot_t3', 'gtnn:heavy_plate_t3')

    rocketryRecipe(e, "ad_astra:tier_3_rocket", "gtnn:heavy_plate_t3", "ad_astra:ostrum_engine", "kubejs:reinforced_rocket_nose_cone", "kubejs:reinforced_rocket_fin", "tier_3_rocket")
})