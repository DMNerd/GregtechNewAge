ServerEvents.recipes(e => {

    function rocketryRecipe(outputModid, id, plateTier, engine, noseCone, fins){
        e.remove({id: /.*:nasa_workbench.* + id /})
        e.custom({
            "type": "ad_astra:nasa_workbench",
            "ingredients": [
              {
                "item": noseCone
              },
              {
                "tag": "forge:heavy_plates/" + plateTier
              },
              {
                "tag": "forge:heavy_plates/" + plateTier
              },
              {
                "tag": "forge:heavy_plates/" + plateTier
              },
              {
                "tag": "forge:heavy_plates/" + plateTier
              },
              {
                "tag": "forge:heavy_plates/" + plateTier
              },
              {
                "tag": "forge:heavy_plates/" + plateTier
              },
              {
                "item": fins
              },
              {
                "tag": "forge:heavy_plates/" + plateTier
              },
              {
                "tag": "forge:heavy_plates/" + plateTier
              },
              {
                "item": fins
              },
              {
                "item": fins
              },
              {
                "item": engine
              },
              {
                "item": fins
              }
            ],
            "result": {
              "count": 1,
              "id": outputModid + ":" + id
            }
        }).id('gtnn:rocketry/' + id)
    }
    function noseConeRecipe(){

    }

    e.replaceInput({ output: 'gtnn:heavy_ingot_t2' }, 'gtnn:heavy_ingot_t1', 'gtnn:heavy_plate_t1')
    e.replaceInput({ output: 'gtnn:heavy_ingot_t3' }, 'gtnn:heavy_ingot_t2', 'gtnn:heavy_plate_t2')
    e.replaceInput({ output: 'gtnn:heavy_ingot_t4' }, 'gtnn:heavy_ingot_t3', 'gtnn:heavy_plate_t3')

    rocketryRecipe("ad_astra", "tier_3_rocket", "t3", "ad_astra:ostrum_engine", "kubejs:reinforced_rocket_nose_cone", "kubejs:reinforced_rocket_fin")
})