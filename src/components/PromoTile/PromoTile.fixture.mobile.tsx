import React from 'react';
import { context } from '../../setup-fixture';
import { PromoTile } from './PromoTile';

export default {
  default: (
    <div className="p-2 bg-black">
      <div className="container grid grid-cols-12">
        <PromoTile
          context={context}
          title="Вклады в любой валюте"
          description="Вклады до 1,4 млн застрахованы в государственной системе страхования вкладов"
          version="secondary"
          buttons={[
            {
              text: 'Подробнее',
              href: '/credits',
              version: 'secondary',
            },
          ]}
        />
      </div>
    </div>
  ),
};
