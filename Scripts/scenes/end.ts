namespace scenes {
  export class End extends objects.Scene {
    // member variables
    private _endLabel: objects.Label;
    private _backButton: objects.Button;
    private _play_again: objects.Button;
    private _ocean: objects.Ocean;
    private scoreDefined: Number;

    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      this._ocean = new objects.Ocean();

      this.scoreDefined = managers.Game.Score;
      this._endLabel = new objects.Label(
        "High Score: " + this.scoreDefined.toString() + "\n",
        "40px",
        "Consolas",
        "#ffffff",
        320,
        200,
        true
      );
      this._backButton = new objects.Button("Home", 320, 300, true);
      this._play_again = new objects.Button("PlayAgain", 320, 400, true);

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
      console.log(`Starting - END SCENE`);
      this.addChild(this._ocean);
      this.addChild(this._endLabel);

      //this.addChild(managers.Game.ScoreBoard.HighScoreLabel);

      this.addChild(this._backButton);
      this.addChild(this._play_again);

      this._backButton.on(
        "click",
        function() {
          managers.Game.ScoreBoard.Reset();
          managers.Game.CurrentState = config.Scene.START;
        },
        this
      );

      this._play_again.on(
        "click",
        function() {
          managers.Game.ScoreBoard.Reset();
          managers.Game.CurrentState = config.Scene.MENU;
        },
        this
      );
    }
  }
}
