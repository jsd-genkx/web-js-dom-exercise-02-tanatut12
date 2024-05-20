function changText() {
    document.getElementById("heading").innerHTML = "Hello javascript HTML";
    
}
//step 1 สร้าง html กำหนด onclick(functionName) ในtag <button> และ ใส่ id ให้ tag ที่จะเปลี่ยน
//step 2 document.getElementById("heading") เลือก id ที่ตั้งไว้จาก html 
//step 3 .innerHTML = "Hello javascript HTML" เลือกคำสั่งเพื่อทำให้เกิดการเปลี่ยนคำใน HTML


function correct() {
    const button = document.getElementById("bt1");
    const wrongText = document.getElementById("heading2");
    button.addEventListener('click', () => {
        wrongText.textContent = 'I LOVE YOU JSD7';
    });
};
correct();
//step 1 กำหนด function โดยข้างใน {จะใส่ ตัวแปรของปุ่มและtagที่ต้องการจะเปลี่ยนโดยเลือกจาก ID}
//step 2 เลือก ตัวแปรของปุ่มและใส่ .addEventListener('click', () => {
//wrongText.textContent = 'I LOVE YOU JSD7';
//}); เพื่อสร้างfunction ด้านในสำหรับเปลี่ยนข้อความใน tag โดยนำตัวแปร tag มาจากที่ตั้งไว้ และใช้ addEventListener เพื่อดักการ Click ของ user
//step 3 ประกาศ function เพื่อเรียกใช้

function addBgColorRight() {
    document.getElementById("right").classList.toggle("bg-blue-200");
  };

  function addBgColorLeft() {
    document.getElementById("left").classList.toggle("bg-pink-200");
  };