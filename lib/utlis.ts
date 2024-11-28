export function formatName(name: string, replaceSpaceValue: string = "-") {
  return name.toLowerCase().replaceAll(" ", replaceSpaceValue);
}

export function getImage(
  name: string,
  format: "png" | "jpeg" | "jpg" | "webp" | "avif" | "gif"
) {
  return `/img/${formatName(name)}.${format}`;
}
