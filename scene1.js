(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.button1psd = function() {
	this.initialize(img.button1psd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,235);


(lib.cloud = function() {
	this.initialize(img.cloud);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,213);


(lib.down = function() {
	this.initialize(img.down);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,211);


(lib.over = function() {
	this.initialize(img.over);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,235);


(lib.school = function() {
	this.initialize(img.school);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.sunfaced3 = function() {
	this.initialize(img.sunfaced3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,119);


(lib.sunfaced3_1 = function() {
	this.initialize(img.sunfaced3_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,123);


(lib.sunfaces2 = function() {
	this.initialize(img.sunfaces2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,167);


(lib.sunfaces2_1 = function() {
	this.initialize(img.sunfaces2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,143);


(lib.sunfaces4 = function() {
	this.initialize(img.sunfaces4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,128);


(lib.sunfaces4_1 = function() {
	this.initialize(img.sunfaces4_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,117);


(lib.sun1 = function() {
	this.initialize(img.sun1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,385,378);


(lib.sun2 = function() {
	this.initialize(img.sun2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,383,373);


(lib.sun3 = function() {
	this.initialize(img.sun3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,512);


(lib.up = function() {
	this.initialize(img.up);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,212);


(lib.sunmiesmilepsd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun_faced3
	this.instance = new lib.sunfaced3();
	this.instance.setTransform(568,209);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(568,209,201,119);


(lib.sunmiddleeyespsd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun_faces2
	this.instance = new lib.sunfaces2_1();
	this.instance.setTransform(502,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(502,180,187,143);


(lib.sunfacedpsd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun_faces4
	this.instance = new lib.sunfaces4_1();
	this.instance.setTransform(509,232);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(509,232,201,117);


(lib.sun_reversed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun1_복사본
	this.instance = new lib.sun2();
	this.instance.setTransform(-24,44);

	this.instance_1 = new lib.sun3();
	this.instance_1.setTransform(-51,3);

	this.instance_2 = new lib.sun1();
	this.instance_2.setTransform(-17,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{x:-51,y:3}}]},6).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_1,p:{x:-52,y:1}}]},5).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,1,513,514);


(lib.skip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AmtGuIAAtbINbAAIAANbg");
	this.shape.setTransform(43,43);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,86);


(lib.buttonfirst복사본 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.button1psd();
	this.instance.setTransform(-96,-107);

	this.instance_1 = new lib.up();
	this.instance_1.setTransform(-86,-95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DAD7E0").s().p("AqJKKIAA0TIUTAAIAAUTg");
	this.shape.setTransform(18.025,5.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1,scaleY:1,x:-96,y:-107}}]}).to({state:[{t:this.instance,p:{scaleX:0.8553,scaleY:0.8553,x:-79,y:-92}}]},1).to({state:[{t:this.instance,p:{scaleX:0.9064,scaleY:0.9064,x:-83,y:-95}}]},1).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:0.8064,scaleY:0.8064,x:-71,y:-86}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-107,239,235);


(lib.buttonfirst = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.up();
	this.instance.setTransform(-86,-95);

	this.instance_1 = new lib.over();
	this.instance_1.setTransform(-96,-107);

	this.instance_2 = new lib.down();
	this.instance_2.setTransform(-87,-95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance_2,p:{x:-87,y:-95}}]},1).to({state:[{t:this.instance_2,p:{x:-85,y:-94}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-107,239,235);


(lib.sunface = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.sunfaced3_1();
	this.instance.setTransform(-49,-77);

	this.instance_1 = new lib.sunmiesmilepsd("synched",0);
	this.instance_1.setTransform(50,-16.95,1,1,0,0,0,668.5,268.5);

	this.instance_2 = new lib.sunfacedpsd("synched",0);
	this.instance_2.setTransform(50,-16.95,1,1,0,0,0,609.5,290.5);

	this.instance_3 = new lib.sunfaces4();
	this.instance_3.setTransform(-49,-77);

	this.instance_4 = new lib.sunmiddleeyespsd("synched",0);
	this.instance_4.setTransform(46,-22.95,1,1,0,0,0,595.5,251.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.sunfaces2();
	this.instance_5.setTransform(-49,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},61).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3,p:{y:-77}}]},2).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_3,p:{y:-79}}]},2).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_3,p:{y:-79}}]},2).to({state:[{t:this.instance_4}]},7).to({state:[{t:this.instance_5}]},2).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false,x:45,y:-21.95},0).to({_off:true},2).wait(6).to({_off:false,x:46,y:-22.95},0).to({_off:true},2).wait(12).to({_off:false,x:45,y:-21.95},0).to({_off:true},2).wait(7).to({_off:false,x:46,y:-22.95},0).to({_off:true},2).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,-120,202.5,171);


// stage content:
(lib.개발자버튼추가_HTML5Canvas_scene1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,152];
	// timeline functions:
	this.frame_0 = function() {
		this.skipBtn.addEventListener("click", function() {
		    exportRoot.gotoAndPlay(1); // 원하는 프레임 또는 레이블로 이동
		});
		let isScenePaused = false;
		
		this.pauseBtn.addEventListener("click", () => {
		  if (isScenePaused) {
		    this.play();  // 재생
		  } else {
		    this.stop();  // 정지
		  }
		  isScenePaused = !isScenePaused;
		});
	}
	this.frame_152 = function() {
		this.stop(); // 타임라인 멈추기
		
		this.startbtn.visible = true; // 버튼 보이게 (선택 사항)
		
		this.startbtn.addEventListener("click", () => {
		  this.gotoAndPlay("nextscene");
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(152).call(this.frame_152).wait(284));

	// 레이어_1
	this.skipBtn = new lib.skip();
	this.skipBtn.name = "skipBtn";
	this.skipBtn.setTransform(711.65,383.4,0.6426,0.7286,0,0,0,43.2,43.1);
	new cjs.ButtonHelper(this.skipBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.skipBtn).wait(436));

	// 레이어_9
	this.startbtn = new lib.buttonfirst();
	this.startbtn.name = "startbtn";
	this.startbtn.setTransform(844.2,566.1);
	this.startbtn._off = true;
	new cjs.ButtonHelper(this.startbtn, 0, 1, 2, false, new lib.buttonfirst(), 3);

	this.timeline.addTween(cjs.Tween.get(this.startbtn).wait(152).to({_off:false},0).to({_off:true},255).wait(29));

	// 레이어_4
	this.pauseBtn = new lib.buttonfirst복사본();
	this.pauseBtn.name = "pauseBtn";
	this.pauseBtn.setTransform(882.15,168.95,0.4316,0.4594,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.pauseBtn, 0, 1, 2, false, new lib.buttonfirst복사본(), 3);

	this.instance = new lib.sunface("synched",0);
	this.instance.setTransform(158,247.95,0.8016,0.8533,0,0,0,50.9,-34.5);

	this.instance_1 = new lib.sun_reversed("synched",0);
	this.instance_1.setTransform(181.25,266.4,0.8016,0.8533,0,0,0,204.6,258.1);

	this.instance_2 = new lib.cloud();
	this.instance_2.setTransform(354,70,0.8016,0.8533);

	this.instance_3 = new lib.cloud();
	this.instance_3.setTransform(-124,321,0.8016,0.8533);

	this.instance_4 = new lib.school();
	this.instance_4.setTransform(-2,84,0.8016,0.8533);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{scaleY:0.8533,y:84}},{t:this.instance_3,p:{scaleY:0.8533,y:321}},{t:this.instance_2,p:{scaleY:0.8533,x:354,y:70}},{t:this.instance_1,p:{regX:204.6,regY:258.1,scaleY:0.8533,x:181.25,y:266.4,startPosition:0}},{t:this.instance,p:{scaleY:0.8533,x:158,y:247.95,startPosition:0}},{t:this.pauseBtn}]}).to({state:[{t:this.instance_4,p:{scaleY:0.8539,y:82}},{t:this.instance_3,p:{scaleY:0.8539,y:320}},{t:this.instance_2,p:{scaleY:0.8539,x:355,y:69}},{t:this.instance_1,p:{regX:204.5,regY:258,scaleY:0.8539,x:181.05,y:265.25,startPosition:17}},{t:this.instance,p:{scaleY:0.8539,x:157.8,y:246.8,startPosition:149}}]},149).wait(287));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(388,429.8,636.0999999999999,268.59999999999997);
// library properties:
lib.properties = {
	id: 'ECE823ED6044124D81ED099E855DC6E0',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/button1psd.png", id:"button1psd"},
		{src:"images/cloud.png", id:"cloud"},
		{src:"images/down.png", id:"down"},
		{src:"images/over.png", id:"over"},
		{src:"images/school.png", id:"school"},
		{src:"images/sunfaced3.png", id:"sunfaced3"},
		{src:"images/sunfaced3_1.png", id:"sunfaced3_1"},
		{src:"images/sunfaces2.png", id:"sunfaces2"},
		{src:"images/sunfaces2_1.png", id:"sunfaces2_1"},
		{src:"images/sunfaces4.png", id:"sunfaces4"},
		{src:"images/sunfaces4_1.png", id:"sunfaces4_1"},
		{src:"images/sun1.png", id:"sun1"},
		{src:"images/sun2.png", id:"sun2"},
		{src:"images/sun3.png", id:"sun3"},
		{src:"images/up.png", id:"up"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['ECE823ED6044124D81ED099E855DC6E0'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;