// Check if the passed value is null
export function isNull<T>(val: T | null): val is T | null {
  return val === null;
}

// Checks if the passed value is undefined
export function isUndefined<T>(val: T | undefined): boolean {
  return val === undefined;
}

// Checks if the passed value is null or undefined
export function isNullOrUndefined<T>(
  val: T | null | undefined
): val is null | undefined {
  return val === null || val === undefined;
}

// Checks if the passed value is a function
export function isFunction<T>(val: T | unknown): boolean {
  return typeof val === 'function';
}

// Checks if the passed value is a string
export function isString<T>(val: T | string): val is string {
  return typeof val === 'string';
}

// Checks if the passed value is a non-empty string(length > 0)
export function isValidString<T>(val: T | unknown): boolean {
  return typeof val === 'string' && val.length > 0;
}

// Returns true if the value passed is a finite number or can be coerced to a finite number
export function isNumber<T>(n: T | number | string): n is number {
  return typeof n === 'number';
}

// Returns true if the array doesn't have items
export function isArrayEmpty<T>(val: T[] | []): boolean {
  return val.length === 0;
}

// Returns a string with Indian . format (with decimal)
// eg-> 12 => ₹ 12.00
export function formatCurrency<T>(val: T | number) {
  if (!isNumber(val)) return;

  return (
    '₹ ' +
    val.toLocaleString('hi', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

// Formats an array of string
// eg-> ["a", "b", "c"] => a,b,c
export function formatList(val: string[]): string {
  const listFormatter = new Intl.ListFormat('en-us', {
    style: 'narrow',
  });

  return listFormatter.format(val);
}

// Formats a date string
// eg-> 2023-12-29 21:27:20 => 22nd January 2024, Tuesday
export function formatDate(date: string | number): string {
  const inputDate = new Date(date);

  return inputDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }); // 29th December 2023, Friday
}
