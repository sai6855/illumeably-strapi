module.exports = ({ env }) => {
  return {
    "users-permissions": {
      config: {
        ratelimit: {
          interval: 1,
          max: 5,
        },
      },
    },
  };
};
