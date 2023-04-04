'use strict'
let h1 = document.createElement('h2');
const BTNS = document.querySelectorAll('.container button')
const startBTN = document.querySelector('#start');
const nameInput = document.querySelector('#namer');
const finalResult = document.querySelector('.final-result');
const resulter  = document.querySelector('#resulter');
const sizeDisplay = document.querySelectorAll('#sizer');


let namer;
nameInput.addEventListener('keyup',()=>{
    namer = nameInput.value;
    startBTN.disabled = false;
    question.get(1).set(4,String(namer));
    question.get(1).set("correct",String(namer));
})
// ----------------------------- Question Map
let rndm = [];
function insertLength (num){
    for (let i = 2; i <= num; i++){
        rndm.push(i)
    }
    console.log(rndm);
}
// ---- Length = question.size
insertLength(28)

let rnd = [1,2,3,4]
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffleArray(rndm)
shuffleArray(rnd)
//  ---------------------- Questions
const question = new Map([
    [1,new Map([
        ["qu","What's Your Name?"],
        [1,"عبدالصمد القرشي"],
        [2,"سلمان الفرج"],
        [3,"اخوكم من العراق"],
    ])],
    [rndm[0],new Map([
        ["qu","What is the Turing Machine?"],
        [1,"Representative of RNA"],
        [2,"Representative of genetic Data"],
        [3,"Representative of chromatides"],
        [4,"Representative of DNA"],
        ["correct","Representative of DNA"]
    ])],
    [rndm[1],new Map([
        ["qu","What is the Components of Turing Machine?"],
        [1,"a control unit and a tape"],
        [2,"a read-write head"],
        [3,"All"],
        [4,"None"],
        ["correct","All"]
    ])],
    [rndm[2],new Map([
        ["qu","Systems Biology consists of..."],
        [rnd[0],"DNA, RNA, Protiens"],
        [rnd[1],"Genomics,Bioinformatics, Structural Genomics, Proteomics"],
        [rnd[2],"Software, Hardware, Bioinformatics"],
        [rnd[3],"MacChkn, Chips, 7Up"],
        ["correct","Genomics,Bioinformatics, Structural Genomics, Proteomics"]
    ])],
    [rndm[3],new Map([
        ["qu","What Is Computational Biomodeling?"],
        [rnd[0],"a field concerned with building minecraft houses."],
        [rnd[1],"a field concerned with building data of biological organs and systems"],
        [rnd[2],"a field concerned with building computer models of biological systems."],
        [rnd[3],"a field concerned with synthesize DNA"],
        ["correct","a field concerned with building computer models of biological systems."]
    ])],
    [rndm[4],new Map([
        ["qu","Computational Biomodeling used to develop an integrated model of a..."],
        [rnd[0],"Liver"],
        [rnd[1],"😉"],
        [rnd[2],"Heart"],
        [rnd[3],"Finger"],
        ["correct","Heart"]
    ])],
    [rndm[5],new Map([
        ["qu","Biology"],
        [rnd[0],"DNA -> Protein -> Phenotype"],
        [rnd[1],"DNA -> Protein -> RNA"],
        [rnd[2],"GenoType -> Protein -> Phenotype"],
        [rnd[3],"What?"],
        ["correct","GenoType -> Protein -> Phenotype"]
    ])],
    [rndm[6],new Map([
        ["qu","What is Bioinformatics?"],
        [rnd[0],"Intersection of Biology and Computers"],
        [rnd[1],"Intersection of King Khaled And King Fahad roads"],
        [rnd[2],"Intersection of x,y,z"],
        [rnd[3],"Intersection of Biology and Math"],
        ["correct","Intersection of Biology and Computers"]
    ])],
    [rndm[7],new Map([
        ["qu","What is the Three Perspectives of Bioinformatics?"],
        [rnd[0],"DNA, Cell, Organ"],
        [rnd[1],"Cell, Proteins, Tree Of Life"],
        [rnd[2],"Cell, Organism, Tree Of Life"],
        [rnd[3],"Organism, DNA, Cell"],
        ["correct","Cell, Organism, Tree Of Life"]
    ])],
    [rndm[8],new Map([
        ["qu","Skills needed for Bioinformatics"],
        [rnd[0],"Swimming, Fall asleep fast, Drawing"],
        [rnd[1],"Maths, Microscopes, Computer science"],
        [rnd[2],"Computer science, Genetics, Chimestry"],
        [rnd[3],"Computer science, Molcular Biology, Statistics"],
        ["correct","Computer science, Molcular Biology, Statistics"]
    ])],
    [rndm[9],new Map([
        ["qu","Why is bioinformatics hot?"],
        [rnd[0],"Large Data needs to be analyzed, Leads to Important discoveries"],
        [rnd[1],"High Salary"],
        [rnd[2],"Provides new technology"],
        [rnd[3],"واضح الجواب"],
        ["correct","Large Data needs to be analyzed, Leads to Important discoveries"]
    ])],
    [rndm[10],new Map([
        ["qu","Computational Biology is..."],
        [rnd[0],"The study and application of computer"],
        [rnd[1],"The study and application of computing methods for classical biology"],
        [rnd[2],"The study and application of genetics"],
        [rnd[3],"The study and application of the Data from organism"],
        ["correct","The study and application of computing methods for classical biology"]
    ])],
    [rndm[11],new Map([
        ["qu","Computational Biology Primarily concerned with..."],
        [rnd[0],"Evolutionary, Population, Theoretical Biology"],
        [rnd[1],"DNA, Evolution, Biology"],
        [rnd[2],"tRNA, mRNA, rRNA"],
        [rnd[3],"Evolutionary, Softwares, Theoretical Biology"],
        ["correct","Evolutionary, Population, Theoretical Biology"]
    ])],
    [rndm[12],new Map([
        ["qu","Medical Informatics more concerned with?"],
        [rnd[0],"Medical Data"],
        [rnd[1],"How the data is manipulated"],
        [rnd[2],"Medicine"],
        [rnd[3],"Chemistry"],
        ["correct","How the data is manipulated"]
    ])],
    [rndm[13],new Map([
        ["qu","Cheminformatics mainly concerned with?"],
        [rnd[0],"Chimestry"],
        [rnd[1],"Drug Chemistry"],
        [rnd[2],"Proteins"],
        [rnd[3],"Amino Acids"],
        ["correct","Drug Chemistry"]
    ])],
    [rndm[14],new Map([
        ["qu","What is Proteomics?"],
        [rnd[0],"The study and application of computer problems"],
        [rnd[1],"The study and application of computing methods for classical biology"],
        [rnd[2],"The study and application of lipids functions"],
        [rnd[3],"Study of how the genome is expressed in proteins, and of how these proteins function and interact"],
        ["correct","Study of how the genome is expressed in proteins, and of how these proteins function and interact"]
    ])],
    [rndm[15],new Map([
        ["qu","Functional Genomics Focus more on Dynamic acpects like:"],
        [1,"Gene transcription, translation"],
        [2,"Regulation of gene expression and protein–protein interactions"],
        [3,"DNA sequence or structures"],
        [4,"All"],
        ["correct","All"]
    ])],
    [rndm[16],new Map([
        ["qu","Pharmacogenomics use genomes to identify..."],
        [rnd[0],"Parents"],
        [rnd[1],"Phenotype change"],
        [rnd[2],"Drug targets"],
        [rnd[3],"Body response to the drug"],
        ["correct","Drug targets"]
    ])],
    [rndm[17],new Map([
        ["qu","Pharmacogenetics use genomes to detrmine..."],
        [rnd[0],"Drug targets"],
        [rnd[1],"DNA or RNA"],
        [rnd[2],"Body response to the drug"],
        [rnd[3],"None of the above"],
        ["correct","Body response to the drug"]
    ])],
    [rndm[18],new Map([
        ["qu","Structural Bioinformatics predicts..."],
        [rnd[0],"2030"],
        [rnd[1],"Weather"],
        [rnd[2],"Three-dimensional structure"],
        [rnd[3],"Match score"],
        ["correct","Three-dimensional structure"]
    ])],
    [rndm[19],new Map([
        ["qu","Bioinformatics Tools Help Scientists With:"],
        [rnd[0],"Steal Complex Biological Data Sets"],
        [rnd[1],"Hide Complex Biological Data Sets"],
        [rnd[2],"Sell Complex Biological Data Sets"],
        [rnd[3],"None of the above"],
        ["correct","None of the above"]
    ])],
    [rndm[20],new Map([
        ["qu","DNA Sequencing is"],
        [rnd[0],"The process of determining the order of bases (ATCG) along with a RNA strand"],
        [rnd[1],"rRNA sequence"],
        [rnd[2],"Storing the DNA sequence in database"],
        [rnd[3],"The process of determining the order of bases (ATCG) along with a DNA strand"],
        ["correct","The process of determining the order of bases (ATCG) along with a DNA strand"]
    ])],
    [rndm[21],new Map([
        ["qu","RNA Sequencing Identify..."],
        [rnd[0],"tRNA, mRNA, rRNA"],
        [rnd[1],"Tissue specific gene expression"],
        [rnd[2],"Primer"],
        [rnd[3],"DNA Sequence"],
        ["correct","Tissue specific gene expression"]
    ])],
    [rndm[22],new Map([
        ["qu","Methods of DNA Sequencing"],
        [1,"Sanger dideoxy"],
        [2,"Maxam-Gilbert chemical cleavage method"],
        [3,"Pyrosequencing"],
        [4,"All"],
        ["correct","All"]
    ])],
    [rndm[23],new Map([
        ["qu","RNA Sequencing is"],
        [rnd[0],"High-throughput sequencing method"],
        [rnd[1],"Maxam-Gilbert chemical cleavage method"],
        [rnd[2],"Replacing Thymine with Uracil"],
        [rnd[3],"All"],
        ["correct","High-throughput sequencing method"]
    ])],
    [rndm[24],new Map([
        ["qu","Example of a protein function"],
        [1,"Catalysis"],
        [2,"Transport: O2..."],
        [3,"Information transfer: Hormones"],
        [4,"All"],
        ["correct","All"]
    ])],
    [rndm[25],new Map([
        ["qu","Levels of protein structure"],
        [rnd[0],"Double-helix"],
        [rnd[1],"Primary, Secondary, Tertiary, Quaternary"],
        [rnd[2],"Easy, Medium, Hard, Master"],
        [rnd[3],"1,2,3,4"],
        ["correct","Primary, Secondary, Tertiary, Quaternary"]
    ])],
    [rndm[26],new Map([
        ["qu","Protein Sequencing Can be Done by"],
        [1,"Pyrosequencing"],
        [2,"Edman Degradation"],
        [3,"Peptide mapping"],
        [4,"2 and 3"],
        ["correct","2 and 3"]
    ])],

]);
// ])
let mm = 1;
console.log(question.size);
for (const dis of sizeDisplay) {dis.textContent = question.size;}
//----------------------------  Score 
let score = 1;
let correctScore =0;
const scoreDisplay = document.querySelector('#score');
let displayResult = document.createElement('button');
displayResult.textContent = `Results`

