'use client';

import { useEffect, useState } from 'react';
import classes from './ThemeToggle.module.scss';
import { useMantineColorScheme } from '@mantine/core';
import { classNameHelper } from '@/lib/utils/general/general';

export default function ThemeToggle() {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(colorScheme === 'dark');
  }, [colorScheme]);

  return (
    <div className={classes.toggle}>
      <input
        className={classes['toggle-input']}
        type="checkbox"
        checked={isDarkTheme}
        aria-checked={isDarkTheme}
        onChange={toggleColorScheme}
      />
      <div className={classes['toggle-bg']} />
      <div
        className={classNameHelper(
          classes['toggle-item-wrapper'],
          isDarkTheme ? classes.effect : ''
        )}
      >
        <div className={classes['toggle-switch-sun']}>
          <div className={classes['toggle-switch-cloud']} />
        </div>
        <div className={classes['toggle-switch-moon']}>
          <div className={classes['toggle-switch-stars']} />
        </div>
      </div>
    </div>
  );
}
