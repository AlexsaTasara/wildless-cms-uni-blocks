import React from 'react';
import type { Picture } from '../../model/Picture';
import { context } from '../../setup-fixture';
import { Tile } from './Tile';

const image: Picture = {
  src: 'money-1.png',
  format: 'webp',
  size: {
    width: 280,
    height: 280,
  },
};

export default {
  credit: (
    <div className="p-2">
      <div className="container grid grid-cols-12">
        <Tile
          context={context}
          title={'Кредит до 5 000 000 Р\nбез залога и поручителей'}
          items={[
            'Потребительский кредит по специальной процентной ставке',
            'Получите деньги без залога и поручительства',
            'Кредитный лимит до 5 млн ₽',
          ]}
          buttons={[
            {
              text: 'Оформить кредит',
              href: '/credit-cards',
              version: 'primary',
            },
          ]}
          image={image}
        />
      </div>
    </div>
  ),
};
