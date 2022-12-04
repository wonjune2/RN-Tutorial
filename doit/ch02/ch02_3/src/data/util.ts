export const makeArray = (length: number) => new Array(length).fill(null);
export const random = (min: number, max: number): number =>
  Math.round(Math.random() * (max - min)) + min;
export const unsplashUrl = (width: number, height: number): string =>
  `https://source.unsplashUrl.com/random/${width}X${height}`;
export const avatarUriByName = (name: string) =>
  `https://ur-avatars.com/api/?name=${name.split(' ').join('+')}`;
