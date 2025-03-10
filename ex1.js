let arr = [];  
let choice;  
do {  
    console.log("1. Nhập mảng");  
    console.log("2. Hiển thị mảng");  
    console.log("3. Tìm phẩn tử lớn nhất và nhỏ nhất trong mảng");  
    console.log("4. Tính tổng các phần tử trong mảng");  
    console.log("5. Tìm số lần xuất hiện của một phần tử trong mảng");  
    console.log("6. Sắp xếp mảng tăng dần");  
    console.log("7. Thoát chương trình");  

    choice = +prompt("Mời bạn nhập lựa chọn ");  
    switch (choice) {  
        case 1:  
            let n = +prompt("Nhập số lượng phần tử: ");  
            for (let i = 0; i < n; i++) {  
                arr[i] = +prompt(`Nhập phần tử thứ ${i + 1}: `);  
            }  
            break;  
        case 2:  
            console.log("Các phần tử trong mảng:", arr.join(", "));  
            break;  
        case 3:  
            if (arr.length === 0) {  
                console.log("Mảng rỗng.");  
                break;  
            }  
            let min = arr[0];  
            let max = arr[0];  
            for (let i = 1; i < arr.length; i++) {  
                if (arr[i] < min) min = arr[i];  
                if (arr[i] > max) max = arr[i];  
            }  
            console.log("Số nhỏ nhất:", min);  
            console.log("Số lớn nhất:", max);  
            break;  
        case 4:  
            let sum = 0;  
            for (let i = 0; i < arr.length; i++) {  
                sum += arr[i];  
            }  
            console.log("Tổng các phần tử trong mảng là:", sum);  
            break;  
        case 5:  
            let numToCount = parseInt(prompt("Nhập số cần đếm: "));  
            let count = 0;  
            for (let i = 0; i < arr.length; i++) {  
                if (arr[i] === numToCount) {  
                    count++;  
                }  
            }  
            console.log(`Số ${numToCount} xuất hiện ${count} lần.`);  
            break;  
        case 6:  
            arr.sort((a, b) => a - b);  
            console.log("Mảng sau khi sắp xếp tăng dần:", arr);  
            break;  
        case 7:  
            console.log("Thoát...");  
            break;  
        default:  
            console.log("Lựa chọn không hợp lệ.Vui lòng lựa chọn lại");  
    }  
} while (choice !== 7);  