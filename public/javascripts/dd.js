jQuery(document).ready(function(){
   jQuery('#svgintro').svg({
                onLoad: drawIntro
            });
			pool();
			
			sEvent();
			eEvent();
			
    jQuery(".sevent").css({"cursor":"move"}).draggable({
        helper: 'clone'
    });
    jQuery(".eevent").css({"cursor":"move"}).draggable({
        helper: 'clone'
    });
    jQuery(".ievent").css({"cursor":"move"}).draggable({
        helper: 'clone'
    });
    jQuery(".pool").css({"cursor":"move"}).draggable({
        helper: 'clone'
    });
	 jQuery(".lane").css({"cursor":"move"}).draggable({
        helper: 'clone'
    });
    jQuery(".canvas").droppable({
        accept: '.sevent,.eevent,.ievent,.pool,.lane',
        activeClass: 'droppable-active',
        hoverClass: 'droppable-hover',
        drop: function(ev, ui){
        
            jQuery('#svgintro').svg({
                onLoad: drawIntro
            });
			var svg = jQuery('#svgintro').svg('get');
                           
            if (ui.draggable.hasClass('sevent')) {
                var svg = jQuery('#svgintro').svg('get');
                sEvent();
                
            }
            else 
                if (ui.draggable.hasClass('eevent')) {
                    var svg = jQuery('#svgintro').svg('get');
                    eEvent();
                    
                }
                else 
                    if (ui.draggable.hasClass('ievent')) {
                        var svg = jQuery('#svgintro').svg('get');
                        iEvent();
                        
                    }
                    else 
                        if (ui.draggable.hasClass('pool')) {
                            var svg = jQuery('#svgintro').svg('get');
                            pool();
                            
                        }
					 else 
                        if (ui.draggable.hasClass('lane')) {
                            var svg = jQuery('#svgintro').svg('get');
                            lane();
                            
                        }	
						
        }
    });
});



var SVGNS = "http://www.w3.org/2000/svg";
var DRAGNS = "http://www.codedread.com/dragsvg";
var DRAGSTART = "dragstart";
var DRAGMOVE = "dragmove";
var DRAGDROP = "dragdrop";

function DragEvent(_mouseevt, _clientx, _clienty, _userx, _usery, _dragEnt, _mouseoffsetx, _mouseoffsety){
    this.mouseEvt = _mouseeevt;
    this.clientx = _clientx;
    this.clienty = _clienty;
    this.userx = _userx;
    this.usery = _usery;
    this.dragEnt = _dragEnt;
    this.mouseoffsetx = _mouseoffsetx;
    this.mouseoffsety = _mouseoffsety;
}

function inspect(obj){
    var str = new Array();
    var element = null;
    for (element in obj) {
        str[str.length] = element;
    }
    str.sort();
    alert(obj + ":" + str.join(' '));
}

var draggingElement = null;
var nMouseOffsetX = 0;
var nMouseOffsetY = 0;
var screenCTMInv = null;

var dragStartCallbacks = new Array();
var dragMoveCallbacks = new Array();
var dragDropCallbacks = new Array();

function addDragEventListener(dragEventStr, callbackFunc){
    if (callbackFunc == null) {
        return;
    }
    
    var arr = null;
    if (dragEventStr == DRAGSTART) {
        arr = dragStartCallbacks;
    }
    else 
        if (dragEventStr == DRAGMOVE) {
            arr = dragMoveCallbacks;
        }
        else 
            if (dragEventStr == DRAGDROP) {
                arr = dragDropCallbacks;
            }
            else {
                return;
            }
    
    for (var func = 0; func < arr.length; ++func) {
        if (arr[func] == callbackFunc) {
            return;
        }
    }
    arr[arr.length] = callbackFunc;
    
}

function removeDragEventListener(dragEventStr, callbackFunc){
    if (callbackFunc == null) {
        return;
    }
    
    var arr = null;
    if (dragEventStr == DRAGSTART) {
        arr = dragStartCallbacks;
    }
    else 
        if (dragEventStr == DRAGMOVE) {
            arr = dragMoveCallbacks;
        }
        else 
            if (dragEventStr == DRAGDROP) {
                arr = dragDropCallbacks;
            }
            else {
                return;
            }
    
    for (var func = 0; func < arr.length; ++func) {
        if (arr[func] == callbackFunc) {
            delete arr[func];
            return;
        }
    }
}

function mouseDown(evt){
    var target = evt.currentTarget;
    draggingElement = target;
    
    if (target) {
        var svg = jQuery('#svgintro').svg('get', {
            xmlns: drag = "http://www.codedread.com/dragsvg"
        });
        var p = svg;
        // p now contains the mouse position in browser client area in pixels
        p.x = evt.clientX;
        p.y = evt.clientY;
        
        
        // nMouseOffsetX keeps track of how far the mouse dragged 
        // since the last movement
        nMouseOffsetX = p.x - parseFloat(target.getAttributeNS(DRAGNS, "x"));
        nMouseOffsetY = p.y - parseFloat(target.getAttributeNS(DRAGNS, "y"));
        
        if (dragStartCallbacks.length) {
            var dragEvt = new DragEvent(evt, evt.clientX, evt.clientY, p.x, p.y, draggingElement, nMouseOffsetX, nMouseOffsetY);
            for (var func = 0; func < dragStartCallbacks.length; ++func) {
                if (dragStartCallbacks[func]) {
                    dragStartCallbacks[func](dragEvt);
                    break;
                }
            }
        }
        
    }
    
    evt.stopPropagation();
}

