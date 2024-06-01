import Ingredient from 'domain/Ingredient'
import { Inject, Service } from 'typedi'
import { DataSource, FindOneOptions } from 'typeorm'
import IInteractor from './IInteractor'

@Service()
export default class GetIngredientByIdInteractor implements IInteractor<FindOneOptions<Ingredient>, Ingredient> {
  constructor (
    @Inject(DataSource.name) private readonly datasource: DataSource
  ) {}
  async execute (findOptions: FindOneOptions<Ingredient>): Promise<Ingredient> {
    const ingredientRepository = this.datasource.getRepository(Ingredient)
    return await ingredientRepository.findOne(findOptions)
  }
}