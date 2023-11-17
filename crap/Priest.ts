import { Character } from "./Character";
import { Util } from "./Util";

export class Priest extends Character{
    constructor(name: string){
        super(
            name + 'Priest',
            0,
            0,
            0,
            0,
            0,
            0,
            Util.random(1, 8_000)
        );
        this._life = this._maxLife;
    }

    public atack(oponent: Character): void{
        console.log(`${this._name} tentou converter ${oponent.name}`);
        this.atack(oponent);
        oponent.counterAtack(this);
    }

    public counterAtack(oponent: Character): void {
        console.log(`${this._name} tentou converter ${oponent.name}`);
        this.atack(oponent);
    }

    public levelupSkill(): void {
        throw new Error("Este personagem não pode executar esta ação")
    }

    public lifeRegen(): void{
        this._life += this._maxLife * 1.1

        if (this._life > this._maxLife) {
            this._life = this._maxLife;
        }
    }

    public damageAtack(oponent: Character): void{
        const hit: boolean = Util.random(0, 100) <= 40;
        if(hit){
            console.log(`${oponent.name} foi convertido`);
            console.log(`${this._name} venceu a batalha`);
        }else{
            console.log(`${oponent.name} esquivou.`);
        }
    }
}