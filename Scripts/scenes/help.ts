namespace scenes {
  export class Help extends objects.Scene {
    // member variables
    private _headerLabel: objects.Label;
    private _bodyLabel: objects.Label;
    private _backButton: objects.Button;
    private _ocean: objects.Ocean;

    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      this._ocean = new objects.Ocean();

      this._headerLabel = new objects.Label(
        "Instructions",
        "60px",
        "Consolas",
        "#ffffff",
        320,
        40,
        true
      );
      this._bodyLabel = new objects.Label(
        "1. Movement of fighter pilot is done using mouse." +
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
          "\n",
        "20px",
        "Consolas",
        "#ffffff",
        320,
        150,
        true
      );
      this._backButton = new objects.Button("BackButton", 320, 360, true);
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
      console.log(`Starting - HELP SCENE`);
      this.addChild(this._ocean);
      this.addChild(this._headerLabel);

      this.addChild(this._bodyLabel);
      this.addChild(this._backButton);

      this._backButton.on(
        "click",
        function() {
          managers.Game.ScoreBoard.Reset();
          managers.Game.CurrentState = config.Scene.START;
        },
        this
      );
    }
  }
}
