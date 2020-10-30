export interface Page {
  date: string;
  inputPath: string;
  fileSlug: string;
  filePathStem: string;
  url: string;
  outputPath: string;
}

export interface Topic {
  title?: string;
  shortDescription?: string;
  slug?: string;
  logo?: any;
  url?: string;
}

export interface Site {
  siteTitle?: string;
  whatIDo?: {
    title?: string;
    subtitle?: string;
    featuredTopics?: Topic[];
  };
  builtWith?: {
    title?: string;
    featuredTopics?: Topic[];
  };
}
