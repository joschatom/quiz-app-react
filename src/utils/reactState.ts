import type { Dispatch } from "react";

export type ReactState<T> = {
  value: T;
  setValue: Dispatch<React.SetStateAction<T>>;
};

export function arrayToReactState<T>([value, setValue]: [
  T,
  Dispatch<React.SetStateAction<T>>
]): ReactState<T> {
  return {
    setValue,
    value,
  };
}
