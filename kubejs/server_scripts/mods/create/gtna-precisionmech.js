ServerEvents.recipes(e => {
    
    e.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
          "tag": "forge:plates/gold"
        },
        "transitionalItem": {
          "item": "create:incomplete_precision_mechanism"
        },
        "sequence": [
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "create:incomplete_precision_mechanism"
              },
              {
                "tag": "forge:gears/andesite_alloy"
              }
            ],
            "results": [
              {
                "item": "create:incomplete_precision_mechanism"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "create:incomplete_precision_mechanism"
              },
              {
                "item": "create:large_cogwheel"
              }
            ],
            "results": [
              {
                "item": "create:incomplete_precision_mechanism"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "create:incomplete_precision_mechanism"
              },
              {
                "tag": "forge:gears/iron"
              }
            ],
            "results": [
              {
                "item": "create:incomplete_precision_mechanism"
              }
            ]
          }
        ],
        "results": [
          {
            "item": "create:precision_mechanism",
            "chance": 120.0
          },
          {
            "item": "gtceu:gold_plate",
            "chance": 8.0
          },
          {
            "item": "create:andesite_alloy",
            "chance": 8.0
          },
          {
            "item": "gtceu:andesite_alloy_gear",
            "chance": 5.0
          },
          {
            "item": "minecraft:gold_nugget",
            "chance": 3.0
          },
          {
            "item": "create:shaft",
            "chance": 2.0
          },
          {
            "item": "create:crushed_raw_gold",
            "chance": 2.0
          },
          {
            "item": "minecraft:iron_ingot"
          },
          {
            "item": "minecraft:clock"
          }
        ],
        "loops": 5
    })

})