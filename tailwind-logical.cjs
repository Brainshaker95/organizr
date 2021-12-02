const prefixNegativeModifiers = require('tailwindcss/lib/util/prefixNegativeModifiers').default;

const utilityConfig = {
  variants: [
    'responsive',
  ],
};

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const tailwindLogical = ({ addUtilities, e, theme }) => {
  const getThemeEntries = (identifier) => Object.entries(theme(identifier));

  /**
   * @param {'padding'|'margin'} identifier
   * @param {'p'|'m'} prefix
   */
  const addMarginOrPaddingUtilities = (identifier, prefix) => {
    const values = getThemeEntries(identifier);

    const getKey = (letter, key) => e(prefixNegativeModifiers(`${prefix}${letter}`, key));

    addUtilities(values.map(([key, value]) => ({
      [`.${getKey('y', key)}`]: {
        [`${identifier}Block`]: value,
      },
      [`.${getKey('x', key)}`]: {
        [`${identifier}Inline`]: value,
      },
      [`.${getKey('t', key)}`]: {
        [`${identifier}BlockStart`]: value,
      },
      [`.${getKey('b', key)}`]: {
        [`${identifier}BlockEnd`]: value,
      },
      [`.${getKey('l', key)}`]: {
        [`${identifier}InlineStart`]: value,
      },
      [`.${getKey('r', key)}`]: {
        [`${identifier}InlineEnd`]: value,
      },
    })), utilityConfig);
  };

  /**
   * @param {'width'|'height'} identifier
   * @param {'w'|'h'} prefix
   * @param {'block'|'inline'} logicalName
   */
  const addWidthOrHeightUtilites = (identifier, prefix, logicalName) => {
    const upperIdentifier = capitalize(identifier);
    const upperLogicalName = capitalize(logicalName);

    addUtilities(getThemeEntries(identifier).map(([key, value]) => ({
      [`.${e(`${prefix}-${key}`)}`]: {
        [`${logicalName}Size`]: value,
      },
    })), utilityConfig);

    addUtilities(getThemeEntries(`min${upperIdentifier}`).map(([key, value]) => ({
      [`.${e(`min-${prefix}-${key}`)}`]: {
        [`min${upperLogicalName}Size`]: value,
      },
    })), utilityConfig);

    addUtilities(getThemeEntries(`max${upperIdentifier}`).map(([key, value]) => ({
      [`.${e(`max-${prefix}-${key}`)}`]: {
        [`max${upperLogicalName}Size`]: value,
      },
    })), utilityConfig);
  };

  addMarginOrPaddingUtilities('padding', 'p');
  addMarginOrPaddingUtilities('margin', 'm');

  addWidthOrHeightUtilites('width', 'w', 'inline');
  addWidthOrHeightUtilites('height', 'h', 'block');

  addUtilities({
    '.text-left': {
      textAlign: 'start',
    },
    '.text-right': {
      textAlign: 'end',
    },
  }, utilityConfig);

  // const inset = Object.entries(theme('inset'));

  // const insetShorthandUtilities = inset.map(([key, value]) => (
  //   {
  //     [`.${e(prefixNegativeModifiers('inset-block', key))}`]: {
  //       insetBlock: value
  //     },
  //     [`.${e(prefixNegativeModifiers('inset-inline', key))}`]: {
  //       insetInline: value
  //     }
  //   }
  // ));

  // const insetSingleSideUtilities = inset.map(([key, value]) => (
  //   {
  //     [`.${e(prefixNegativeModifiers('block-start', key))}`]: {
  //       insetBlockStart: value
  //     },
  //     [`.${e(prefixNegativeModifiers('block-end', key))}`]: {
  //       insetBlockEnd: value
  //     },
  //     [`.${e(prefixNegativeModifiers('inline-start', key))}`]: {
  //       insetInlineStart: value
  //     },
  //     [`.${e(prefixNegativeModifiers('inline-end', key))}`]: {
  //       insetInlineEnd: value
  //     }
  //   }
  // ));

  // const borderWidth = Object.entries(theme('borderWidth'));

  // const borderWidthUtilities = borderWidth.map(([key, value]) => {
  //   const keyString = key.toLowerCase() === 'default' ? '' : `-${key}`;
  //   return {
  //     [`.${e(`border-bs${keyString}`)}`]: {
  //       borderBlockStartWidth: value
  //     },
  //     [`.${e(`border-be${keyString}`)}`]: {
  //       borderBlockEndWidth: value
  //     },
  //     [`.${e(`border-is${keyString}`)}`]: {
  //       borderInlineStartWidth: value
  //     },
  //     [`.${e(`border-ie${keyString}`)}`]: {
  //       borderInlineEndWidth: value
  //     }
  //   };
  // });

  // const borderRadius = Object.entries(theme('borderRadius'));

  // const borderRadiusSideUtilities = borderRadius.map(([key, value]) => {
  //   const keyString = key.toLowerCase() === 'default' ? '' : `-${key}`;
  //   return {
  //     [`.${e(`rounded-bs${keyString}`)}`]: {
  //       borderStartStartRadius: value,
  //       borderStartEndRadius: value
  //     },
  //     [`.${e(`rounded-be${keyString}`)}`]: {
  //       borderEndStartRadius: value,
  //       borderEndEndRadius: value
  //     },
  //     [`.${e(`rounded-is${keyString}`)}`]: {
  //       borderStartStartRadius: value,
  //       borderEndStartRadius: value
  //     },
  //     [`.${e(`rounded-ie${keyString}`)}`]: {
  //       borderStartEndRadius: value,
  //       borderEndEndRadius: value
  //     }
  //   };
  // });

  // const borderRadiusCornerUtilities = borderRadius.map(([key, value]) => {
  //   const keyString = key.toLowerCase() === 'default' ? '' : `-${key}`;
  //   return {
  //     [`.${e(`rounded-ss${keyString}`)}`]: {
  //       borderStartStartRadius: value
  //     },
  //     [`.${e(`rounded-se${keyString}`)}`]: {
  //       borderStartEndRadius: value
  //     },
  //     [`.${e(`rounded-es${keyString}`)}`]: {
  //       borderEndStartRadius: value
  //     },
  //     [`.${e(`rounded-ee${keyString}`)}`]: {
  //       borderEndEndRadius: value
  //     }
  //   };
  // });
};

module.exports = tailwindLogical;
