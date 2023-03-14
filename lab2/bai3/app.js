let fullName = prompt("Mời bạn nhập họ và tên")
let gender = prompt("Mời bạn nhập giới tính(\"Nam\", \"Nu\")")
// lấy và in họ 
let lastName = fullName.slice(0,fullName.indexOf(" ")) 
// slice cắt chuỗi từ điểm (x tới điểm y)
// indexOf ( trả về vị trí index tìm thấy của kí tự truyền vào)
console.log("Họ:", lastName)
// lấy và in tên đệm
let midleName = fullName.slice(fullName.indexOf(" ")+1,fullName.lastIndexOf(" "))
// slice cắt chuỗi từ điểm ( x đến trước điểm y )
// indexOf ( trả về vị trí index tìm thấy của ký tự truyền vào )
// lastIndexOf ( trả về vị trí index tìm thấy ký tự truyền vào nhưng nó tìm từ phải sang trái)
// Tóm lại: ở đây ta lấy chuỗi sau "space" đến trước dấu " space "                                                  
console.log("Tên đệm:", midleName)
// lấy và in tên 
let firstName = fullName.slice(fullName.lastIndexOf(" ")+1)
 // slice cắt chuỗi từ điểm ( x đến trước điểm y )
// lastIndexOf ( trả về vị trí index tìm thấy ký tự truyền vào nhưng nó tìm từ phải sang trái) 
console.log("Tên", firstName)
/*
Từ chuỗi họ tên nhập vào ban đầu:
-Nếu là Nam thì thay tên đêmj bằng "Văn"
-Nếu là nữ thì thay tên đệm bằng "Vẽ"
-In ra kết quả tên mới.
*/
if(gender == "Nam"){
    console.log(fullName = lastName + " Văn " + firstName)
}else console.log(fullName = lastName + " Vẽ " + firstName)