let fails = [];
let corrections = [];
// --------------------------- Answers Section
let greenCor;
for (const btn of BTNS){
btn.addEventListener('click',(e)=>{

    if(e.target.textContent === question.get(mm).get("correct")){
        if(mm == question.size){
            displayResult.disabled = false;
        }
        correctScore++;
        for (const bt of BTNS) {
            bt.style.backgroundColor = `gray`
            bt.disabled = true;
        }
        e.target.style.backgroundColor = `green`
        e.target.style.color = `white`
        nextBTN.disabled = false;
        prevBTN.disabled = true;
    } 
    else {
        if(mm == question.size){
            displayResult.disabled = false;
        }
        nextBTN.disabled = false;
        fails.push(question.get(mm).get("qu"))
        corrections.push(question.get(mm).get("correct"))
        for (const bt of BTNS) {
            bt.disabled = true;
            bt.style.backgroundColor = `gray`
        }
        for (let i = 0; i < BTNS.length; i++){
            if (BTNS[i].textContent == question.get(mm).get("correct")){
                BTNS[i].style.backgroundColor = "green"
            }
        }
        BTNS.disabled = true;
        e.target.style.backgroundColor = `firebrick`
        prevBTN.disabled = true;
    }
})
}

// ------------------------------ Next And Previous
let nextBTN =document.querySelector('#next')
let prevBTN =document.querySelector('#prev')
// Next Reloader --------------------------------
nextBTN.addEventListener("click",()=>{
    nextBTN.disabled = true;
    prevBTN.disabled = false;
    for (const btn of BTNS){
        btn.style.backgroundColor = `#222222`
        btn.style.color = `#EB6440`
        btn.disabled = false;
    }
    mm++;
    score++;
    scoreDisplay.textContent = score;
    arr = []
    let [ans1,ans2,ans3,ans4] = ([question.get(mm).get(1),question.get(mm).get(2),question.get(mm).get(3),question.get(mm).get(4)]);
    arr.push(ans1,ans2,ans3,ans4)
    for (let i =0;i<BTNS.length;i++){
        BTNS[i].textContent = arr[i]   
    }
    h1.textContent = question.get(mm).get("qu")
    document.querySelector(".quiz-app").prepend(h1)
    if (mm == question.size){
        displayResult.disabled =true;
        document.querySelector(".quiz-app").append(displayResult)
        nextBTN.classList.add("hide")
        prevBTN.classList.add("hide")
    }
    // console.log(arr)
})
// console.log(mm)

