import { HTMLInputTypeAttribute, ReactNode } from 'react';
import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form';

type Props<T extends FieldValues> = {
  type?: HTMLInputTypeAttribute;
  field: Path<T>;
  prefix?: ReactNode | string;
  suffix?: ReactNode | string;
  error?: FieldError;
  errorMessage?: string;
  register: UseFormRegister<T>;
  placeHolder?: string;
};

const InputField = <T extends FieldValues>({
  type = 'text',
  prefix,
  suffix,
  field,
  error,
  errorMessage,
  placeHolder,
  register,
}: Props<T>) => {
  return (
    <div>
      <label
        htmlFor={field}
        className={`w-full border ${
          error ? 'validate_fail' : 'border-zinc-400'
        } h-10 rounded-sm flex items-center p-2 gap-2`}
      >
        {prefix && prefix}
        <input
          type={type}
          {...register(field)}
          className="w-full h-full outline-none"
          placeholder={placeHolder}
        />
        {suffix && suffix}
      </label>
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
