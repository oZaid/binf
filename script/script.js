'use strict'
const BTNS = document.querySelectorAll('.container button')
const question = new Map([
    [1,new Map([
        ["qu","What's Your Name?"],
        [1,"Ibrahim"],
        [2,"Zaid"],
        [3,"Fares"],
        [4,"Omar"],
        ["correct","Zaid"]
    ])],

    [6,new Map([
        ["qu","What is the Turing Machine?"],
        [1,"Representative of RNA"],
        [2,"Representative of genetic Data"],
        [3,"Representative of chromatides"],
        [4,"Representative of DNA"],
        ["correct","Representative of DNA"]
    ])],

    [7,new Map([
        ["qu","What is the Components of Turing Machine?"],
        [1,"a control unit and a tape"],
        [2,"a read-write head"],
        [3,"All of the Above"],
        [4,"None"],
        ["correct","All of the Above"]
    ])],
    [17,new Map([
        ["qu","Systems Biology consists of..."],
        [1,"DNA, RNA, Protiens"],
        [2,"Genomics,Bioinformatics, Structural Genomics, Proteomics"],
        [3,"Software, Hardware, Bioinformatics"],
        [4,"MacChkn, Chips, 7Up"],
        ["correct","Genomics,Bioinformatics, Structural Genomics, Proteomics"]
    ])],
    [2,new Map([
        ["qu","What Is Computational Biomodeling?"],
        [1,"a field concerned with building minecraft houses."],
        [2,"a field concerned with building data of biological organs and systems"],
        [3,"a field concerned with building computer models of biological systems."],
        [4,"a field concerned with synthesize DNA"],
        ["correct","a field concerned with building computer models of biological systems."]
    ])],
    [10,new Map([
        ["qu","Computational Biomodeling used to develop an integrated model of a..."],
        [1,"Liver"],
        [2,"😉"],
        [3,"Heart"],
        [4,"Finger"],
        ["correct","Heart"]
    ])],
    [7,new Map([
        ["qu","Biology"],
        [1,"DNA -> Protein -> Phenotype"],
        [2,"DNA -> Protein -> RNA"],
        [3,"GenoType -> Protein -> Phenotype"],
        [4,"1 and 3"],
        ["correct","1 and 3"]
    ])],
    [4,new Map([
        ["qu","What is Bioinformatics?"],
        [1,"Intersection of Biology and Computers"],
        [2,"Intersection of King Khaled And King Fahad roads"],
        [3,"Intersection of x,y,z"],
        [4,"Intersection of Biology and Math"],
        ["correct","Intersection of Biology and Computers"]
    ])],
    [3,new Map([
        ["qu","What is the Three Perspectives of Bioinformatics?"],
        [1,"DNA, Cell, Organ"],
        [2,"Cell, Proteins, Tree Of Life"],
        [3,"Cell, Organism, Tree Of Life"],
        [4,"Organism, DNA, Cell"],
        ["correct","Cell, Organism, Tree Of Life"]
    ])],
    [10,new Map([
        ["qu","Skills needed for Bioinformatics"],
        [1,"Swimming, Fall asleep fast, Drawing"],
        [2,"Maths, Microscopes, Computer science"],
        [3,"Computer science, Genetics, Chimestry"],
        [4,"Computer science, Molcular Biology, Statistics"],
        ["correct","Computer science, Molcular Biology, Statistics"]
    ])],
    [25,new Map([
        ["qu","Why is bioinformatics hot?"],
        [1,"Large Data needs to be analyzed, Leads to Important discoveries"],
        [2,"High Salary"],
        [3,"Provides new technology"],
        [4,"واضح الجواب"],
        ["correct","Large Data needs to be analyzed, Leads to Important discoveries"]
    ])],
    [22,new Map([
        ["qu","Computational Biology is..."],
        [1,"The study and application of computer"],
        [2,"The study and application of computing methods for classical biology"],
        [3,"The study and application of genetics"],
        [4,"The study and application of the Data from organism"],
        ["correct","The study and application of computing methods for classical biology"]
    ])],
    [16,new Map([
        ["qu","Computational Biology Primarily concerned with..."],
        [1,"Evolutionary, Population, Theoretical Biology"],
        [2,"DNA, Evolution, Biology"],
        [3,"tRNA, mRNA, rRNA"],
        [4,"Evolutionary, Softwares, Theoretical Biology"],
        ["correct","Evolutionary, Population, Theoretical Biology"]
    ])],
    [14,new Map([
        ["qu","Medical Informatics more concerned with?"],
        [1,"Medical Data"],
        [2,"How the data is manipulated"],
        [3,"Medicine"],
        [4,"Chemistry"],
        ["correct","How the data is manipulated"]
    ])],
    [23,new Map([
        ["qu","Cheminformatics mainly concerned with?"],
        [1,"Chimestry"],
        [2,"Drug Chemistry"],
        [3,"Proteins"],
        [4,"Amino Acids"],
        ["correct","Drug Chemistry"]
    ])],
    [9,new Map([
        ["qu","What is Proteomics?"],
        [1,"The study and application of computer problems"],
        [2,"The study and application of computing methods for classical biology"],
        [3,"The study and application of lipids functions"],
        [4,"Study of how the genome is expressed in proteins, and of how these proteins function and interact"],
        ["correct","Study of how the genome is expressed in proteins, and of how these proteins function and interact"]
    ])],
    [12,new Map([
        ["qu","Functional Genomics Focus more on Dynamic acpects like:"],
        [1,"Gene transcription, translation"],
        [2,"Regulation of gene expression and protein–protein interactions"],
        [3,"DNA sequence or structures"],
        [4,"All of the above"],
        ["correct","All of the above"]
    ])],
    [26,new Map([
        ["qu","Pharmacogenomics use genomes to identify..."],
        [1,"Parents"],
        [2,"Phenotype change"],
        [3,"Drug targets"],
        [4,"Body response to the drug"],
        ["correct","Drug targets"]
    ])],
    [15,new Map([
        ["qu","Pharmacogenetics use genomes to detrmine..."],
        [1,"Drug targets"],
        [2,"DNA or RNA"],
        [3,"Body response to the drug"],
        [4,"None of the above"],
        ["correct","Body response to the drug"]
    ])],
    [27,new Map([
        ["qu","Structural Bioinformatics predicts..."],
        [1,"2030"],
        [2,"Weather"],
        [3,"Three-dimensional structure"],
        [4,"Match score"],
        ["correct","Three-dimensional structure"]
    ])],
    [20,new Map([
        ["qu","Bioinformatics Tools Help Scientists With:"],
        [1,"Steal Complex Biological Data Sets"],
        [2,"Hide Complex Biological Data Sets"],
        [3,"Sell Complex Biological Data Sets"],
        [4,"None of the above"],
        ["correct","None of the above"]
    ])],
    [24,new Map([
        ["qu","DNA Sequencing is"],
        [1,"The process of determining the order of bases (ATCG) along with a RNA strand"],
        [2,"rRNA sequence"],
        [3,"Storing the DNA sequence in database"],
        [4,"The process of determining the order of bases (ATCG) along with a DNA strand"],
        ["correct","The process of determining the order of bases (ATCG) along with a DNA strand"]
    ])],
    [8,new Map([
        ["qu","RNA Sequencing Identify..."],
        [1,"Tissue specific gene expression"],
        [2,"tRNA, mRNA, rRNA"],
        [3,"primase"],
        [4,"DNA Sequence"],
        ["correct","Tissue specific gene expression"]
    ])],
    [5,new Map([
        ["qu","Methods of DNA Sequencing"],
        [1,"Sanger dideoxy"],
        [2,"Maxam-Gilbert chemical cleavage method"],
        [3,"Pyrosequencing"],
        [4,"All of the above"],
        ["correct","All of the above"]
    ])],
    [27,new Map([
        ["qu","RNA Sequencing is"],
        [1,"High-throughput sequencing method"],
        [2,"Maxam-Gilbert chemical cleavage method"],
        [3,"Replacing Thymine with Uracil"],
        [4,"All of the above"],
        ["correct","High-throughput sequencing method"]
    ])],
    [14,new Map([
        ["qu","Example of a protein function"],
        [1,"Catalysis"],
        [2,"Transport: O2..."],
        [3,"Information transfer: Hormones"],
        [4,"All of the above"],
        ["correct","All of the above"]
    ])],
    [11,new Map([
        ["qu","Levels of protein structure"],
        [1,"Double-helix"],
        [2,"Primary, Secondary, Tertiary, Quaternary"],
        [3,"Easy, Medium, Hard, Master"],
        [4,"1,2,3,4"],
        ["correct","Primary, Secondary, Tertiary, Quaternary"]
    ])],
    [28,new Map([
        ["qu","Protein Sequencing Can be Done by"],
        [1,"Pyrosequencing"],
        [2,"Edman Degradation"],
        [3,"Peptide mapping"],
        [4,"2 and 3"],
        ["correct","2 and 3"]
    ])],
    [true,"Good"],
    [false,"Try Again!"]
])
let mm = 1;
let rest = document.createElement('button');
rest.textContent = `Reset`
rest.addEventListener("click",()=>{
    location.reload()
})
for (const btn of BTNS){
btn.addEventListener('click',(e)=>{
    if (mm>23&&e.target.textContent === question.get(mm).get("correct")){
        document.querySelector('.quiz-app').append(rest)
        e.target.style.backgroundColor = `green`
    } else if(
    e.target.textContent === question.get(mm).get("correct")
    ){
        e.target.style.backgroundColor = `green`
        question.get(true);
        document.querySelector(".quiz-app").append(bbttnn);
    } else {
        e.target.style.backgroundColor = `firebrick`
        console.log(question.get(false))
    }

})
}
let bbttnn = document.createElement('button');
bbttnn.textContent = 'Next';

