export interface FormField {
  name: string;
  description: string;
  type: "int" | "string" | "boolean" | "float"; // Add other types if needed
  min?: number;
  max?: number;
}
