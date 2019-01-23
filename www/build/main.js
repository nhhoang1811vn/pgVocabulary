webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* unused harmony export Lesson */
/* unused harmony export Word */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lesson_detail_lesson_detail__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, transfer, file) {
        this.navCtrl = navCtrl;
        this.transfer = transfer;
        this.file = file;
        this.fileTransfer = this.transfer.create();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.readFile();
    };
    HomePage.prototype.downloadFile = function () {
        var _this = this;
        var url = 'https://www.dropbox.com/s/xntw7v7j60tnqrf/data.csv?dl=1';
        this.fileTransfer.download(url, this.file.dataDirectory + 'data.csv').then(function (entry) {
            _this.readFile();
        }, function (error) {
            alert('download file error');
        });
    };
    HomePage.prototype.readFile = function () {
        var _this = this;
        this.file.readAsText(this.file.dataDirectory, 'data.csv').then(function (results) {
            _this.lessons = _this.mapToLessons(results.split("\n"));
            console.log(_this.lessons);
        });
    };
    HomePage.prototype.mapToLessons = function (rawDatas) {
        var header = "";
        var headerIndex = 0;
        var results = [];
        var result;
        var newWord = "";
        for (var i = 0; i < rawDatas.length; i++) {
            var rawData = rawDatas[i];
            //console.log(rawData);
            if (rawData.includes("LessonTitle")) {
                header = rawData.split(": ")[1];
                if (result != null) {
                    results.push(result);
                }
                result = new Lesson(header);
                headerIndex = i;
            }
            else {
                if (this.isMeaning(i - headerIndex)) {
                    result.addWord(new Word(newWord, rawData));
                }
                else {
                    newWord = rawData;
                }
            }
        }
        return results;
    };
    HomePage.prototype.isMeaning = function (index) {
        return (index % 2 == 0);
    };
    HomePage.prototype.onLessonClicked = function (lesson) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__lesson_detail_lesson_detail__["a" /* LessonDetailPage */], lesson);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\HoangWorkSpace\Vocabulary\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title (click)="onLessonClicked()">\n      Vocabulary Application\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card padding>\n    <ion-card-header>Set up your lessons</ion-card-header>\n      <button ion-button outline icon-start (click)="downloadFile()">\n          <ion-icon name="download"></ion-icon>\n        Download Lesson</button>\n  </ion-card>\n  <ion-card padding *ngIf="!lessons">\n      <ion-card-header>Notification</ion-card-header>\n      <p>There is no lessons at all, try to click Download Lesson button to retrieve your lessons</p>\n    </ion-card>\n  \n  <ion-card padding *ngIf="lessons">\n      <ion-card-header>My Lessons</ion-card-header>\n      <button ion-button outline icon-start *ngFor ="let lesson of lessons" (click)="onLessonClicked(lesson)">\n          <ion-icon name="folder-open"></ion-icon>\n          {{lesson.name}}\n        </button>    \n  </ion-card>      \n</ion-content>\n'/*ion-inline-end:"E:\HoangWorkSpace\Vocabulary\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */]])
    ], HomePage);
    return HomePage;
}());

var Lesson = /** @class */ (function () {
    function Lesson(name) {
        this.words = [];
        this.name = name;
        this.words = new Array();
    }
    Lesson.prototype.addWord = function (word) {
        this.words.push(word);
    };
    return Lesson;
}());

var Word = /** @class */ (function () {
    function Word(name, meaning) {
        this.name = name;
        this.meaning = meaning;
    }
    return Word;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LessonDetailPage = /** @class */ (function () {
    function LessonDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedIndex = 0;
        this.isShowMeaning = false;
        this.lesson = navParams.data;
        this.selectedIndex = 0;
        this.selectedWord = this.lesson.words[this.selectedIndex];
        this.textDisplay = this.selectedWord.name;
    }
    LessonDetailPage.prototype.onNextClicked = function () {
        if (this.selectedIndex < this.lesson.words.length - 1) {
            this.selectedIndex++;
            this.selectedWord = this.lesson.words[this.selectedIndex];
            this.textDisplay = this.selectedWord.name;
        }
    };
    LessonDetailPage.prototype.onPreviousClicked = function () {
        if (this.selectedIndex > 0) {
            this.selectedIndex--;
            this.selectedWord = this.lesson.words[this.selectedIndex];
            this.textDisplay = this.selectedWord.name;
        }
    };
    LessonDetailPage.prototype.onShuffleClicked = function () {
        this.selectedIndex = this.generateRandomNumber(0, this.lesson.words.length - 1);
        this.selectedWord = this.lesson.words[this.selectedIndex];
        this.textDisplay = this.selectedWord.name;
    };
    LessonDetailPage.prototype.toggle = function () {
        this.isShowMeaning = !this.isShowMeaning;
        if (this.isShowMeaning) {
            this.textDisplay = this.selectedWord.meaning;
        }
        else {
            this.textDisplay = this.selectedWord.name;
        }
    };
    LessonDetailPage.prototype.generateRandomNumber = function (min_value, max_value) {
        return Math.floor(Math.random() * (max_value - min_value) + min_value);
    };
    LessonDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'lesson-detail',template:/*ion-inline-start:"E:\HoangWorkSpace\Vocabulary\src\pages\lesson-detail\lesson-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{lesson.name}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>  \n  <div id="text-center" (click)="toggle()">\n    <h1>{{textDisplay}}</h1>    \n  </div>\n  <div id="bottom-panel">\n    <button ion-button outline icon-start (click)="onPreviousClicked()">\n        <ion-icon name="arrow-back"></ion-icon>\n        Previous\n    </button>\n    <button ion-button outline icon-start (click)="onShuffleClicked()">\n        <ion-icon name="shuffle"></ion-icon>\n        Shuffle\n    </button>\n    <button ion-button outline icon-start (click)="onNextClicked()">\n        <ion-icon name="arrow-forward"></ion-icon>\n        Next\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\HoangWorkSpace\Vocabulary\src\pages\lesson-detail\lesson-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], LessonDetailPage);
    return LessonDetailPage;
}());

//# sourceMappingURL=lesson-detail.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_lesson_detail_lesson_detail__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_lesson_detail_lesson_detail__["a" /* LessonDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_lesson_detail_lesson_detail__["a" /* LessonDetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\HoangWorkSpace\Vocabulary\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\HoangWorkSpace\Vocabulary\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map