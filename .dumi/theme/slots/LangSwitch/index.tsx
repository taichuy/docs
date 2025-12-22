import { history, useIntl, useLocale, useSiteData } from 'dumi';
import React, { useState, useEffect } from 'react';
import './index.less';

function getTargetLocalePath({ pathname, current, target }: { pathname: string; current: any; target: any }) {
  const clearPath =
    'base' in current
      ? // handle '/en-US/a' => '/a' or '/en-US' => '' => '/'
        pathname.replace(current.base.replace(/\/$/, ''), '') || '/'
      : pathname.replace(new RegExp(`${current.suffix}$`), '');

  return 'base' in target
    ? `${
        // for `/` base, strip duplicated leading slash
        target.base.replace(/\/$/, '')
      }${clearPath}` // for `/` clearPath, strip duplicated ending slash
        .replace(/([^/])\/$/, '$1')
    : `${clearPath}${target.suffix}`;
}

const LangSwitch = () => {
  const { locales } = useSiteData();
  const { locale } = useIntl();
  const current = useLocale();
  const [isShow, setIsShow] = useState(false);

  // do not render in single language
  if (locales.length <= 1) return null;

  const handleSwitch = (targetId: string) => {
    const target = locales.find(({ id }) => id === targetId);
    if (target && target.id !== current.id) {
      history.push(
        getTargetLocalePath({
          pathname: history.location.pathname,
          current,
          target,
        }),
      );
    }
    setIsShow(false);
  };

  return (
    <div 
      className="dumi-default-lang-switch"
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <div className="dumi-default-lang-switch-btn">
        <svg
          viewBox="0 0 24 24"
          width="1.2em"
          height="1.2em"
          fill="currentColor"
        >
          <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
        </svg>
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="0.8em"
          height="0.8em"
          fill="currentColor"
        >
          <path d="M831.636364 366.545455L512 686.138182 192.363636 366.545455h639.272728z"></path>
        </svg>
      </div>
      {isShow && (
        <ul className="dumi-default-lang-switch-menu">
          {locales.map((item) => (
            <li 
              key={item.id} 
              className={item.id === current.id ? 'active' : ''}
              onClick={() => handleSwitch(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LangSwitch;
