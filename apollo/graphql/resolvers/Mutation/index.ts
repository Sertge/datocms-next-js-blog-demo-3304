import User, { ICreateUserInteractorInput } from 'domain/User'
import CreateUserInteractor from 'interactors/CreateUserInteractor'
import Container from 'typedi'

export const Mutation = {
  createUser: async function createUser (_parent: any, args: { input: ICreateUserInteractorInput }): Promise<User> {
    const interactor = Container.get(CreateUserInteractor)
    return await interactor.execute(args.input)
  }
}
