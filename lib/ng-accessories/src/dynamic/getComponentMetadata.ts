import { getAnnotations, getParameters, getPropMetadata } from '../utils';
import { NgStory } from '../types';

export const getComponentMetadata = ({
  component,
  props = {},
  propsMeta = {},
  moduleMetadata = {
    imports: [],
    schemas: [],
    declarations: [],
    providers: [],
  },
}: NgStory) => {
  if (!component || typeof component !== 'function') {
    throw new Error('No valid component provided');
  }

  const componentMetadata = getAnnotations(component)[0] || {};
  const propsMetadata = getPropMetadata(component);
  const paramsMetadata = getParameters(component);

  Object.keys(propsMeta).map(key => {
    (<any>propsMetadata)[key] = (<any>propsMeta)[key];
  });

  const { imports = [], schemas = [], declarations = [], providers = [] } = moduleMetadata;

  return {
    component,
    props,
    componentMeta: componentMetadata,
    propsMeta: propsMetadata,
    params: paramsMetadata,
    moduleMeta: {
      imports,
      schemas,
      declarations,
      providers,
    },
  };
};
