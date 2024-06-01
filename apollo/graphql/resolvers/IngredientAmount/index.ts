import Ingredient from "domain/Ingredient"
import dIngredientAmount from "domain/IngredientAmount"
import GetIngredientByIdInteractor from "interactors/GetIngredientByIdInteractor"
import Container from "typedi"
import { FindOneOptions } from "typeorm"

export const IngredientAmount = {
  ingredient: async (ingredientAmount: dIngredientAmount, args: { input: FindOneOptions<Ingredient>}) => {
    args.input = {where: {id: ingredientAmount.ingredient.id}, ...args.input}
    const interactor = Container.get(GetIngredientByIdInteractor)
    return await interactor.execute(args.input)
  }
}