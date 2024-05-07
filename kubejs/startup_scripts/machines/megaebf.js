GTCEuStartupEvents.registry("gtceu:machine", e => {
    e.create("mega_ebf", "multiblock")
      .rotationState(RotationState.NON_Y_AXIS)
      .recipeTypes('electric_blast_furnace')
      .recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK))
      .appearanceBlock(GTBlocks.CASING_INVAR_HEATPROOF)
      .pattern((definition) => FactoryBlockPattern.start()
        .aisle("BBBBBBBBBBBBBBB", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "BBBBBBBBBBBBBBB")
        .aisle("BBBBBBBBBBBBBBB", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "BVVVVVVVVVVVVVB")
        .aisle("BBBBBBBBBBBBBBB", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "BVBBBBBBBBBBBVB")
        .aisle("BBBBBBBBBBBBBBB", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "BVBBBBBBBBBBBVB")
        .aisle("BBBBBBBBBBBBBBB", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "BVBBBBBBBBBBBVB")
        .aisle("BBBBBBBBBBBBBBB", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "BVBBBMMMMMBBBVB")
        .aisle("BBBBBBBBBBBBBBB", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "BVBBBMBBBMBBBVB")
        .aisle("BBBBBBBBBBBBBBB", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "BVBBBMBBBMBBBVB")
        .aisle("BBBBBBBBBBBBBBB", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "BVBBBMBBBMBBBVB")
        .aisle("BBBBBBBBBBBBBBB", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "BVBBBMMMMMBBBVB")
        .aisle("BBBBBBBBBBBBBBB", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "BVBBBBBBBBBBBVB")
        .aisle("BBBBBBBBBBBBBBB", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "BVBBBBBBBBBBBVB")
        .aisle("BBBBBBBBBBBBBBB", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "GD###########DG", "BVBBBBBBBBBBBVB")
        .aisle("BBBBBBBBBBBBBBB", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "GDDDDDDDDDDDDDG", "BVVVVVVVVVVVVVB")
        .aisle("BBBBBBBEBBBBBBB", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGG", "BBBBBBBBBBBBBBB")
        .where("E", Predicates.controller(Predicates.blocks(definition.get())))
        .where("D", Predicates.heatingCoils())
        .where("G", Predicates.blocks('gtceu:tempered_glass'))
        .where("B", Predicates.blocks('gtceu:heatproof_machine_casing')
            .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            .or(Predicates.autoAbilities(definition.getRecipeTypes()))
        )
        .where("M", Predicates.abilities(PartAbility.MUFFLER).setExactLimit(16))
        .where("V", Predicates.blocks('ad_astra:vent'))
        .where("#", Predicates.air())
        .where("0", Predicates.any())
    .build())
    .workableCasingRenderer(
        "gtceu:block/casings/solid/machine_casing_heatproof",
        "gtceu:block/multiblock/blast_furnace",
        false
    );
  });