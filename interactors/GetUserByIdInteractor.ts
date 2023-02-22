import User from 'domain/User'
import { Inject, Service } from 'typedi'
import { DataSource } from 'typeorm'
import IInteractor from './IInteractor'

@Service()
export default class GetUserByIdInteractor implements IInteractor<string, User> {
  constructor (
    @Inject(DataSource.name) private readonly datasource: DataSource
  ) {}
  async execute (userId: string): Promise<User> {
    const userRepository = this.datasource.getRepository(User)
    return userRepository.findOneByOrFail({ id: userId })
  }
}