import { SelectCustom } from './SelectCustom';

const rates = [
  { text: 'USD', key: '1' },
  { text: 'EUR', key: '2' },
  { text: 'Other', key: '3' },
];

export default {
  default: (
    <div className="w-[1280px] ml-10 flex flex-col">
      <SelectCustom options={rates} label="Заголовок" onChange={(_) => console.log(_)} />
    </div>
  ),
};
