import ace from "./../../node_modules/brace/index"
ace.define(
	"ace/theme/tomorrow_night_nineties",
	["require", "exports", "module", "ace/lib/dom"],
	function(acequire, exports, module) {
		exports.isDark = true
		exports.cssClass = "ace-tomorrow-night-nineties"
		exports.cssText =
			// eslint-disable-next-line
			".ace-tomorrow-night-nineties .ace_gutter {\
background: #232323;\
color: #CCC\
}\
.ace-tomorrow-night-nineties .ace_print-margin {\
width: 1px;\
background: #232323\
}\
.ace-tomorrow-night-nineties {\
background-color: #232323;\
color: #DDD\
}\
.ace-tomorrow-night-nineties .ace_constant.ace_other,\
.ace-tomorrow-night-nineties .ace_cursor {\
color: #CCCCCC\
}\
.ace-tomorrow-night-nineties .ace_marker-layer .ace_selection {\
background: #515151\
}\
.ace-tomorrow-night-nineties.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #232323;\
}\
.ace-tomorrow-night-nineties .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-tomorrow-night-nineties .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
}\
.ace-tomorrow-night-bright .ace_stack {\
background: rgb(66, 90, 44)\
}\
.ace-tomorrow-night-nineties .ace_marker-layer .ace_active-line {\
background: #393939\
}\
.ace-tomorrow-night-nineties .ace_gutter-active-line {\
background-color: #393939\
}\
.ace-tomorrow-night-nineties .ace_marker-layer .ace_selected-word {\
}\
.ace-tomorrow-night-nineties .ace_invisible {\
color: #6A6A6A\
}\
.ace-tomorrow-night-nineties .ace_keyword,\
.ace-tomorrow-night-nineties .ace_meta,\
.ace-tomorrow-night-nineties .ace_storage,\
.ace-tomorrow-night-nineties .ace_storage.ace_type,\
.ace-tomorrow-night-nineties .ace_support.ace_type {\
color: #CC99CC\
}\
.ace-tomorrow-night-nineties .ace_keyword.ace_operator {\
color: #66CCCC\
}\
.ace-tomorrow-night-nineties .ace_constant.ace_character,\
.ace-tomorrow-night-nineties .ace_constant.ace_language,\
.ace-tomorrow-night-nineties .ace_constant.ace_numeric,\
.ace-tomorrow-night-nineties .ace_keyword.ace_other.ace_unit,\
.ace-tomorrow-night-nineties .ace_support.ace_constant,\
.ace-tomorrow-night-nineties .ace_variable.ace_parameter {\
color: #FF0000\
}\
.ace-tomorrow-night-nineties .ace_invalid {\
color: #CDCDCD;\
background-color: #F2777A\
}\
.ace-tomorrow-night-nineties .ace_invalid.ace_deprecated {\
color: #CDCDCD;\
background-color: #CC99CC\
}\
.ace-tomorrow-night-nineties .ace_fold {\
background-color: #6699CC;\
border-color: #0000\
}\
.ace-tomorrow-night-nineties .ace_entity.ace_name.ace_function,\
.ace-tomorrow-night-nineties .ace_support.ace_function,\
.ace-tomorrow-night-nineties .ace_variable {\
color: #6699CC\
}\
.ace-tomorrow-night-nineties .ace_support.ace_class,\
.ace-tomorrow-night-nineties .ace_support.ace_type {\
color: #FFCC66\
}\
.ace-tomorrow-night-nineties .ace_heading,\
.ace-tomorrow-night-nineties .ace_markup.ace_heading,\
.ace-tomorrow-night-nineties .ace_string {\
    color: #cc9381\
}\
//Color of Strings\
.ace-tomorrow-night-nineties .ace_comment {\
color: #999999\
}\
.ace-tomorrow-night-nineties .ace_entity.ace_name.ace_tag,\
.ace-tomorrow-night-nineties .ace_entity.ace_other.ace_attribute-name,\
.ace-tomorrow-night-nineties .ace_meta.ace_tag,\
.ace-tomorrow-night-nineties .ace_variable {\
color: #67c6f0\
}\
//Color of Keywords\
.ace-tomorrow-night-nineties .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ09NrYAgMjP4PAAtGAwchHMyAAAAAAElFTkSuQmCC) right repeat-y\
}"
		var dom = acequire("../lib/dom")
		dom.importCssString(exports.cssText, exports.cssClass)
	}
)
