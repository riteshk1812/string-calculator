export function add(number) {
    if(!number) return 0;

    let delimeter = /,|\n/;
    
    if(number.startsWith("//")) {
        const splittedNums = number.split("\n");
        delimeter = new RegExp(splittedNums[0].slice(2));
        number = splittedNums.slice(1).join("\n");
    }

    const numberArr = number.split(delimeter).map(Number);
    const negativesNums = numberArr.filter(num => num < 0);

    if (negativesNums.length > 0) {
        throw new Error(`Negative numbers are not allowed ${negativesNums.join(",")}`);
    }

    return numberArr.reduce((sum, num) => sum + num, 0)
}