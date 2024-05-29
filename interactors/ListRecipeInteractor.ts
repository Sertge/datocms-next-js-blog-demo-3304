import Recipe from 'domain/Recipe'
import { Inject, Service } from 'typedi'
import { DataSource, FindManyOptions } from 'typeorm'
import IInteractor from './IInteractor'

@Service()
export default class ListUsersInteractor implements IInteractor<FindManyOptions<Recipe>, Recipe[]> {
  constructor (
    @Inject(DataSource.name) private readonly datasource: DataSource
  ) {}
  async execute (findOptions: FindManyOptions<Recipe>): Promise<Recipe[]> {
    //await this.datasource.synchronize()
    const userRepository = this.datasource.getRepository(Recipe)
    return await userRepository.find(findOptions)
  }
}