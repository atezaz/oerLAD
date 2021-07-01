(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+3Hr":
/*!*****************************************************************!*\
  !*** ./src/app/charts/oer-year-dist/oer-year-dist.component.ts ***!
  \*****************************************************************/
/*! exports provided: OerYearDistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OerYearDistComponent", function() { return OerYearDistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data.service */ "R7Hv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");





const _c0 = ["oer-year-dist-chart"];
function OerYearDistComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "apx-chart", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chart", ctx_r0.chartOptions.chart)("xaxis", ctx_r0.chartOptions.xaxis)("series", ctx_r0.chartOptions.series);
} }
class OerYearDistComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.loaded = false;
        this.chartOptions = {
            series: [],
            xaxis: {
                categories: [],
            },
            chart: {
                type: 'bar',
                width: '100%',
                height: 'auto',
            },
        };
    }
    ngOnInit() {
        this.dataService.loaded.subscribe(() => {
            const years = this.dataService.years;
            const name = 'OERs by Year';
            const values = [];
            for (const e of years) {
                this.chartOptions.xaxis.categories.push(e.year);
                values.push(e.count);
            }
            this.chartOptions.series.push({
                name,
                data: values,
            });
            this.loaded = true;
        });
    }
}
OerYearDistComponent.ɵfac = function OerYearDistComponent_Factory(t) { return new (t || OerYearDistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
OerYearDistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OerYearDistComponent, selectors: [["app-oer-year-dist"]], viewQuery: function OerYearDistComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 1, vars: 1, consts: [["id", "oer-year-dist-chart", 4, "ngIf"], ["id", "oer-year-dist-chart"], [3, "chart", "xaxis", "series"]], template: function OerYearDistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OerYearDistComponent_div_0_Template, 2, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZXIteWVhci1kaXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OerYearDistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-oer-year-dist',
                templateUrl: './oer-year-dist.component.html',
                styleUrls: ['./oer-year-dist.component.scss'],
            }]
    }], function () { return [{ type: src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['oer-year-dist-chart']
        }] }); })();


/***/ }),

/***/ "/EJN":
/*!***********************************************************************!*\
  !*** ./src/app/charts/oer-keyword-dist/oer-keyword-dist.component.ts ***!
  \***********************************************************************/
/*! exports provided: OerKeywordDistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OerKeywordDistComponent", function() { return OerKeywordDistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "cclQ");
/* harmony import */ var _amcharts_amcharts4_plugins_wordCloud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/plugins/wordCloud */ "Xxd6");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data.service */ "R7Hv");





const _c0 = ["oer-keyword-dist-chart"];
class OerKeywordDistComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.chart = null;
        this.loaded = false;
        this.text = [];
    }
    ngOnInit() {
        this.dataService.loaded.subscribe(() => {
            const data = this.dataService.getTopKeywords(70);
            const htmlElement = document.getElementById('oer-keyword-dist-chart');
            if (htmlElement) {
                this.createChart(data);
            }
            this.loaded = true;
        });
    }
    createChart(keywords) {
        /* Chart code */
        // Themes begin
        //am4core.useTheme(am4themes_animated);
        // Themes end
        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]('oer-keyword-dist-chart', _amcharts_amcharts4_plugins_wordCloud__WEBPACK_IMPORTED_MODULE_2__["WordCloud"]);
        let series = chart.series.push(new _amcharts_amcharts4_plugins_wordCloud__WEBPACK_IMPORTED_MODULE_2__["WordCloudSeries"]());
        series.accuracy = 3;
        series.randomness = 0;
        series.rotationThreshold = 0.7;
        series.maxCount = 70;
        series.minWordLength = 2;
        series.minFontSize = 10;
        series.labels.template.tooltipText = '{word}: {value}';
        series.fontFamily = 'Courier New';
        series.maxFontSize = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](20);
        series.dataFields.word = "name";
        series.dataFields.value = "value";
        series.data = keywords;
        series.heatRules.push({
            "target": series.labels.template,
            "property": "fill",
            "min": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#4242ff"),
            "max": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#000042"),
            "dataField": "value"
        });
    }
}
OerKeywordDistComponent.ɵfac = function OerKeywordDistComponent_Factory(t) { return new (t || OerKeywordDistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
OerKeywordDistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OerKeywordDistComponent, selectors: [["app-oer-keyword-dist"]], viewQuery: function OerKeywordDistComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chartElement = _t.first);
    } }, decls: 1, vars: 0, consts: [["id", "oer-keyword-dist-chart"]], template: function OerKeywordDistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["#oer-keyword-dist-chart[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvZXIta2V5d29yZC1kaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJvZXIta2V5d29yZC1kaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI29lci1rZXl3b3JkLWRpc3QtY2hhcnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OerKeywordDistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-oer-keyword-dist',
                templateUrl: './oer-keyword-dist.component.html',
                styleUrls: ['./oer-keyword-dist.component.scss'],
            }]
    }], function () { return [{ type: src_app_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, { chartElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['oer-keyword-dist-chart']
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ahmad.DIPF-INTERN\Downloads\dashboard\Dashboard\server\client\src\main.ts */"zUnb");


/***/ }),

/***/ "2yqW":
/*!*************************************************************************!*\
  !*** ./src/app/charts/oer-provider-dist/oer-provider-dist.component.ts ***!
  \*************************************************************************/
/*! exports provided: OerProviderDistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OerProviderDistComponent", function() { return OerProviderDistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data.service */ "R7Hv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");