function mouseUp(evt){
    if (draggingElement) {
        if (dragDropCallbacks.length) {
            var svg = jQuery('#svgintro').svg('get', {
                xmlns: drag = "http://www.codedread.com/dragsvg"
            });
            var p = svg;
            p.x = evt.clientX;
            p.y = evt.clientY;
            
            
            //        p.x -= nMouseOffsetX;
            //        p.y -= nMouseOffsetY;
            
            var dragEvt = new DragEvent(evt, evt.clientX, evt.clientY, p.x, p.y, draggingElement, nMouseOffsetX, nMouseOffsetY);
            for (var func = 0; func < dragDropCallbacks.length; ++func) {
                if (dragDropCallbacks[func]) {
                    dragDropCallbacks[func](dragEvt);
                    break;
                }
            }
        }
        
        draggingElement = null;
        nMouseOffsetX = 0;
        nMouseOffsetY = 0;
    }
}

function mouseMove(evt){
    if (draggingElement) {
    
        var svg = jQuery('#svgintro').svg('get', {
            xmlns: drag = "http://www.codedread.com/dragsvg"
        });
        var p = svg;
        p.x = evt.clientX;
        p.y = evt.clientY;
        
        
        p.x -= nMouseOffsetX;
        p.y -= nMouseOffsetY;
        
        // at this point, we need to check if the drag is constrained 
        // (look for drag:constrainLeft, constrainTop, etc on the draggingElement)
        var left = draggingElement.getAttributeNS(DRAGNS, "constraintLeft");
        var top = draggingElement.getAttributeNS(DRAGNS, "constraintTop");
        var right = draggingElement.getAttributeNS(DRAGNS, "constraintRight");
        var bottom = draggingElement.getAttributeNS(DRAGNS, "constraintBottom");
        if (left && p.x < left) {
            p.x = left;
        }
        else 
            if (right && p.x > right) {
                p.x = right;
            }
        
        if (top && p.y < top) {
            p.y = top;
        }
        else 
            if (bottom && p.y > bottom) {
                p.y = bottom;
            }
        
        draggingElement.setAttributeNS(DRAGNS, "x", p.x);
        draggingElement.setAttributeNS(DRAGNS, "y", p.y);
        
        var t = draggingElement.setAttributeNS(null, "transform", 'scale(' + 2 + ')');
        draggingElement.setAttributeNS(null, "transform", "translate(" + p.x + "," + p.y + ")");
        if (dragMoveCallbacks.length) {
            var dragEvt = new DragEvent(evt, evt.clientX, evt.clientY, p.x, p.y, t, nMouseOffsetX, nMouseOffsetY);
            for (var func = 0; func < dragMoveCallbacks.length; ++func) {
                if (dragMoveCallbacks[func]) {
                    dragMoveCallbacks[func](dragEvt);
                    break;
                }
            }
        }
        
    }
}

var bEnableSVGListeners = true;

function enableDrag(ele){
    if (ele) {
        if (bEnableSVGListeners) {
            // add event listeners to the <svg> node for mouse up and mouse move
            document.documentElement.addEventListener("mouseup", mouseUp, false);
            document.documentElement.addEventListener("mousemove", mouseMove, false);
            bEnableSVGListeners = false;
        }
        
        ele.setAttributeNS(DRAGNS, "enable", true);
        
        // add event listener
        ele.addEventListener("mousedown", mouseDown, false);
        
        // find transform attribute, extract drag:x/drag:y
        // The SVG 1.1 DOM provides facilities to get a transform list for
        // any transformable entity, unfortunately, ASV does not support this
        // interface, so we're stuck with parsing the "transform" attribute.
        // 
        // Incidentally, this was absolutely the biggest pain...the transform 
        // attribute could be in any of the following forms:
        // transform="translate(100)" (ty is zero here)
        // transform="translate(   100   )" (ty is zero here)
        // transform="translate(100,200)"
        // transform="translate(100 200)"
        // transform="translate(   100,200)"
        // transform="translate(100,200   )"
        // transform="translate(100  ,  200)"
        // transform="translate( 100 , 200 ) "
        // etc...
        
        var tx = 0;
        var ty = 0;
        
        // First, I split the transform string by the parentheses, 
        // the second word is the stuff between the parantheses, which is
        // my x (and possibly y) coordinate
        var xformstr = ele.getAttributeNS(null, "transform");
        if (xformstr && xformstr.length > 0) {
            xformstr = xformstr.split(/[\(\)]/)[1];
            
            // parsing this string for a float will always give me the x coordinate
            tx = parseFloat(xformstr);
            if (isNaN(tx)) {
                tx = 0;
            } // but we play it safe anyway
            // convert tx into a string on-the-fly to get its length, find the occurrence
            // of the tx string in the original xformstr, get the substring following
            // that and parse it into a float for the y-coord
            ty = parseFloat(xformstr.substr(xformstr.indexOf(tx) + ("" + tx).length + 1));
            if (isNaN(ty)) {
                ty = 0;
            } // if it's NaN, then it defaults to zero
        }
        else {
            ele.setAttributeNS(null, "transform", "translate(0,0)");
        }
        
        // now set the DOM dragx/dragy attributes
        ele.setAttributeNS(DRAGNS, "x", tx);
        ele.setAttributeNS(DRAGNS, "y", ty);
        
        // copy old cursor value (if present)
        ele.setAttributeNS(DRAGNS, "oldcursor", ele.getAttributeNS(null, "cursor"));
        ele.setAttributeNS(null, "cursor", "move");
        
    }
}


