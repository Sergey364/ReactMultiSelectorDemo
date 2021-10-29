import SourceController from "./Controllers/SourceController";

export default class DataLoader {
    load(config) {
        const sourceController = new SourceController({
            filter: config.filter
        });
        return sourceController.load().then((items) => {
            return {
                ...config,
                items
            }
        });
    }
}