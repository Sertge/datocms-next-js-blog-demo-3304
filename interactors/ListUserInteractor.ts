import User from 'domain/User'
import { Inject, Service } from 'typedi'
import { DataSource, FindManyOptions } from 'typeorm'
import IInteractor from './IInteractor'

@Service()
export default class ListUsersInteractor implements IInteractor<FindManyOptions<User>, User[]> {
  constructor (
    @Inject(DataSource.name) private readonly datasource: DataSource
  ) {}
  async execute (findOptions: FindManyOptions<User>): Promise<User[]> {
    await this.datasource.synchronize()
    const userRepository = this.datasource.getRepository(User)
    return await userRepository.find(findOptions)
  }
}