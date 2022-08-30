// var mergeTwoLists = function(list1, list2) {
//     let finalArr = []
//     for(let i = 0; i < list1.length; i++){
//         if(list1[i] > list2[i]){
//             finalArr.push(list2[i])
//             finalArr.push(list1[i])
//         }else if(list1[i] === list2[i]){
//             finalArr.push(list1[i])
//             finalArr.push(list2[i])
//         }else if(list1[i] < list2[i]){
//             finalArr.push(list1[i])
//             finalArr.push(list2[i])
//         }
            
//     }
//     return finalArr
// };


// console.log(mergeTwoLists([1,2,4], [1,3,4]))


//The code up top is what i wrote for this problem. This had to do with something called Lists that
//i was a bit unfamilliar with, i assumed they were arrays when they are a bit different.

var mergeTwoLists = function(list1, list2){
    if(list1 === null && list2 === null){
        return list1
    }
    if(list1 === null){
        return list2
    }
    if(list2 === null){
        return list1
    }
    let dummyPointer = new ListNode(0)
    let currentPointer = dummyPointer
    while(list1 && list2){
        if(list1.val < list2.val){
            currentPointer.next = list1
            list1 = list1.next
        }else{
            currentPointer.next = list2
            list2 = list2.next
        }
        currentPointer = currentPointer.next
        if(list1){
            currentPointer.next = list1
        }
        if(list2){
            currentPointer.next = list2
        }
    }
    return dummyPointer.next
}