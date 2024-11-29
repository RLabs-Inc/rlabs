type DebouncedFunction<T extends unknown[]> = (...args: T) => void;

export function useDebounce<T extends unknown[]>(
  fn: DebouncedFunction<T>,
  delay: number
): DebouncedFunction<T> {
  let timer: NodeJS.Timeout;

  return (...args: T) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
