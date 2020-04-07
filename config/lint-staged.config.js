const escape = require('shell-quote').quote;
const isWin = process.platform === 'win32';

module.exports = {
    '**/*.{js,jsx,ts,tsx}': (filenames) => {
        const escapedFileNames = filenames
            .map(
                (filename) =>
                    `"${
                        isWin
                            ? filename.replace(/[\[\]]/g, '[$&]')
                            : escape([filename])
                    }"`
            )
            .join(' ');
        return [
            `prettier --with-node-modules --ignore-path='./.prettierignore_staged' --write ${escapedFileNames}`,
            `tslint --fix --config tslint.json ${filenames
                .map((f) => `"${f.replace(/[\[\]]/g, '[$&]')}"`)
                .join(' ')}`,
            `git add ${escapedFileNames}`
        ];
    },
    '**/*.{json,md,mdx,css,html,yml,yaml,scss}': (filenames) => {
        const escapedFileNames = filenames
            .map(
                (filename) =>
                    `"${
                        isWin
                            ? filename.replace(/[\[\]]/g, '[$&]')
                            : escape([filename])
                    }"`
            )
            .join(' ');
        return [
            `prettier --with-node-modules --ignore-path='./.prettierignore_staged' --write ${escapedFileNames}`,
            `git add ${escapedFileNames}`
        ];
    }
};
