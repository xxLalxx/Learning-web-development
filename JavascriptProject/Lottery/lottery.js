let lotteryNumbers = ["AR 707158", "AN 707988", "AP 405500", "AR 237484", "AX 204426", "AO 120794", "AZ 925507", "AU 707158"];

    
function drawWinner() {
    let randomIndex = Math.round(Math.random() * lotteryNumbers.length); 
    let winnerTicket = lotteryNumbers[randomIndex];

            
    console.log(" Winner Ticket Number:", winnerTicket);

    document.getElementById("winner").innerHTML = " Winner: " + winnerTicket;

    document.getElementById("modalWinner").innerHTML = winnerTicket;

            
    let modal = new bootstrap.Modal(document.getElementById('winnerModal'));
    modal.show();
}