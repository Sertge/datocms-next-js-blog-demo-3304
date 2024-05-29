import Ingredient, { ICreateIngredientInteractorInput } from 'domain/Ingredient'
import IngredientAmount, { ICreateIngredientAmountInteractorInput } from 'domain/IngredientAmount'
import Recipe, { ICreateRecipeInteractorInput } from 'domain/Recipe'
import User, { ICreateUserInteractorInput } from 'domain/User'
import CreateIngredientAmountInteractor from 'interactors/CreateIngredientAmountInteractor'
import CreateIngredientInteractor from 'interactors/CreateIngredientInteractor'
import CreateRecipeInteractor from 'interactors/CreateRecipeInteractor'
import CreateUserInteractor from 'interactors/CreateUserInteractor'
import Container from 'typedi'

export const Mutation = {
  createUser: async function createUser (_parent: any, args: { input: ICreateUserInteractorInput }): Promise<User> {
    const interactor = Container.get(CreateUserInteractor)
    return await interactor.execute(args.input)
  },
  createRecipe: async function createRecipe(_parent:any, args: { input: ICreateRecipeInteractorInput }): Promise<Recipe> {
    const interactor = Container.get(CreateRecipeInteractor)
    return await interactor.execute(args.input)
  },
  createIngredientAmount: async function createIngredientAmount(_parent:any, args: { input: ICreateIngredientAmountInteractorInput }): Promise<IngredientAmount> {
    const interactor = Container.get(CreateIngredientAmountInteractor)
    return await interactor.execute(args.input)
  },
  createIngredient: async function createIngredient(_parent:any, args: { input: ICreateIngredientInteractorInput }): Promise<Ingredient> {
    const interactor = Container.get(CreateIngredientInteractor)
    return await interactor.execute(args.input)
  }
}