const _c0 = ["oer-provider-dist-chart"];
function OerProviderDistComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "apx-chart", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chart", ctx_r0.chartOptions.chart)("labels", ctx_r0.chartOptions.labels)("series", ctx_r0.chartOptions.series);
} }
class OerProviderDistComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.loaded = false;
        this.chartOptions = {
            series: [],
            labels: [],
            chart: {
                type: 'pie',
                width: '100%',
                height: 'auto',
            },
        };
    }
    ngOnInit() {
        this.dataService.loaded.subscribe(() => {
            const data = this.dataService.locations;
            for (const location of data) {
                this.chartOptions.labels.push(location.name);
                this.chartOptions.series.push(location.count);
            }
            this.loaded = true;
        });
    }
}
OerProviderDistComponent.ɵfac = function OerProviderDistComponent_Factory(t) { return new (t || OerProviderDistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
OerProviderDistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OerProviderDistComponent, selectors: [["app-oer-provider-dist"]], viewQuery: function OerProviderDistComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 1, vars: 1, consts: [["id", "oer-provider-dist-chart", 4, "ngIf"], ["id", "oer-provider-dist-chart"], [3, "chart", "labels", "series"]], template: function OerProviderDistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OerProviderDistComponent_div_0_Template, 2, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]], styles: ["#oer-provider-dist-chart[_ngcontent-%COMP%] {\n  height: inherit !important;\n  width: inherit !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvZXItcHJvdmlkZXItZGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7QUFDRiIsImZpbGUiOiJvZXItcHJvdmlkZXItZGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNvZXItcHJvdmlkZXItZGlzdC1jaGFydCB7XG4gIGhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xuICB3aWR0aDogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OerProviderDistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-oer-provider-dist',
                templateUrl: './oer-provider-dist.component.html',
                styleUrls: ['./oer-provider-dist.component.scss'],
            }]
    }], function () { return [{ type: src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['oer-provider-dist-chart']
        }] }); })();


/***/ }),

/***/ "5CF6":
/*!*****************************************************************!*\
  !*** ./src/app/charts/oer-lang-dist/oer-lang-dist.component.ts ***!
  \*****************************************************************/
/*! exports provided: OerLangDistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OerLangDistComponent", function() { return OerLangDistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data.service */ "R7Hv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");





