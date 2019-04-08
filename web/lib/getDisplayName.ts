import { ComponentType } from 'react';

// Gets the display name of a JSX component for dev tools
export function getDisplayName(Component: ComponentType<any>) {
  return Component.displayName || Component.name || 'Unknown';
}
