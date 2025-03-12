// <recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_blast_brick")
//  .transitionTo(<item:tfmg:unprocessed_heavy_plate>)
//  .require(<item:create:andesite_alloy>)
//  .loops(3)
//  .addOutput(<item:create:large_cogwheel> * 6, 32)
//  .addOutput(<item:create:andesite_alloy>, 2)
//  .addOutput(<item:minecraft:andesite>, 1)
//  .addOutput(<item:create:cogwheel>, 1)
//  .addOutput(<item:minecraft:stick>, 1)
//  .addOutput(<item:minecraft:iron_nugget>, 1)
//  .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<tag:items:minecraft:planks>))
//  .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<tag:items:minecraft:wooden_buttons>))
//  .addStep<mods.createtweaker.CuttingRecipe>((rb) => rb.duration(50))
//  .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:minecraft:water> * 50)));

<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("heavy_plate")
    .transitionTo(<item:tfmg:unprocessed_heavy_plate>)
    .require(<item:tfmg:steel_ingot>)
    .addOutput(<item:tfmg:heavy_plate>, 1)
    .addStep<mods.createtweaker.PressingRecipe>((rb1) => rb1.duration(50))
    .addStep<mods.createtweaker.PressingRecipe>((rb1) => rb1.duration(50))
    .addStep<mods.createtweaker.PressingRecipe>((rb1) => rb1.duration(50))
    );

// <recipetype:create:sequenced_assembly>