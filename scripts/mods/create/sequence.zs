<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("heavy_plate")
    .transitionTo(<item:tfmg:unprocessed_heavy_plate>)
    .require(<item:tfmg:steel_ingot>)
    .addOutput(<item:tfmg:heavy_plate>, 1)
    .addStep<mods.createtweaker.PressingRecipe>((rb1) => rb1.duration(50))
    .addStep<mods.createtweaker.PressingRecipe>((rb1) => rb1.duration(50))
    .addStep<mods.createtweaker.PressingRecipe>((rb1) => rb1.duration(50))
);

<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("hole_lava_filler")
    .transitionTo(<item:hole_filler_mod:throwable_hole_filler>)
    .require(<item:hole_filler_mod:throwable_hole_filler>)
    .loops(8)
    .addOutput(<item:hole_filler_mod:throwable_hole_filler_lava>, 1)
    .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:lava> * 1000))
);