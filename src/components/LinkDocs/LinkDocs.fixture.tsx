import { context } from '../../setup-fixture';
import { LINK_DOCS_BASE } from './fixtureConstants';
import { LinkDocs } from './LinkDocs';
import type { LinkDocsContent } from './LinkDocsContent';

export const LINK_DOCS_ONE_COLUMN: LinkDocsContent = {
  ...LINK_DOCS_BASE,
  columnsMode: 'single',
};

export const LINK_DOCS_ANOTHER_ICON: LinkDocsContent = {
  ...LINK_DOCS_BASE,
  icon: 'GlassIcon',
  title: '',
};

export const LINK_DOCS_NO_ICON: LinkDocsContent = {
  ...LINK_DOCS_BASE,
  icon: '',
};

export default {
  'two columns (default)': (
    <div className="container grid grid-cols-12">
      <LinkDocs className="col-span-12" context={context} {...LINK_DOCS_BASE} />
    </div>
  ),
  'one column': (
    <div className="container grid grid-cols-12">
      <LinkDocs className="col-span-12" context={context} {...LINK_DOCS_ONE_COLUMN} />
    </div>
  ),
  'another icon': (
    <div className="container grid grid-cols-12">
      <LinkDocs className="col-span-12" context={context} {...LINK_DOCS_ANOTHER_ICON} />
    </div>
  ),
  'no icon and title': (
    <div className="container grid grid-cols-12">
      <LinkDocs className="col-span-12" context={context} {...LINK_DOCS_NO_ICON} />
    </div>
  ),
};
