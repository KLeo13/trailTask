import { createTheme } from "@mantine/core";

export const customTheme = createTheme({
  fontFamily: 'Inter, , ui-sans-serif, system-ui, sans-serif',
  primaryColor: 'blue',
  colors: {
    darkBlue: [
      '#011121', 
      '#021224', 
      '#031326', 
      '#041428', 
      '#05152A', 
      '#06162C', 
      '#07172E', 
      '#081830', 
      '#091932', 
      '#0A1A34'
    ],
    blue: [
      '#ECF4FC',
      '#D8E9F9',
      '#86C3F9',
      '#65ABF1',
      '#4B96E7',
      '#0354A6',
      '#064280',
      '#012242',
      '#011121',
      '#000A14',
    ],
    gray: [
      '#F9FAFB',
      '#F3F4F6',
      '#E5E7EB',
      '#D1D5DC',
      '#99A1AF',
      '#6A7282',
      '#4A5565',
      '#364153',
      '#1E2939',
      '#101828',
      '#030712',
    ]
  },
})