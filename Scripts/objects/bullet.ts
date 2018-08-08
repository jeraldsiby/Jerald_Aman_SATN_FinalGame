namespace objects {
  export class Bullet extends objects.GameObject {
    // member variables
    private _verticalSpeed: number;
    private _horizontalSpeed: number;
    private _initX: number;
    private _initY: number;

    /**
     * Creates an instance of Cloud.
     * @memberof Bullet
     */
    //constructor
    constructor(x: number, y: number) {
      super("bullet");
      this._initX = x;
      this._initY = y;
      this.Start();
    }

    // private methods
    private _checkBounds(x: number, y: number): void {
      // check bottom boundary
      if (this.y > config.Screen.HEIGHT + this.halfHeight || this.y < 0) {
        this._initX = x;
        this._initY = y;
        this.Reset();
      }
    }

    // public methods
    public Start(): void {
      this.regX = this.halfWidth;
      this.regY = this.halfHeight;

      this.Reset();
    }

    public UpdateBullet(x: number, y: number): void {
      this.y -= this._verticalSpeed;
      this.x += this._horizontalSpeed;

      console.log(`x, y: ${this.x}, ${this.y}`);

      this._checkBounds(x, y);
    }

    public Reset(): void {
      this._verticalSpeed = 15; // between 5 and 15 ppf
      this._horizontalSpeed = 0; // between -8 and 8 ppf
      this.y = this._initY;
      this.x = this._initX;
    }
  }
}

