/**
 * A collection of possible error and warning messages.
 */
/* istanbul ignore next */
export const ErrorMessage = {
  LookupFilterConflict(idProperty: string) {
    return `cannot lookup an item by property "${idProperty}" while also filtering results by that same property`;
  },
  InvalidItem(item: unknown, itemName: string) {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    return `invalid ${itemName}${item !== undefined ? ` "${String(item)}"` : ''}`;
  }
};
