import { t } from '../locales/index.js';

const REPO = 'https://github.com/svv2014/cognitive-biases';
const SOURCE = 'https://www.visualcapitalist.com/50-cognitive-biases-in-the-modern-world/';

/**
 * The machine block is not decoration. A model or an agent that lands here
 * should be able to find the whole dataset without parsing the page, so the
 * three files below are linked in the document rather than only in robots.txt.
 */
export default function Footer({ locale }) {
  const base = import.meta.env.BASE_URL;

  return (
    <footer className="footer">
      <section className="footer__machine" aria-labelledby="footer-machine">
        <h2 className="footer__machine-title" id="footer-machine">
          {t(locale, 'machineTitle')}
        </h2>
        <p className="footer__machine-lead">{t(locale, 'machineLead')}</p>
        <ul className="footer__machine-links">
          <li>
            <a href={`${base}biases.json`}>
              <code>biases.json</code>
              <span>{t(locale, 'machineData')}</span>
            </a>
          </li>
          <li>
            <a href={`${base}self-test.json`}>
              <code>self-test.json</code>
              <span>{t(locale, 'machineTest')}</span>
            </a>
          </li>
          <li>
            <a href={`${base}llms.txt`}>
              <code>llms.txt</code>
              <span>{t(locale, 'machineGuide')}</span>
            </a>
          </li>
        </ul>
      </section>

      <p>
        <a href={SOURCE} target="_blank" rel="noopener noreferrer">
          {t(locale, 'credits')}
        </a>
      </p>
      <p>
        <a href={REPO} target="_blank" rel="noopener noreferrer">
          {t(locale, 'contribute')}
        </a>
      </p>
    </footer>
  );
}
