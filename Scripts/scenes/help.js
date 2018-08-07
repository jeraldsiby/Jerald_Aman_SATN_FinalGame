var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Help = /** @class */ (function (_super) {
        __extends(Help, _super);
        // constructors
        function Help() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Help.prototype.Start = function () {
            this._ocean = new objects.Ocean();
            this._headerLabel = new objects.Label("Instructions", "60px", "Consolas", "#ffffff", 320, 40, true);
            this._bodyLabel = new objects.Label("1. Movement of fighter pilot is done using mouse." +
                "\n" +
                "\n" +
                "2. Go over the alien objects to gain points." +
                "\n" +
                "\n" +
                "3. Avoid enemy collissions to keep up the lives." +
                "\n" +
                "\n" +
                "4. Shoot down the enemies to get more points." +
                "\n" +
                "\n" +
                "5. Difficulty increases as level changes." +
                "\n", "20px", "Consolas", "#ffffff", 320, 150, true);
            this._backButton = new objects.Button("BackButton", 320, 360, true);
            this.Main();
        };
        Help.prototype.Update = function () {
            this._ocean.Update();
        };
        Help.prototype.Reset = function () { };
        Help.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Help.prototype.Main = function () {
            console.log("Starting - HELP SCENE");
            this.addChild(this._ocean);
            this.addChild(this._headerLabel);
            this.addChild(this._bodyLabel);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.START;
            }, this);
        };
        return Help;
    }(objects.Scene));
    scenes.Help = Help;
})(scenes || (scenes = {}));
//# sourceMappingURL=help.js.map