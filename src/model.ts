import { ComponentFactory } from 'preact';

/* -----------------------------------
 *
 * Types
 *
 * -------------------------------- */

type ComponentFunction<P = {}> = () => ComponentResult<P>;
type ComponentResult<P = {}> = ComponentFactory<P> | ComponentAsync<P>;
type ComponentAsync<P = {}> =
  | Promise<ComponentFactory<P>>
  | Promise<{ [index: string]: ComponentFactory<P> }>;

/* -----------------------------------
 *
 * IOptions
 *
 * -------------------------------- */

interface IOptions {
  attributes?: string[];
  formAssociated?: boolean;
  formatProps?: <P = any>(props: P) => P;
  wrapComponent?: <P>(child: ComponentFactory<P>) => ComponentFactory<P>;
  display?: string,
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { IOptions, ComponentFunction, ComponentResult, ComponentAsync };
