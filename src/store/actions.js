import {
	SAVE_SITE_INFO,
	SAVE_INTRODUCTION,
	SET_IS_BLOG_RENDER_COMPLETE,
	SET_IS_HOME,
	SET_IS_NOT_ARCHIVE,
} from "./mutations-types"

export default {
	saveSiteInfo({commit}, siteInfo) {
		commit(SAVE_SITE_INFO, {siteInfo})
	},
	saveIntroduction({commit}, introduction) {
		commit(SAVE_INTRODUCTION, {introduction})
	},
	setIsBlogRenderComplete({commit}, ok) {
		commit(SET_IS_BLOG_RENDER_COMPLETE, {ok})
	},

	setIsHome({commit}, s) {
		commit(SET_IS_HOME, {s})
	},
	setIsNotArchive({commit}, s) {
		commit(SET_IS_NOT_ARCHIVE, {s})
	},

}
