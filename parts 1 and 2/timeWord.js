function timeWord(time){
    //check for cases that are exceptions
    if(time == '00:00'){
        return "midnight"
    }
    if (time == '12:00'){
        return 'noon'
    }
    //arrays of written out numbers
    const writtenSingles = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const writtenTens = ['', '', 'twenty','thirty','forty','fifty'];
    //converts hours and minutes to numbers
    let hour = Number(time[0] + time[1]);
    let minutes = Number(time[3] + time[4]);
    let writtenOutTime = "";

    //Chheck for hour
    if (hour === 0){
        writtenOutTime += 'twelve'
    } else if (hour >= 13){
        writtenOutTime += writtenSingles[hour-12]
    } else{
        writtenOutTime += writtenSingles[hour]
    }
    //add minutes
    if (time[3] == '0'){
        writtenOutTime += " oh"
        writtenOutTime += " "
        writtenOutTime += writtenSingles[minutes]
    } else if( minutes < 20){
        writtenOutTime += " "
        writtenOutTime += writtenSingles[minutes]
    } else{
        writtenOutTime += " "
        writtenOutTime += writtenTens[Number(time[3])]
        writtenOutTime += " "
        writtenOutTime += writtenSingles[Number(time[4])]
    }

    //add AM of PM
    if (hour >= 12){
        writtenOutTime += " PM"
    } else {
        writtenOutTime += " AM"
    }
    return writtenOutTime
}

module.exports = {
    timeWord
}