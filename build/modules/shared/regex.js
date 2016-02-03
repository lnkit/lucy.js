var classTest = /^.[\w_-]+$/,
    tagTest = /^[A-Za-z]+$/,
    regexSpace = /\s/,
    regexSpaceglobal = /\s/g,
    regexDot = /\./g,
    regexDash = /-/g,
    regexFowardslash = /\//g,
    replaceTemplateString = /\{(.*?)\}/g,
    regexExt = /\.[0-9a-z]+$/i,
    regexUnderscore = /_/g,
    isJSRegex = /\.js/,
    isCSSRegex = /\.css/,
    isJSONRegex = /\.json/,
    hasDotRegex = /\./,
    rawURLDecodeRegex = /%(?![\da-f]{2})/gi,
    andRegex = /&/g,
    lessThanRegex = /</g,
    moreThanRegex = />/g,
    doubleQuoteRegex = /"/g,
    slashRegex = /\//g;
