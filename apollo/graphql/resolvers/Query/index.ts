import Recipe from 'domain/Recipe'
import User from 'domain/User'
import GetUserByIdInteractor from 'interactors/GetUserByIdInteractor'
import ListUsersInteractor from 'interactors/ListUserInteractor'
import ListRecipeInteractor from 'interactors/ListRecipeInteractor'
import Container from 'typedi'
import { FindManyOptions } from 'typeorm'

export const Query = {
  // me: (_parent: any, _args: any, context: any) => {
  //   return 'its a mee'
  // }
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
  }
}
