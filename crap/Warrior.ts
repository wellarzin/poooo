import { Character } from "./Character";
import { Util } from "./Util";

export class Warrior extends Character{
    constructor(name: string){
        super(
            name + 'Warrior',
            Util.random(1, 1000),
            0,
            0,
            Util.random(0, 50),
            Util.random(0, 50),
            0,
            Util.random(1, 40_000)
        );
        this._atackPower = this._strength * 10;
        this._life = this._maxLife;
    }

    public atack(oponent: Character): void{
        console.log(`${this._name} atacou ${oponent.name}`);
        this.atack(oponent);
        oponent.counterAtack(this);
    }

    public counterAtack(oponent: Character): void{
        console.log(`${this._name} contra-atacou ${oponent.name}`);
        this.atack(oponent);
    }

    public levelupSkill(): void{
        this._strength *= this._strength * 1.1;

        this.attAtackPower();
    }

    public attAtackPower(): void{
        this._atackPower = this._strength * 10;
    }

    public lifeRegen(): void{
        this._life += this._maxLife * 1.05

        if (this._life > this._maxLife) {
            this._life = this._maxLife;
        }
    }

    public damageAtack(oponent: Character): void{
        const hit: boolean = Util.random(0, 100) > oponent.dodge;
        if(hit){
            const damage = (oponent.defense / 100) * this._atackPower;
            oponent.life -= damage;

            if(oponent.life < 0){
                oponent.life = 0;
    
                console.log(`${oponent.name} morreu`);
                
            }
        }else{
            console.log(`${oponent.name} desviou do ataque`);
        }

        
    }
}