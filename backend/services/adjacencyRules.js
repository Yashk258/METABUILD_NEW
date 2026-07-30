export const adjacencyRules = {
  "Living Room": ["Kitchen", "Bedroom 1", "Bedroom 2"],
  Kitchen: ["Living Room"],
  "Bedroom 1": ["Living Room", "Bathroom 1"],
  "Bedroom 2": ["Living Room", "Bathroom 2"],
  "Bathroom 1": ["Bedroom 1"],
  "Bathroom 2": ["Bedroom 2"],
};