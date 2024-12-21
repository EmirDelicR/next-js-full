export const classNameHelper = (...args: string[]): string => {
  const classes = args.filter((entry) => entry && entry.trim() !== '');
  return classes.toString().replaceAll(',', ' ').trim();
};

export const localStorageHelper = <T>(key: string) => {
  const getValue = (key: string): string | null => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      return null;
    }
  };

  const setValue = (value: T) => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('localStorageHelper.setValue: ', error);
    }
  };
  return [setValue, getValue] as const;
};
