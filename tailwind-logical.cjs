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
      [`.${getKey('', key)}`]: {
        [identifier]: value,
      },
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

  addUtilities(getThemeEntries('inset').map(([key, value]) => (
    {
      [`.${e(prefixNegativeModifiers('inset', key))}`]: {
        insetBlock: value,
        insetInline: value,
      },
      [`.${e(prefixNegativeModifiers('inset-y', key))}`]: {
        insetBlock: value,
      },
      [`.${e(prefixNegativeModifiers('inset-x', key))}`]: {
        insetInline: value,
      },
      [`.${e(prefixNegativeModifiers('top', key))}`]: {
        insetBlockStart: value,
      },
      [`.${e(prefixNegativeModifiers('bottom', key))}`]: {
        insetBlockEnd: value,
      },
      [`.${e(prefixNegativeModifiers('left', key))}`]: {
        insetInlineStart: value,
      },
      [`.${e(prefixNegativeModifiers('right', key))}`]: {
        insetInlineEnd: value,
      },
    }
  )));

  addUtilities(getThemeEntries('borderWidth').map(([theKey, value]) => {
    const key = theKey.toLowerCase() === 'default' ? '' : `-${theKey}`;

    return {
      [`.${e(`border${key}`)}`]: {
        borderWidth: value,
      },
      [`.${e(`border-t${key}`)}`]: {
        borderBlockStartWidth: value,
      },
      [`.${e(`border-b${key}`)}`]: {
        borderBlockEndWidth: value,
      },
      [`.${e(`border-l${key}`)}`]: {
        borderInlineStartWidth: value,
      },
      [`.${e(`border-r${key}`)}`]: {
        borderInlineEndWidth: value,
      },
    };
  }));

  addUtilities(getThemeEntries('borderRadius').map(([theKey, value]) => {
    const key = theKey.toLowerCase() === 'default' ? '' : `-${theKey}`;

    return {
      [`.${e(`rounded${key}`)}`]: {
        borderRadius: value,
      },
      [`.${e(`rounded-tl${key}`)}`]: {
        borderStartStartRadius: value,
      },
      [`.${e(`rounded-tr${key}`)}`]: {
        borderStartEndRadius: value,
      },
      [`.${e(`rounded-bl${key}`)}`]: {
        borderEndStartRadius: value,
      },
      [`.${e(`rounded-br${key}`)}`]: {
        borderEndEndRadius: value,
      },
      [`.${e(`rounded-t${key}`)}`]: {
        borderStartStartRadius: value,
        borderStartEndRadius: value,
      },
      [`.${e(`rounded-b${key}`)}`]: {
        borderEndStartRadius: value,
        borderEndEndRadius: value,
      },
      [`.${e(`rounded-l${key}`)}`]: {
        borderStartStartRadius: value,
        borderEndStartRadius: value,
      },
      [`.${e(`rounded-r${key}`)}`]: {
        borderStartEndRadius: value,
        borderEndEndRadius: value,
      },
    };
  }));

  addUtilities({
    '.text-left': {
      textAlign: 'start',
    },
    '.text-right': {
      textAlign: 'end',
    },
    '.text-center': {
      textAlign: 'center',
    },
    '.text-justify': {
      textAlign: 'justify',
    },
  }, utilityConfig);
};

module.exports = tailwindLogical;
