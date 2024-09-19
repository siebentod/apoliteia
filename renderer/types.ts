export interface dataClass {
  id: string;
  pageTitle: string;
  pageDescription: string;
  pageKeywords: string;
  pageHeader: string;
  translationsInHeader: string[];
}

export interface tocClass {
  translationsInToc: string[];
  translationsAlign: string | null;
  hasFlags: boolean;
  hasContents: boolean | 'collapsible';
}

export interface styleClass {
  columnsRelation: number;
  mainClass: string | null;
  mainStyle: object | null;
  isNumbered: boolean;
  isTocHidden: boolean;
}
