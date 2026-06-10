import "express-session";
import { Role } from "./Role";

declare module "express-session" {
  interface SessionData {
    flash?: string | null;
    userId?: number;
    userName?: string;
    role?: Role;
  }
}

export {};