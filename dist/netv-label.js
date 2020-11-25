(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./netv-label.js":
/*!***********************!*\
  !*** ./netv-label.js ***!
  \***********************/
/*! namespace exports */
/*! export Label [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Label": () => /* binding */ Label
/* harmony export */ });
/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description netv's label
 */

class Label {
    constructor(netv) {
        this.$_core = netv

        this.$_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        this.$_core.$_container.prepend(this.$_svg)
        this.$_svg.setAttribute('width', this.$_core.$_configs.width)
        this.$_svg.setAttribute('height', this.$_core.$_configs.height)
        this.$_core.$_container.style.position = 'relative'
        this.$_core.$_container.style.overflow = 'hidden'
        this.$_core.$_container.style.width = this.$_core.$_configs.width
        this.$_core.$_container.style.height = this.$_core.$_configs.height
        this.$_svg.style.position = 'absolute'
        this.$_svg.style.pointerEvents = 'none'

    }

    _drawNode(node, transform, drawFunc) {
        const pos = node.position()
        const x = pos.x * transform.k + transform.x
        const y = pos.y * transform.k + transform.y

        const content = drawFunc(node)

        let gElement = this.getLabel(node)
        if (gElement) {
            this._removeContent(gElement)
            gElement.setAttribute('transform', `translate(${x} ${y})`)
            gElement.append(content)
        } else {
            gElement = document.createElementNS('http://www.w3.org/2000/svg', 'g')
            gElement.setAttribute('id', `${node.id()}`)
            gElement.setAttribute('transform', `translate(${x} ${y})`)
            gElement.append(content)

            this.$_svg.prepend(gElement) // NOTE: make last added text at top
        }
    }

    _updateNodePosition(node, transform) {
        const pos = node.position()
        const x = pos.x * transform.k + transform.x
        const y = pos.y * transform.k + transform.y

        const gElement = this.getLabel(node)
        if (gElement) gElement.setAttribute('transform', `translate(${x} ${y})`)
    }

    _removeContent(element) {
        while (element.firstChild) element.removeChild(element.firstChild)
    }

    dispose() {
        this.$_svg.remove()
    }

    getLabel(node) {
        return this.$_svg.getElementById(node.id())
    }

    draw(node, drawFunc = (node) => rightText(node.id())) {
        const transform = this.$_core.transform()
        if (Array.isArray(node)) {
            // draw multiple nodes
            node.forEach(n => this._drawNode(n, transform, drawFunc))
        } else {
            // draw single node
            this._drawNode(node, transform, drawFunc)
        }
    }

    updatePosition(node) {
        const transform = this.$_core.transform()
        if (Array.isArray(node)) {
            // draw multiple nodes
            node.forEach(n => this._updateNodePosition(n, transform))
        } else {
            // draw single node
            this._updateNodePosition(node, transform)
        }
    }

    remove(node) {
        if (Array.isArray(node)) {
            // remove multiple nodes
            node.forEach(n => {
                this.getLabel(n)?.remove()
            })
        } else {
            // remove single node
            this.getLabel(node)?.remove()
        }
    }
}

const topText = (text, fontSize = 18, fill = 'black', strokeWidth = 0.5, offset = -8) => {
    const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    textElement.setAttribute('font-size', `${fontSize}px`)
    textElement.setAttribute('fill', `${fill}`)
    textElement.setAttribute('stroke', `white`)
    textElement.setAttribute('stroke-width', `${strokeWidth}px`)
    textElement.setAttribute('transform', `translate(0 ${offset})`)
    textElement.setAttribute('text-anchor', 'middle')
    textElement.setAttribute('alignment-baseline', 'bottom')
    textElement.style.userSelect = 'none' // NOTE: prevent unexpected selection when dragging node(delete and recreate textElement)
    textElement.innerHTML = text

    return textElement
}

const rightText = (text, fontSize = 18, fill = 'black', strokeWidth = 0.5, offset = 8) => {
    const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    textElement.setAttribute('font-size', `${fontSize}px`)
    textElement.setAttribute('fill', `${fill}`)
    textElement.setAttribute('stroke', `white`)
    textElement.setAttribute('stroke-width', `${strokeWidth}px`)
    textElement.setAttribute('transform', `translate(${offset} 0)`)
    textElement.setAttribute('text-anchor', 'start')
    textElement.setAttribute('alignment-baseline', 'middle')
    textElement.style.userSelect = 'none' // NOTE: prevent unexpected selection when dragging node(delete and recreate textElement)
    textElement.innerHTML = text

    return textElement
}

