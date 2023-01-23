'use strict'
let h1 = document.createElement('h2');
const BTNS = document.querySelectorAll('.container button')
const stuP = document.querySelector('#stu-text')
const startBTN = document.querySelector('#start');
const nameInput = document.querySelector('#namer');

let namer;
nameInput.addEventListener('keyup',()=>{
    namer = nameInput.value;
    startBTN.disabled = false;
    question.get(1).set(4,String(namer));
    question.get(1).set("correct",String(namer));
})
// ----------------------------- Question Map
let rndm = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffleArray(rndm)
console.log(...rndm);
//  ---------------------- Questions
const question = new Map([
    [1,new Map([
        ["qu","What's Your Name?"],
        [1,"عبدالصمد القرشي"],
        [2,"سلمان الفرج"],
        [3,"اخوكم من العراق"],
    ])],
    [rndm[0],new Map([
        ["qu","The study of inheritance as it occurs in human beings..."],
        [1,"Human genome"],
        [2,"Human genetics"],
        [3,"Human inheritance"],
        [4,"Human DNA and RNA"],
        ["correct","Human genetics"]
    ])],
    [rndm[1],new Map([
        ["qu","A unit of heredity and a section of DNA sequence..."],
        [1,"Primer"],
        [2,"Codon"],
        [3,"Gene"],
        [4,"None of the above"],
        ["correct","Gene"]
    ])],
    [rndm[2],new Map([
        ["qu","How many genomes does human have?"],
        [1,"2"],
        [2,"22"],
        [3,"1"],
        [4,"3"],
        ["correct","2"] // 4
    ])],
    [rndm[3],new Map([
        ["qu","Chromosomes contains..."],
        [1,"20-30% Protein"],
        [2,"15-30% RNA"],
        [3,"30-40% DNA"],
        [4,"All of the above"],
        ["correct","30-40% DNA"] 
    ])],
    [rndm[4],new Map([
        ["qu","Zygot Fertilized Egg..."],
        [1,"Gamete"],
        [2,"Codon"],
        [3,"Gene"],
        [4,"Ovary"],
        ["correct","Gamete"]
    ])],
    [rndm[5],new Map([
        ["qu","Chromosomes that is Not sex chromosomes..."],
        [1,"RNA Chromosomes"],
        [2,"Mitochandrian"],
        [3,"Primer"],
        [4,"Autosomal Chromosomes"],
        ["correct","Autosomal Chromosomes"]
    ])],
    [rndm[6],new Map([
        ["qu","Karyotype is..."],
        [1,"Chromosomes from a single cell arranged in pairs according to the positions of the centromeres."],
        [2,"Codons sequence"],
        [3,"Chromosomes from a single cell arranged in pairs according to the size of the chromosomes."],
        [4,"1 and 3"],
        ["correct","1 and 3"] // 8
    ])],
    [rndm[7],new Map([
        ["qu","Locus is"],
        [1,"Scientist born in Abha"],
        [2,"The position of a gene on a chromosome."],
        [3,"Genes that occupied"],
        [4,"None of the above"],
        ["correct","The position of a gene on a chromosome."]
    ])],
    [rndm[8],new Map([
        ["qu","Presence of two different alleles at given gene locus is..."],
        [1,"Homozygous"],
        [2,"Heterozygous"],
        [3,"Hemizygous"],
        [4,"All of the above"],
        ["correct","Heterozygous"]
    ])],
    [rndm[9],new Map([
        ["qu","Two genes that occupy the same position on homologous chromosomes for the same trait are is"],
        [1,"Locus"],
        [2,"Hemizygous"],
        [3,"Genes"],
        [4,"Allele"],
        ["correct","Allele"]
    ])],
    [rndm[10],new Map([
        ["qu","A gene that expresses only when present in the homozygous state..."],
        [1,"Dominant gene"],
        [2,"Recessive gene"],
        [3,"Genomics"],
        [4,"None of the above"],
        ["correct","Recessive gene"] // 12
    ])],
    [rndm[11],new Map([
        ["qu","A gene that expresses a trait in the heterozygous state..."],
        [1,"Recessive gene"],
        [2,"Dominant gene"],
        [3,"Genomics"],
        [4,"None of the above"],
        ["correct","Dominant gene"]
    ])],
    [rndm[12],new Map([
        ["qu","Codominant gene is ..... expressed at the same time"],
        [1,"Heterozygous and a sex-gene"],
        [2,"Homozygous and a sex-gene"],
        [3,"Heterozygous and Homozygous"],
        [4,"None of the above"],
        ["correct","Heterozygous and Homozygous"]
    ])],
    [rndm[13],new Map([
        ["qu","Hemizygous is..."],
        [1,"Having half the number of whatever"],
        [2,"Having half the number of DNA"],
        [3,"Having half the number of genes"],
        [4,"Having half the number of alleles"],
        ["correct","Having half the number of alleles"]
    ])],
    [rndm[14],new Map([
        ["qu","Small dense mass of condensed chromatin appearing in inactivated X chromosomes is..."],
        [1,"Barr body"],
        [2,"Homochromatin"],
        [3,"Heterochromatin"],
        [4,"None of the above"],
        ["correct","Heterochromatin"] // 16
    ])],
    [rndm[15],new Map([
        ["qu","ذاكرت قوانين مندل 10-13"],
        [1,"لا"],
        [2,"شوي"],
        [3,"ايه"],
        [4,"معليك عندي"],
        ["correct","ايه"]
    ])],
    [rndm[16],new Map([
        ["qu","An autosomal recessive trait is expressed only in individuals who have..."],
        [1,"Heterozygous"],
        [2,"Homozygous"],
        [3,"Hemizygous"],
        [4,"1 and 2"],
        ["correct","Homozygous"]
    ])],
    [rndm[17],new Map([
        ["qu","Mendelian or monogenetic inheritance is..."],
        [1,"Crossover"],
        [2,"a mutated DNA"],
        [3,"two mutated gene"],
        [4,"a single mutated gene"],
        ["correct","a single mutated gene"]
    ])],
    [rndm[18],new Map([
        ["qu","Over ..... single gene disorders have been identified."],
        [1,"3000"],
        [2,"700"],
        [3,"150"],
        [4,"None of the above"],
        ["correct","None of the above"] // 20
    ])],
    [rndm[19],new Map([
        ["qu","..... is determined by several genes, in addition to the intervention of other factors such as environmental factors"],
        [1,"Somatic genetic disorders"],
        [2,"Single-gene disorder"],
        [3,"Multifactorial disorders"],
        [4,"Mitochondrial disorders"],
        ["correct","Multifactorial disorders"]
    ])],
    [rndm[20],new Map([
        ["qu","In many human genetic diseases, The ..... allele contains the mutation "],
        [1,"Heterozgous"],
        [2,"Dominant"],
        [3,"Recessive"],
        [4,"Homozygous"],
        ["correct","Recessive"]
    ])],
    [rndm[21],new Map([
        ["qu","Arise after birth in somatic cells..."],
        [1,"Single-gene disorder"],
        [2,"Multifactorial disorders"],
        [3,"Mitochondrial disorders"],
        [4,"None of the above"],
        ["correct","None of the above"]
    ])],
    [rndm[22],new Map([
        ["qu","Which of these disorders do not follow the Mendelian pattern of inheritance?"],
        [1,"Chromosome disorders"],
        [2,"Mitochondrial disorders"],
        [3,"Multifactorial disorders"],
        [4,"Single-gene disorder"],
        ["correct","Chromosome disorders"] //24
    ])],
    [rndm[23],new Map([
        ["qu","Mendelian Traits..."],
        [3,"Two possible versions of a gene"],
        [2,"Dominant"],
        [1,"One possible versions of a gene"],
        [4,"Homozygous"],
        ["correct","Two possible versions of a gene"]
    ])],
    [rndm[24],new Map([
        ["qu","Mendelian trait is completely determined by..."],
        [1,"Heterozgous"],
        [2,"One gene"],
        [3,"Three genes"],
        [4,"Two genes"],
        ["correct","One gene"]
    ])],
    [rndm[25],new Map([
        ["qu","Approximately ... of human monogenic disorders are autosomal Recessive."],
        [1,"25%"],
        [2,"Dominant"],
        [3,"65%"],
        [4,"Homozygous"],
        ["correct","25%"]
    ])],
    [rndm[26],new Map([
        ["qu","An Autosomal Recessive Disorder..."],
        [1,"Tay-Sachs Disease"],
        [2,"Phenylketonuria"],
        [3,"Albinism"],
        [4,"All of the above"],
        ["correct","All of the above"]
    ])],
    [rndm[27],new Map([
        ["qu","Autosomal recessive diseases are result of ..."],
        [1,"Heterozgous"],
        [2,"Dominant"],
        [3,"Consanguineous matings :0"],
        [4,"Homozygous"],
        ["correct","Consanguineous matings :0"]
    ])],
    [rndm[28],new Map([
        ["qu","An Autosomal Dominant Disorder"],
        [1,"Tay-Sachs Disease"],
        [2,"Neurofibromatosis"],
        [3,"Albinism"],
        [4,"1 and 3"],
        ["correct","Neurofibromatosis"]
    ])],
    [rndm[29],new Map([
        ["qu","A vertical pattern is observed in the pedigree when..."],
        [1,"Heterozgous"],
        [2,"1 generation being affected"],
        [3,"Only 2 generations being affected"],
        [4,"Multiple generations being affected"],
        ["correct","Multiple generations being affected"]
    ])],
    [rndm[30],new Map([
        ["qu","Autosomal .... phenotypes are often age-dependent, less severe than autosomal .... phenotypes."],
        [1,"Heterozgous"],
        [2,"dominant - recessive"],
        [3,"dominant - Heterozygous"],
        [4,"recessive - dominant"],
        ["correct","dominant - recessive"]
    ])],
    [rndm[31],new Map([
        ["qu","Does not skip generations..."],
        [1,"Autosomal recessive"],
        [2,"X-linked dominant"],
        [3,"Hererozygous"],
        [4,"X-linked recessive"],
        ["correct","X-linked dominant"]
    ])],
    [rndm[32],new Map([
        ["qu","Affected sons must have an affected mother..."],
        [1,"Autosomal recessive"],
        [2,"X-linked recessive"],
        [3,"Hererozygous"],
        [4,"X-linked dominant"],
        ["correct","X-linked dominant"]
    ])],
    [rndm[33],new Map([
        ["qu","Affected fathers will pass the trait on to all their Daughters...."],
        [1,"Autosomal recessive"],
        [2,"X-linked recessive"],
        [3,"Hererozygous"],
        [4,"X-linked dominant"],
        ["correct","X-linked dominant"]
    ])],
    [rndm[34],new Map([
        ["qu","More males than females are affected...."],
        [1,"Autosomal recessive"],
        [2,"X-linked recessive"],
        [3,"Hererozygous"],
        [4,"X-linked dominant"],
        ["correct","X-linked recessive"]
    ])],
    [true,"Good"],
    [false,"Try Again!"]
])
let mm = 1;

