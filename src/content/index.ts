/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Pages from "./pages";
import { Content } from "./content.types";

const contents: any = {
  home: Pages.home,
};

const get = (type: keyof Content): keyof Content => contents[type];

const getAll = (): Content => {
  const reduced = Object.keys(contents).reduce((obj: any, key: string) => {
    obj[key as keyof Content] = contents[key as keyof Content];
    return obj;
  }, {});

  return reduced;
};

const locale = {
  get,
  getAll,
};

export default locale;
