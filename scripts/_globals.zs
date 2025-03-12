#priority 100

import mods.jeitweaker.ingredient.JeiIngredient;
import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.GenericRecipesManager;
import crafttweaker.api.item.IItemStack;
import mods.jeitweaker.Jei;

public function delete_item(data as IItemStack) as void {
    Jei.hideIngredient(data);
    recipes.remove(data as IIngredient);
    recipes.removeByInput(data);
}

public function delete_items(data as IItemStack[]) as void {
    for item in data {
        delete_item(item);
    }
}