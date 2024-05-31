import Recipe from 'domain/Recipe'
import { Inject, Service } from 'typedi'
import { DataSource } from 'typeorm'
import IInteractor from './IInteractor'

@Service()
export default class GetRecipeByIDInteractor implements IInteractor<string, Recipe> {
  constructor (
    @Inject(DataSource.name) private readonly datasource: DataSource
  ) {}
  async execute (recipeId: string): Promise<Recipe> {
    const recipeRepository = this.datasource.getRepository(Recipe)
    return recipeRepository.findOneByOrFail({ id: recipeId })
  }
}
