(function(){
	if (window.AutoHeight) {
		return
	} 
	else {
		window.AutoHeight=function(element) {
			var controls=document.getElementsByClassName('autoheight');
			var setHeight,i,ratio,includingBorder;
			if (this===window) {
				for (i=0;i<controls.length;i++){
					ratio=controls[i].getAttribute('data-autoheightratio')||1;
					includingBorder=controls[i].getAttribute('data-includingborder')||true;
					setHeight=includingBorder?controls[i].offsetWidth:controls[i].clientWidth;
					controls[i].style.height=setHeight*ratio+'px';
				}
			}
			else {
				element.controlHeight=function(ratio,includingBorder){
					var height;
					ratio=ratio||1;
					includingBorder=includingBorder||true;
					height=includingBorder?element.offsetWidth:element.clientWidth;
					element.style.height=height*ratio+'px';
				};
			}
			return element;
		}
	}
})()