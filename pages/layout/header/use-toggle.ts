import {useState, useCallback} from 'react';

export function useToggle(initialInputState = false) {
  const [state, setState] = useState(initialInputState);

  const handelToggle = useCallback(() => setState(prevState => !prevState), []);

  return [state, handelToggle] as const;
}
