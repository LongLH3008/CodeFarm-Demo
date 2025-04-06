'use client';

import TechTree from '@/components/icons/TechTree';
import InputField from '@/components/shared/inputField';
import { Button } from '@/components/ui/button';
import { loginSchema } from '@/core/schema/auth';
import { login } from '@/core/services/auth.service';
import { zodResolver } from '@hookform/resolvers/zod';
import { KeyRound, UserRound, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { back } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: TLogin) => {
    const res = await login(data);
    console.log(res);
    console.log('Dữ liệu đăng nhập:', data);
  };

  return (
    <section className="shadow-sm h-full flex justify-center items-center relative">
      <div className="lg:hidden w-full px-4 flex justify-between items-start absolute top-[4%]">
        <TechTree className="size-12 rounded-full p-1 bg-white" />
        <X onClick={back} strokeWidth={1} />
      </div>
      <span
        onClick={back}
        className="max-lg:hidden p-1 cursor-pointer absolute top-3 right-3 rounded-full hover:bg-zinc-200 duration-200"
      >
        <X strokeWidth={1} />
      </span>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[90%] sm:w-2/3 lg:w-1/2 mx-auto flex gap-3 flex-col p-4"
      >
        <div className="flex flex-col mb-3">
          <h2 className="text-2xl font-medium">Đăng nhập</h2>
          <span className="text-sm italic leading-[1]">Dành cho học viên và giáo viên</span>
        </div>
        <InputField
          field="email"
          register={register}
          error={errors.email}
          errorMessage={errors.email?.message}
          placeHolder="Email"
          prefix={
            <UserRound
              strokeWidth={1}
              className={`${errors.email ? 'text-red-500' : 'text-zinc-600'}`}
            />
          }
        />

        <InputField
          field="hashPassword"
          type="password"
          placeHolder="Mật khẩu"
          register={register}
          error={errors.email}
          errorMessage={errors.email?.message}
          prefix={
            <KeyRound
              strokeWidth={1}
              className={`${errors.hashPassword ? 'text-red-500' : 'text-zinc-600'}`}
            />
          }
        />

        <Button type="submit">Đăng nhập</Button>
        <Link href={'/'} className="underline text-[12px]">
          Quên mật khẩu ?
        </Link>
      </form>
    </section>
  );
};

export default Login;
