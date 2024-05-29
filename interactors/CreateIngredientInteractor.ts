import Ingredient, { ICreateIngredientInteractorInput } from 'domain/Ingredient'
import { Inject, Service } from 'typedi'
import { DataSource } from 'typeorm'
import IInteractor from './IInteractor'

@Service()
export default class CreateIngredientInteractor implements IInteractor<ICreateIngredientInteractorInput, Ingredient> {
  constructor (
    @Inject(DataSource.name) private readonly datasource: DataSource
  ) {}
  async execute (params: ICreateIngredientInteractorInput): Promise<Ingredient> {
    const ingredientRepository = this.datasource.getRepository(Ingredient)
    const newIngredient = await ingredientRepository.save(params)
    return newIngredient
  }
}
