
export class RandomNumberGenerator {
    public static generateRndmNum = (min: number, max: number) => {
        //generate random number from range min to max  100000
        let numberArr = []
        for (let i = 0; i <= 99999; i++) {
            numberArr.push((Math.floor(Math.random() * (max - min + 1)) + min))
        }
        return numberArr;

    }
}





