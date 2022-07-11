export function formatRoute(route: string) {
  return route.replace(/(\/.)/, (c) => c[1].toUpperCase());
}
