import type { LinkAndArrow, Metro, Location } from './OfficeCardContent';
import { renderMetro } from './renderMetro';
import { Img } from '../../ui-kit/Img/Img';
import { TEXT_COLORS } from './textColors';

type renderPageNameProps = {
  title: string;
  linkAndArrow?: LinkAndArrow;
  location?: Location;
  metros?: Metro[];
};

export function renderPageName({ title, linkAndArrow, location, metros }: renderPageNameProps) {
  return (
    <div className="mb-2 flex flex-col content-center ">
      <div className="mb-2 flex flex-row gap-2.5 h-full font-medium text-center text-h6 justify-start content-center">
        <div>{title}</div>
        {linkAndArrow?.link ? (
          <div className={`${TEXT_COLORS['green']} text-base text-center`}>{linkAndArrow.link}</div>
        ) : null}
        {linkAndArrow?.iconbutton ? (
          <Img
            className="mr-[10px] max-w-6 max-h-6"
            width="24px"
            height="24px"
            asSVG
            image={linkAndArrow.iconbutton}
          />
        ) : null}
      </div>

      <div className="mb-2 flex flex-row h-full font-normal text-l ">
        {location?.icon ? (
          <Img
            className="mr-[10px] max-w-6 max-h-6"
            width="24px"
            height="24px"
            asSVG
            image={location.icon}
          />
        ) : null}
        {location?.adress ? <span className="">{location.adress}</span> : null}
      </div>
      {metros?.length ? <div className="flex flex-row gap-3">{metros.map(renderMetro)}</div> : null}
    </div>
  );
}
