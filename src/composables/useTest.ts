export enum Test {
  'one' = '1',
  'two' = '2',
  'three' = '3',
}

export const useTest = () => {
  const hello = Test;

  return {
    hello,
  };
};
