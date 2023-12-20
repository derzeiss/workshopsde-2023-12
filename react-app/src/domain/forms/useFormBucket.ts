import {
  useContext,
  Context,
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  FocusEvent,
} from 'react';
import { FormBucketContext } from './FormBucketContext';
import { ValidatorFunction } from './types/ValidatorFunction';
import { validate } from './validation';
import { FormBucketContextValue } from './types/FormBucketContextValue';

export const useFormBucket = <T extends object>() => {
  const { formBucket, setFormBucket } = useContext<FormBucketContextValue<T>>(
    FormBucketContext as Context<FormBucketContextValue<T>>,
  );

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const name = ev.target.name;
    const newVal = ev.target.value;
    const validators = (formBucket.validators as Record<string, ValidatorFunction[]>)[name];

    const validationErrors = validate(newVal, validators);

    setFormBucket({
      ...formBucket,
      values: {
        ...formBucket.values,
        [ev.target.name]: ev.target.value,
      },
      errors: {
        ...formBucket.errors,
        [ev.target.name]: validationErrors,
      },
      hasChanged: true,
    });
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (ev) => {
    setFormBucket({
      ...formBucket,
      touched: {
        ...formBucket.touched,
        [ev.target.name]: true,
      },
    });
  };

  const getChangeHandler =
    (onChange?: ChangeEventHandler<HTMLInputElement>) => (ev: ChangeEvent<HTMLInputElement>) => {
      handleChange(ev);
      onChange && onChange(ev);
    };

  const getBlurHandler =
    (onChange?: FocusEventHandler<HTMLInputElement>) => (ev: FocusEvent<HTMLInputElement>) => {
      handleBlur(ev);
      onChange && onChange(ev);
    };

  const setValues = (values: T) => setFormBucket({ ...formBucket, values: { ...values } });

  return { formBucket, getChangeHandler, getBlurHandler, setValues };
};
