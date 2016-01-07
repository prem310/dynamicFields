var directiveModule=angular.module("directiveModule",[]);

directiveModule.directive("columnar",function(){
	return {
		restrict:"E",
		template:"<div>This is working</div>"
	}
});