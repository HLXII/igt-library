import {IgtExpLevel} from "@/ig-template/tools/exp-level/IgtExpLevel";

/**
 * Implementation of IgtExpLevel that takes a function to calculate exp needed for each level.
 */
export class ContinuousExpLevel extends IgtExpLevel {
    levelFunc: (arg1: number) => number;

    constructor(maxLevel: number, levelFunc: (arg1: number) => number, baseExp: number = 0) {
        super(maxLevel, baseExp);
        this.levelFunc = levelFunc;
    }

    getExpNeededForLevel(level: number): number {
        if (level > this.maxLevel) {
            return Infinity
        }
        return this.levelFunc(level);
    }

}
