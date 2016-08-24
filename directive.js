.directive("accordion", function () {
    return {
        restrict: "EA",
        scope: {},
        link: function (scope, element, attrs) {
			element.on('click', function (e) {
				scope.$apply(function() {
					var k = element.parent().find(".sub_list_present.hide");
					element.parents("ul").find(".sub_list_present").addClass("hide");
					element.parents("ul").find(".iam-down").removeClass("iam-down");
					
					if(k.length == 1) {
						k.removeClass("hide");
						element.addClass("iam-down");
					}else {
						k.addClass("hide");
						element.removeClass("iam-down");
					}
				});
			});
        }
    };
})
