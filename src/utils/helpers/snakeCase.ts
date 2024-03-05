function snakeCase(str: string): string {
  return str.replace(/\s+/g, "-").toLowerCase();
}

export default snakeCase;
