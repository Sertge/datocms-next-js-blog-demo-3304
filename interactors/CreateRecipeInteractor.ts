import Recipe, { ICreateRecipeInteractorInput } from 'domain/Recipe'
import { Inject, Service } from 'typedi'
import { DataSource } from 'typeorm'
import IInteractor from './IInteractor'

@Service()
export default class CreateUserInteractor implements IInteractor<ICreateRecipeInteractorInput, Recipe> {
  constructor (
    @Inject(DataSource.name) private readonly datasource: DataSource
  ) {}
  async execute (params: ICreateRecipeInteractorInput): Promise<Recipe> {
    const recipeRepository = this.datasource.getRepository(Recipe)
    const newRecipe = await recipeRepository.save(params)
    return newRecipe
  }
}