// Prevouis Loader -----------------------
prevBTN.addEventListener('click',()=>{
    nextBTN.disabled = false;
    prevBTN.disabled = true;
    // Color Reset ---------
    for (const btn of BTNS){
        btn.style.backgroundColor = "gray"
        btn.style.color = `#EB6440`
        btn.disabled = true;
    }
    mm--;
    score--;
    scoreDisplay.textContent = score;
    arr = []
    let [ans1,ans2,ans3,ans4] = ([question.get(mm).get(1),question.get(mm).get(2),question.get(mm).get(3),question.get(mm).get(4)]);
    arr.push(ans1,ans2,ans3,ans4)
    for (let i =0;i<BTNS.length;i++){
        BTNS[i].textContent = arr[i]   
    }
    h1.textContent = question.get(mm).get("qu")
    document.querySelector(".quiz-app").prepend(h1)
})

// start -----------------------------
startBTN.addEventListener("click",()=>{
    if (nameInput.value === ''){
        alert("حط اسم")
    } else {
        document.querySelector("#top").classList.remove('hide')
        document.querySelector('.big-container').classList.remove("hide")
        document.querySelector('.start').classList.add("hide")
        maker(1)
    }
})
let arr=[];
function maker(num){
    let [ans1,ans2,ans3,ans4] = ([question.get(num).get(1),question.get(num).get(2),question.get(num).get(3),question.get(num).get(4)]);
    arr.push(ans1,ans2,ans3,ans4)
    h1.textContent = question.get(num).get("qu")
    document.querySelector(".quiz-app").prepend(h1)
    nextBTN.disabled = true;
    prevBTN.disabled = true;
    for (let i =0;i<BTNS.length;i++){
        BTNS[i].textContent = arr[i]   
    }
}



// ---------------------- Results
const resultsDiv = document.querySelector(".show-result");
displayResult.addEventListener("click",()=>{
    document.querySelector("#top").classList.add('hide')
    document.querySelector('.big-container').classList.add("hide")
    finalResult.classList.remove("hide");
    document.querySelector('#restart').classList.remove('hide')
    // resulter.textContent = correctScore;
    if (question.size/3 > correctScore){
        resulter.textContent = "هطف";
    } else {
        resultsDiv.classList.remove('hide')
        resulter.textContent = correctScore;
        for (let i = 0; i < fails.length; i++){
            const failDisplay = document.createElement("div");
            failDisplay.setAttribute("class","fails");
            failDisplay.innerHTML = `
            <p><span id="colored">Question:</span> ${fails[i]}</p>
            <p><span id="colored">✅ Answer:</span> ${corrections[i]}</p>
            `  
            resultsDiv.append(failDisplay);    
        }
    }
})

// ----- Restart 
document.querySelector('#restart').addEventListener('click',()=>{
    location.reload()
})
