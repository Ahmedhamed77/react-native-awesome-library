const AwesomeLibrary = require('./NativeAwesomeLibrary').default;

export function multiply(a: number, b: number): number {
  return AwesomeLibrary.multiply(a, b);
}
