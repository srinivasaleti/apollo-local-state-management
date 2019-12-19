import { GET_COUNTER } from '../../Counter/Couter';
export const CounterResolvers = {
  updateCounter: (_, variables, { cache }) => {
    const data = cache.readQuery({ query: GET_COUNTER });
    cache.writeData({ data: { counter: data.counter + variables.offset } });
    return null;
  },
};
