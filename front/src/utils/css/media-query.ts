const breakpoints = [576, 768, 992, 1200, 1420]; // xs, sm, md, lg, xl
export const minMq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
export const maxMq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
