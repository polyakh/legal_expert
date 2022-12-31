export const SITE_URL = "https://"; // ensure compatibility with plugins that require `SITE_URL`

module.exports = {
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
        profiles: {
            twitter: "",
            github: "",
            linkedin: "",
            instagram: "",
            telegram: "",
        },
    },
};