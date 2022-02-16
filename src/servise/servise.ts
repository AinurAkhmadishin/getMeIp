interface ISelection {
  start: number;
  end: number;
}

interface IState {
  value: string;
  selection: ISelection;
}

export const checkIpValue = (value: string) => {
  const subips = value.split('.');
  if (subips.length > 4) {
    return false;
  }
  const invalidSubips = subips.filter((ip: string) => {
    const IP = Number(parseInt(ip, 10));
    return IP < 0 || IP > 255;
  });
  if (invalidSubips.length !== 0) {
    return false;
  }
  let emptyIpCount = 0;
  subips.forEach(ip => {
    if (ip === '') {
      emptyIpCount++;
    }
  });
  if (emptyIpCount > 1) {
    return false;
  }
  return true;
};

export const beforeMaskedValueChange = (newState: IState, oldState: IState) => {
  let { value } = newState;
  const oldValue = oldState.value;
  let { selection } = newState;
  let cursorPosition = Number(selection ? selection.start : null);
  const result = Boolean(checkIpValue(value));
  if (!result) {
    value = value.trim();
    const newValue = `${value.substring(0, value.length - 1)}.${value.substring(value.length - 1)}`;
    if (checkIpValue(newValue)) {
      cursorPosition++;
      selection = { start: cursorPosition, end: cursorPosition };
      value = newValue;
    } else {
      value = oldValue;
    }
  }
  return {
    value,
    selection,
  };
};
