//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function () {
    // Game Variables
    var canvas;
    var stage;
    var AssetManager;
    var CurrentScene;
    var CurrentState;
    var ScoreBoard;
    var keycode;
    var Manifest = [
        { id: "StartButton", src: "Assets/images/StartButton.png" },
        { id: "NextButton", src: "Assets/images/NextButton.png" },
        { id: "BackButton", src: "Assets/images/BackButton.png" },
        { id: "HelpButton", src: "Assets/images/help1.png" },
        { id: "RestartButton", src: "Assets/images/RestartButton.png" },
        { id: "MainMenu", src: "Assets/images/MainMenu.png" },
        { id: "plane", src: "Assets/images/spaceship.png" },
        { id: "sky", src: "Assets/images/sky.jpg" },
        { id: "level1", src: "Assets/images/level1.jpg" },
        { id: "level2", src: "Assets/images/level2.jpg" },
        { id: "level3", src: "Assets/images/level3.jpg" },
        { id: "Home", src: "Assets/images/Home.gif" },
        { id: "PlayAgain", src: "Assets/images/play_again.gif" },
        { id: "island", src: "Assets/images/friend.png" },
        { id: "cloud", src: "Assets/images/boss1.png" },
        { id: "controls", src: "Assets/images/controls.png" },
        { id: "yay", src: "Assets/audio/life.wav" },
        { id: "thunder", src: "Assets/audio/explosion.mp3" },
        { id: "engine", src: "Assets/audio/engine.ogg" }
    ];
    function Init() {
        console.log("%c Assets Loading...", "font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
        document.onkeydown = function (event) {
            managers.keyboard.keycode = event.keyCode;
        };
        document.onkeyup = function (event) {
            managers.keyboard.keycode = -1;
        };
    }
    function Start() {
        console.log("%c Game Initializing...", "font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.Stage = stage; // create a reference to the stage class
        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);
        CurrentState = config.Scene.START;
        managers.Game.CurrentState = CurrentState;
        // setup scoreboard manager
        ScoreBoard = new managers.ScoreBoard();
        managers.Game.ScoreBoard = ScoreBoard;
        // This is where all the magic happens
        Main();
    }
    function Update() {
        if (CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }
        CurrentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("%c Switching Scenes...", "font-style:italic; font-size:16px; color:blue;");
        if (CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
        }
        switch (CurrentState) {
            case config.Scene.START:
                CurrentScene = new scenes.Start();
                break;
            case config.Scene.PLAY:
                CurrentScene = new scenes.Play();
                break;
            case config.Scene.END:
                CurrentScene = new scenes.End();
                break;
            case config.Scene.HELP:
                CurrentScene = new scenes.Help();
                break;
            case config.Scene.MENU:
                CurrentScene = new scenes.Menu();
                break;
        }
        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map