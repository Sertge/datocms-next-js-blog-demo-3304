export default interface IInteractor<I, O> {
  execute: (input: I) => Promise<O>
}
