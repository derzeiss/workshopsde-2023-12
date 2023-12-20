import { FormBucket } from './FormBucket';

export interface FormBucketContextValue<T> {
  formBucket: FormBucket<T>;
  setFormBucket: (newBucket: FormBucket<T>) => void;
}
