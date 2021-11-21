import theScssVars from '../../scss/variables/scss-variables.module.scss';

const scssVars: ScssVars = Object.keys(theScssVars).reduce((combined, key) => {
  const segments = key.split('-');
  let currentTarget = combined;

  segments.forEach((segment, index) => {
    if (!currentTarget[segment]) {
      currentTarget[segment] = {};
    }

    if (index !== segments.length - 1) {
      currentTarget = currentTarget[segment];
    } else {
      let scssVar: string | number = theScssVars[key].replace(/"/g, '');

      if (!Number.isNaN(scssVar)) {
        scssVar = parseFloat(scssVar);
      }

      currentTarget[segment] = scssVar;
    }
  });

  return combined;
}, {});

export default scssVars;
