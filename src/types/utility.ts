export type KebabToPascalCase<T extends string> = T extends `${infer F}-${infer R}`
  ? `${Capitalize<F>}${KebabToPascalCase<R>}`
  : Capitalize<T>;
