import React from 'react';
import { FormBucket } from './types/FormBucket';
import { FormBucketContextValue } from './types/FormBucketContextValue';

export const getEmptyFormBucket = <T>(): FormBucket<T> => ({
  values: {} as T,
  touched: {},
  errors: {},
  validators: {},
  initialValues: {} as T,
  hasChanged: false,
});

/**
 * Holds a form bucket. Used as provider in the {@link Form} component and as consumer in {@link useFormBucket}.
 */
export const FormBucketContext = React.createContext<FormBucketContextValue<unknown>>({
  formBucket: getEmptyFormBucket(),
  setFormBucket: () => {},
});
