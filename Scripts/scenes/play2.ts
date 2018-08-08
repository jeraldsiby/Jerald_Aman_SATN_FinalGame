namespace scenes {
  export class Play2 extends objects.Scene {
    // member variables
    private _plane: objects.Plane;
    private _ocean: objects.Ocean;
    private _island: objects.Island;
    private _clouds: objects.Cloud[];
    private _cloudNum: number;
    private Level: Number;
    private levelLablel: objects.Label;
    private _bullet: objects.Bullet;

    public engineSound: createjs.AbstractSoundInstance;

    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods
    private _buildClouds(): void {
      for (let count = 0; count < this._cloudNum; count++) {
        this._clouds.push(new objects.Cloud());
        //this._clouds[count] = new objects.Cloud();
      }
    }

    // public methods
    public Start(): void {
      this.levelLablel = new objects.Label(
        "LEVEL - 2",
        "40px",
        "Consolas",
        "#ffffff",
        280,
        70,
        true
      );

      this.engineSound = createjs.Sound.play("engine");
      this.engineSound.loop = -1;
      this.engineSound.volume = 0.1;

      this._plane = new objects.Plane();
      this._ocean = new objects.Ocean();
      this._island = new objects.Island();

      // creates an empty array of type Cloud
      this._clouds = new Array<objects.Cloud>();
      this.Level = managers.Game.Level;
      this._cloudNum = 3;

      this._buildClouds();

      this._bullet = new objects.Bullet(this._plane.x, this._plane.y);

      this.Main();
    }

    public Update(): void {
      this._plane.Update();
      this._ocean.Update();
      this._island.Update();

      managers.Collision.check(this._plane, this._island);

      this._clouds.forEach(cloud => {
        cloud.Update();
        managers.Collision.check(this._plane, cloud);
      });

      this._bullet.UpdateBullet(this._plane.x, this._plane.y);

      this._clouds.forEach(enemy => {
        managers.Collision.checkBulletEnemy(this._bullet, enemy);
      });
    }

    public Reset(): void {}

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Main(): void {
      console.log(`Starting - PLAY2 SCENE`);

      // adding the ocean to the scene
      this.addChild(this._ocean);

      // adding the island to the scene
      this.addChild(this._island);

      // adding the plane to the scene
      this.addChild(this._plane);

      // adding the cloud to the scene
      for (const cloud of this._clouds) {
        this.addChild(cloud);
      }
      this.addChild(this.levelLablel);
      this.addChild(managers.Game.ScoreBoard.LivesLabel);
      this.addChild(managers.Game.ScoreBoard.ScoreLabel);
      this.addChild(this._bullet);
    }
  }
}
