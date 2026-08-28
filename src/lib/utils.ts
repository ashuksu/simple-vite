import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Объединяет классы с помощью clsx и корректно разрешает конфликты Tailwind CSS.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}