const _c0 = ["oer-lang-dist-chart"];
function OerLangDistComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "apx-chart", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chart", ctx_r0.chartOptions.chart)("labels", ctx_r0.chartOptions.labels)("series", ctx_r0.chartOptions.series);
} }
class OerLangDistComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.loaded = false;
        this.chartOptions = {
            series: [],
            labels: [],
            chart: {
                type: 'pie',
                width: '100%',
                height: 'auto',
            },
            legend: {
                position: 'bottom',
            },
        };
    }
    ngOnInit() {
        this.dataService.loaded.subscribe(() => {
            const langs = this.dataService.languages;
            for (const lang of langs) {
                this.chartOptions.labels.push(lang.name);
                this.chartOptions.series.push(lang.count);
            }
            this.loaded = true;
        });
    }
}
OerLangDistComponent.ɵfac = function OerLangDistComponent_Factory(t) { return new (t || OerLangDistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
OerLangDistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OerLangDistComponent, selectors: [["app-oer-lang-dist"]], viewQuery: function OerLangDistComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 1, vars: 1, consts: [["id", "oer-lang-dist-chart", 4, "ngIf"], ["id", "oer-lang-dist-chart"], [3, "chart", "labels", "series"]], template: function OerLangDistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OerLangDistComponent_div_0_Template, 2, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]], styles: ["#oer-lang-dist-chart[_ngcontent-%COMP%] {\n  height: inherit !important;\n  width: inherit !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvZXItbGFuZy1kaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSx5QkFBQTtBQUNGIiwiZmlsZSI6Im9lci1sYW5nLWRpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjb2VyLWxhbmctZGlzdC1jaGFydCB7XG4gIGhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xuICB3aWR0aDogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OerLangDistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-oer-lang-dist',
                templateUrl: './oer-lang-dist.component.html',
                styleUrls: ['./oer-lang-dist.component.scss'],
            }]
    }], function () { return [{ type: src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['oer-lang-dist-chart']
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    token: 'KnzUoyF%ds4!8!rCB2AaGQdc!ArtT9Lnk%hT',
    serverPath: 'http://localhost:3000',
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "R7Hv":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class DataService {
    constructor(http) {
        this.http = http;
        this.path = 'https://resourcedashboard.herokuapp.com' + '/data'; //deployment
        this.data = [];
        this.dataMap = [];
        this.authors = [];
        this.languages = [];
        this.locations = [];
        this.years = [];
        this.licenses = [];
        this.loaded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        this.downloading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.processing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    fetchData() {
        this.downloading.emit(-1);
        this.http
            .get(this.path, {
            headers: {
                'auth-token': src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].token,
            },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((db_data) => {
            this.downloading.emit(db_data.length);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((db_data) => {
            let processed = 0;
            this.dataMap = db_data["dmap"];
            this.authors = db_data["aut"];
            console.log(this.authors);
            this.languages = db_data["lang"];
            this.locations = db_data["loca"];
            this.years = db_data["year"];
            this.licenses = db_data["licenses"];
            return db_data;
        }))
            .subscribe((db_data) => {
            this.loaded.next(true);
        });
    }
    //getData() {
    //return this.data;
    // }
    getTopKeywords(count = -1) {
        if (count == -1)
            count = this.dataMap.length;
        return this.dataMap.slice(0, count);
    }
    getTop20Authors() {
        return this.authors.slice(0, 20);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "R7Hv");
/* harmony import */ var _charts_plain_plain_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charts/plain/plain.component */ "W2n9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading/loading.component */ "f/hT");
/* harmony import */ var _charts_oer_provider_dist_oer_provider_dist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charts/oer-provider-dist/oer-provider-dist.component */ "2yqW");
/* harmony import */ var _charts_oer_lang_dist_oer_lang_dist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charts/oer-lang-dist/oer-lang-dist.component */ "5CF6");
/* harmony import */ var _charts_oer_year_dist_oer_year_dist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./charts/oer-year-dist/oer-year-dist.component */ "+3Hr");
/* harmony import */ var _charts_oer_authors_oer_authors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./charts/oer-authors/oer-authors.component */ "UUly");
/* harmony import */ var _charts_oer_keyword_dist_lang_oer_keyword_dist_lang_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./charts/oer-keyword-dist-lang/oer-keyword-dist-lang.component */ "fUFr");
/* harmony import */ var _charts_oer_keyword_dist_location_oer_keyword_dist_location_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./charts/oer-keyword-dist-location/oer-keyword-dist-location.component */ "olt+");
/* harmony import */ var _charts_oer_keyword_dist_oer_keyword_dist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./charts/oer-keyword-dist/oer-keyword-dist.component */ "/EJN");
/* harmony import */ var _charts_oer_keyword_dist_trend_oer_keyword_dist_trend_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./charts/oer-keyword-dist-trend/oer-keyword-dist-trend.component */ "hyoe");














function AppComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "OER Provider Distribution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-oer-provider-dist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "OER Language Distribution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-oer-lang-dist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "OERs by Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-oer-year-dist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Most Active Authors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-oer-authors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Keyword Distribution By Language");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-oer-keyword-dist-lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Keyword Distribution By Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-oer-keyword-dist-location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Keyword Distribution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "app-oer-keyword-dist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Top Keyword's Trend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "app-oer-keyword-dist-trend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.title = 'client';
        this.loading = true;
    }
    ngOnInit() {
        this.dataService.loaded.subscribe(() => this.loading = false);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 2, consts: [[1, "container", "body"], [1, "main_container"], [1, "top_nav"], [1, "nav_menu"], [1, "nav", "toggle"], ["role", "main", 1, "right_col"], ["class", "row loading_row", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "pull-right"], ["href", "https://colorlib.com"], [1, "clearfix"], [1, "row", "loading_row"], [1, "col-12"], [1, "x_panel", "tile"], [1, "x_title"], [1, "x_content"], [1, "row"], [1, "col-12", "col-sm-6", "col-md-4"], [1, "x_panel", "tile", "fixed_height_520"], [1, "col-12", "col-sm-4", "col-md-4"], [1, "x_content", "fixed_height_320"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-plain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_8_Template, 9, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_9_Template, 65, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Gentelella - Bootstrap Admin Template by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Colorlib");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_charts_plain_plain_component__WEBPACK_IMPORTED_MODULE_2__["PlainComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], _charts_oer_provider_dist_oer_provider_dist_component__WEBPACK_IMPORTED_MODULE_5__["OerProviderDistComponent"], _charts_oer_lang_dist_oer_lang_dist_component__WEBPACK_IMPORTED_MODULE_6__["OerLangDistComponent"], _charts_oer_year_dist_oer_year_dist_component__WEBPACK_IMPORTED_MODULE_7__["OerYearDistComponent"], _charts_oer_authors_oer_authors_component__WEBPACK_IMPORTED_MODULE_8__["OerAuthorsComponent"], _charts_oer_keyword_dist_lang_oer_keyword_dist_lang_component__WEBPACK_IMPORTED_MODULE_9__["OerKeywordDistLangComponent"], _charts_oer_keyword_dist_location_oer_keyword_dist_location_component__WEBPACK_IMPORTED_MODULE_10__["OerKeywordDistLocationComponent"], _charts_oer_keyword_dist_oer_keyword_dist_component__WEBPACK_IMPORTED_MODULE_11__["OerKeywordDistComponent"], _charts_oer_keyword_dist_trend_oer_keyword_dist_trend_component__WEBPACK_IMPORTED_MODULE_12__["OerKeywordDistTrendComponent"]], styles: [".fixed_height_520[_ngcontent-%COMP%] {\n  height: 520px !important;\n}\n\n.fixed_height_620[_ngcontent-%COMP%] {\n  height: 620px !important;\n}\n\n.loading_row[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpeGVkX2hlaWdodF81MjAge1xuICBoZWlnaHQ6IDUyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5maXhlZF9oZWlnaHRfNjIwIHtcbiAgaGVpZ2h0OiA2MjBweCAhaW1wb3J0YW50O1xufVxuXG4ubG9hZGluZ19yb3cge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "UUly":
/*!*************************************************************!*\
  !*** ./src/app/charts/oer-authors/oer-authors.component.ts ***!
  \*************************************************************/
/*! exports provided: OerAuthorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OerAuthorsComponent", function() { return OerAuthorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data.service */ "R7Hv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function OerAuthorsComponent_table_0_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const author_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", author_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", author_r2.oers, " ");
} }
function OerAuthorsComponent_table_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Author");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Number of OERs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OerAuthorsComponent_table_0_tr_8_Template, 5, 2, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.authors);
} }
class OerAuthorsComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.authors = [];
    }
    ngOnInit() {
        this.dataService.loaded.subscribe(() => {
            this.authors = this.dataService.getTop20Authors();
        });
    }
}
OerAuthorsComponent.ɵfac = function OerAuthorsComponent_Factory(t) { return new (t || OerAuthorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
OerAuthorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OerAuthorsComponent, selectors: [["app-oer-authors"]], decls: 1, vars: 1, consts: [["class", "", "style", "width:100%", 4, "ngIf"], [1, "", 2, "width", "100%"], [1, ""], [4, "ngFor", "ngForOf"]], template: function OerAuthorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OerAuthorsComponent_table_0_Template, 9, 1, "table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authors.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZXItYXV0aG9ycy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OerAuthorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-oer-authors',
                templateUrl: './oer-authors.component.html',
                styleUrls: ['./oer-authors.component.scss']
            }]
    }], function () { return [{ type: src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "W2n9":
/*!*************************************************!*\
  !*** ./src/app/charts/plain/plain.component.ts ***!
  \*************************************************/
/*! exports provided: PlainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlainComponent", function() { return PlainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data.service */ "R7Hv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function PlainComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total OERs in ", e_r2.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](e_r2.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (e_r2.year / (e_r2.count - e_r2.year) * 100).toPrecision(4), "");
} }
function PlainComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Total OERs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PlainComponent_div_0_div_7_Template, 11, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.total, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.locations);
} }
class PlainComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.total = 0;
        this.locations = [];
        this.loaded = false;
    }
    ngOnInit() {
        this.dataService.loaded.subscribe(() => {
            const locations = this.dataService.locations;
            this.total = 0;
            for (const location of locations) {
                this.locations.push(Object.assign({}, location));
                this.total += location.count;
            }
            this.loaded = true;
        });
    }
}
PlainComponent.ɵfac = function PlainComponent_Factory(t) { return new (t || PlainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
PlainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlainComponent, selectors: [["app-plain"]], decls: 1, vars: 1, consts: [["class", "row tile_count", 4, "ngIf"], [1, "row", "tile_count"], [1, "col-md-2", "col-sm-4", "col-xs-6", "tile_stats_count"], [1, "count_top"], [1, "fa", "fa-user"], [1, "count"], ["class", "col-md-2 col-sm-4 col-xs-6 tile_stats_count", 4, "ngFor", "ngForOf"], [1, "fa", "fa-clock-o"], [1, "count_bottom"], [1, "green"], [1, "fa", "fa-sort-asc"]], template: function PlainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlainComponent_div_0_Template, 8, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFpbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-plain',
                templateUrl: './plain.component.html',
                styleUrls: ['./plain.component.scss'],
            }]
    }], function () { return [{ type: src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "Z11v":
/*!************************************************************************************************!*\
  !*** ./src/app/charts/oer-keyword-dist-trend/oer-keyword-trend/oer-keyword-trend.component.ts ***!
  \************************************************************************************************/
/*! exports provided: OerKeywordTrendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OerKeywordTrendComponent", function() { return OerKeywordTrendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");



const _c0 = ["oer-keyword-trend"];
class OerKeywordTrendComponent {
    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: 'Desktops',
                    data: [],
                },
            ],
            chart: {
                height: 150,
                type: 'line',
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'straight',
            },
            title: {
                text: '',
                align: 'left',
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'],
                    opacity: 0.5,
                },
            },
            xaxis: {
                categories: [],
            },
        };
    }
    ngOnInit() {
        if (this.yearMap) {
            let data = [];
            for (const e of Object.entries(this.yearMap)) {
                data.push({
                    year: e[0],
                    count: e[1]
                });
            }
            data = data.sort((a, b) => {
                if (a.year < b.year)
                    return -1;
                if (a.year > b.year)
                    return 1;
                return 0;
            });
            for (const d of data) {
                this.chartOptions.series[0].data.push(d.count);
                this.chartOptions.xaxis.categories.push(d.year);
            }
        }
        if (this.name) {
            this.chartOptions.series[0].name = this.name;
        }
    }
}
OerKeywordTrendComponent.ɵfac = function OerKeywordTrendComponent_Factory(t) { return new (t || OerKeywordTrendComponent)(); };
OerKeywordTrendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OerKeywordTrendComponent, selectors: [["app-oer-keyword-trend"]], viewQuery: function OerKeywordTrendComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, inputs: { name: "name", yearMap: "yearMap" }, decls: 2, vars: 7, consts: [["id", "oer-keyword-trend"], [3, "series", "chart", "xaxis", "dataLabels", "grid", "stroke", "title"]], template: function OerKeywordTrendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "apx-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("dataLabels", ctx.chartOptions.dataLabels)("grid", ctx.chartOptions.grid)("stroke", ctx.chartOptions.stroke)("title", ctx.chartOptions.title);
    } }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZXIta2V5d29yZC10cmVuZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OerKeywordTrendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-oer-keyword-trend',
                templateUrl: './oer-keyword-trend.component.html',
                styleUrls: ['./oer-keyword-trend.component.scss'],
            }]
    }], function () { return []; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["oer-keyword-trend"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], yearMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _charts_plain_plain_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charts/plain/plain.component */ "W2n9");
/* harmony import */ var _charts_oer_provider_dist_oer_provider_dist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charts/oer-provider-dist/oer-provider-dist.component */ "2yqW");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var _charts_oer_lang_dist_oer_lang_dist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./charts/oer-lang-dist/oer-lang-dist.component */ "5CF6");
/* harmony import */ var _charts_oer_year_dist_oer_year_dist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./charts/oer-year-dist/oer-year-dist.component */ "+3Hr");
/* harmony import */ var _charts_oer_keyword_dist_oer_keyword_dist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./charts/oer-keyword-dist/oer-keyword-dist.component */ "/EJN");
/* harmony import */ var _charts_oer_keyword_dist_lang_oer_keyword_dist_lang_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./charts/oer-keyword-dist-lang/oer-keyword-dist-lang.component */ "fUFr");
/* harmony import */ var _charts_oer_keyword_dist_location_oer_keyword_dist_location_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./charts/oer-keyword-dist-location/oer-keyword-dist-location.component */ "olt+");
/* harmony import */ var _charts_oer_authors_oer_authors_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./charts/oer-authors/oer-authors.component */ "UUly");
/* harmony import */ var _charts_oer_keyword_dist_trend_oer_keyword_dist_trend_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./charts/oer-keyword-dist-trend/oer-keyword-dist-trend.component */ "hyoe");
/* harmony import */ var _charts_oer_keyword_dist_trend_oer_keyword_trend_oer_keyword_trend_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./charts/oer-keyword-dist-trend/oer-keyword-trend/oer-keyword-trend.component */ "Z11v");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./loading/loading.component */ "f/hT");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__["NgApexchartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _charts_plain_plain_component__WEBPACK_IMPORTED_MODULE_5__["PlainComponent"],
        _charts_oer_provider_dist_oer_provider_dist_component__WEBPACK_IMPORTED_MODULE_6__["OerProviderDistComponent"],
        _charts_oer_lang_dist_oer_lang_dist_component__WEBPACK_IMPORTED_MODULE_8__["OerLangDistComponent"],
        _charts_oer_year_dist_oer_year_dist_component__WEBPACK_IMPORTED_MODULE_9__["OerYearDistComponent"],
        _charts_oer_keyword_dist_oer_keyword_dist_component__WEBPACK_IMPORTED_MODULE_10__["OerKeywordDistComponent"],
        _charts_oer_keyword_dist_lang_oer_keyword_dist_lang_component__WEBPACK_IMPORTED_MODULE_11__["OerKeywordDistLangComponent"],
        _charts_oer_keyword_dist_location_oer_keyword_dist_location_component__WEBPACK_IMPORTED_MODULE_12__["OerKeywordDistLocationComponent"],
        _charts_oer_authors_oer_authors_component__WEBPACK_IMPORTED_MODULE_13__["OerAuthorsComponent"],
        _charts_oer_keyword_dist_trend_oer_keyword_dist_trend_component__WEBPACK_IMPORTED_MODULE_14__["OerKeywordDistTrendComponent"],
        _charts_oer_keyword_dist_trend_oer_keyword_trend_oer_keyword_trend_component__WEBPACK_IMPORTED_MODULE_15__["OerKeywordTrendComponent"],
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__["NgApexchartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _charts_plain_plain_component__WEBPACK_IMPORTED_MODULE_5__["PlainComponent"],
                    _charts_oer_provider_dist_oer_provider_dist_component__WEBPACK_IMPORTED_MODULE_6__["OerProviderDistComponent"],
                    _charts_oer_lang_dist_oer_lang_dist_component__WEBPACK_IMPORTED_MODULE_8__["OerLangDistComponent"],
                    _charts_oer_year_dist_oer_year_dist_component__WEBPACK_IMPORTED_MODULE_9__["OerYearDistComponent"],
                    _charts_oer_keyword_dist_oer_keyword_dist_component__WEBPACK_IMPORTED_MODULE_10__["OerKeywordDistComponent"],
                    _charts_oer_keyword_dist_lang_oer_keyword_dist_lang_component__WEBPACK_IMPORTED_MODULE_11__["OerKeywordDistLangComponent"],
                    _charts_oer_keyword_dist_location_oer_keyword_dist_location_component__WEBPACK_IMPORTED_MODULE_12__["OerKeywordDistLocationComponent"],
                    _charts_oer_authors_oer_authors_component__WEBPACK_IMPORTED_MODULE_13__["OerAuthorsComponent"],
                    _charts_oer_keyword_dist_trend_oer_keyword_dist_trend_component__WEBPACK_IMPORTED_MODULE_14__["OerKeywordDistTrendComponent"],
                    _charts_oer_keyword_dist_trend_oer_keyword_trend_oer_keyword_trend_component__WEBPACK_IMPORTED_MODULE_15__["OerKeywordTrendComponent"],
                    _loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__["NgApexchartsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "f/hT":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function LoadingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Downloading Data...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoadingComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx_r1.processed)("aria-valuemax", ctx_r1.downloading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Processing Data ", ctx_r1.processed, " / ", ctx_r1.downloading, "");
} }
class LoadingComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.downloading = -1;
        this.processed = 0;
    }
    ngOnInit() {
        this.dataService.downloading
            .subscribe(i => this.downloading = i);
        this.dataService.processing
            .subscribe(i => this.processed = i);
    }
    ngAfterViewInit() {
        this.dataService.fetchData();
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 3, vars: 2, consts: [["class", "p-2", 4, "ngIf"], [1, "p-2"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-danger", "progress-bar-striped", "active", 2, "width", "100%"], ["role", "progressbar", "aria-valuemin", "1", 1, "progress-bar", "progress-bar-danger", "progress-bar-striped", "active", 2, "width", "100%"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoadingComponent_div_1_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoadingComponent_div_2_Template, 5, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.downloading <= -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.downloading >= 1 && ctx.processed < ctx.downloading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.scss']
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "fUFr":
/*!*********************************************************************************!*\
  !*** ./src/app/charts/oer-keyword-dist-lang/oer-keyword-dist-lang.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OerKeywordDistLangComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OerKeywordDistLangComponent", function() { return OerKeywordDistLangComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data.service */ "R7Hv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");






const _c0 = ["oer-keyword-dist-lang-chart"];
function OerKeywordDistLangComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "apx-chart", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx_r0.chartOptions.series)("chart", ctx_r0.chartOptions.chart)("plotOptions", ctx_r0.chartOptions.plotOptions)("xaxis", ctx_r0.chartOptions.xaxis)("stroke", ctx_r0.chartOptions.stroke)("yaxis", ctx_r0.chartOptions.yaxis)("title", ctx_r0.chartOptions.title)("tooltip", ctx_r0.chartOptions.tooltip);
} }
class OerKeywordDistLangComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.loaded = false;
        this.chartOptions = {
            series: [],
            chart: {
                type: 'bar',
                height: 420,
                stacked: true,
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                },
            },
            stroke: {
                width: 1,
                colors: ['#fff'],
            },
            title: {
                text: '',
            },
            xaxis: {
                categories: [],
                labels: {
                    formatter: function (val) {
                        return val;
                    },
                },
            },
            yaxis: {
                title: {
                    text: undefined,
                },
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val;
                    },
                },
            },
        };
    }
    ngOnInit() {
        this.dataService.loaded.subscribe(() => {
            const top5 = this.dataService.getTopKeywords(5);
            for (const element of top5) {
                this.chartOptions.xaxis.categories.push(element.name);
                const index = this.chartOptions.xaxis.categories.length - 1;
                for (const e of Object.entries(element.langMap)) {
                    let series = this.chartOptions.series.find((i) => i.name == e[0]);
                    if (!series) {
                        series = {
                            name: e[0],
                            data: [],
                        };
                        this.chartOptions.series.push(series);
                    }
                    series.data[index] = e[1];
                }
            }
            this.loaded = true;
        });
    }
}
OerKeywordDistLangComponent.ɵfac = function OerKeywordDistLangComponent_Factory(t) { return new (t || OerKeywordDistLangComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
OerKeywordDistLangComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OerKeywordDistLangComponent, selectors: [["app-oer-keyword-dist-lang"]], viewQuery: function OerKeywordDistLangComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 1, vars: 1, consts: [["id", "oer-keyword-dist-lang-chart", 4, "ngIf"], ["id", "oer-keyword-dist-lang-chart"], [3, "series", "chart", "plotOptions", "xaxis", "stroke", "yaxis", "title", "tooltip"]], template: function OerKeywordDistLangComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OerKeywordDistLangComponent_div_0_Template, 2, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZXIta2V5d29yZC1kaXN0LWxhbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OerKeywordDistLangComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-oer-keyword-dist-lang',
                templateUrl: './oer-keyword-dist-lang.component.html',
                styleUrls: ['./oer-keyword-dist-lang.component.scss'],
            }]
    }], function () { return [{ type: src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['oer-keyword-dist-lang-chart']
        }] }); })();


