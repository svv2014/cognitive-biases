import { getBias } from '../locales/index.js';
import { hrefBias } from '../lib/router.js';

/** A compact, linked row — icon, name, one-line description. */
export default function MiniBias({ locale, id }) {
  const bias = getBias(locale, id);
  return (
    <li>
      <a className="mini" href={hrefBias(id)}>
        <img
          className="mini__icon"
          src={`${import.meta.env.BASE_URL}icons/${id}.png`}
          alt=""
          loading="lazy"
          decoding="async"
        />
        <span className="mini__text">
          <span className="mini__name">{bias.name}</span>
          <span className="mini__desc">{bias.description}</span>
        </span>
      </a>
    </li>
  );
}
