export type TData = {
  id: string;
  pageTitle: string;
  pageDescription: string;
  pageKeywords: string;
  pageHeader: string;
  translationsInHeader: string[];
};

export type TToc = {
  translationsInToc: string[];
  translationsAlign: string | null;
  hasFlags: boolean;
  hasContents: boolean | 'collapsible';
};

export type TStyle = {
  columnsRelation: number;
  mainClass: string | null;
  mainStyle: object | null;
  isNumbered: boolean;
  isTocHidden: boolean;
};
