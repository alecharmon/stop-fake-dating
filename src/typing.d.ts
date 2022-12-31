export type Direction = "left" | "right" | "up" | "down";

export interface ICard {
    readonly name: string;
    readonly url: string;
    readonly body: string;
    readonly bio: string;
  }
  
  
export type FixedSizeArray<N extends number, T> = N extends 0 ? never[] : {
      0: T;
      length: N;
  } & ReadonlyArray<T>;