var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play1 = /** @class */ (function (_super) {
        __extends(Play1, _super);
        // constructors
        function Play1() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Play1.prototype._buildClouds = function () {
            for (var count = 0; count < this._cloudNum; count++) {
                this._clouds.push(new objects.Cloud());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        // public methods
        Play1.prototype.Start = function () {
            this.levelLablel = new objects.Label("LEVEL - 1", "40px", "Consolas", "#ffffff", 280, 70, true);
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;
            this._plane = new objects.Plane();
            this._ocean = new objects.Ocean();
            this._island = new objects.Island();
            // creates an empty array of type Cloud
            this._clouds = new Array();
            this.Level = managers.Game.Level;
            this._cloudNum = 2;
            this._buildClouds();
            this._bullet = new objects.Bullet(this._plane.x, this._plane.y);
            this.Main();
        };
        Play1.prototype.Update = function () {
            var _this = this;
            this._plane.Update();
            this._ocean.Update();
            this._island.Update();
            managers.Collision.check(this._plane, this._island);
            this._clouds.forEach(function (cloud) {
                cloud.Update();
                managers.Collision.check(_this._plane, cloud);
            });
            this._bullet.UpdateBullet(this._plane.x, this._plane.y);
            this._clouds.forEach(function (enemy) {
                managers.Collision.checkBulletEnemy(_this._bullet, enemy);
            });
        };
        Play1.prototype.Reset = function () { };
        Play1.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play1.prototype.Main = function () {
            console.log("Starting - PLAY1 SCENE");
            // adding the ocean to the scene
            this.addChild(this._ocean);
            // adding the island to the scene
            this.addChild(this._island);
            // adding the plane to the scene
            this.addChild(this._plane);
            this.addChild(this.levelLablel);
            // adding the cloud to the scene
            for (var _i = 0, _a = this._clouds; _i < _a.length; _i++) {
                var cloud = _a[_i];
                this.addChild(cloud);
            }
            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
            this.addChild(this._bullet);
        };
        return Play1;
    }(objects.Scene));
    scenes.Play1 = Play1;
})(scenes || (scenes = {}));
//# sourceMappingURL=play1.js.map