require('dotenv').config()

module.exports = {
    siteMetadata: {
        title: `Ramadhan Makers`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        // {
        //     resolve: 'gatsby-source-google-sheets',
        //     options: {
        //         spreadsheetId: '1KDtkZGsYbvKZp1FW-kALT1uNTfPmGjXwbwFHWBJ2DCg',
        //         worksheetTitle: 'Sheet1',
        //         credentials: require('./cred.json'),
        //     },
        // },
        {
            resolve: `gatsby-source-google-sheet`,
            options: {
                // For protected spreadsheets you can use two-legged OAuth as described here:
                // https://www.npmjs.com/package/google-spreadsheet#service-account-recommended-method
                creds: {
                    client_email: process.env.GS_CLIENT_EMAIL || ``,
                    private_key: process.env.GS_PRIVATE_KEY.replace(/\\n/g, '\n') || ``,
                },
                // This is the bit after "/d/" and before "/edit" in the URL of a
                // Google Sheets document. I.e.,
                // https://docs.google.com/spreadsheets/d/1ec1bO25bbEL4pdZjhlV3AppMtnO65D0ZI8fXy4z47Dw/edit#gid=0
                spreadsheetKey: `1KDtkZGsYbvKZp1FW-kALT1uNTfPmGjXwbwFHWBJ2DCg`,
                rootName: 'Sheet1', // default is Sheet
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Poppins`,
                        variants: [`400`, `500`, `700`],
                    },
                ],
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
