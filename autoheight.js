(function(){
	if (window.AutoHeight) {
		return
	} 
	else {
		window.AutoHeight=function(elements) {
			var controls=document.getElementsByClassName('autoheight');
			var setHeight,i,ratio,includingBorder;
			var i;
			var func=function(ratio,includingBorder){
				var height;
				ratio=ratio||1;
				includingBorder=includingBorder||true;
				height=includingBorder?this.offsetWidth:this.clientWidth;
				this.style.height=height*ratio+'px';
			};
			if (this===window) {
				for (i=0;i<controls.length;i++){
					ratio=controls[i].getAttribute('data-autoheightratio')||1;
					includingBorder=controls[i].getAttribute('data-includingborder')||true;
					setHeight=includingBorder?controls[i].offsetWidth:controls[i].clientWidth;
					controls[i].style.height=setHeight*ratio+'px';
				}
			}
			
			else if (elements.length) {
				for (i=0;i<elements.length;i++){
					elements[i].controlHeight=func;
				}
			}
			else {
				elements.controlHeight=func;
			}
			return elements;
		}
	}
})()