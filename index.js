function url(){
    location.href = "https://www.hay88.one/?inviteCode=0150662"
}


document.getElementsByClassName('header')[0].innerHTML = `
    <div class="bg-[#000000]">
        <div class="max-w-6xl mx-auto p-2">
            <header class="flex justify-between items-center p-2">
                <div onclick="OpenMenu()" class="menu md:hidden text-white text-3xl ">
                    <ion-icon name="menu-outline" ></ion-icon>
                </div>
                <a href="index.html" class="lopo text-white">
                    <img src="./image/10001.svg" alt="logo" class="mx-auto w-[90px]">
                </a>
                <div class="hidden md:block font-bold *:px-4 *:py-1 *:rounded-full  text-[#FFC659]">
                    <button onclick="url()" class="border border-[#FFC659] hover:bg-[#FFC659]  hover:text-white ease-in-out duration-700">ĐĂNG KÝ</button>
                    <button onclick="url()" class="border border-[#b36013] hover:bg-[#b36013] text-[#b36013] hover:text-white ease-in-out duration-700">ĐĂNG NHẬP</button>
                </div> 
                <span class="md:hidden"></span>
            </header>
        </div>
        
        <nav class="bg-[#D01C2D] ">
            <div id="menu" class="mx-auto text-white hidden font-bold w-[100%] md:block md:bg-transparent ease-in-out duration-700 bg-[#63290f] h-screen md:h-auto absolute md:relative top-0 left-0 ">
            <ul class="relative  md:top-0 top-10  md:flex justify-center flex-wrap items-center *:py-4 *:px-4  *:md:border-none *:border-b *:list-none">
            <li class="hover:bg-gray-600 active md:hover:bg-[#04065c]"><a href="index.html" >LODE08</a></li>
                    <li class="hover:bg-gray-600 active md:active md:hover:bg-[#04065c]"><a href="huong-dan.html">HƯỚNG DẪN</a></li>
                    <li class="hover:bg-gray-600 active md:hover:bg-[#04065c]"><a href="dan-de-hom-nay.html"> DÀN ĐỀ HÔM NAY</a></li>
                    <li class="hover:bg-gray-600 active md:hover:bg-[#04065c]"><a href="casino.html">CASINO</a></li>
                    <li class="hover:bg-gray-600 active md:hover:bg-[#04065c]"><a href="lode.html">LÔ ĐỀ</a></li>
                    <li class="hover:bg-gray-600 active md:hover:bg-[#04065c]"><a href="du-doan-cau-lo.html">DỰ ĐOÁN CẦU LÔ</a></li>
                    <li class="hover:bg-gray-600 active md:hover:bg-[#04065c]"><a href="keo-nha-cai.html">KÈO NHÀ CÁI</a></li>
                    <li class="hover:bg-gray-600 active md:hover:bg-[#04065c]"><a href="soi-cau.html">SOI CẦU</a></li>
                </ul>
                <div onclick="CloseMenu()" class="closeMenu md:hidden absolute top-2 right-0 text-3xl text-white ">
                    <ion-icon name="close-outline"></ion-icon>
                </div>
            </div>
        </nav>
    </div>
`

document.getElementsByClassName('footer')[0].innerHTML =`
    <div class="bg-[#040c30]">
        <div class="max-w-6xl mx-auto text-white py-6 px-2">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 ">
                <div class="">
                    <h1 class="border-b p-2 font-bold">VỀ CHÚNG TÔI</h1>
                    <p class="mt-10"> <span class="text-gray-400 font-bold">Lode08 </span> tự hào là nhà cái cung cấp các dịch vụ lô đề, số đề, soi cầu lô đề hàng đầu tại Việt Nam. Lode08 đã đặt bước đi tiên phong trong lĩnh vực Đánh Đề Trực Tuyến, hội đủ các kiểu đánh lô đề Miền Bắc, lô đề Miền Trung, lô đề Miền Nam với tỷ lệ lô đề ăn cao và hấp dẫn.</p>
                    <div class="p-4 mt-4">
                        <img src="./image/10001.svg" alt="logo" class="mx-auto w-[300px]">
                    </div>
                </div>
                <div>
                    <h1 class="border-b p-2 font-bold">DANH MỤC CHÍNH</h1>
                    <ul class="mt-10 list-disc px-5 space-y-2">
                        <li><a href="huong-dan.html" class="hover:text-gray-500">HƯỚNG DẪN</a></li>
                        <li><a href="dan-de-hom-nay.html" class="hover:text-gray-500">DÀN ĐỀ HÔM NAY</a></li>
                        <li><a href="casino.html" class="hover:text-gray-500">CASINO</a></li>
                        <li><a href="lode.html" class="hover:text-gray-500">LÔ ĐỀ</a></li>
                        <li><a href="du-doan-cau-lo.html" class="hover:text-gray-500">DỰ ĐOÁN CẦU LÔ</a></li>
                        <li><a href="keo-nha-cai.html" class="hover:text-gray-500">KÈO NHÀ CÁI</a></li>
                        <li><a href="soi-cau.html" class="hover:text-gray-500">SOI CẦU</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
        <div class="bg-[#1f0505] p-2 text-center text-white">
            <p>Copyright 2024 © Lode08.com</p>
        </div>
    </div>
`


const navbar = document.getElementById('menu');
function OpenMenu(){
    navbar.classList.toggle('hidden')
}
function CloseMenu(){
    navbar.classList.toggle('hidden')
}
