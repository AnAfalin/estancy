$(document).ready(function() {

	let tabAreaName = 'tabCount_';
	$(".tab-area").each(function(index, el) {
		let savedTabCount = localStorage.getItem(tabAreaName+$(this).data('name'));
		if(savedTabCount != null) {
			$(".tab-area .tab-item").removeClass('active');
			$(".tab-area .tab-item.c"+savedTabCount).addClass('active');
		}
		else {
			$(".tab-area .tab-item.c1").addClass('active');
		}
	});
	$(".tab-label .tab-item").click(function(event) {
		let tabCount = $(this).index()+1;
		localStorage.setItem(tabAreaName+$(this).closest('.tab-area').data('name'), tabCount);
		$(this).addClass('active').siblings().removeClass('active');
		$(this).closest('.tab-area').find('.tab-page .tab-item.c'+tabCount).addClass('active').siblings().removeClass('active');
	});

});