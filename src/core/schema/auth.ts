import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, 'Vui lòng nhập email').email('Email không hợp lệ'),
  hashPassword: z.string().min(6, 'Mật khẩu phải có ít nhất 8 ký tự'),
});
