export class Util{
    public static random(min: number, max: number){
        const value = min + Math.random() * (max - min);
        const rounded = Math.round(value);
        return rounded;
    }
}