class Tile {
    letter: string
    score: number

    constructor(letter: string, score: number) {
        this.letter = letter
        this.score = score
    }
}

class Rack {
    tiles: Tile[] = []

    addTile(tile: Tile) {
        this.tiles.push(tile)
    }
}

type Weighting = {
    letter: string
    score: number
}

class Scrabble {
    letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    rack: Tile[] = []

    getRandIdx() {
        return Math.floor(Math.random()*this.letters.length)
    }

    createRandomTile(randIdx: number) {
        const letter = this.letters[randIdx]
        const score = this.getLetterScore(letter) 
        return new Tile(letter, score)
    }

    createRack() {
        let i = 0
        while(i<=7) {
            const randIdx = this.getRandIdx()
            this.rack.push(this.createRandomTile(randIdx))
        }
    }

    findValidWord(rack: Rack) {}

    findLongestValidWord(rack: Rack) {}

    findHighestScoringWord(rack: Rack) {}

    getLetterScore (letter: string) {
        const lowerCaseLetter = letter.toLocaleLowerCase()

        if (['A', 'E', 'I', 'O', 'U', 'L', 'N', 'S', 'T', 'R'].includes(lowerCaseLetter)  ) {
            return 1
        }

        if (['D', 'G'].includes(lowerCaseLetter)) return 2

        if (['B', 'C', 'M', 'P'].includes(lowerCaseLetter)) return 3

        if (['F', 'H', 'V', 'W', 'Y'].includes(lowerCaseLetter)) return 4

        if ('K' === lowerCaseLetter) return 5

        if (['J', 'X'].includes(lowerCaseLetter)) return 8

        if (['Q', 'Z'].includes(lowerCaseLetter)) return 10

        return 0
    }
}