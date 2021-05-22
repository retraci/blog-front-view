import {
	SAVE_SITE_INFO,
	SAVE_INTRODUCTION,
	SET_IS_BLOG_RENDER_COMPLETE,
	SET_IS_HOME,
	SET_IS_NOT_ARCHIVE,
} from "./mutations-types"

export default {
	[SAVE_SITE_INFO](state, {siteInfo}) {
		state.siteInfo = siteInfo
	},
	[SAVE_INTRODUCTION](state, {introduction}) {
		state.introduction = introduction
	},
	[SET_IS_BLOG_RENDER_COMPLETE](state, {ok}) {
		state.isBlogRenderComplete = ok
	},

	[SET_IS_HOME](state, {s}) {
		state.isHome = s
	},
	[SET_IS_NOT_ARCHIVE](state, {s}) {
		state.isNotArchive = s
	},
}
