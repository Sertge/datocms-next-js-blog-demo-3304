import IngredientAmount, { ICreateIngredientAmountInteractorInput } from 'domain/IngredientAmount'
import { Inject, Service } from 'typedi'
import { DataSource } from 'typeorm'
import IInteractor from './IInteractor'

@Service()
export default class CreateIngredientAmountInteractor implements IInteractor<ICreateIngredientAmountInteractorInput, IngredientAmount> {
  constructor (
    @Inject(DataSource.name) private readonly datasource: DataSource
  ) {}
  async execute (params: ICreateIngredientAmountInteractorInput): Promise<IngredientAmount> {
    const ingredientAmountRepository = this.datasource.getRepository(IngredientAmount)
    const newIngredientAmount = await ingredientAmountRepository.save(params)
    return newIngredientAmount
  }
}
