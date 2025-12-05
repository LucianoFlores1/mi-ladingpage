// Type declaration for CSS module side-effect import
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}
