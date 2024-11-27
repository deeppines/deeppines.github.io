const HEADER_PATTERN = /^[A-Z]{1,6}-[0-9]{0,7}:\s(\w*)(?:\(([\w\$\.\-\* ]*)\))?\: (.*)$/;
const TYPE_ENUM = ['build', 'docs', 'feat', 'fix', 'perf', 'refactor', 'style', 'test', 'wip'];

export default {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      //   headerPattern: HEADER_PATTERN,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  rules: {
    'scope-case': [2, 'always', 'lowerCase'],
    'type-case': [2, 'always', 'lowerCase'],
    'type-enum': [2, 'always', TYPE_ENUM],
    'references-empty': [2, 'always'],
  },
};
