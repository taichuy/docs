declare module 'dumi/theme/slots/Content' {
  import React from 'react';
  const Content: React.FC<{ children: React.ReactNode }>;
  export default Content;
}

declare module 'dumi/theme/slots/ContentFooter' {
  import React from 'react';
  const ContentFooter: React.FC;
  export default ContentFooter;
}

declare module 'dumi/theme/slots/Features' {
  import React from 'react';
  const Features: React.FC;
  export default Features;
}

declare module 'dumi/theme/slots/Header' {
  import React from 'react';
  const Header: React.FC;
  export default Header;
}

declare module 'dumi/theme/slots/Hero' {
  import React from 'react';
  const Hero: React.FC;
  export default Hero;
}

declare module 'dumi/theme/slots/Sidebar' {
  import React from 'react';
  const Sidebar: React.FC;
  export default Sidebar;
}

declare module 'dumi/theme/slots/Toc' {
  import React from 'react';
  const Toc: React.FC;
  export default Toc;
}

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}
