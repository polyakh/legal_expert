import * as z from 'zod';
  const formSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters long' }).max(50, { message: 'Name must be at most 50 characters long' }),
    email: z.string().email({ message: 'Invalid email address' }),
    agreedToTerms: z.literal(true, {
        errorMap: () => ({ message: "You must accept the terms and conditions" }),
    }),
  });
  
  export type FormSchema = z.infer<typeof formSchema>;