Label.template = {
    rightText,
    topText
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./netv-label.js");
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXR2LWxhYmVsL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9uZXR2LWxhYmVsLy4vbmV0di1sYWJlbC5qcyIsIndlYnBhY2s6Ly9uZXR2LWxhYmVsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ldHYtbGFiZWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25ldHYtbGFiZWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uZXR2LWxhYmVsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmV0di1sYWJlbC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsRUFBRSxHQUFHLEVBQUU7QUFDbkU7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwyQ0FBMkMsVUFBVTtBQUNyRCw0REFBNEQsRUFBRSxHQUFHLEVBQUU7QUFDbkU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXNFLEVBQUUsR0FBRyxFQUFFO0FBQzdFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNkNBQTZDLFNBQVM7QUFDdEQsd0NBQXdDLEtBQUs7QUFDN0M7QUFDQSxnREFBZ0QsWUFBWTtBQUM1RCx5REFBeUQsT0FBTztBQUNoRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNkNBQTZDLFNBQVM7QUFDdEQsd0NBQXdDLEtBQUs7QUFDN0M7QUFDQSxnREFBZ0QsWUFBWTtBQUM1RCx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztVQ3ZJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibmV0di1sYWJlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIvKipcclxuICogQGF1dGhvciBYaWFvZG9uZyBaaGFvIDx6aGFveGlhb2RvbmdAemp1LmVkdS5jbj5cclxuICogQGRlc2NyaXB0aW9uIG5ldHYncyBsYWJlbFxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBMYWJlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuZXR2KSB7XHJcbiAgICAgICAgdGhpcy4kX2NvcmUgPSBuZXR2XHJcblxyXG4gICAgICAgIHRoaXMuJF9zdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpXHJcbiAgICAgICAgdGhpcy4kX2NvcmUuJF9jb250YWluZXIucHJlcGVuZCh0aGlzLiRfc3ZnKVxyXG4gICAgICAgIHRoaXMuJF9zdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHRoaXMuJF9jb3JlLiRfY29uZmlncy53aWR0aClcclxuICAgICAgICB0aGlzLiRfc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgdGhpcy4kX2NvcmUuJF9jb25maWdzLmhlaWdodClcclxuICAgICAgICB0aGlzLiRfY29yZS4kX2NvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcclxuICAgICAgICB0aGlzLiRfY29yZS4kX2NvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXHJcbiAgICAgICAgdGhpcy4kX2NvcmUuJF9jb250YWluZXIuc3R5bGUud2lkdGggPSB0aGlzLiRfY29yZS4kX2NvbmZpZ3Mud2lkdGhcclxuICAgICAgICB0aGlzLiRfY29yZS4kX2NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB0aGlzLiRfY29yZS4kX2NvbmZpZ3MuaGVpZ2h0XHJcbiAgICAgICAgdGhpcy4kX3N2Zy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcclxuICAgICAgICB0aGlzLiRfc3ZnLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSdcclxuXHJcbiAgICB9XHJcblxyXG4gICAgX2RyYXdOb2RlKG5vZGUsIHRyYW5zZm9ybSwgZHJhd0Z1bmMpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBub2RlLnBvc2l0aW9uKClcclxuICAgICAgICBjb25zdCB4ID0gcG9zLnggKiB0cmFuc2Zvcm0uayArIHRyYW5zZm9ybS54XHJcbiAgICAgICAgY29uc3QgeSA9IHBvcy55ICogdHJhbnNmb3JtLmsgKyB0cmFuc2Zvcm0ueVxyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZHJhd0Z1bmMobm9kZSlcclxuXHJcbiAgICAgICAgbGV0IGdFbGVtZW50ID0gdGhpcy5nZXRMYWJlbChub2RlKVxyXG4gICAgICAgIGlmIChnRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVDb250ZW50KGdFbGVtZW50KVxyXG4gICAgICAgICAgICBnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt4fSAke3l9KWApXHJcbiAgICAgICAgICAgIGdFbGVtZW50LmFwcGVuZChjb250ZW50KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJylcclxuICAgICAgICAgICAgZ0VsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGAke25vZGUuaWQoKX1gKVxyXG4gICAgICAgICAgICBnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt4fSAke3l9KWApXHJcbiAgICAgICAgICAgIGdFbGVtZW50LmFwcGVuZChjb250ZW50KVxyXG5cclxuICAgICAgICAgICAgdGhpcy4kX3N2Zy5wcmVwZW5kKGdFbGVtZW50KSAvLyBOT1RFOiBtYWtlIGxhc3QgYWRkZWQgdGV4dCBhdCB0b3BcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3VwZGF0ZU5vZGVQb3NpdGlvbihub2RlLCB0cmFuc2Zvcm0pIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBub2RlLnBvc2l0aW9uKClcclxuICAgICAgICBjb25zdCB4ID0gcG9zLnggKiB0cmFuc2Zvcm0uayArIHRyYW5zZm9ybS54XHJcbiAgICAgICAgY29uc3QgeSA9IHBvcy55ICogdHJhbnNmb3JtLmsgKyB0cmFuc2Zvcm0ueVxyXG5cclxuICAgICAgICBjb25zdCBnRWxlbWVudCA9IHRoaXMuZ2V0TGFiZWwobm9kZSlcclxuICAgICAgICBpZiAoZ0VsZW1lbnQpIGdFbGVtZW50LnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3h9ICR7eX0pYClcclxuICAgIH1cclxuXHJcbiAgICBfcmVtb3ZlQ29udGVudChlbGVtZW50KSB7XHJcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpXHJcbiAgICB9XHJcblxyXG4gICAgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLiRfc3ZnLnJlbW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGFiZWwobm9kZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRfc3ZnLmdldEVsZW1lbnRCeUlkKG5vZGUuaWQoKSlcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KG5vZGUsIGRyYXdGdW5jID0gKG5vZGUpID0+IHJpZ2h0VGV4dChub2RlLmlkKCkpKSB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gdGhpcy4kX2NvcmUudHJhbnNmb3JtKClcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xyXG4gICAgICAgICAgICAvLyBkcmF3IG11bHRpcGxlIG5vZGVzXHJcbiAgICAgICAgICAgIG5vZGUuZm9yRWFjaChuID0+IHRoaXMuX2RyYXdOb2RlKG4sIHRyYW5zZm9ybSwgZHJhd0Z1bmMpKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGRyYXcgc2luZ2xlIG5vZGVcclxuICAgICAgICAgICAgdGhpcy5fZHJhd05vZGUobm9kZSwgdHJhbnNmb3JtLCBkcmF3RnVuYylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUG9zaXRpb24obm9kZSkge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHRoaXMuJF9jb3JlLnRyYW5zZm9ybSgpXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcclxuICAgICAgICAgICAgLy8gZHJhdyBtdWx0aXBsZSBub2Rlc1xyXG4gICAgICAgICAgICBub2RlLmZvckVhY2gobiA9PiB0aGlzLl91cGRhdGVOb2RlUG9zaXRpb24obiwgdHJhbnNmb3JtKSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBkcmF3IHNpbmdsZSBub2RlXHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZU5vZGVQb3NpdGlvbihub2RlLCB0cmFuc2Zvcm0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShub2RlKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIG11bHRpcGxlIG5vZGVzXHJcbiAgICAgICAgICAgIG5vZGUuZm9yRWFjaChuID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TGFiZWwobik/LnJlbW92ZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIHNpbmdsZSBub2RlXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TGFiZWwobm9kZSk/LnJlbW92ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB0b3BUZXh0ID0gKHRleHQsIGZvbnRTaXplID0gMTgsIGZpbGwgPSAnYmxhY2snLCBzdHJva2VXaWR0aCA9IDAuNSwgb2Zmc2V0ID0gLTgpID0+IHtcclxuICAgIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd0ZXh0JylcclxuXHJcbiAgICB0ZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvbnQtc2l6ZScsIGAke2ZvbnRTaXplfXB4YClcclxuICAgIHRleHRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZmlsbCcsIGAke2ZpbGx9YClcclxuICAgIHRleHRFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgYHdoaXRlYClcclxuICAgIHRleHRFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgYCR7c3Ryb2tlV2lkdGh9cHhgKVxyXG4gICAgdGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAgJHtvZmZzZXR9KWApXHJcbiAgICB0ZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXHJcbiAgICB0ZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FsaWdubWVudC1iYXNlbGluZScsICdib3R0b20nKVxyXG4gICAgdGV4dEVsZW1lbnQuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJyAvLyBOT1RFOiBwcmV2ZW50IHVuZXhwZWN0ZWQgc2VsZWN0aW9uIHdoZW4gZHJhZ2dpbmcgbm9kZShkZWxldGUgYW5kIHJlY3JlYXRlIHRleHRFbGVtZW50KVxyXG4gICAgdGV4dEVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dFxyXG5cclxuICAgIHJldHVybiB0ZXh0RWxlbWVudFxyXG59XHJcblxyXG5jb25zdCByaWdodFRleHQgPSAodGV4dCwgZm9udFNpemUgPSAxOCwgZmlsbCA9ICdibGFjaycsIHN0cm9rZVdpZHRoID0gMC41LCBvZmZzZXQgPSA4KSA9PiB7XHJcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndGV4dCcpXHJcblxyXG4gICAgdGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb250LXNpemUnLCBgJHtmb250U2l6ZX1weGApXHJcbiAgICB0ZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBgJHtmaWxsfWApXHJcbiAgICB0ZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIGB3aGl0ZWApXHJcbiAgICB0ZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIGAke3N0cm9rZVdpZHRofXB4YClcclxuICAgIHRleHRFbGVtZW50LnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke29mZnNldH0gMClgKVxyXG4gICAgdGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpXHJcbiAgICB0ZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKVxyXG4gICAgdGV4dEVsZW1lbnQuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJyAvLyBOT1RFOiBwcmV2ZW50IHVuZXhwZWN0ZWQgc2VsZWN0aW9uIHdoZW4gZHJhZ2dpbmcgbm9kZShkZWxldGUgYW5kIHJlY3JlYXRlIHRleHRFbGVtZW50KVxyXG4gICAgdGV4dEVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dFxyXG5cclxuICAgIHJldHVybiB0ZXh0RWxlbWVudFxyXG59XHJcblxyXG5MYWJlbC50ZW1wbGF0ZSA9IHtcclxuICAgIHJpZ2h0VGV4dCxcclxuICAgIHRvcFRleHRcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vbmV0di1sYWJlbC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=