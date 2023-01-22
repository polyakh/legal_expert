function getClassNames(...inputClasses: string[]) {
  return inputClasses.filter(Boolean).join(' ');
}

export {getClassNames};
