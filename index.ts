type IFruit = { 
    fruitId: number, 
    fruitName: string, 
    fruitType: 'IMPORT' | 'LOCAL', 
    stock: number 
};  
const fruits: IFruit[] = [ 
            { 
                fruitId: 1, 
                fruitName: 'Apel', 
                fruitType: 'IMPORT', 
                stock: 10 
            },
            { 
                fruitId: 2, 
                fruitName: 'Kurma', 
                fruitType: 'IMPORT', 
                stock: 20 
            },
            { 
                fruitId: 3,
                fruitName: 'apel', 
                fruitType: 'IMPORT', 
                stock: 50 
            },
            { 
                fruitId: 4, 
                fruitName: 'Manggis', 
                fruitType: 'LOCAL', 
                stock: 100 
            },
            { 
                fruitId: 5, 
                fruitName: 'Jeruk Bali', 
                fruitType: 'LOCAL', 
                stock: 10 
            },
            { 
                fruitId: 5, 
                fruitName: 'KURMA', 
                fruitType: 'IMPORT', 
                stock: 20 
            },
            { 
                fruitId: 5, 
                fruitName: 'Salak', 
                fruitType: 'LOCAL', 
                stock: 150 
            }
        ]


type IComment = { 
                    commentId: number; 
                    commentContent: string;
                    replies?: IComment[]; 
                }
const comments: IComment[] = 
        [ 
            { 
                commentId: 1, 
                commentContent: 'Hai', 
                replies: [ 
                    { 
                        commentId: 11, 
                        commentContent: 'Hai juga', 
                        replies: [ 
                            { 
                                commentId: 111, 
                                commentContent: 'Haai juga hai jugaa' 
                            },
                            { 
                                commentId: 112, 
                                commentContent: 'Haai juga hai jugaa'
                             } 
                        ] 
                    },
                { 
                    commentId: 12, 
                    commentContent: 'Hai juga', 
                    replies: 
                    [ 
                        { 
                            commentId: 121, 
                            commentContent: 'Haai juga hai jugaa' 
                        } 
                    ] 
                } 
            ] 
        },
        { 
            commentId: 2, 
            commentContent: 'Halooo' 
        }
]

console.log("CASE 1 (SOAL NO.1-4)");
// Path: index.ts
// Case 1 (Soal No.1)
var andiFruits:string[]=[]; 
if (fruits.length >0){
    for (let i = 0; i < fruits.length; i++) {
        if ( !andiFruits.includes(titleCase(fruits[i].fruitName))) {
            andiFruits.push(titleCase(fruits[i].fruitName));
        }
    }
    console.log("Question 1 : ");
    console.log("Andi have : " + andiFruits + " fruits");
}


// Case 1 (Soal No.2)
var andiFruitsType:string[]=[];

for (let i = 0; i < fruits.length; i++) {
    if ( !andiFruitsType.includes(fruits[i].fruitType)) {
        andiFruitsType.push(fruits[i].fruitType);
    }
}

console.log("Question 2 : ");
console.log("Andi need " + andiFruitsType.length + " bucket for : " + andiFruitsType +" fruits type");



// Case 1 (Soal No.2)
if ((andiFruitsType.length)>0){
    for (let i = 0; i < andiFruitsType.length; i++) {
        var andiFruitsTypeName :string[]=[];
        for (let j = 0; j < fruits.length; j++) {
            if (andiFruitsType[i] == fruits[j].fruitType) {
                if ( !andiFruitsTypeName.includes(titleCase(fruits[j].fruitName))) {   
                    andiFruitsTypeName.push((fruits[j].fruitName));
                }
            }
        }
        console.log("Fruits Type : " + andiFruitsType[i] + " have " + andiFruitsTypeName.length + " fruits : " + andiFruitsTypeName);
    }   
}


console.log("Question 3 : ");
if ((andiFruitsType.length) > 0) {
    for (let i = 0; i < andiFruitsType.length; i++) {
        var andiFruitsTypeCount = 0;
        for (let j = 0; j < fruits.length; j++) {
            if (andiFruitsType[i] == fruits[j].fruitType) {
                andiFruitsTypeCount += fruits[j].stock;
            }
        }
        console.log("Andi have " + andiFruitsTypeCount + " " + andiFruitsType[i] + " fruits");
    }
}

function titleCase(str: string): string {
    str.toLowerCase();
    var strAr = str.split(" ");
    for (var i = 0; i < strAr.length; i++) {
      strAr[i] = strAr[i].charAt(0).toUpperCase() + strAr[i].substring(1).toLowerCase();
    }
    str = strAr.join(" ");
    return str;
  }


console.log("Question 4 : ");
console.log("Berdasarkan case diatas, terdapat beberapa kesimpulan:'\n'- Terdapat fruitname (apel) yang sama pada id yang berbeda (id 1 & 3), selain itu, fruitname tersebut memiliki perbedaan pada huruf pertama (apel & Apel)'\n'- Kasus tersebut dihandle dengan cara membat method 'titleCase' yang membuat semua huruf pertama fruitname menjadi capital. Hal tersebut untuk membuat pencegahan terjadinya duplikasi fruitname.'\n'- Apabila terdapat 2 id yang berbeda namun memiliki fruitname yang sama, stock tetap akan dihirung berdasarkan id yang ada dengan di group bedasarkan fruittype(IMPOR & LOCAL).'\n' +");

  console.log("CASE 1 (SOAL NO.5)");
const totalCommentContents = (comments: IComment[]) => {
return comments.reduce(
    (totalComment, comment: IComment): number => {
    totalComment += comment.commentContent ? 1 : 0;
    if (comment.replies) {
        totalComment += totalCommentContents(comment.replies);
    }
    return totalComment;
    },
    0,
);
};

const totalValue = totalCommentContents(comments);
console.log('Total value:', totalValue);
