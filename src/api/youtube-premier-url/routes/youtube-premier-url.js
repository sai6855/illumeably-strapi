"use strict";

/**
 * youtube-premier-url router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;
console.log(createCoreRouter("api::youtube-premier-url.youtube-premier-url"));
module.exports = createCoreRouter(
  "api::youtube-premier-url.youtube-premier-url",
  {
    config: {
      find: {
        middlewares: [
          // point to a registered middleware
          "plugin::users-permissions.rateLimit",
        ],
      },
    },
  }
);