function disableDrag(ele){
    if (ele) {
        ele.setAttributeNS(DRAGNS, "enable", false);
        ele.removeEventListener("mousedown", mouseDown, false);
        // restore old cursor
        ele.setAttributeNS(null, "cursor", ele.getAttributeNS(DRAGNS, "oldcursor"));
    }
}

// This method scans through all SVG entities, looks for the class attribute and
// determines if the SVG entity is included in the "draggable" class.  If so, it
// adds a mousedown event listener and then extracts the initial translation to 
// establish the drag:x/drag:y attributes which we'll use as shortcuts upon dragging.
function initializeDraggableElements(){
    var allChildren = document.documentElement.getElementsByTagNameNS(SVGNS, "*");
    for (var child = 0; child < allChildren.length; ++child) {
        // Adobe doesn't allow array access
        var ele = allChildren.item(child);
        
        // if ele has drag:enable="true", then set it up
        var bFoundDraggable = (ele.getAttributeNS(DRAGNS, "enable") == "true");
        
        if (bFoundDraggable) {
            enableDrag(ele);
        } // if draggable
    } // for(var child...
} // end initializeDraggableElements()
function getScreenCTM(){
    // now we find the screen CTM of the document SVG element
    var root = document.documentElement;
    var sCTM = root.createSVGMatrix();
    
    var tr = root.createSVGMatrix();
    var par = root.getAttributeNS(null, "preserveAspectRatio");
    if (!par) {
        par = "xMidYMid meet";
    } //setting to default value
    parX = par.substring(0, 4); //xMin;xMid;xMax
    parY = par.substring(4, 8); //YMin;YMid;YMax;
    ma = par.split(' ');
    mos = ma[1]; //meet;slice
    //get dimensions of the viewport
    sCTM.a = 1;
    sCTM.d = 1;
    sCTM.e = 0;
    sCTM.f = 0;
    
    w = root.getAttribute('width') || '100%'; // w = innerWidth;
    h = root.getAttribute('height') || '100%'; // h = innerHeight;
    if (w.indexOf('%') + 1) 
        w = (parseFloat(w) / 100.0) * innerWidth;
    if (h.indexOf('%') + 1) 
        h = (parseFloat(h) / 100.0) * innerHeight;
    
    
    // get the ViewBox
    var vb = (root.getAttribute('viewBox') || '0 0 ' + w + ' ' + h).split(' ');
    
    //--------------------------------------------------------------------------
    //create a matrix with current user transformation
    tr.a = root.currentScale;
    tr.d = root.currentScale;
    tr.e = root.currentTranslate.x;
    tr.f = root.currentTranslate.y;
    
    // scale factors
    sx = w / vb[2];
    sy = h / vb[3];
    
    // meetOrSlice
    if (mos == "slice") {
        s = (sx > sy ? sx : sy);
    }
    else {
        s = (sx < sy ? sx : sy);
    }
    
    //preserveAspectRatio="none"
    if (par == "none") {
        sCTM.a = sx; //scaleX
        sCTM.d = sy; //scaleY
        sCTM.e = -vb[0] * sx; //translateX
        sCTM.f = -vb[0] * sy; //translateY
        sCTM = tr.multiply(sCTM);//taking user transformations into account
    }
    else {
        sCTM.a = s; //scaleX
        sCTM.d = s; //scaleY
        //-------------------------------------------------------
        switch (parX) {
            case 'xMid':
                sCTM.e = ((w - vb[2] * s) / 2) - vb[0] * s; //translateX
                break;
            case 'xMin':
                sCTM.e = -vb[0] * s; //translateX
                break;
            case 'xMax':
                sCTM.e = (w - vb[2] * s) - vb[0] * s; //translateX
                break;
        }
        //------------------------------------------------------------
        switch (parY) {
            case 'YMid':
                sCTM.f = (h - vb[3] * s) / 2 - vb[1] * s; //translateY
                break;
            case 'YMin':
                sCTM.f = -vb[1] * s; //translateY
                break;
            case 'YMax':
                sCTM.f = (h - vb[3] * s) - vb[1] * s; //translateY
                break;
        }
        
        sCTM = tr.multiply(sCTM); //taking user transformations into acount
    } // else
    return sCTM;
}
