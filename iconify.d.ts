/// <reference types="react" />

declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          icon: string;
          width?: string | number;
          height?: string | number;
          inline?: boolean;
          class?: string;
        },
        HTMLElement
      >;
    }
  }
}

