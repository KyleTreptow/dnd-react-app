export default class DandD {
    // Generate a random number
    // Default is a d20, since that's the most common
    static roll(faces = 20) {
        if (isNaN(faces) || faces <= 0) faces = 20;
        return Math.floor(Math.random() * faces) + 1
    }

    static statToBonus(stat) {
        if (stat === 0 || isNaN(stat)) return null;
        /*
         * +=======+=======+=======+=======+=======+=======+
         * | Stat  | Bonus | Stat  | Bonus | Stat  | Bonus |
         * +-------+-------+-------+-------+-------+-------+
         * |  1    |  - 5  | 10-11 |  + 0  | 20-21 |  + 5  |
         * +-------+-------+-------+-------+-------+-------+
         * |  2-3  |  - 4  | 12-13 |  + 1  | 22-23 |  + 6  |
         * +-------+-------+-------+-------+-------+-------+
         * |  4-5  |  - 3  | 14-15 |  + 2  | 24-25 |  + 7  |
         * +-------+-------+-------+-------+-------+-------+
         * |  6-7  |  - 5  | 16-17 |  + 3  | 26-27 |  + 8  |
         * +-------+-------+-------+-------+-------+-------+
         * |  8-9  |  - 1  | 18-19 |  + 4  | 28-29 |  + 9  |
         * +-------+-------+-------+-------+-------+-------+
         * |       |       |       |       |  30   |  + 10 |
         * +=======+=======+=======+=======+=======+=======+
         */

        return Math.floor((stat - 10) / 2);
    }

    static titleCase(str) {
        return str.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
    }
}