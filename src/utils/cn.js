import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// import { ClassValue} from "clsx";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}



