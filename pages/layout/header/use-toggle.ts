import { useState, useCallback } from "react";

type ToggleOwnProps = {
  readonly initialState?: boolean;
  readonly onToggle?: (state: boolean) => void;
};

export function useToggle({ initialState = false, onToggle }: ToggleOwnProps = {}) {
  const [state, setState] = useState(initialState);

  const handleToggle = useCallback(() => {
    setState((prevState) => !prevState);
    onToggle && onToggle(!state);
  }, [onToggle, state]);

  return { state, handleToggle } as const;
}