// Next Reloader --------------------------------
bbttnn.addEventListener("click",()=>{
    document.querySelector(".quiz-app").removeChild(bbttnn);
    for (const btn of BTNS){
        btn.style.backgroundColor = `#222222`
    }
    mm++;

    arr = []
    let [ans1,ans2,ans3,ans4] = ([question.get(mm).get(1),question.get(mm).get(2),question.get(mm).get(3),question.get(mm).get(4)]);
    arr.push(ans1,ans2,ans3,ans4)
    for (let i =0;i<BTNS.length;i++){
        BTNS[i].textContent = arr[i]   
    }
    h1.textContent = question.get(mm).get("qu")
    document.querySelector(".quiz-app").prepend(h1)
    // console.log(arr)
})
// console.log(mm)
let arr=[];
let h1 = document.createElement('h2');

function maker(num){
    let [ans1,ans2,ans3,ans4] = ([question.get(num).get(1),question.get(num).get(2),question.get(num).get(3),question.get(num).get(4)]);
    arr.push(ans1,ans2,ans3,ans4)
    h1.textContent = question.get(num).get("qu")
    document.querySelector(".quiz-app").prepend(h1)

}
maker(1)


for (let i =0;i<BTNS.length;i++){
 BTNS[i].textContent = arr[i]   
}


// start -----------------------------
const startBTN = document.querySelector('#start');


startBTN.addEventListener("click",()=>{
    document.querySelector('.big-container').classList.remove("hide")
    document.querySelector('.start').classList.add("hide")
})


