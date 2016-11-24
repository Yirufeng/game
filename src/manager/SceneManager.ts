/**
 * Created by Ace.C on 2016/4/15.
 */
class SceneManager extends BaseManager {

    public nowScene: BaseScene;
    public nowSceneId: string;
    public froSceneId: string;

    public constructor() {
        super();
    }

    public open(id): void {
        if (!id || id == this.nowSceneId) {
            return;
        }

        if (this.nowScene) {
            this.froSceneId = this.nowSceneId;
            this.nowScene.close();
        }

        if (!this.objectSet.hasOwnProperty(id)) {
            var SceneClass = egret.getDefinitionByName(id);
            if (!SceneClass) {
                return;
            }
            this.objectSet[id] = new SceneClass;
        }

        this.nowSceneId = id;

        this.nowScene = this.objectSet[id];
        this.nowScene.open();
    }

    public close(id, openFro: boolean = false) {
        if (!id || !this.objectSet[id]) {
            return;
        }

        if (!this.objectSet.hasOwnProperty(id)) {
            return;
        }

        if (this.nowSceneId == id) {
            this.nowScene.close();
        }
        else {
            var scene: BaseScene = this.objectSet[id];
            scene.close();
        }

        if (openFro && this.froSceneId && this.froSceneId != id && this.objectSet.hasOwnProperty(this.froSceneId)) {
            this.open(this.froSceneId);
        }
    }
}