//----------------------------  Score 
let score = 0;
const scoreDisplay = document.querySelector('#score');
let rest = document.createElement('button');
rest.textContent = `Reset`
rest.addEventListener("click",()=>{
    location.reload()
})

// --------------------------- Answers Section
for (const btn of BTNS){
btn.addEventListener('click',(e)=>{

    if(e.target.textContent === question.get(mm).get("correct")){
        score++;
        scoreDisplay.textContent = score;
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
        showAp("A+??")
        nextBTN.disabled = false;
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
//     console.log(score);
    nextBTN.disabled = true;
    prevBTN.disabled = false;
    for (const btn of BTNS){
        btn.style.backgroundColor = `#222222`
        btn.style.color = `#EB6440`
        btn.disabled = false;
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
    if (mm == 24){
        document.querySelector(".quiz-app").append(rest)
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
    //     namer = nameInput.value;
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

// ----------------------- Color Changer
function showAp (str){
    stuP.textContent = str;
    stuP.style.fontSize = `20px`
    stuP.style.transition = `.4s ease-in`
    stuP.style.opacity = `1`
    setTimeout(()=>{
        stuP.style.transition = ``
        stuP.style.fontSize = `28px`
        stuP.style.color = `firebrick`
        stuP.textContent = `D+`
    },1100)
    setTimeout(()=>{
        stuP.style.opacity = `0`
        stuP.style.transition = `.1s`
        stuP.style.fontSize = `20px`
        stuP.style.color = `black`
    },1550)
}






