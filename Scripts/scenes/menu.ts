namespace scenes {
  export class Menu extends objects.Scene {
    // member variables
    private _level1: objects.Button;
    private _level2: objects.Button;
    private _level3: objects.Button;
    private _backButton: objects.Button;
    private _ocean: objects.Ocean;
    private _playButton: objects.Button;

    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      this._ocean = new objects.Ocean();

      this._level1 = new objects.Button("level1", 170, 260, true);
      this._level2 = new objects.Button("level2", 300, 260, true);
      this._level3 = new objects.Button("level3", 430, 260, true);
      this._backButton = new objects.Button("BackButton", 300, 350, true);
      this._playButton = new objects.Button("play", 310, 150, true);

      this.Main();
    }

    public Update(): void {
      this._ocean.Update();
    }

    public Reset(): void {}

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Main(): void {
      console.log(`Starting - START SCENE`);
      this.addChild(this._ocean);

      this.addChild(this._level1);
      this.addChild(this._level2);
      this.addChild(this._level3);
      this.addChild(this._backButton);

      this.addChild(this._playButton);

      this._level1.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.PLAY;
          managers.Game.Level = 1;
        },
        this
      );

      this._level2.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.PLAY;
          managers.Game.Level = 2;
        },
        this
      );
      this._level3.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.PLAY;
          managers.Game.Level = 3;
        },
        this
      );
      this._backButton.on(
        "click",
        function() {
          managers.Game.ScoreBoard.Reset();
          managers.Game.CurrentState = config.Scene.START;
        },
        this
      );
      this._playButton.on(
        "click",
        function() {
          managers.Game.ScoreBoard.Reset();
          managers.Game.CurrentState = config.Scene.PLAY1;
        },
        this
      );
    }
  }
}
