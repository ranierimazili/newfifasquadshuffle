export function getFormation(formation) {
    let playersPositions = [];
    
    switch(formation) {
        case "442":
            playersPositions[0] = {"left": "50%", "bottom": "5%", "pos": "GOL", "dsPosition" : "gk"};
            playersPositions[1] = {"left": "67%", "bottom": "20%", "pos": "ZAG", "dsPosition" : "cb"};
            playersPositions[2] = {"left": "32%", "bottom": "20%", "pos": "ZAG", "dsPosition" : "cb"};
            playersPositions[3] = {"left": "87%", "bottom": "22%", "pos": "LD", "dsPosition" : "rb"};
            playersPositions[4] = {"left": "13%", "bottom": "22%", "pos": "LE", "dsPosition" : "lb"};
            playersPositions[5] = {"left": "35%", "bottom": "35%", "pos": "VOL", "dsPosition" : "cdm"};
            playersPositions[6] = {"left": "65%", "bottom": "35%", "pos": "VOL", "dsPosition" : "cdm"};
            playersPositions[7] = {"left": "35%", "bottom": "60%", "pos": "MEI", "dsPosition" : "cm"};
            playersPositions[8] = {"left": "65%", "bottom": "60%", "pos": "MEI", "dsPosition" : "cm"};
            playersPositions[9] = {"left": "40%", "bottom": "82%", "pos": "ATA", "dsPosition" : "st"};
            playersPositions[10] = {"left": "60%", "bottom": "88%", "pos": "ATA", "dsPosition" : "st"};
            
            playersPositions[11] = {"left": "70%", "bottom": "89%", "pos": "ATA", "dsPosition" : "st"};
            playersPositions[12] = {"left": "30%", "bottom": "75%", "pos": "ATA", "dsPosition" : "st"};
            playersPositions[13] = {"left": "70%", "bottom": "61%", "pos": "MEI", "dsPosition" : "cm"};
            playersPositions[14] = {"left": "30%", "bottom": "47%", "pos": "MEI", "dsPosition" : "cm"};
            playersPositions[15] = {"left": "70%", "bottom": "33%", "pos": "LE", "dsPosition" : "lb"};
            playersPositions[16] = {"left": "30%", "bottom": "19%", "pos": "LD", "dsPosition" : "rb"};
            playersPositions[17] = {"left": "70%", "bottom": "5%", "pos": "ZAG", "dsPosition" : "cb"};
            break;
        case "352":
            playersPositions[0] = {"left": "50%", "bottom": "5%", "pos": "GOL", "dsPosition" : "gk"};
            playersPositions[1] = {"left": "20%", "bottom": "20%", "pos": "ZAG", "dsPosition" : "cb"};
            playersPositions[2] = {"left": "50%", "bottom": "20%", "pos": "ZAG", "dsPosition" : "cb"};
            playersPositions[3] = {"left": "80%", "bottom": "20%", "pos": "ZAG", "dsPosition" : "cb"};
            playersPositions[4] = {"left": "13%", "bottom": "60%", "pos": "MEI", "dsPosition" : "cm"};
            playersPositions[5] = {"left": "25%", "bottom": "45%", "pos": "MEI", "dsPosition" : "cm"};
            playersPositions[6] = {"left": "50%", "bottom": "40%", "pos": "VOL", "dsPosition" : "cdm"};
            playersPositions[7] = {"left": "75%", "bottom": "45%", "pos": "MEI", "dsPosition" : "cm"};
            playersPositions[8] = {"left": "87%", "bottom": "60%", "pos": "MEI", "dsPosition" : "cm"};
            playersPositions[9] = {"left": "30%", "bottom": "80%", "pos": "ATA", "dsPosition" : "st"};
            playersPositions[10] = {"left": "70%", "bottom": "80%", "pos": "ATA", "dsPosition" : "st"};

            playersPositions[11] = {"left": "70%", "bottom": "89%", "pos": "ATA", "dsPosition" : "st"};
            playersPositions[12] = {"left": "30%", "bottom": "75%", "pos": "ATA", "dsPosition" : "st"};
            playersPositions[13] = {"left": "70%", "bottom": "61%", "pos": "MEI", "dsPosition" : "cm"};
            playersPositions[14] = {"left": "30%", "bottom": "47%", "pos": "MEI", "dsPosition" : "cm"};
            playersPositions[15] = {"left": "70%", "bottom": "33%", "pos": "LE", "dsPosition" : "lb"};
            playersPositions[16] = {"left": "30%", "bottom": "19%", "pos": "LD", "dsPosition" : "rb"};
            playersPositions[17] = {"left": "70%", "bottom": "5%", "pos": "ZAG", "dsPosition" : "cb"};
            break;
        case "4231":
            playersPositions[0] = {"left": "50%", "bottom": "5%", "pos": "GOL", "dsPosition" : "gk"};
            playersPositions[1] = {"left": "67%", "bottom": "20%", "pos": "ZAG", "dsPosition" : "cb"};
            playersPositions[2] = {"left": "32%", "bottom": "20%", "pos": "ZAG", "dsPosition" : "cb"};
            playersPositions[3] = {"left": "87%", "bottom": "22%", "pos": "LD", "dsPosition" : "rb"};
            playersPositions[4] = {"left": "13%", "bottom": "22%", "pos": "LE", "dsPosition" : "lb"};
            playersPositions[5] = {"left": "35%", "bottom": "40%", "pos": "VOL", "dsPosition" : "cdm"};
            playersPositions[6] = {"left": "65%", "bottom": "40%", "pos": "VOL", "dsPosition" : "cdm"};
            playersPositions[7] = {"left": "50%", "bottom": "60%", "pos": "MEI", "dsPosition" : "cm"};
            playersPositions[8] = {"left": "20%", "bottom": "70%", "pos": "ATA", "dsPosition" : "st"};
            playersPositions[9] = {"left": "50%", "bottom": "85%", "pos": "ATA", "dsPosition" : "st"};
            playersPositions[10] = {"left": "80%", "bottom": "70%", "pos": "ATA", "dsPosition" : "st"};

            playersPositions[11] = {"left": "70%", "bottom": "89%", "pos": "ATA", "dsPosition" : "st"};
            playersPositions[12] = {"left": "30%", "bottom": "75%", "pos": "ATA", "dsPosition" : "st"};
            playersPositions[13] = {"left": "70%", "bottom": "61%", "pos": "MEI", "dsPosition" : "cm"};
            playersPositions[14] = {"left": "30%", "bottom": "47%", "pos": "MEI", "dsPosition" : "cm"};
            playersPositions[15] = {"left": "70%", "bottom": "33%", "pos": "LE", "dsPosition" : "lb"};
            playersPositions[16] = {"left": "30%", "bottom": "19%", "pos": "LD", "dsPosition" : "rb"};
            playersPositions[17] = {"left": "70%", "bottom": "5%", "pos": "ZAG", "dsPosition" : "cb"};
            break;
        default:
            playersPositions[0] = {"left": "50%", "bottom": "5%", "pos": "GOL", "dsPosition" : "gk"};
            playersPositions[1] = {"left": "67%", "bottom": "20%", "pos": "ZAG", "dsPosition" : "cb"};
            playersPositions[2] = {"left": "32%", "bottom": "20%", "pos": "ZAG", "dsPosition" : "cb"};
            playersPositions[3] = {"left": "89%", "bottom": "22%", "pos": "LD", "dsPosition" : "rb"};
            playersPositions[4] = {"left": "11%", "bottom": "22%", "pos": "LE", "dsPosition" : "lb"};
            playersPositions[5] = {"left": "35%", "bottom": "35%", "pos": "VOL", "dsPosition" : "cdm"};
            playersPositions[6] = {"left": "65%", "bottom": "40%", "pos": "VOL", "dsPosition" : "cdm"};
            playersPositions[7] = {"left": "35%", "bottom": "60%", "pos": "MEI", "dsPosition" : "cm"};
            playersPositions[8] = {"left": "65%", "bottom": "65%", "pos": "MEI", "dsPosition" : "cm"};
            playersPositions[9] = {"left": "40%", "bottom": "80%", "pos": "ATA", "dsPosition" : "st"};
            playersPositions[10] = {"left": "60%", "bottom": "90%", "pos": "ATA", "dsPosition" : "st"};

            playersPositions[11] = {"left": "70%", "bottom": "89%", "pos": "ATA", "dsPosition" : "st"};
            playersPositions[12] = {"left": "30%", "bottom": "75%", "pos": "ATA", "dsPosition" : "st"};
            playersPositions[13] = {"left": "70%", "bottom": "61%", "pos": "MEI", "dsPosition" : "cm"};
            playersPositions[14] = {"left": "30%", "bottom": "47%", "pos": "MEI", "dsPosition" : "cm"};
            playersPositions[15] = {"left": "70%", "bottom": "33%", "pos": "LE", "dsPosition" : "lb"};
            playersPositions[16] = {"left": "30%", "bottom": "19%", "pos": "LD", "dsPosition" : "rb"};
            playersPositions[17] = {"left": "70%", "bottom": "5%", "pos": "ZAG", "dsPosition" : "cb"};
    }
    return playersPositions;
}

export function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}