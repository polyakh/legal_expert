export const SITE_URL = "https://"; // ensure compatibility with plugins that require `SITE_URL`

export const profiles = {
  instagram: "https://",
  facebook: "https://",
  linkedin: "https://www.linkedin.com/in/nataliia-poliakh-344968191",
} as const;

export const siteMetadata = {
  siteUrl: SITE_URL,
  siteInfo: {
    title: "",
    description: "",
    metaTitle: "",
    metaDescription: "",
    url: SITE_URL,
    repositoryUrl: "",
  },
  authorInfo: {
    name: "",
    description: "",
    email: "",
    jobTitle: "",
    website: "",
    address: "",
    phone: "",
    profiles: {...profiles},
  },
};
