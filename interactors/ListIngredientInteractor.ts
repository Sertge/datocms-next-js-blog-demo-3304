import Ingredient from 'domain/Ingredient'
import { Inject, Service } from 'typedi'
import { DataSource, FindManyOptions } from 'typeorm'
import IInteractor from './IInteractor'

@Service()
export default class ListIngredientInteractor implements IInteractor<FindManyOptions<Ingredient>, Ingredient[]> {
  constructor (
    @Inject(DataSource.name) private readonly datasource: DataSource
  ) {}
  async execute (findOptions: FindManyOptions<Ingredient>): Promise<Ingredient[]> {
    const ingredientRepository = this.datasource.getRepository(Ingredient)
    return await ingredientRepository.find(findOptions)
  }
}