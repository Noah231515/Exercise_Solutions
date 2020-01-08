//Noah Hall Exercises 1/8/20

//Modified Insertion Sort to check for parity
function Exercise1(arr){
    len = arr.length;

    if (len >= 1){
        for (let i = 0; i <= len - 1; i++){
            key = arr[i + 1];

            for(let j = 0; j <= i + 1; j++){
                if (arr[j] % 2 == 1 && key % 2 == 1 && key <= arr[j]){ //Checking for parity and element compare
                    [arr[i + 1], arr[j]] = [arr[j], arr[i + 1]];
                    
                }    
            }
        }
    } 
    return arr;
}

function Exercise2(word){
    len = word.length;
    middle = Math.floor(len/2);
    if (!word){
        return word;
    }

    if (len % 2 == 1){ //Odd length word
        return word[middle];
    }
    else{ //Even length word
        return word.substring(middle - 1, middle + 1);
    }
}

inputs_1 = [[5,3,2,8,1,4], [6,3,2,7,5,0]];
inputs_2 = ["dog", "Fishing", "have", "Midddle", "C", ""]
expected_output_1 = [[1,3,2,8,5,4], [6,3,2,5,7,0]];
expected_output_2 = ["o", "h", "have", "Middle", "C", ""];

for (let i = 0; i < inputs_1.length; i++){
    expected_1 = JSON.stringify(expected_output_1[i]); 
    output_1 = JSON.stringify(Exercise1(inputs_1[i]));

    console.assert(expected_1 == output_1, `Test Case failed on Exercise 1, test ${i}!`);
    console.assert(expected_output_2[i] == Exercise2(inputs_2[i]), `Test Case failed on Exercise 2, test ${i}!`);    
}


