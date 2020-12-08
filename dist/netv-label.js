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
        this.$_svg.style.zIndex = '10'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXR2LWxhYmVsL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9uZXR2LWxhYmVsLy4vbmV0di1sYWJlbC5qcyIsIndlYnBhY2s6Ly9uZXR2LWxhYmVsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ldHYtbGFiZWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25ldHYtbGFiZWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uZXR2LWxhYmVsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmV0di1sYWJlbC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxFQUFFLEdBQUcsRUFBRTtBQUNuRTtBQUNBLFNBQVM7QUFDVDtBQUNBLDJDQUEyQyxVQUFVO0FBQ3JELDREQUE0RCxFQUFFLEdBQUcsRUFBRTtBQUNuRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0UsRUFBRSxHQUFHLEVBQUU7QUFDN0U7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2Q0FBNkMsU0FBUztBQUN0RCx3Q0FBd0MsS0FBSztBQUM3QztBQUNBLGdEQUFnRCxZQUFZO0FBQzVELHlEQUF5RCxPQUFPO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2Q0FBNkMsU0FBUztBQUN0RCx3Q0FBd0MsS0FBSztBQUM3QztBQUNBLGdEQUFnRCxZQUFZO0FBQzVELHVEQUF1RCxPQUFPO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O1VDeElBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJuZXR2LWxhYmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIi8qKlxyXG4gKiBAYXV0aG9yIFhpYW9kb25nIFpoYW8gPHpoYW94aWFvZG9uZ0B6anUuZWR1LmNuPlxyXG4gKiBAZGVzY3JpcHRpb24gbmV0didzIGxhYmVsXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIExhYmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKG5ldHYpIHtcclxuICAgICAgICB0aGlzLiRfY29yZSA9IG5ldHZcclxuXHJcbiAgICAgICAgdGhpcy4kX3N2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJylcclxuICAgICAgICB0aGlzLiRfY29yZS4kX2NvbnRhaW5lci5wcmVwZW5kKHRoaXMuJF9zdmcpXHJcbiAgICAgICAgdGhpcy4kX3N2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgdGhpcy4kX2NvcmUuJF9jb25maWdzLndpZHRoKVxyXG4gICAgICAgIHRoaXMuJF9zdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0aGlzLiRfY29yZS4kX2NvbmZpZ3MuaGVpZ2h0KVxyXG4gICAgICAgIHRoaXMuJF9jb3JlLiRfY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xyXG4gICAgICAgIHRoaXMuJF9jb3JlLiRfY29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcclxuICAgICAgICB0aGlzLiRfY29yZS4kX2NvbnRhaW5lci5zdHlsZS53aWR0aCA9IHRoaXMuJF9jb3JlLiRfY29uZmlncy53aWR0aFxyXG4gICAgICAgIHRoaXMuJF9jb3JlLiRfY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHRoaXMuJF9jb3JlLiRfY29uZmlncy5oZWlnaHRcclxuICAgICAgICB0aGlzLiRfc3ZnLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xyXG4gICAgICAgIHRoaXMuJF9zdmcuc3R5bGUuekluZGV4ID0gJzEwJ1xyXG4gICAgICAgIHRoaXMuJF9zdmcuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJ1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBfZHJhd05vZGUobm9kZSwgdHJhbnNmb3JtLCBkcmF3RnVuYykge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IG5vZGUucG9zaXRpb24oKVxyXG4gICAgICAgIGNvbnN0IHggPSBwb3MueCAqIHRyYW5zZm9ybS5rICsgdHJhbnNmb3JtLnhcclxuICAgICAgICBjb25zdCB5ID0gcG9zLnkgKiB0cmFuc2Zvcm0uayArIHRyYW5zZm9ybS55XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkcmF3RnVuYyhub2RlKVxyXG5cclxuICAgICAgICBsZXQgZ0VsZW1lbnQgPSB0aGlzLmdldExhYmVsKG5vZGUpXHJcbiAgICAgICAgaWYgKGdFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZUNvbnRlbnQoZ0VsZW1lbnQpXHJcbiAgICAgICAgICAgIGdFbGVtZW50LnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3h9ICR7eX0pYClcclxuICAgICAgICAgICAgZ0VsZW1lbnQuYXBwZW5kKGNvbnRlbnQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKVxyXG4gICAgICAgICAgICBnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bm9kZS5pZCgpfWApXHJcbiAgICAgICAgICAgIGdFbGVtZW50LnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3h9ICR7eX0pYClcclxuICAgICAgICAgICAgZ0VsZW1lbnQuYXBwZW5kKGNvbnRlbnQpXHJcblxyXG4gICAgICAgICAgICB0aGlzLiRfc3ZnLnByZXBlbmQoZ0VsZW1lbnQpIC8vIE5PVEU6IG1ha2UgbGFzdCBhZGRlZCB0ZXh0IGF0IHRvcFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfdXBkYXRlTm9kZVBvc2l0aW9uKG5vZGUsIHRyYW5zZm9ybSkge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IG5vZGUucG9zaXRpb24oKVxyXG4gICAgICAgIGNvbnN0IHggPSBwb3MueCAqIHRyYW5zZm9ybS5rICsgdHJhbnNmb3JtLnhcclxuICAgICAgICBjb25zdCB5ID0gcG9zLnkgKiB0cmFuc2Zvcm0uayArIHRyYW5zZm9ybS55XHJcblxyXG4gICAgICAgIGNvbnN0IGdFbGVtZW50ID0gdGhpcy5nZXRMYWJlbChub2RlKVxyXG4gICAgICAgIGlmIChnRWxlbWVudCkgZ0VsZW1lbnQuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7eH0gJHt5fSlgKVxyXG4gICAgfVxyXG5cclxuICAgIF9yZW1vdmVDb250ZW50KGVsZW1lbnQpIHtcclxuICAgICAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZClcclxuICAgIH1cclxuXHJcbiAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgIHRoaXMuJF9zdmcucmVtb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYWJlbChub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJF9zdmcuZ2V0RWxlbWVudEJ5SWQobm9kZS5pZCgpKVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcobm9kZSwgZHJhd0Z1bmMgPSAobm9kZSkgPT4gcmlnaHRUZXh0KG5vZGUuaWQoKSkpIHtcclxuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSB0aGlzLiRfY29yZS50cmFuc2Zvcm0oKVxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XHJcbiAgICAgICAgICAgIC8vIGRyYXcgbXVsdGlwbGUgbm9kZXNcclxuICAgICAgICAgICAgbm9kZS5mb3JFYWNoKG4gPT4gdGhpcy5fZHJhd05vZGUobiwgdHJhbnNmb3JtLCBkcmF3RnVuYykpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZHJhdyBzaW5nbGUgbm9kZVxyXG4gICAgICAgICAgICB0aGlzLl9kcmF3Tm9kZShub2RlLCB0cmFuc2Zvcm0sIGRyYXdGdW5jKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQb3NpdGlvbihub2RlKSB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gdGhpcy4kX2NvcmUudHJhbnNmb3JtKClcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xyXG4gICAgICAgICAgICAvLyBkcmF3IG11bHRpcGxlIG5vZGVzXHJcbiAgICAgICAgICAgIG5vZGUuZm9yRWFjaChuID0+IHRoaXMuX3VwZGF0ZU5vZGVQb3NpdGlvbihuLCB0cmFuc2Zvcm0pKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGRyYXcgc2luZ2xlIG5vZGVcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlTm9kZVBvc2l0aW9uKG5vZGUsIHRyYW5zZm9ybSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKG5vZGUpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgbXVsdGlwbGUgbm9kZXNcclxuICAgICAgICAgICAgbm9kZS5mb3JFYWNoKG4gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRMYWJlbChuKT8ucmVtb3ZlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgc2luZ2xlIG5vZGVcclxuICAgICAgICAgICAgdGhpcy5nZXRMYWJlbChub2RlKT8ucmVtb3ZlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHRvcFRleHQgPSAodGV4dCwgZm9udFNpemUgPSAxOCwgZmlsbCA9ICdibGFjaycsIHN0cm9rZVdpZHRoID0gMC41LCBvZmZzZXQgPSAtOCkgPT4ge1xyXG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3RleHQnKVxyXG5cclxuICAgIHRleHRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9udC1zaXplJywgYCR7Zm9udFNpemV9cHhgKVxyXG4gICAgdGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdmaWxsJywgYCR7ZmlsbH1gKVxyXG4gICAgdGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHJva2UnLCBgd2hpdGVgKVxyXG4gICAgdGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCBgJHtzdHJva2VXaWR0aH1weGApXHJcbiAgICB0ZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCAke29mZnNldH0pYClcclxuICAgIHRleHRFbGVtZW50LnNldEF0dHJpYnV0ZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcclxuICAgIHRleHRFbGVtZW50LnNldEF0dHJpYnV0ZSgnYWxpZ25tZW50LWJhc2VsaW5lJywgJ2JvdHRvbScpXHJcbiAgICB0ZXh0RWxlbWVudC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnIC8vIE5PVEU6IHByZXZlbnQgdW5leHBlY3RlZCBzZWxlY3Rpb24gd2hlbiBkcmFnZ2luZyBub2RlKGRlbGV0ZSBhbmQgcmVjcmVhdGUgdGV4dEVsZW1lbnQpXHJcbiAgICB0ZXh0RWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0XHJcblxyXG4gICAgcmV0dXJuIHRleHRFbGVtZW50XHJcbn1cclxuXHJcbmNvbnN0IHJpZ2h0VGV4dCA9ICh0ZXh0LCBmb250U2l6ZSA9IDE4LCBmaWxsID0gJ2JsYWNrJywgc3Ryb2tlV2lkdGggPSAwLjUsIG9mZnNldCA9IDgpID0+IHtcclxuICAgIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd0ZXh0JylcclxuXHJcbiAgICB0ZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvbnQtc2l6ZScsIGAke2ZvbnRTaXplfXB4YClcclxuICAgIHRleHRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZmlsbCcsIGAke2ZpbGx9YClcclxuICAgIHRleHRFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgYHdoaXRlYClcclxuICAgIHRleHRFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgYCR7c3Ryb2tlV2lkdGh9cHhgKVxyXG4gICAgdGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7b2Zmc2V0fSAwKWApXHJcbiAgICB0ZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcclxuICAgIHRleHRFbGVtZW50LnNldEF0dHJpYnV0ZSgnYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpXHJcbiAgICB0ZXh0RWxlbWVudC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnIC8vIE5PVEU6IHByZXZlbnQgdW5leHBlY3RlZCBzZWxlY3Rpb24gd2hlbiBkcmFnZ2luZyBub2RlKGRlbGV0ZSBhbmQgcmVjcmVhdGUgdGV4dEVsZW1lbnQpXHJcbiAgICB0ZXh0RWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0XHJcblxyXG4gICAgcmV0dXJuIHRleHRFbGVtZW50XHJcbn1cclxuXHJcbkxhYmVsLnRlbXBsYXRlID0ge1xyXG4gICAgcmlnaHRUZXh0LFxyXG4gICAgdG9wVGV4dFxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9uZXR2LWxhYmVsLmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==