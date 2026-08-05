import { t } from '../locales/index.js';

const REPO = 'https://github.com/tetyanaking/cognitive-biases';
const SOURCE = 'https://www.visualcapitalist.com/50-cognitive-biases-in-the-modern-world/';

export default function Footer({ locale }) {
  return (
    <footer className="footer">
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
