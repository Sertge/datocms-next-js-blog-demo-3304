import IngredientAmount from 'domain/IngredientAmount'
import { Inject, Service } from 'typedi'
import { DataSource, FindManyOptions } from 'typeorm'
import IInteractor from './IInteractor'

@Service()
export default class ListIngredientAmountInteractor implements IInteractor<FindManyOptions<IngredientAmount>, IngredientAmount[]> {
  constructor (
    @Inject(DataSource.name) private readonly datasource: DataSource
  ) {}
  async execute (findOptions: FindManyOptions<IngredientAmount>): Promise<IngredientAmount[]> {
    const IngredientAmountRepository = this.datasource.getRepository(IngredientAmount)
    return await IngredientAmountRepository.find(findOptions)
  }
}