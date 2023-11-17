export class Character{
    constructor(
        protected _name: string,
        protected _strength: number,
        protected _mentalSkill: number,
        protected _atackPower: number,
        protected _dodge: number,
        protected _defense: number,
        protected _maxLife: number,
        protected _life: number
        ){}

        public atack(character: Character): void{
            console.log('teste teste teste');
            
        }

        public counterAtack(character: Character): void{
            console.log('teste teste teste');
            
        }

        public levelupSkill(): void{
            console.log('teste teste teste');
            
        }

        public lifeRegen(): void{
            console.log('teste teste teste');
            
        }

        public get name(): string{
            return this._name;
        }

        public set life(value: number){
            this._life = value;
        }

        public get life(): number{
            return this._life;
        }

        public get dodge(): number{
            return this._dodge;
        }

        public get defense(): number{
            return this._defense;
        }
}