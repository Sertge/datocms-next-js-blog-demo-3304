import Recipe from 'domain/Recipe'
import User from 'domain/User'
import GetUserByIdInteractor from 'interactors/GetUserByIdInteractor'
import ListUsersInteractor from 'interactors/ListUserInteractor'
import ListRecipeInteractor from 'interactors/ListRecipeInteractor'
import Container from 'typedi'
import { FindManyOptions } from 'typeorm'
import Ingredient from 'domain/Ingredient'
import GetRecipeByIDInteractor from 'interactors/GetRecipeByIdInteractor'
import ListIngredientInteractor from 'interactors/ListIngredientInteractor'

export const Query = {
  me: (_parent: any, _args: any, context: any) => {
    return '06fc4e79-d713-414a-8a3f-4b960649f36b'
  },
  listUser: async (_parent: any, args: { input: FindManyOptions<User> }) => {
    const interactor = Container.get(ListUsersInteractor)
    return await interactor.execute(args.input)
  },
  getUserById: async (_parent: any, args: { id: string }) => {
    const interactor = Container.get(GetUserByIdInteractor)
    return await interactor.execute(args.id)
  },
  listRecipe: async (_parent: any, args: { input: FindManyOptions<Recipe>}) => {
    const interactor = Container.get(ListRecipeInteractor)
    return await interactor.execute(args.input)
  },
  getRecipeById: async (_parent:any, args: { id: string }) => {
    const interactor = Container.get(GetRecipeByIDInteractor)
    return await interactor.execute(args.id) 
  },
  listIngredient: async (_parent: any, args: { input: FindManyOptions<Ingredient>}) => {
    const interactor = Container.get(ListIngredientInteractor)
    return await  interactor.execute(args.input)
  }
}
