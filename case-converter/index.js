const counters = document.querySelector('#counters');
const textarea = document.querySelector('#textarea');
const btnCopy = document.querySelector('#btn-copy');
const btnClear = document.querySelector('#btn-clear');
const lowerBtn = document.querySelector('#lower-btn');
const upperBtn = document.querySelector('#upper-btn');
const capitalizeBtn = document.querySelector('#capitalize-btn');
const sentenceBtn = document.querySelector('#sentence-btn');
const camelBtn = document.querySelector('#camel-btn');
const snakeBtn = document.querySelector('#snake-btn');
const kebabBtn = document.querySelector('#kebab-btn');
const removeDashBtn = document.querySelector('#remove-dash-btn');

// Display counters
textarea.addEventListener('input', () => {
    counters.innerHTML = `
    <span>Character count: ${textarea.value.length}</span> |
    <span>Word count: ${textarea.value.split(' ').length}</span>
    `;
});

// Copy to clipboard
btnCopy.addEventListener('click', () => {
    textarea.select();
    document.execCommand('copy');
});

// Clear textarea
btnClear.addEventListener('click', () => {
    textarea.value = '';
});

// lowercase
lowerBtn.addEventListener('click', () => {
    const str = textarea.value.toLowerCase();
    textarea.value = str;
});

// UPPERCASE
upperBtn.addEventListener('click', () => {
    const str = textarea.value.toUpperCase();
    textarea.value = str;
});

// Capitalize case
const toCapitalizeCase = (str) => {
    return str
        .toLowerCase()
        .replace(/\w\S*/g, (w) =>
            w.replace(/^\w/, (first_letter) => first_letter.toUpperCase())
        );
};
capitalizeBtn.addEventListener('click', () => {
    str = textarea.value;
    textarea.value = toCapitalizeCase(str);
});

// Sentence case
const toSentenceCase = (str) => {
    return str
        .toLowerCase()
        .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (first_letter) =>
            first_letter.toUpperCase()
        );
};
sentenceBtn.addEventListener('click', () => {
    str = textarea.value;
    textarea.value = toSentenceCase(str);
});

// camelCase
const toCamelCase = (str) => {
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};

camelBtn.addEventListener('click', () => {
    str = textarea.value;
    textarea.value = toCamelCase(str);
});

// snake_case
const toSnakeCase = (str) => {
    return str
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/[\s-]+/g, '_')
        .toLowerCase();
};

snakeBtn.addEventListener('click', () => {
    str = textarea.value;
    textarea.value = toSnakeCase(str);
});

// To kebab-case
const toKebabCase = (str) => {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
};

kebabBtn.addEventListener('click', () => {
    str = textarea.value;
    textarea.value = toKebabCase(str);
});

// Remove dash
removeDashBtn.addEventListener('click', () => {
    let remove_dash;
    textarea.value.includes('-')
        ? (remove_dash = textarea.value.split('-').join(' '))
        : (remove_dash = textarea.value.split('_').join(' '));
    textarea.value = remove_dash;
});
