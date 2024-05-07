GTCEuStartupEvents.registry('gtceu:recipe_type', e => {
  e.create('greenhouse')
    .category('drack')
    .setEUIO('in')
    .setMaxIOSize(3, 4, 1, 0)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BATH)
})
GTCEuStartupEvents.registry("gtceu:machine", e => {
    e.create("greenhouse", "multiblock")
      .rotationState(RotationState.NON_Y_AXIS)
      .recipeType("greenhouse")
      .appearanceBlock(GTBlocks.MACHINE_CASING_ULV)
      .recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK))
      .pattern((definition) =>
        FactoryBlockPattern.start()
        .aisle("0BBB0", "0BBB0", "0BBB0", "0BBB0")
        .aisle("BBBBB", "BDDDB", "B###B", "BGGGB")
        .aisle("BBBBB", "BDDDB", "B###B", "BGLGB")
        .aisle("BBBBB", "BDDDB", "B###B", "BGGGB")
        .aisle("0BBB0", "0BEB0", "0BBB0", "0BBB0")
        .where("E", Predicates.controller(Predicates.blocks(definition.get())))
        .where("D", Predicates.blocks("farmersdelight:rich_soil"))
        .where("G", Predicates.blocks("enderio:clear_glass_green"))
        .where("L", Predicates.blocks('create:rose_quartz_lamp'))
        .where("B", Predicates.blocks("gtceu:ulv_machine_casing").setMinGlobalLimited(5)
          .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
          .or(Predicates.autoAbilities(definition.getRecipeTypes()))
        )
        .where("#", Predicates.air())
        .where("0", Predicates.any())
      .build())
      .workableCasingRenderer(
        "gtceu:block/casings/voltage/ulv/side",
        "gtceu:block/multiblock/implosion_compressor",
        true
      );
  });