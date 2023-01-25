// #region Global Imports
import { type ChangeEventHandler, type ChangeEvent, useState, useCallback } from "react";
// #endregion Global Imports

import type { Value } from '~shared/typings';

type UseFieldStatesOwnProps = HTMLInputElement;
interface EventHandlers<EVT extends UseFieldStatesOwnProps> extends Value{
  readonly isUncontrolled?: boolean;
  readonly onChange?: ChangeEventHandler<EVT>;

}

interface ReturnValue<EVT extends
  UseFieldStatesOwnProps> extends
  Required<EventHandlers<EVT>>
{
  readonly valued?: string;
  readonly hasFocused: boolean;
}

export const useFieldState = <EVT extends UseFieldStatesOwnProps>(
  {
    onChange: onChangeProp,
    value: valueProp,
  }: any) => {
  const [value, setValue] = useState();

  const onChange = useCallback(
    (event: ChangeEvent<EVT>) => {
      onChangeProp && onChangeProp(event);

      const input = event.currentTarget;
      // setValue(input.value);
    },
    [onChangeProp]
  );


  return {
    value,
    onChange,
  } as const;
};