/***/ }),

/***/ "hyoe":
/*!***********************************************************************************!*\
  !*** ./src/app/charts/oer-keyword-dist-trend/oer-keyword-dist-trend.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OerKeywordDistTrendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OerKeywordDistTrendComponent", function() { return OerKeywordDistTrendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data.service */ "R7Hv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _oer_keyword_trend_oer_keyword_trend_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oer-keyword-trend/oer-keyword-trend.component */ "Z11v");





function OerKeywordDistTrendComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-oer-keyword-trend", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const kw_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](kw_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](kw_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("yearMap", kw_r1.yearMap)("name", kw_r1.name);
} }
class OerKeywordDistTrendComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.data = [];
    }
    ngOnInit() {
        this.dataService.loaded.subscribe(() => {
            this.data = this.dataService.getTopKeywords(10);
        });
    }
}
OerKeywordDistTrendComponent.ɵfac = function OerKeywordDistTrendComponent_Factory(t) { return new (t || OerKeywordDistTrendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
OerKeywordDistTrendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OerKeywordDistTrendComponent, selectors: [["app-oer-keyword-dist-trend"]], decls: 9, vars: 1, consts: [[1, "w-100"], [2, "width", "30% !important"], [2, "width", "20% !important"], [2, "width", "50% !important"], [4, "ngFor", "ngForOf"], [3, "yearMap", "name"]], template: function OerKeywordDistTrendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Keyword ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Score ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Trend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OerKeywordDistTrendComponent_tr_8_Template, 7, 4, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _oer_keyword_trend_oer_keyword_trend_component__WEBPACK_IMPORTED_MODULE_3__["OerKeywordTrendComponent"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvZXIta2V5d29yZC1kaXN0LXRyZW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQUNGIiwiZmlsZSI6Im9lci1rZXl3b3JkLWRpc3QtdHJlbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OerKeywordDistTrendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-oer-keyword-dist-trend',
                templateUrl: './oer-keyword-dist-trend.component.html',
                styleUrls: ['./oer-keyword-dist-trend.component.scss'],
            }]
    }], function () { return [{ type: src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "olt+":
/*!*****************************************************************************************!*\
  !*** ./src/app/charts/oer-keyword-dist-location/oer-keyword-dist-location.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OerKeywordDistLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OerKeywordDistLocationComponent", function() { return OerKeywordDistLocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data.service */ "R7Hv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");





const _c0 = ["oer-keyword-dist-location-chart"];
function OerKeywordDistLocationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "apx-chart", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx_r0.chartOptions.series)("chart", ctx_r0.chartOptions.chart)("plotOptions", ctx_r0.chartOptions.plotOptions)("xaxis", ctx_r0.chartOptions.xaxis)("stroke", ctx_r0.chartOptions.stroke)("yaxis", ctx_r0.chartOptions.yaxis)("title", ctx_r0.chartOptions.title)("tooltip", ctx_r0.chartOptions.tooltip);
} }
class OerKeywordDistLocationComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.loaded = false;
        this.chartOptions = {
            series: [],
            chart: {
                type: 'bar',
                height: 420,
                stacked: true,
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                },
            },
            stroke: {
                width: 1,
                colors: ['#fff'],
            },
            title: {
                text: '',
            },
            xaxis: {
                categories: [],
                labels: {
                    formatter: function (val) {
                        return val;
                    },
                },
            },
            yaxis: {
                title: {
                    text: undefined,
                },
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val;
                    },
                },
            },
        };
    }
    ngOnInit() {
        this.dataService.loaded.subscribe(() => {
            const top5 = this.dataService.getTopKeywords(5);
            for (const element of top5) {
                this.chartOptions.xaxis.categories.push(element.name);
                const index = this.chartOptions.xaxis.categories.length - 1;
                for (const e of Object.entries(element.locationMap)) {
                    let series = this.chartOptions.series.find((i) => i.name == e[0]);
                    if (!series) {
                        series = {
                            name: e[0],
                            data: [],
                        };
                        this.chartOptions.series.push(series);
                    }
                    series.data[index] = e[1];
                }
            }
            this.loaded = true;
        });
    }
}
OerKeywordDistLocationComponent.ɵfac = function OerKeywordDistLocationComponent_Factory(t) { return new (t || OerKeywordDistLocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
OerKeywordDistLocationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OerKeywordDistLocationComponent, selectors: [["app-oer-keyword-dist-location"]], viewQuery: function OerKeywordDistLocationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 1, vars: 1, consts: [["id", "oer-keyword-dist-location-chart", 4, "ngIf"], ["id", "oer-keyword-dist-location-chart"], [3, "series", "chart", "plotOptions", "xaxis", "stroke", "yaxis", "title", "tooltip"]], template: function OerKeywordDistLocationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OerKeywordDistLocationComponent_div_0_Template, 2, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZXIta2V5d29yZC1kaXN0LWxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OerKeywordDistLocationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-oer-keyword-dist-location',
                templateUrl: './oer-keyword-dist-location.component.html',
                styleUrls: ['./oer-keyword-dist-location.component.scss'],
            }]
    }], function () { return [{ type: src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['oer-keyword-dist-location-chart']
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map