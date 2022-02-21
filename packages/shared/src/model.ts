/* -----------------------------------
 *
 * Options
 *
 * -------------------------------- */

interface IOptions {
  attributes?: string[];
  formatProps?: (props: any) => any;
  wrapComponent?: (child: any) => any;
}

/* -----------------------------------
 *
 * Errors
 *
 * -------------------------------- */

enum ErrorTypes {
  Missing = 'Error: Cannot find component in provided function',
  Json = 'Error: Invalid JSON string passed to component',
}

/* -----------------------------------
 *
 * Element
 *
 * -------------------------------- */

interface CustomElement<C = any, I = any> extends HTMLElement {
  __mounted: boolean;
  __component: C;
  __properties?: object;
  __slots?: { [index: string]: any };
  __instance?: I;
  __children?: any[];
  __options: IOptions;
}

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  [index: string]: any;
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { ErrorTypes, IOptions, IProps, CustomElement };