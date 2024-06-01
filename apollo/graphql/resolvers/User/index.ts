import Recipe from "domain/Recipe";
import dUser from "domain/User";
import ListRecipeInteractor from "interactors/ListRecipeInteractor";
import Container from "typedi";
import { FindManyOptions } from "typeorm";

export const User = {
  recipes: async (user: dUser, args: { input: FindManyOptions<Recipe>} ) => {
    //args.input.where ={user: {id: user.id}}
    args.input = {where: {user: {id: user.id}}, ...args.input}
    const interactor = Container.get(ListRecipeInteractor)
    return await interactor.execute(args.input)
  }
}