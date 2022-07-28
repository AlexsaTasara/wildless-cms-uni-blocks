import { mobileContext } from '../../setup-fixture';
import { LINK_DOCS_BASE } from './constants';
import { LinkDocs } from './LinkDocs';

export default {
  'vertical (default)': (
    <div className="container grid grid-cols-12">
      <LinkDocs
        className="col-span-12"
        context={mobileContext}
        subtitle="Откройте мультивалютный вклад, чтобы распределить свои вложения"
        {...LINK_DOCS_BASE}
      />
    </div>
  ),
  'vertical, no border': (
    <div className="container grid grid-cols-12">
      <LinkDocs
        className="col-span-12"
        context={mobileContext}
        hasBorder={false}
        {...LINK_DOCS_BASE}
      />
    </div>
  ),
  'horizontal, swipe list': (
    <div className="container grid grid-cols-12">
      <LinkDocs
        className="col-span-12"
        context={mobileContext}
        {...LINK_DOCS_BASE}
        listMode={'horizontal'}
      />
    </div>
  ),
};
