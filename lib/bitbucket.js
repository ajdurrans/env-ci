// https://confluence.atlassian.com/bitbucket/environment-variables-794502608.html

module.exports = {
	detect() {
		return Boolean(process.env.CI);
	},
	configuration() {
		return {
			service: 'bitbucket',
			commit: process.env.BITBUCKET_COMMIT,
			build: process.env.BITBUCKET_BUILD_NUMBER,
			buildUrl: `https://bitbucket.org/${process.env.BITBUCKET_REPO_SLUG}/addon/pipelines/home#!/results/${
				process.env.BITBUCKET_BUILD_NUMBER
			}`,
			branch: process.env.BITBUCKET_BRANCH,
			slug: process.env.BITBUCKET_REPO_SLUG,
			root: process.env.BITBUCKET_CLONE_DIR,
		};
	},
};
