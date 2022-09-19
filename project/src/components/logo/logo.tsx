import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Logo(): JSX.Element {
  return (
    <Link to={AppRoute.Root}>
      <svg width="126" height="50" viewBox="0 0 126 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <path fill="url(#a)" d="M0 0h126v50H0z"/>
        <defs>
          <pattern id="a" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#b" transform="matrix(.00336 0 0 .00847 0 0)"/>
          </pattern>
          <image id="b" width="300" height="118"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </Link>
  );
}

export default Logo;
