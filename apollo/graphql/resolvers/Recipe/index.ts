import IngredientAmount from "domain/IngredientAmount"
import dRecipe from "domain/Recipe"
import ListIngredientAmountInteractor from "interactors/ListIngredientAmountInteractor"
import Container from "typedi"
import { FindManyOptions } from "typeorm"

export const Recipe = {
  ingredientAmounts: async (recipe: dRecipe, args: { input: FindManyOptions<IngredientAmount>}) => {
    args.input = {where: {recipe: {id: recipe.id}}, loadRelationIds: true,...args.input}
    const interactor = Container.get(ListIngredientAmountInteractor)
    return await interactor.execute(args.input)
  }
}