import { classNameHelper, localStorageHelper } from './general';

describe('General utils test', () => {
  describe('classNameHelper utils function', () => {
    it('should return string from arguments array', () => {
      expect(classNameHelper('')).toEqual('');
      expect(classNameHelper(' ')).toEqual('');
      expect(classNameHelper()).toEqual('');
      expect(classNameHelper('test')).toEqual('test');
      expect(classNameHelper('test', 'test_1', 'test_2')).toEqual('test test_1 test_2');
      expect(classNameHelper('test', ' ', 'test_2')).toEqual('test test_2');
      expect(classNameHelper('test', '    ', '', 'test_2')).toEqual('test test_2');
      expect(classNameHelper('test', ' ', '', '  ', 'test_2   ', '')).toEqual('test test_2');
    });
  });

  describe('localStorageHelper utils function', () => {
    const mockGetItem = jest.fn();
    const mockSetItem = jest.fn();
    const realLocalStorage = window.localStorage;
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: mockGetItem,
        setItem: mockSetItem,
      },
    });

    afterAll(() => {
      Object.defineProperty(window, 'localStorage', realLocalStorage);
    });

    it('should call localStorage functions', () => {
      const [setValue, getValue] = localStorageHelper('test');
      setValue(null);
      getValue('test');

      expect(mockSetItem).toHaveBeenCalledWith('test', 'null');
      expect(mockGetItem).toHaveBeenCalledWith('test');
    });
  });
});
