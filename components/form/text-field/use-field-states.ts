// #region Global Imports
import React, { type ChangeEventHandler } from "react";
// #endregion Global Imports


type UseFieldStatesOwnProps = HTMLInputElement;
interface EventHandlers<EVT extends UseFieldStatesOwnProps> {
  readonly onChange?: ChangeEventHandler<EVT>;
}

interface ReturnValue<EVT extends
  UseFieldStatesOwnProps> extends
  Required<EventHandlers<EVT>>
{
  readonly value: string;
  readonly hasFocused: boolean;
}

export const useFieldStates = <EVT extends UseFieldStatesOwnProps>(
  {
    onChange: onChangeProp,
    value: valueProp,
  }: any) => {
  const [value, setValue] = React.useState();

  const onChange = React.useCallback(
    (event: React.ChangeEvent<EVT>) => {
      onChangeProp && onChangeProp(event);

      const input = event.currentTarget;
      setValue(input.value);
    },
    [onChangeProp]
  );


  return {
    value,
    onChange,
  } as const;
};
