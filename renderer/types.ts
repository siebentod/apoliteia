export interface PageClass {
  id: string;
  pageTitle: string;
  pageDescription: string;
  pageKeywords: string;
  pageHeader: string;
  pageTranslator: string;

  translations: string[];
  translationsToc: string[];
  //TODO Можно объединить переводы в объекты?

  columnsRelation: number;
  styleSpecial: any;

  isNumbered: boolean;
  isTocHidden: boolean;
  isJumpNeeded: boolean;

  hasContents: boolean | 'collapsible';
  translationType: null | 'vertical' | 'horizontal';
  flags: boolean;
}
