import { z } from "zod";

/** Auth & Users */
const authSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  current_password: z.string(),
  password: z.string(),
  password_confirmation: z.string(),
  token: z.string(),
});

type Auth = z.infer<typeof authSchema>;
export type UserLoginForm = Pick<Auth, "email" | "password">;
export type UserRegistrationForm = Pick<
  Auth,
  "name" | "email" | "password" | "password_confirmation"
>;
export type RequestConfirmationCodeForm = Pick<Auth, "email">;
export type ForgotPasswordForm = Pick<Auth, "email">;
export type NewPasswordForm = Pick<Auth, "password" | "password_confirmation">;
export type UpdateCurrentUserPasswordForm = Pick<
  Auth,
  "current_password" | "password" | "password_confirmation"
>;
export type ConfirmToken = Pick<Auth, "token">;
export type CheckPasswordForm = Pick<Auth, "password">;

/** Users */
export const userSchema = authSchema
  .pick({
    name: true,
    email: true,
  })
  .extend({
    _id: z.string(),
  });
export type User = z.infer<typeof userSchema>;
export type UserProfileForm = Pick<User, "name" | "email">;

// /** Notes */
// const noteSchema = z.object({
//   _id: z.string(),
//   content: z.string(),
//   createdBy: userSchema,
//   task: z.string(),
//   createdAt: z.string(),
// });
// export type Note = z.infer<typeof noteSchema>;
// export type NoteFormData = Pick<Note, "content">;

// /** Tasks */
// export const taskStatusSchema = z.enum([
//   "pending",
//   "onHold",
//   "inProgress",
//   "underReview",
//   "completed",
// ]);
// export type TaskStatus = z.infer<typeof taskStatusSchema>;
