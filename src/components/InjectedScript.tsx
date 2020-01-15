import * as React from 'react';

interface InjectedScriptConfig {
  id: string;
  src: string;
}

export const useInjectedScript = ({ id, src }: InjectedScriptConfig) => {
  const [isLoaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const existingScript = document.getElementById(id);

    if (existingScript) {
      setLoaded(true);
    } else {
      const script = document.createElement('script');

      script.async = true;
      script.crossOrigin = 'anonymous';
      script.id = id;
      script.type = 'text/javascript';
      script.onload = () => {
        setLoaded(true);
      };

      script.src = src;

      document.head && document.head.appendChild(script);
    }
  }, [id, src]);

  return { isLoaded, setLoaded };
};
