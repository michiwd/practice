const quiz =[
    {
        question: `熊本県に隣接している県は？`,
        answers: [
            `鹿児島県`,
            `佐賀県`,
            `長崎県`,
            `山口県`
        ],
        correct:`鹿児島県`,
    },{
        question: `お弁当といえば？`,
        answers: [
            `ミライ`,
            `キライ`,
            `ヒライ`,
            `タライ`,
        ],
        correct:`ヒライ`,
    },{
        question: `この中で熊本県出身の有名人は？`,
        answers: [
            `間寛平`,
            `森高千里`,
            `福山雅治`,
            `橋本環奈`,
        ],
        correct: `森高千里`,
    },{
        question: `熊本市の学生の待ち合わせ場所は？`,
        answers: [
            `駅裏`,
            `大画面前`,
            `ココサ前`,
            `蔦屋前`,
        ],
        correct: `ココサ前`,
    },{
        question: `熊本の学校で夏に飲むみかんジュースといえば？`,
        answers: [
            `ジューシー`,
            `ポンジュース`,
            `熊本みかん100%`,
            `Qoo`,
        ],
        correct: `ジューシー`,
    }
];
const quizLength= quiz.length;
let quizIndex= 0;
let score =0;

const $button= document.getElementsByTagName(`button`);
const buttonLength =$button.length;
//クイズの問題
const setupQuiz=()=>{
    document.getElementById(`js-question`).textContent=quiz[quizIndex].question;
    let buttonIndex=0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent =quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
}}
setupQuiz();

const clickHandler =(e) => {
    if(quiz[quizIndex].correct=== e.target.textContent){
        window.alert(`正解`);
        score++;
    }else{
        window.alert(`不正解`);
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題数がまだある
        setupQuiz();
    }else{
        window.alert(`終了！あなたの正解数は`+ score +`/`+quizLength+ `です` );
        
    }
}

//ボタンをクリックしたら正誤判定
let handleIndex=0;
while(handleIndex < buttonLength){
    $button[handleIndex].addEventListener(`click`,(e)=>{
        clickHandler(e);    
    });
    handleIndex++;
}

