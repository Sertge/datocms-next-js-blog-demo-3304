import User, { ICreateUserInteractorInput } from 'domain/User'
import { Inject, Service } from 'typedi'
import { DataSource } from 'typeorm'
import IInteractor from './IInteractor'

@Service()
export default class CreateUserInteractor implements IInteractor<ICreateUserInteractorInput, User> {
  constructor (
    @Inject(DataSource.name) private readonly datasource: DataSource
  ) {}
  async execute (params: ICreateUserInteractorInput): Promise<User> {
    const userRepository = this.datasource.getRepository(User)
    const newUser = await userRepository.save(params)
    return newUser
  }
}
